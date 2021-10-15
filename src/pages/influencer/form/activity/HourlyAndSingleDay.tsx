import {
  CloudUploadOutlined,
  LeftOutlined,
  MinusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import {
  Col,
  Divider,
  Row,
  Form,
  Upload,
  Input,
  DatePicker,
  Select,
  Button,
  Tabs,
  Tag,
  TimePicker,
} from "antd";
import { Link, useParams } from "react-router-dom";
import Container from "../../../../components/common/container/Container";
import FormLeftPenal from "../../../../components/influencer/form/FormLeftPenal";
import { uniqueId } from "lodash";
import { useContext, useState } from "react";
import { SIDE_PENAL_DATA } from "./mockData";
import { useTabs } from "../useTabs";
import { TranspotationFormTab } from "./form-tabs/TranspotationFormTab";
import CreateActivity from "../CreateActivity";
import { RightSidePenal } from "../RightSidePenal";
import classNames from "classnames";
import { hourlyAndSingleDayDataHelper } from "../formUtils";
import firebase from "../../../../firebase";
import { AuthContext } from "../../../../Auth";
// import _ from "lodash";

const db = firebase.firestore();

export type TabsVariant = "accomodation" | "transpotation" | "itinerary";

let addPaymentField: {
  (): void;
  (defaultValue?: any, insertIndex?: number | undefined): void;
};

let addDepartureDateField: {
  (): void;
  (defaultValue?: any, insertIndex?: number | undefined): void;
};

let addDepartureCityField: {
  (): void;
  (defaultValue?: any, insertIndex?: number | undefined): void;
};

let addReportingDroppingPointField: {
  (): void;
  (defaultValue?: any, insertIndex?: number | undefined): void;
};

const normFile = (e: any) => {
  console.log("Upload event:", e);
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

const transpotationPanes = [
  {
    title: "Transportation 1",
    Content: TranspotationFormTab,
    key: "transportation1",
    closable: false,
  },
];

const HourlyAndSingleDay = () => {
  const { activityType } =
    useParams<{ activityType: "hourly" | "singleday" | "multyday" }>();
  const [transpotationFormData, setTranspotationFormData] = useState<any>();
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState<Array<string>>([]);
  const [paymentCategory, setPaymentCategory] = useState(false);

  const { state: transportationTabs, methods: transportationMethods } = useTabs(
    {
      activeKey: transpotationPanes[0].key,
      panes: transpotationPanes,
    },
    TranspotationFormTab,
    "transportation"
  );

  const updateTabFormData = (type: TabsVariant, value: any, key: any) => {
    if (type === "transpotation") {
      setTranspotationFormData({
        ...transpotationFormData,
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

  const { currentUser } = useContext(AuthContext);

  const onSubmit = (value: any) => {
    const formData = hourlyAndSingleDayDataHelper({
      ...value,
      tags,
      transpotationFormData,
    });
    // formatted data
    // const finalData = _(formData).omitBy(_.isUndefined).omitBy(_.isNull).value();
    console.log(formData);
    // db.collection("hr_sg_avy").doc(currentUser.uid).set(formData, { merge: true });
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
                  Create an Activity
                </h1>
                <p className="tw-text-secondary-color">
                  Aliquam id morbi in dictumst. Molestie lacus curabitur ac
                  quis. Cursus vel neque amet praesent aenean aliquam ut massa
                  turpis. Mattis consequat, imperdiet ultricies dolor, lectus.
                  Vitae viverra libero, vitae fermentum in duis.
                </p>
                <CreateActivity title="Create Activity" />
              </div>
              <Divider className="tw-my-10" />
              <Form
                name="activityForm"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                  }
                }}
                onFinish={(value) => onSubmit(value)}
                onValuesChange={(value, obj) => console.log(obj)}
                onFinishFailed={(error) => console.log(error)}
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
                        <CloudUploadOutlined className="" />
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
                <Form.Item label="Activity Name" name="activityName">
                  <Input
                    className="tw-rounded-md"
                    placeholder="Activity Name"
                  />
                </Form.Item>
                <Form.Item
                  label="About Activity (Description)"
                  name="description"
                >
                  <Input.TextArea
                    className="tw-rounded-md"
                    rows={4}
                    placeholder="Description"
                  />
                </Form.Item>
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
                        type="number"
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
                                  type="number"
                                  prefix="₹"
                                  min={1}
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
                                  type="number"
                                  min={1}
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
                              name={[field.name, "ticketCategoryDescription"]}
                              fieldKey={[
                                field.fieldKey,
                                "ticketCategoryDescription",
                              ]}
                              key={uniqueId("ticketCategoryDescription")}
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
                      type="number"
                      prefix="₹"
                      min={1}
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
                                  type="number"
                                  prefix="₹"
                                  min={1}
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

                <Divider className="tw-my-10" />
                <Form.Item
                  name="sailentFeatures"
                  className="antd-inline-form tw-relative"
                >
                  <h3 className="tw-font-medium tw-text-base tw-mb-7">
                    Sailent Features
                  </h3>
                  <Form.Item
                    label="What is your Activity Type ?"
                    name="activityType"
                  >
                    <Input
                      className="tw-rounded-md"
                      placeholder="Enter Your Activity Type"
                    />
                  </Form.Item>

                  <Form.Item
                    label="What is your the Activity Level ?"
                    name="activityLevel"
                  >
                    <Select
                      className="tw-rounded-md"
                      placeholder="Select Your Activity Level"
                    >
                      <Select.Option value="easy">Easy</Select.Option>
                      <Select.Option value="medium">Medium</Select.Option>
                      <Select.Option value="hard">Hard</Select.Option>
                    </Select>
                  </Form.Item>

                  <Form.Item
                    label="What is your Activity Age Group ?"
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
                    label="Number of Tickets included in the Activity?"
                    name="numberOfPeople"
                  >
                    <Input
                      type="number"
                      className="tw-rounded-md"
                      min={1}
                      placeholder="Enter No. of People"
                    />
                  </Form.Item>

                  {activityType === "hourly" && (
                    <Form.Item
                      label="What is your Start and End Hours ?"
                      className="antd-sub-field"
                    >
                      <Form.Item name="startTime" className="tw-mb-0">
                        <TimePicker
                          className="tw-rounded-md"
                          placeholder="Start time"
                        />
                      </Form.Item>
                      <Form.Item name="endTime" className="tw-mb-0">
                        <TimePicker
                          className="tw-rounded-md"
                          placeholder="End time"
                        />
                      </Form.Item>
                    </Form.Item>
                  )}

                  <RightSidePenal
                    title="Sailent Feature"
                    description={SIDE_PENAL_DATA}
                  />
                </Form.Item>

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

                <Divider className="tw-my-10" />

                <Form.Item className="tw-mb-5">
                  <div className="tw-flex tw-justify-between">
                    <h3 className="tw-text-base tw-font-medium">
                      Departure City
                    </h3>
                    <p
                      className="tw-flex tw-items-center tw-gap-2 tw-cursor-pointer tw-text-blue-500 tw-text-base"
                      onClick={() => addDepartureCityField()}
                    >
                      <PlusOutlined />
                      <span>Add City</span>
                    </p>
                  </div>
                </Form.Item>
                <Form.Item label="Depature City">
                  <div className="tw-flex tw-items-center tw-gap-2 tw-mb-5">
                    <Form.Item
                      name="departureCityFirstField"
                      className="tw-w-11/12 tw-m-0"
                    >
                      <Input
                        className="tw-rounded-md"
                        placeholder="Enter Destination"
                      />
                    </Form.Item>
                  </div>
                  <Form.List name="departureCityList">
                    {(fields, { add, remove }) => {
                      addDepartureCityField = add;
                      return (
                        <>
                          <div className="tw-flex tw-flex-wrap">
                            {fields.map((field) => (
                              <div
                                className="tw-w-1/2 tw-flex tw-items-center tw-gap-2 tw-mb-5"
                                key={uniqueId("departureCity")}
                              >
                                <Form.Item
                                  {...field}
                                  className="tw-w-10/12 tw-m-0"
                                >
                                  <Input
                                    className="tw-rounded-md"
                                    placeholder="Enter Destination"
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
                </Form.Item>

                <Divider className="tw-my-10" />
                <Form.Item className="tw-mb-5 tw-relative">
                  <div className="tw-flex tw-justify-between">
                    <h3 className="tw-text-base tw-font-medium">
                      Reporting & Dropping Point
                    </h3>
                    <p
                      className="tw-flex tw-items-center tw-gap-2 tw-cursor-pointer tw-text-blue-500 tw-text-base"
                      onClick={() => addReportingDroppingPointField()}
                    >
                      <PlusOutlined />
                      <span>Add Reporting & Dropping Poin</span>
                    </p>
                  </div>
                </Form.Item>

                <Form.Item className="tw-flex">
                  <div className="tw-flex tw-items-center tw-gap-10 tw-mb-5">
                    <Form.Item
                      label="Reporting Point"
                      name="reportingPointFirstField"
                      className="tw-w-10/12 tw-m-0"
                    >
                      <Input
                        className="tw-rounded-md"
                        placeholder="Enter Pick up Point"
                      />
                    </Form.Item>
                    <Form.Item
                      label="Droping Point"
                      name="droppingPointFirstField"
                      className="tw-w-10/12 tw-m-0"
                    >
                      <Input
                        className="tw-rounded-md"
                        placeholder="Enter Dropping Point"
                      />
                    </Form.Item>

                    <MinusCircleOutlined className="tw-text-lg tw-opacity-0" />
                  </div>
                  <Form.List name="reportingDroppingPointList">
                    {(fields, { add, remove }) => {
                      addReportingDroppingPointField = add;
                      return (
                        <>
                          <div className="tw-flex tw-flex-wrap">
                            {fields.map((field) => (
                              <div
                                className="tw-flex tw-items-center tw-gap-10 tw-mb-5"
                                key={uniqueId("reportingPoint")}
                              >
                                <Form.Item
                                  {...field}
                                  key={uniqueId("reportingPoint")}
                                  name={[field.name, "reportingPoint"]}
                                  fieldKey={[field.fieldKey, "reportingPoint"]}
                                  className="tw-w-10/12 tw-m-0"
                                >
                                  <Input
                                    className="tw-rounded-md"
                                    placeholder="Enter Pick up Point"
                                  />
                                </Form.Item>

                                <Form.Item
                                  {...field}
                                  key={uniqueId("droppingPoint")}
                                  name={[field.name, "droppingPoint"]}
                                  fieldKey={[field.fieldKey, "droppingPoint"]}
                                  className="tw-w-10/12 tw-m-0"
                                >
                                  <Input
                                    className="tw-rounded-md"
                                    placeholder="Enter Dropping Point"
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
                </Form.Item>

                <Divider className="tw-my-10" />
                <Form.Item className="tw-relative">
                  <RightSidePenal
                    title="Transportation"
                    description={SIDE_PENAL_DATA}
                  />
                  <div className="tw-flex tw-justify-between">
                    <h3 className="tw-text-base tw-font-medium">
                      Transportation
                    </h3>
                    <p
                      className="tw-flex tw-items-center tw-gap-2 tw-cursor-pointer tw-text-blue-500 tw-text-base"
                      onClick={transportationMethods.add}
                    >
                      <PlusOutlined />
                      <span>Add Transportation</span>
                    </p>
                  </div>
                </Form.Item>

                <Form.Item>
                  <Tabs
                    hideAdd
                    onChange={transportationMethods.onChange}
                    activeKey={transportationTabs.activeKey}
                    type="editable-card"
                    className="antd-custom-tabs"
                    onEdit={transportationMethods.onEdit}
                    tabBarGutter={10}
                  >
                    {transportationTabs.panes.map(
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

                <Form.Item className="tw-relative">
                  <RightSidePenal
                    title="Itinerary"
                    description={SIDE_PENAL_DATA}
                  />

                  <h3 className="tw-text-base tw-font-medium tw-mb-5">
                    Itinerary
                  </h3>

                  <Form.Item name="date" label="Date of that day">
                    <DatePicker
                      className="tw-rounded-md tw-w-1/2"
                      placeholder="Select Date of that day"
                    />
                  </Form.Item>

                  <Form.Item name="title" label="Title - Main Highlight">
                    <Input
                      className="tw-rounded-md"
                      placeholder="Enter Title - Main Highlight"
                    />
                  </Form.Item>

                  <Form.Item name="itineraryDetails" label="Itinerary">
                    <Input.TextArea
                      rows={4}
                      className="tw-rounded-md"
                      placeholder="Itinerary Details"
                    />
                  </Form.Item>
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
                <Form.Item>
                  <div className="tw-relative">
                    <h3 className="tw-text-base tw-font-medium tw-mb-4">
                      Trip Essential
                    </h3>
                    <RightSidePenal
                      title="Trip Essential"
                      description={SIDE_PENAL_DATA}
                    />
                  </div>

                  <Form.Item
                    name="howToReachPickupPoint"
                    label="How to reach pick up location ?"
                  >
                    <Input.TextArea
                      rows={6}
                      className="tw-rounded-md"
                      placeholder="How to reach pick up location details"
                    />
                  </Form.Item>
                  <Form.Item name="thingsToCarry" label="Things To Carry ?">
                    <Input.TextArea
                      rows={6}
                      className="tw-rounded-md"
                      placeholder="Things To Carry In Trip"
                    />
                  </Form.Item>
                  <Form.Item
                    name="thingsProhibitted"
                    label="Things Prohibitted ?"
                  >
                    <Input.TextArea
                      rows={6}
                      className="tw-rounded-md"
                      placeholder="Safty Norms"
                    />
                  </Form.Item>
                  <Form.Item name="saftyNorms" label="Safty Norms">
                    <Input.TextArea
                      rows={6}
                      className="tw-rounded-md"
                      placeholder="Things Prohibitted"
                    />
                  </Form.Item>
                  <Form.Item
                    name="certificateRequired"
                    label="Certificate Require"
                  >
                    <Input.TextArea
                      rows={6}
                      className="tw-rounded-md"
                      placeholder="Certificate Require"
                    />
                  </Form.Item>
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
                </Form.Item>
                <Form.Item>
                  <Button
                    type="default"
                    htmlType="submit"
                    className="tw-texa-button tw-w-full"
                  >
                    Upload Activity
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

export default HourlyAndSingleDay;
