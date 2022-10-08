import {
  MinusCircleOutlined,
  PlusOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Tabs,
  Tag,
  TimePicker,
  Upload,
} from "antd";
import classNames from "classnames";
import { isString, uniqueId } from "lodash";
import moment from "moment";
import { useEffect, useState } from "react";
import {
  normFile,
  onKeyDownEvent,
} from "../../../pages/influencer/form/formUtils";
import firebase from "../../../firebase";
import { useTabs } from "../../../pages/influencer/form/useTabs";
import { generatePanes } from "../../utils/commonAdminUtils";
import { RoomAccomodationTab } from "../../../pages/influencer/form/activity/form-tabs/RoomAccomodationTab";
import { TabsVariant } from "../../../pages/influencer/form/activity/HourlyAndSingleDay";
import { ItineraryFormTab } from "../../../pages/influencer/form/activity/form-tabs/ItineraryFormTab";

type Props = {
  data: any;
  handleModalClose: () => void;
  isRelaunch: boolean;
};

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

const RetreatModalForm = ({ data, handleModalClose, isRelaunch }: Props) => {
  const paymentCategory = !isString(data.data.payment);
  const [accomodationFormData, setAccomodationFormData] = useState<any>(
    data.data?.accomodation?.data || {}
  );
  const [itineraryPanesFormData, setItineraryPanesFormData] = useState<any>(
    data.data?.itinerary || {}
  );
  const [retreatCategory, setRetreatCategory] = useState<any>([]);

  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState<Array<string>>(
    data.data.featuredKeyword || []
  );
  const [isRejected, setIsRejected] = useState(false);

  const handleRejectionConfirmation = (value: any) => {
    setIsRejected(false);
    handleModalClose();
  };

  const updateTags = (e: any) => {
    setTags([...tags, e.target.value]);
    setTagInput("");
  };

  const onTagClose = (id: number) => {
    setTags(tags.filter((_, i) => id !== i));
  };

  const onSubmit = (value: any) => {
    // const formValue: any = {
    //   retreatName: value.retreatName,
    //   description: value.description,
    //   payment: value.payment,
    //   departureDates: value.departure.map((d: any) => ({
    //     dateRange: {
    //       start: formatMomentDate(d.dateOfDeparture[0]),
    //       end: formatMomentDate(d.dateOfDeparture[1]),
    //     },
    //     ratePerPerson: d.ratePerPerson,
    //   })),

    //   sailentFeatures: {
    //     format: value.retreatFormat,
    //     ageGroup: {
    //       from: value.ageGroupFrom,
    //       to: value.ageGroupTo,
    //     },
    //     language: value.retreatLanguage,
    //     startTime: formatMomentTime(value.startTime),
    //     availableTicket: value.numberOfTicket,
    //     skillLevel: value.skillLevel,
    //   },
    //   instructor: value.instructor.map((d: any) => ({
    //     fullName: d.fullName,
    //     description: d.instructorDescription,
    //   })),
    //   destination: {
    //     destination: value.destinationFistField,
    //     googleMap: value.googleMap,
    //   },
    //   accomodation: {
    //     accomodationName: value.accomodationName,
    //     data: accomodationFormData,
    //   },
    //   itinerary: itineraryPanesFormData,
    //   featuredKeyword: tags,
    //   inclusion: value.inclusion,
    //   exclusion: value.exclusion,
    //   termsAndCondition: value.termsAndCondition,
    //   cancellationPolicy: value.cancellationPolicy,
    //   status: "processing",
    //   booked: 0,
    // };

    handleModalClose();
  };

  const { state: accomodationTabs, methods: accomodationMethods } = useTabs(
    {
      activeKey: "room1",
      panes: generatePanes(
        Object.keys(data.data?.accomodation?.data || {}).length || 1,
        "Room",
        RoomAccomodationTab
      ),
    },
    RoomAccomodationTab,
    "room"
  );

  const { state: itinerayTabs, methods: itinerayMethods } = useTabs(
    {
      activeKey: "day1",
      panes: generatePanes(
        Object.keys(data.data?.itinerary || {}).length || 1,
        "Day",
        ItineraryFormTab
      ),
    },
    ItineraryFormTab
  );

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
  }, []);

  const initialData = () => {
    const { data: d } = data;
    return {
      retreatName: d.retreatName,
      description: d.description,
      payment: d.payment,
      departure: d.departureDates.map((dt: any) => {
        return {
          dateOfDeparture: [
            moment(dt.dateRange.start, "DD-MM-YYYY"),
            moment(dt.dateRange.end, "DD-MM-YYYY"),
          ],
          ratePerPerson: dt.ratePerPerson,
        };
      }),
      retreatFormat: d.sailentFeatures.format,
      ageGroupFrom: d.sailentFeatures.ageGroup.from,
      ageGroupTo: d.sailentFeatures.ageGroup.to,
      retreatLanguage: d.sailentFeatures.language,
      startTime: moment(d.sailentFeatures.startTime, "h:mm:ss a"),
      skillLevel: d.sailentFeatures.skillLevel,
      numberOfTicket: d.sailentFeatures.availableTicket,
      instructor: d.instructor.map((d: any) => {
        return {
          instructorDescription: d.description,
          fullName: d.fullName,
        };
      }),
      destinationFistField: d.destination.destination,
      googleMap: d.destination.googleMap,
      accomodationName: d.accomodation.accomodationName,
      cancellationPolicy: d.cancellationPolicy,
      termsAndCondition: d.termsAndCondition,
      exclusion: d.exclusion,
      inclusion: d.inclusion,
    };
  };
  return (
    <div className={classNames({ "tw-pointer-events-none": isRelaunch })}>
      <Form
        name="workcationForm"
        onKeyDown={onKeyDownEvent}
        onFinish={onSubmit}
        initialValues={initialData()}
        layout="vertical"
        autoComplete="off"
      >
        <Row gutter={[10, 10]}>
          <Col span={24}>
            <Form.Item label="Retreat Name" name="retreatName">
              <Input className="tw-rounded-md" placeholder="Retreat Name" />
            </Form.Item>
            <Form.Item label="About Retreat (Description)" name="description">
              <Input.TextArea
                className="tw-rounded-md"
                rows={4}
                placeholder="Description"
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <div className="tw-flex tw-justify-between tw-mb-5">
              <h3 className="tw-text-base tw-font-medium">
                Payment and Packages
              </h3>
              {paymentCategory ? (
                <p
                  className="tw-flex tw-items-center tw-gap-2 tw-cursor-pointer tw-text-blue-500 tw-text-base"
                  onClick={() => {
                    addPaymentField();
                  }}
                >
                  <PlusOutlined />
                  <span>Add Category</span>
                </p>
              ) : null}
            </div>

            {paymentCategory ? null : (
              <Form.Item
                name="payment"
                label="Rate Per Person"
                className="tw-m-0"
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
            <Form.List name="payment">
              {(fields, { add, remove }) => {
                addPaymentField = add;
                return (
                  <>
                    {fields.map((field, i) => (
                      <div className="tw-mb-5" key={uniqueId("ratePerPrice")}>
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
                              type="tel"
                              pattern="[0-9]*"
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
          </Col>
          <Col span={24}>
            <div className="tw-flex tw-justify-between tw-my-5">
              <h3 className="tw-text-base tw-font-medium">Departure Dates</h3>
              <p
                className="tw-flex tw-items-center tw-gap-2 tw-cursor-pointer tw-text-blue-500 tw-text-base"
                onClick={() => addDepartureDateField()}
              >
                <PlusOutlined />
                <span>Add Dates</span>
              </p>
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
                            <DatePicker.RangePicker
                              className="tw-rounded-md"
                              format="DD/MM/YYYY"
                            />
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
          </Col>
          <Col span={24}>
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
            </Form.Item>
          </Col>
          <Col span={24}>
            <div className="tw-flex tw-justify-between tw-mb-5">
              <h3 className="tw-text-base tw-font-medium">Instructor</h3>
              <p
                className="tw-flex tw-items-center tw-gap-2 tw-cursor-pointer tw-text-blue-500 tw-text-base"
                onClick={() => addInstructor()}
              >
                <PlusOutlined />
                <span>Add Instructor</span>
              </p>
            </div>
            <Form.List name="instructor">
              {(fields, { add, remove }) => {
                addInstructor = add;
                return (
                  <>
                    <div className="tw-flex tw-flex-wrap">
                      {fields.map((field) => (
                        <div className="tw-w-full" key={uniqueId("instructor")}>
                          <div className="tw-flex tw-items-center tw-gap-10 tw-mb-5">
                            <Form.Item
                              {...field}
                              label="Upload Instructor Photo"
                              key={uniqueId("instructuroPhoto")}
                              name={[field.name, "instructuroPhoto"]}
                              fieldKey={[field.fieldKey, "instructuroPhoto"]}
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
                              label="About Instructor (Description)"
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
          </Col>
          <Col span={24}>
            <div className="tw-flex tw-justify-between tw-mb-5">
              <h3 className="tw-text-base tw-font-medium">Destinations</h3>
            </div>

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
          </Col>
          <Col span={24}>
            <div className="tw-flex tw-justify-between">
              <h3 className="tw-text-base tw-font-medium">Accomodation</h3>
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

            <Form.Item className="tw-relative">
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
                        initialData={accomodationFormData[key]}
                        keyValue={key}
                        updateTabFormData={updateTabFormData}
                        singleDay
                      />
                    </Tabs.TabPane>
                  )
                )}
              </Tabs>
            </Form.Item>
          </Col>
          <Col span={24}>
            <div className="tw-flex tw-justify-between tw-mb-5">
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
                {itinerayTabs.panes.map(({ title, Content, key, closable }) => (
                  <Tabs.TabPane tab={title} key={key} closable={closable}>
                    <Content
                      initialData={itineraryPanesFormData[key]}
                      keyValue={key}
                      updateTabFormData={updateTabFormData}
                    />
                  </Tabs.TabPane>
                ))}
              </Tabs>
            </Form.Item>
          </Col>
          <Col span={24}>
            <h3 className="tw-text-base tw-font-medium tw-mb-5">
              Featured Keyword
            </h3>

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
          </Col>
          <Col span={24}>
            <Form.Item name="inclusion" label="Inclusion">
              <Input.TextArea
                rows={6}
                className="tw-rounded-md"
                placeholder="Trip Inclusion"
              />
            </Form.Item>
            <Form.Item name="exclusion" label="Exclusion">
              <Input.TextArea
                rows={6}
                className="tw-rounded-md"
                placeholder="Trip Exclusion"
              />
            </Form.Item>
            <Form.Item name="termsAndCondition" label="Terms and Conditions">
              <Input.TextArea
                rows={6}
                className="tw-rounded-md"
                placeholder="Terms and Conditions"
              />
            </Form.Item>
            <Form.Item name="cancellationPolicy" label="Cancellation Policy">
              <Input.TextArea
                rows={6}
                className="tw-rounded-md"
                placeholder="Cancellation Policy"
              />
            </Form.Item>
          </Col>
          {!isRelaunch && (
            <Col span={24}>
              <div className="tw-flex tw-gap-5">
                <div className="tw-w-6/12">
                  <Button
                    className="tw-w-full border-btn tw-rounded-lg tw-m-0"
                    onClick={() => {
                      setIsRejected(true);
                    }}
                  >
                    Reject
                  </Button>
                </div>

                <div className="tw-w-6/12">
                  <Button
                    type="default"
                    className="tw-texa-button tw-w-full tw-m-0"
                    htmlType="submit"
                  >
                    Approve
                  </Button>
                </div>
              </div>
            </Col>
          )}
        </Row>
      </Form>

      {isRejected && (
        <Modal
          title="Rejection reason"
          visible={isRejected}
          footer={null}
          onCancel={() => setIsRejected(false)}
        >
          <Form
            name="rejectionForm"
            onKeyDown={onKeyDownEvent}
            onFinish={handleRejectionConfirmation}
            layout="vertical"
            autoComplete="off"
          >
            <Form.Item
              name="reason"
              label="Reason"
              className="tw-mb-5"
              rules={[
                {
                  required: true,
                  message: "Please enter rejection reason!",
                },
              ]}
            >
              <Input.TextArea
                rows={6}
                className="tw-rounded-md"
                placeholder="Rejection Reason"
              />
            </Form.Item>

            <div className="tw-flex tw-gap-5">
              <div className="tw-w-6/12">
                <Button
                  className="tw-w-full border-btn tw-rounded-lg tw-m-0"
                  onClick={() => {
                    setIsRejected(false);
                  }}
                >
                  Cancel
                </Button>
              </div>

              <div className="tw-w-6/12">
                <Button
                  type="default"
                  htmlType="submit"
                  className="tw-texa-button tw-w-full tw-m-0"
                >
                  Reject
                </Button>
              </div>
            </div>
          </Form>
        </Modal>
      )}
    </div>
  );
};

export default RetreatModalForm;
