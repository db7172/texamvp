import {
  CloudUploadOutlined,
  LeftOutlined,
  MinusCircleOutlined,
  PlusOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import {
  Button,
  Col,
  DatePicker,
  Divider,
  Form,
  Input,
  Row,
  Select,
  Tabs,
  Tag,
  TimePicker,
  Upload,
} from "antd";
import classNames from "classnames";
import { uniqueId } from "lodash";
import { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Container from "../../../../components/common/container/Container";
import FormLeftPenal from "../../../../components/influencer/form/FormLeftPenal";
import { formatMomentDate, formatMomentTime } from "../../../../utils/utils";
import { ItineraryFormTab } from "../activity/form-tabs/ItineraryFormTab";
import { RoomAccomodationTab } from "../activity/form-tabs/RoomAccomodationTab";
import { TabsVariant } from "../activity/HourlyAndSingleDay";
import { SIDE_PENAL_DATA } from "../activity/mockData";
import CreateActivity from "../CreateActivity";
import {
  formateDeparture,
  formateInstructor,
  normFile,
  onKeyDownEvent,
  stripUndefined,
} from "../formUtils";
import { RightSidePenal } from "../RightSidePenal";
import { useTabs } from "../useTabs";
import firebase from "../../../../firebase";
import { AuthContext } from "../../../../Auth";
import { v4 as uuid } from "uuid";

let addPaymentField: {
  (): void;
  (defaultValue?: any, insertIndex?: number | undefined): void;
};

let addDepartureDateField: {
  (): void;
  (defaultValue?: any, insertIndex?: number | undefined): void;
};

let addInstructor: {
  (): void;
  (defaultValue?: any, insertIndex?: number | undefined): void;
};

const accomodationPanes = [
  {
    title: "Room 1",
    Content: RoomAccomodationTab,
    key: "room1",
    closable: false,
  },
  {
    title: "Room 2",
    Content: RoomAccomodationTab,
    key: "room2",
  },
];

const itineraryPanes = [
  {
    title: "Day 1",
    Content: ItineraryFormTab,
    key: "day1",
    closable: false,
  },
  { title: "Day 2", Content: ItineraryFormTab, key: "day2" },
];

const Retreat = () => {
  const [paymentCategory, setPaymentCategory] = useState(false);
  const [accomodationFormData, setAccomodationFormData] = useState<any>();
  const [itineraryPanesFormData, setItineraryPanesFormData] = useState<any>();
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState<Array<string>>([]);
  const [user, setUser] = useState([]) as any;
  const [retreatCategory, setRetreatCategory] = useState([]) as any;
  const history = useHistory();

  const { state: accomodationTabs, methods: accomodationMethods } = useTabs(
    {
      activeKey: accomodationPanes[0].key,
      panes: accomodationPanes,
    },
    RoomAccomodationTab,
    "room"
  );

  const { state: itinerayTabs, methods: itinerayMethods } = useTabs(
    {
      activeKey: itineraryPanes[0].key,
      panes: itineraryPanes,
    },
    ItineraryFormTab
  );

  const updateTags = (e: any) => {
    setTags([...tags, e.target.value]);
    setTagInput("");
  };

  const onTagClose = (id: number) => {
    setTags(tags.filter((_, i) => id !== i));
  };

  const updateTabFormData = (type: TabsVariant, value: any, key: any) => {
    if (type === "accomodation") {
      setAccomodationFormData({
        ...accomodationFormData,
        [key]: value.data,
      });
    } else if (type === "itinerary") {
      setItineraryPanesFormData({
        ...itineraryPanesFormData,
        [key]: value,
      });
    }
  };

  useEffect(() => {
    firebase
      .firestore()
      .collection("categories")
      .get()
      .then((querySnap) => {
        setRetreatCategory(
          querySnap.docs
            .map((doc) => ({ id: doc.id, data: doc.data() }))
            .filter((item) => {
              return item.data.type === "retreat";
            })
        );
      });
    firebase.auth().onAuthStateChanged((user) => {
      if (user) setUser(user);
    });
  }, []);

  const onFinishForm = async (value: any) => {
    const departureDetails = value.departure
      ? formateDeparture(value.departure)
      : [];
    const instructor = value.instructor
      ? formateInstructor(value.instructor)
      : [];
    const formValue: any = {
      retreatName: value.retreatName,
      description: value.description,
      payment: value.paymentList
        ? value.paymentList
        : value.paymentRatePerPerson,
      departureDates: [
        {
          dateRange: {
            start: formatMomentDate(value.departureDateFirstField[0]),
            end: formatMomentDate(value.departureDateFirstField[1]),
          },
          ratePerPerson: value.ratePerPersonFirstField,
        },
        ...departureDetails,
      ],
      sailentFeatures: {
        format: value.retreatFormat,
        ageGroup: {
          from: value.ageGroupFrom,
          to: value.ageGroupTo,
        },
        language: value.retreatLanguage,
        startTime: formatMomentTime(value.startTime),
        availableTicket: value.numberOfTicket,
        skillLevel: value.skillLevel,
      },
      instructor: [
        {
          fullName: value.fullName,
          description: value.instructorDescription,
        },
        ...instructor,
      ],
      destination: {
        destination: value.destinationFistField,
        googleMap: value.googleMap,
      },
      accomodation: {
        accomodationName: value.accomodationName,
        data: accomodationFormData,
      },
      itinerary: itineraryPanesFormData,
      featuredKeyword: tags,
      inclusion: value.inclusion,
      exclusion: value.exclusion,
      termsAndCondition: value.termsAndCondition,
      cancellationPolicy: value.cancellationPolicy,
    };

    let finalData = stripUndefined(formValue);

    const data = {
      formData: finalData,
      status: "processing",
      booked: 0,
    };

    let docId = uuid();

    let imgLink = [];
    imgLink = await Promise.all(
      value.dragger.map(async (image: any, i: Number) => {
        console.log(image);
        console.log(user.uid);
        let storageRef = firebase
          .storage()
          .ref(`retreat/${user.uid}/${docId}/${i}`);
        await storageRef.put(image.originFileObj);
        let downloadLink = await storageRef.getDownloadURL();
        return downloadLink;
      })
    );

    firebase
      .firestore()
      .collection("retreat")
      .doc(docId)
      .set({ data, imgLink, user: user.uid })
      .then(() => {
        history.push("/influencer/dashboard");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });

    // let imgLink = [];
    // imgLink = await Promise.all(
    //   value.dragger.map(async (image: any, i: Number) => {
    //     const storageRef = firebase.storage().ref(`retreat/${user.uid}/${i}/`);
    //     await storageRef.put(image);
    //     const downloadLink = storageRef.getDownloadURL();
    //     return downloadLink;
    //   })
    // );
    // await firebase
    //   .firestore()
    //   .collection("retreat")
    //   .add({ data, imgLink })
    //   .then(() => {
    //     history.push("/influencer/dashboard");
    //   })
    //   .catch((error) => {
    //     console.error("Error writing document: ", error);
    //   });
  };

  return (
    <Container>
      <Link to="/influencer/dashboard" className="tw-my-10 tw-inline-block">
        <div className="tw-flex tw-items-center tw-text-secondary-color hover:tw-text-secondary-color">
          <LeftOutlined className="tw-mr-1" />{" "}
          <span className="tw-underline tw-font-medium">GO BACK</span>
        </div>
      </Link>
      <Row gutter={20} className="">
        <Col span={6}>
          <FormLeftPenal />
        </Col>
        <Col span={18}>
          <Row>
            <Col span={18} className="tw-p-8 tw-shadow-card">
              <div className="tw-relative">
                <h1 className="tw-font-medium tw-text-lg tw-mb-5">
                  Create a Retreat - Seesion
                </h1>
                <p className="tw-text-secondary-color">
                  Aliquam id morbi in dictumst. Molestie lacus curabitur ac
                  quis. Cursus vel neque amet praesent aenean aliquam ut massa
                  turpis. Mattis consequat, imperdiet ultricies dolor, lectus.
                  Vitae viverra libero, vitae fermentum in duis.
                </p>
                <CreateActivity title="Create Retreat" />
              </div>
              <Divider className="tw-my-10" />
              <Form
                name="retreatForm"
                onKeyDown={onKeyDownEvent}
                onFinish={onFinishForm}
                onFinishFailed={(error) => console.log(error)}
                // onValuesChange={(value, obj) => console.log(obj)}
                layout="vertical"
                size="large"
                autoComplete="off"
              >
                <Form.Item
                  label="Upload Image"
                  className="tw-text-base tw-font-medium"
                >
                  <Form.Item
                    name="dragger"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                    noStyle
                  >
                    <Upload.Dragger
                      name="files"
                      multiple={true}
                      listType="picture-card"
                      beforeUpload={() => false}
                    >
                      <p className="ant-upload-drag-icon">
                        <CloudUploadOutlined />
                      </p>
                      <p className="ant-upload-text">
                        Click or drag file to this area to upload
                      </p>
                      <p className="ant-upload-hint">
                        ( Recommended size - 840 x 460 px )
                      </p>
                    </Upload.Dragger>
                  </Form.Item>
                </Form.Item>
                <Divider className="tw-my-10" />
                <Form.Item label="Retreat Name" name="retreatName">
                  <Input className="tw-rounded-md" placeholder="Retreat Name" />
                </Form.Item>
                <Form.Item
                  label="About Retreat (Description)"
                  name="description"
                >
                  <Input.TextArea
                    className="tw-rounded-md"
                    rows={4}
                    placeholder="Description"
                  />
                </Form.Item>
                {/* payment */}
                <Divider className="tw-my-10" />
                <Form.Item className="">
                  <div className="tw-flex tw-justify-between">
                    <h3 className="tw-text-base tw-font-medium">Payment</h3>
                    <p
                      className="tw-flex tw-items-center tw-gap-2 tw-cursor-pointer tw-text-blue-500 tw-text-base"
                      onClick={() => {
                        addPaymentField();
                        setPaymentCategory(true);
                      }}
                    >
                      <PlusOutlined />
                      <span>Add Category</span>
                    </p>
                  </div>

                  {paymentCategory ? null : (
                    <Form.Item
                      name="paymentRatePerPerson"
                      label="Rate Per Person"
                      className="tw-mt-5 tw-mb-0"
                    >
                      <Input
                        className="tw-rounded-md"
                        type="tel"
                        pattern="[0-9]*"
                        prefix="₹"
                        placeholder="Enter Your Rate Per Person"
                      />
                    </Form.Item>
                  )}
                </Form.Item>
                <Form.List name="paymentList">
                  {(fields, { add, remove }) => {
                    addPaymentField = add;
                    return (
                      <>
                        {fields.map((field, i) => (
                          <div
                            className="tw-mb-5"
                            key={uniqueId("ratePerPrice")}
                          >
                            <div className="tw-flex tw-items-center tw-gap-5">
                              <Form.Item
                                name={[field.name, "ticketCategory"]}
                                fieldKey={[field.fieldKey, "ticketCategory"]}
                                key={uniqueId("ticketCategory")}
                                label="Ticket Category Title"
                              >
                                <Input
                                  className="tw-rounded-md"
                                  placeholder="Enter Ticket Category"
                                />
                              </Form.Item>

                              <Form.Item
                                name={[field.name, "ratePerPerson"]}
                                fieldKey={[field.fieldKey, "ratePerPerson"]}
                                key={uniqueId("ratePerPerson")}
                                label="Rate Per Person"
                              >
                                <Input
                                  className="tw-rounded-md"
                                  type="tel"
                                  pattern="[0-9]*"
                                  prefix="₹"
                                  placeholder="Enter Your Rate Per Person"
                                />
                              </Form.Item>

                              <Form.Item
                                name={[field.name, "numberOfTicket"]}
                                fieldKey={[field.fieldKey, "numberOfTicket"]}
                                key={uniqueId("numberOfTicket")}
                                label="No. of Tickets"
                              >
                                <Input
                                  className="tw-rounded-md"
                                  type="tel"
                                  pattern="[0-9]*"
                                  placeholder="Enter No. of Tickets"
                                />
                              </Form.Item>
                              <MinusCircleOutlined
                                className={classNames(
                                  "tw-text-lg tw-text-secondary-color",
                                  i === 0
                                    ? "tw-opacity-0 tw-pointer-events-none"
                                    : "tw-opacity-100"
                                )}
                                onClick={() => remove(field.name)}
                              />
                            </div>
                            <Form.Item
                              name={[field.name, "ticketDescription"]}
                              fieldKey={[field.fieldKey, "ticketDescription"]}
                              key={uniqueId("ticketDescription")}
                              label="Ticket Category Description"
                              className="tw-m-0"
                            >
                              <Input.TextArea
                                rows={5}
                                className="tw-rounded-md"
                                placeholder="Ticket Category Description"
                              />
                            </Form.Item>
                          </div>
                        ))}
                      </>
                    );
                  }}
                </Form.List>
                {/* departure Date */}
                <Divider className="tw-my-10" />
                <Form.Item className="tw-mb-5">
                  <div className="tw-flex tw-justify-between">
                    <h3 className="tw-text-base tw-font-medium">
                      Departure Dates
                    </h3>
                    <p
                      className="tw-flex tw-items-center tw-gap-2 tw-cursor-pointer tw-text-blue-500 tw-text-base"
                      onClick={() => addDepartureDateField()}
                    >
                      <PlusOutlined />
                      <span>Add Dates</span>
                    </p>
                  </div>
                </Form.Item>
                <div className="tw-flex tw-items-center tw-gap-10 tw-mb-5">
                  <Form.Item
                    label="Depature Date Range"
                    name="departureDateFirstField"
                    className="tw-w-10/12 tw-m-0"
                  >
                    <DatePicker.RangePicker className="tw-rounded-md" />
                  </Form.Item>
                  <Form.Item
                    label="Rate Per Person"
                    name="ratePerPersonFirstField"
                    className="tw-w-10/12 tw-m-0"
                  >
                    <Input
                      className="tw-rounded-md"
                      type="tel"
                      pattern="[0-9]*"
                      prefix="₹"
                      placeholder="Rate Per Person"
                    />
                  </Form.Item>
                  <MinusCircleOutlined className="tw-text-lg tw-opacity-0" />
                </div>
                <Form.List name="departure">
                  {(fields, { add, remove }) => {
                    addDepartureDateField = add;
                    return (
                      <>
                        <div className="tw-flex tw-flex-wrap">
                          {fields.map((field) => (
                            <div
                              className="tw-flex tw-items-center tw-gap-10 tw-mb-5"
                              key={uniqueId("departureDates")}
                            >
                              <Form.Item
                                {...field}
                                key={uniqueId("dateOfDeparture")}
                                name={[field.name, "dateOfDeparture"]}
                                fieldKey={[field.fieldKey, "dateOfDeparture"]}
                                className="tw-w-10/12 tw-m-0"
                              >
                                <DatePicker.RangePicker className="tw-rounded-md" />
                              </Form.Item>
                              <Form.Item
                                {...field}
                                key={uniqueId("ratePerPerson")}
                                name={[field.name, "ratePerPerson"]}
                                fieldKey={[field.fieldKey, "ratePerPerson"]}
                                className="tw-w-10/12 tw-m-0"
                              >
                                <Input
                                  className="tw-rounded-md"
                                  type="tel"
                                  pattern="[0-9]*"
                                  prefix="₹"
                                  placeholder="Rate Per Person"
                                />
                              </Form.Item>

                              <MinusCircleOutlined
                                className="tw-text-lg tw-text-secondary-color"
                                onClick={() => remove(field.name)}
                              />
                            </div>
                          ))}
                        </div>
                      </>
                    );
                  }}
                </Form.List>
                {/* sailent feature */}
                <Divider className="tw-my-10" />
                <Form.Item
                  name="sailentFeatures"
                  className="antd-inline-form tw-relative"
                >
                  <h3 className="tw-font-medium tw-text-base tw-mb-7">
                    Sailent Features
                  </h3>
                  <Form.Item
                    label="What is your Retreat format ?"
                    name="retreatFormat"
                  >
                    <Select
                      className="tw-rounded-md"
                      placeholder="Select Your Retreat format"
                    >
                      {retreatCategory.map((retreat: any, i: number) => {
                        return (
                          <Select.Option value={retreat.data.name} key={i}>
                            {retreat.data.name}
                          </Select.Option>
                        );
                      })}
                    </Select>
                  </Form.Item>

                  <Form.Item
                    label="What is your Retreat Age Group ?"
                    className="antd-sub-field"
                  >
                    <Form.Item name="ageGroupFrom" className="tw-mb-0">
                      <Select className="tw-rounded-md" placeholder="From">
                        {Array(40)
                          .fill(null)
                          .map((_, i) => (
                            <Select.Option key={uniqueId()} value={i + 1}>
                              {i + 1}
                            </Select.Option>
                          ))}
                      </Select>
                    </Form.Item>
                    <Form.Item name="ageGroupTo" className="tw-mb-0">
                      <Select className="tw-rounded-md" placeholder="To">
                        {Array(50)
                          .fill(null)
                          .map((_, i) => (
                            <Select.Option key={uniqueId()} value={i + 1}>
                              {i + 1}
                            </Select.Option>
                          ))}
                      </Select>
                    </Form.Item>
                  </Form.Item>

                  <Form.Item
                    label="What Language the Retreat will be in ?"
                    name="retreatLanguage"
                  >
                    <Select
                      className="tw-rounded-md"
                      placeholder="Select the language"
                    >
                      <Select.Option value="option1">Option 1</Select.Option>
                      <Select.Option value="option2">Option 2</Select.Option>
                      <Select.Option value="option3">Option 3</Select.Option>
                    </Select>
                  </Form.Item>

                  <Form.Item
                    label="What is the Start time of your Retreat ?"
                    name="startTime"
                  >
                    <TimePicker className="tw-rounded-md tw-w-full" />
                  </Form.Item>

                  <Form.Item
                    label="What is the Skill Level of your session ?"
                    name="skillLevel"
                  >
                    <Select
                      className="tw-rounded-md"
                      placeholder="Select Your Skill Level"
                    >
                      <Select.Option value="easy">Easy</Select.Option>
                      <Select.Option value="medium">Medium</Select.Option>
                      <Select.Option value="hard">Hard</Select.Option>
                    </Select>
                  </Form.Item>

                  <Form.Item
                    label="Number of available tickets ?"
                    name="numberOfTicket"
                  >
                    <Input
                      type="tel"
                      pattern="[0-9]*"
                      className="tw-rounded-md"
                      min={1}
                      placeholder="Enter No. of People"
                    />
                  </Form.Item>

                  <RightSidePenal
                    title="Sailent Feature"
                    description={SIDE_PENAL_DATA}
                  />
                </Form.Item>

                {/* Instructor */}
                <Divider className="tw-my-10" />
                <Form.Item className="tw-mb-5">
                  <div className="tw-flex tw-justify-between">
                    <h3 className="tw-text-base tw-font-medium">Instructor</h3>
                    <p
                      className="tw-flex tw-items-center tw-gap-2 tw-cursor-pointer tw-text-blue-500 tw-text-base"
                      onClick={() => addInstructor()}
                    >
                      <PlusOutlined />
                      <span>Add Instructor</span>
                    </p>
                  </div>
                </Form.Item>
                <div>
                  <div className="tw-flex tw-items-center tw-gap-10 tw-mb-5">
                    <Form.Item
                      label="Upload Instructor Photo"
                      name="instructorPhoto"
                      className="tw-w-10/12 tw-m-0"
                      valuePropName="fileList"
                      getValueFromEvent={normFile}
                    >
                      <Upload
                        name="photos"
                        beforeUpload={() => false}
                        maxCount={6}
                        multiple
                        listType="text"
                      >
                        <Button
                          type="default"
                          className="tw-bg-gray-background tw-rounded-lg tw-m-0 hover:tw-bg-gray-background"
                          icon={<UploadOutlined />}
                        >
                          Click to upload
                        </Button>
                      </Upload>
                    </Form.Item>
                    <Form.Item
                      label="Full Name"
                      name="fullName"
                      className="tw-w-10/12 tw-m-0"
                    >
                      <Input
                        placeholder="Enter Full Name"
                        className="tw-rounded-md"
                      />
                    </Form.Item>

                    <MinusCircleOutlined className="tw-text-lg tw-opacity-0" />
                  </div>
                  <div>
                    <Form.Item
                      label="About Instructor (Description)"
                      name="instructorDescription"
                    >
                      <Input.TextArea
                        className="tw-rounded-md"
                        rows={4}
                        placeholder="Description"
                      />
                    </Form.Item>
                  </div>
                </div>
                <Form.List name="instructor">
                  {(fields, { add, remove }) => {
                    addInstructor = add;
                    return (
                      <>
                        <div className="tw-flex tw-flex-wrap">
                          {fields.map((field) => (
                            <div
                              className="tw-w-full"
                              key={uniqueId("instructor")}
                            >
                              <div className="tw-flex tw-items-center tw-gap-10 tw-mb-5">
                                <Form.Item
                                  {...field}
                                  key={uniqueId("instructuroPhoto")}
                                  name={[field.name, "instructuroPhoto"]}
                                  fieldKey={[
                                    field.fieldKey,
                                    "instructuroPhoto",
                                  ]}
                                  className="tw-w-10/12 tw-m-0"
                                  valuePropName="fileList"
                                  getValueFromEvent={normFile}
                                >
                                  <Upload
                                    name="photos"
                                    beforeUpload={() => false}
                                    maxCount={6}
                                    multiple
                                    listType="text"
                                  >
                                    <Button
                                      type="default"
                                      className="tw-bg-gray-background tw-rounded-lg tw-m-0 hover:tw-bg-gray-background"
                                      icon={<UploadOutlined />}
                                    >
                                      Click to upload
                                    </Button>
                                  </Upload>
                                </Form.Item>
                                <Form.Item
                                  key={uniqueId("fullName")}
                                  name={[field.name, "fullName"]}
                                  fieldKey={[field.fieldKey, "fullName"]}
                                  className="tw-w-10/12 tw-m-0"
                                >
                                  <Input
                                    placeholder="Enter Full Name"
                                    className="tw-rounded-md"
                                  />
                                </Form.Item>

                                <MinusCircleOutlined
                                  className="tw-text-lg tw-text-secondary-color"
                                  onClick={() => remove(field.name)}
                                />
                              </div>
                              <div>
                                <Form.Item
                                  key={uniqueId("instructorDescription")}
                                  name={[field.name, "instructorDescription"]}
                                  fieldKey={[
                                    field.fieldKey,
                                    "instructorDescription",
                                  ]}
                                >
                                  <Input.TextArea
                                    className="tw-rounded-md"
                                    rows={4}
                                    placeholder="Description"
                                  />
                                </Form.Item>
                              </div>
                            </div>
                          ))}
                        </div>
                      </>
                    );
                  }}
                </Form.List>

                {/* destination */}
                <Divider className="tw-my-10" />
                <Form.Item className="tw-mb-5 tw-relative">
                  <RightSidePenal
                    title="Destination"
                    description={SIDE_PENAL_DATA}
                  />
                  <div className="tw-flex tw-justify-between">
                    <h3 className="tw-text-base tw-font-medium">
                      Destinations
                    </h3>
                  </div>
                </Form.Item>

                <Form.Item>
                  <div className="tw-flex tw-items-center tw-gap-10 tw-mb-5">
                    <Form.Item
                      label="Destination"
                      name="destinationFistField"
                      className="tw-w-10/12 tw-m-0"
                    >
                      <Input
                        className="tw-rounded-md"
                        placeholder="Enter Destination"
                      />
                    </Form.Item>

                    <Form.Item
                      label="Google Map Link"
                      name="googleMap"
                      className="tw-w-10/12 tw-m-0"
                    >
                      <Input
                        className="tw-rounded-md"
                        placeholder="Enter Google Map Link"
                      />
                    </Form.Item>

                    <MinusCircleOutlined className="tw-text-lg tw-opacity-0" />
                  </div>
                </Form.Item>

                {/* accomodation */}
                <Divider className="tw-my-10" />

                <Form.Item>
                  <div className="tw-flex tw-justify-between">
                    <h3 className="tw-text-base tw-font-medium">
                      Accomodation
                    </h3>
                    <p
                      className="tw-flex tw-items-center tw-gap-2 tw-cursor-pointer tw-text-blue-500 tw-text-base"
                      onClick={accomodationMethods.add}
                    >
                      <PlusOutlined />
                      <span>Add</span>
                    </p>
                  </div>

                  <Form.Item
                    label="Accomodation Name"
                    name="accomodationName"
                    className="tw-mt-7"
                  >
                    <Input
                      className="tw-rounded-md"
                      placeholder="Enter Accomdation Name"
                    />
                  </Form.Item>
                </Form.Item>

                <Form.Item className="tw-relative">
                  <RightSidePenal
                    title="Accomodation"
                    description={SIDE_PENAL_DATA}
                  />
                  <Tabs
                    hideAdd
                    onChange={accomodationMethods.onChange}
                    activeKey={accomodationTabs.activeKey}
                    type="editable-card"
                    className="antd-custom-tabs"
                    onEdit={accomodationMethods.onEdit}
                    tabBarGutter={10}
                  >
                    {accomodationTabs.panes.map(
                      ({ title, Content, key, closable }) => (
                        <Tabs.TabPane tab={title} key={key} closable={closable}>
                          <Content
                            keyValue={key}
                            updateTabFormData={updateTabFormData}
                            singleDay
                          />
                        </Tabs.TabPane>
                      )
                    )}
                  </Tabs>
                </Form.Item>
                <Divider className="tw-my-10" />

                {/* itineray */}
                <Form.Item className="tw-relative tw-mb-5">
                  <RightSidePenal
                    title="Itinerary"
                    description={SIDE_PENAL_DATA}
                  />
                  <div className="tw-flex tw-justify-between">
                    <h3 className="tw-text-base tw-font-medium">
                      Itinerary (Optional)
                    </h3>
                    <p
                      className="tw-flex tw-items-center tw-gap-2 tw-cursor-pointer tw-text-blue-500 tw-text-base"
                      onClick={itinerayMethods.add}
                    >
                      <PlusOutlined />
                      <span>Add Itinerary</span>
                    </p>
                  </div>
                </Form.Item>

                <Form.Item>
                  <Tabs
                    hideAdd
                    onChange={itinerayMethods.onChange}
                    activeKey={itinerayTabs.activeKey}
                    type="editable-card"
                    className="antd-custom-tabs"
                    onEdit={itinerayMethods.onEdit}
                    tabBarGutter={10}
                  >
                    {itinerayTabs.panes.map(
                      ({ title, Content, key, closable }) => (
                        <Tabs.TabPane tab={title} key={key} closable={closable}>
                          <Content
                            keyValue={key}
                            updateTabFormData={updateTabFormData}
                          />
                        </Tabs.TabPane>
                      )
                    )}
                  </Tabs>
                </Form.Item>

                <Divider className="tw-my-10" />

                <Form.Item noStyle>
                  <h3 className="tw-text-base tw-font-medium tw-mb-5">
                    Featured Keyword
                  </h3>
                </Form.Item>
                <Form.Item label="Places You Want to Include">
                  <Form.Item
                    className="tw-mb-0"
                    extra={<p>* You can include upto 5 places</p>}
                  >
                    <Input
                      value={tagInput}
                      placeholder="Type a Tag and hit enter."
                      onPressEnter={updateTags}
                      onChange={(e) => setTagInput(e.target.value)}
                      disabled={tags.length > 4}
                    />
                  </Form.Item>

                  <Form.Item noStyle>
                    {tags.map((t, i) => (
                      <Tag closable key={i} onClose={() => onTagClose(i)}>
                        {t}
                      </Tag>
                    ))}
                  </Form.Item>
                </Form.Item>

                <Divider className="tw-my-10" />
                <div className="tw-relative">
                  <Form.Item name="inclusion" label="Inclusion">
                    <Input.TextArea
                      rows={6}
                      className="tw-rounded-md"
                      placeholder="Trip Inclusion"
                    />
                  </Form.Item>
                  <RightSidePenal
                    title="Inclusion"
                    description={SIDE_PENAL_DATA}
                  />
                </div>

                <Divider className="tw-my-10" />
                <div className="tw-relative">
                  <Form.Item name="exclusion" label="Exclusion">
                    <Input.TextArea
                      rows={6}
                      className="tw-rounded-md"
                      placeholder="Trip Exclusion"
                    />
                  </Form.Item>
                  <RightSidePenal
                    title="Exclusion"
                    description={SIDE_PENAL_DATA}
                  />
                </div>

                <Divider className="tw-my-10" />
                <div className="tw-relative">
                  <Form.Item
                    name="termsAndCondition"
                    label="Terms and Conditions"
                  >
                    <Input.TextArea
                      rows={6}
                      className="tw-rounded-md"
                      placeholder="Terms and Conditions"
                    />
                  </Form.Item>
                  <RightSidePenal
                    title="Terms and Conditions"
                    description={SIDE_PENAL_DATA}
                  />
                </div>

                <Divider className="tw-my-10" />
                <Form.Item
                  name="cancellationPolicy"
                  label="Cancellation Policy"
                >
                  <Input.TextArea
                    rows={6}
                    className="tw-rounded-md"
                    placeholder="Cancellation Policy"
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="default"
                    htmlType="submit"
                    className="tw-texa-button tw-w-full"
                  >
                    Upload Retreat
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Retreat;
