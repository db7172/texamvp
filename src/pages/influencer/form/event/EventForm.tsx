import {
  CloudUploadOutlined,
  LeftOutlined,
  MinusCircleOutlined,
  MinusOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import {
  Col,
  Divider,
  Row,
  Form,
  Upload,
  Input,
  Select,
  DatePicker,
  TimePicker,
  Tooltip,
  Button,
  Tabs,
  Tag,
} from "antd";
import classNames from "classnames";
import { uniqueId } from "lodash";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Container from "../../../../components/common/container/Container";
import FormLeftPenal from "../../../../components/influencer/form/FormLeftPenal";
import { TabsVariant } from "../activity/HourlyAndSingleDay";
import { ItineraryFormTab } from "../activity/form-tabs/ItineraryFormTab";
import { SIDE_PENAL_DATA } from "../activity/mockData";
import CreateActivity from "../CreateActivity";
import { normFile, onKeyDownEvent } from "../formUtils";
import { RightSidePenal } from "../RightSidePenal";
import { useTabs } from "../useTabs";
import { formatMomentDate, formatMomentTime } from "../../../../utils/utils";
import { AuthContext } from "../../../../Auth";
import firebase from "../../../../firebase";
import { v4 as uuid } from "uuid";

let addPaymentField: {
  (): void;
  (defaultValue?: any, insertIndex?: number | undefined): void;
};

const itineraryPanes = [
  {
    title: "Day 1",
    Content: ItineraryFormTab,
    key: "day1",
    closable: false,
  },
  { title: "Day 2", Content: ItineraryFormTab, key: "day2" },
];

const EventForm = () => {
  const { eventType } = useParams<{ eventType: "offline" | "online" }>();
  const [paymentCategory, setPaymentCategory] = useState(false);
  const [numOfDays, setNumOfDays] = useState(0);
  const [itineraryPanesFormData, setItineraryPanesFormData] = useState<any>();
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState<Array<string>>([]);
  const [user, setUser] = useState([]) as any;
  const [eventCategory, setEventCategory] = useState([]) as any;
  const history = useHistory();

  const { state: itinerayTabs, methods: itinerayMethods } = useTabs(
    {
      activeKey: itineraryPanes[0].key,
      panes: itineraryPanes,
    },
    ItineraryFormTab
  );

  const handleRemove = () => {
    setNumOfDays((pre) => {
      if (pre > 0) {
        return pre - 1;
      }
      return pre;
    });
  };

  const updateTabFormData = (type: TabsVariant, value: any, key: any) => {
    if (type === "itinerary") {
      setItineraryPanesFormData({
        ...itineraryPanesFormData,
        [key]: value,
      });
    }
  };

  const updateTags = (e: any) => {
    setTags([...tags, e.target.value]);
    setTagInput("");
  };

  const onTagClose = (id: number) => {
    setTags(tags.filter((_, i) => id !== i));
  };

  useEffect(() => {
    firebase
      .firestore()
      .collection("categories")
      .get()
      .then((querySnap) => {
        setEventCategory(
          querySnap.docs
            .map((doc) => ({ id: doc.id, data: doc.data() }))
            .filter((item) => {
              return item.data.type === "event";
            })
        );
      });
    firebase.auth().onAuthStateChanged((user) => {
      if (user) setUser(user);
    });
  }, []);

  const onFinish = async (value: any) => {
    const formValue: any = {
      eventType: eventType,
      eventName: value.eventName,
      eventDescription: value.description,
      payment: value.paymentList
        ? value.paymentList
        : value.paymentRatePerPerson,
      sailentFeatures: {
        format: value.eventFormat,
        ageGroup: {
          from: value.ageGroupFrom,
          to: value.ageGroupTo,
        },
        language: value.eventLanguage,
        startDate: formatMomentDate(value.startDate),
        startTime: formatMomentTime(value.startTime),
        availableTicket: value.numberOfTicket,
      },

      featuredKeyword: tags,
      inclusion: value.inclusion,
      exclusion: value.exclusion,
      termsAndCondition: value.termsAndCondition,
      cancellationPolicy: value.cancellationPolicy,
    };

    if (eventType === "offline") {
      formValue["location"] = {
        destination: value.destination,
        noOfDays: numOfDays,
      };

      formValue["summary"] = itineraryPanesFormData;
    }

    console.log(formValue);

    const data = {
      ...formValue,
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
          .ref(`events/${user.uid}/${docId}/${i}`);
        await storageRef.put(image.originFileObj);
        let downloadLink = await storageRef.getDownloadURL();
        return downloadLink;
      })
    );

    firebase
      .firestore()
      .collection("events")
      .doc(docId)
      .set({
        ...data,
        imgLink,
        venderId: user.uid,
        venderName: user.displayName,
        collection_name: "events",
      })
      .then(() => {
        history.push("/influencer/dashboard");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
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
                  Create an Event
                </h1>
                <p className="tw-text-secondary-color">
                  Aliquam id morbi in dictumst. Molestie lacus curabitur ac
                  quis. Cursus vel neque amet praesent aenean aliquam ut massa
                  turpis. Mattis consequat, imperdiet ultricies dolor, lectus.
                  Vitae viverra libero, vitae fermentum in duis.
                </p>
                <CreateActivity title="Create Event" />
              </div>
              <Divider className="tw-my-10" />
              <Form
                name="eventForm"
                onKeyDown={onKeyDownEvent}
                onFinish={onFinish}
                onFinishFailed={(error) => console.log(error)}
                onValuesChange={(value, obj) => console.log(obj)}
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

                <Form.Item label="Event Name" name="eventName">
                  <Input className="tw-rounded-md" placeholder="Event Name" />
                </Form.Item>
                <Form.Item label="About Event (Description)" name="description">
                  <Input.TextArea
                    className="tw-rounded-md"
                    rows={4}
                    placeholder="Description"
                  />
                </Form.Item>
                <Divider className="tw-my-10" />

                {/* Payment section */}

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

                {/* Sailent Features */}
                <Divider className="tw-my-10" />
                <Form.Item
                  name="sailentFeatures"
                  className="antd-inline-form tw-relative"
                >
                  <h3 className="tw-font-medium tw-text-base tw-mb-7">
                    Sailent Features
                  </h3>
                  <Form.Item
                    label="What is your Event format ?"
                    name="eventFormat"
                  >
                    <Select
                      className="tw-rounded-md"
                      placeholder="Select Your Event format"
                    >
                      {eventCategory.map((event: any, i: number) => {
                        return (
                          <Select.Option value={event.data.name} key={i}>
                            {event.data.name}
                          </Select.Option>
                        );
                      })}
                    </Select>
                  </Form.Item>

                  <Form.Item
                    label="What is your Event Age Group ?"
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
                    label="What Language the event will be in ?"
                    name="eventLanguage"
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
                    label="What is the Start date of your Event ?"
                    name="startDate"
                  >
                    <DatePicker
                      className="tw-rounded-md tw-w-full"
                      format="DD/MM/YYYY"
                    />
                  </Form.Item>

                  <Form.Item
                    label="What is the Start time of your Event ?"
                    name="startTime"
                  >
                    <TimePicker className="tw-rounded-md tw-w-full" />
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

                {/* Location */}

                {eventType === "offline" && (
                  <>
                    <Form.Item>
                      <h3 className="tw-font-medium tw-text-base tw-mb-5">
                        Location
                      </h3>
                      <Row gutter={40}>
                        <Col span={12}>
                          <Form.Item name="destination" label="Destination">
                            <Input
                              className="tw-rounded-md"
                              placeholder="Enter Destination"
                            />
                          </Form.Item>
                        </Col>

                        <Col span={12}>
                          <Form.Item label="Number of Days">
                            <div className="tw-flex tw-w-1/2 tw-border">
                              <Tooltip title="Remove">
                                <Button
                                  className="tw-m-0 tw-border"
                                  type="default"
                                  onClick={handleRemove}
                                  icon={<MinusOutlined />}
                                />
                              </Tooltip>
                              <Input
                                className="tw-w-1/2 tw-border-t-0 tw-border-b-0 tw-text-center"
                                value={numOfDays}
                                disabled
                              />
                              <Tooltip title="Add">
                                <Button
                                  className="tw-m-0 tw-border"
                                  type="default"
                                  onClick={() => setNumOfDays((pre) => pre + 1)}
                                  icon={<PlusOutlined />}
                                />
                              </Tooltip>
                            </div>
                          </Form.Item>
                        </Col>
                      </Row>
                    </Form.Item>
                    <Divider className="tw-my-10" />

                    <Form.Item className="tw-relative tw-mb-5">
                      <RightSidePenal
                        title="Summary"
                        description={SIDE_PENAL_DATA}
                      />
                      <div className="tw-flex tw-justify-between">
                        <h3 className="tw-text-base tw-font-medium">Summary</h3>
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
                            <Tabs.TabPane
                              tab={title}
                              key={key}
                              closable={closable}
                            >
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
                  </>
                )}
                <Form.Item>
                  <h3 className="tw-text-base tw-font-medium">
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
                    Upload Event
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

export default EventForm;
