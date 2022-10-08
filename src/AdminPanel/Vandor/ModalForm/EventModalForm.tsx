import {
  MinusCircleOutlined,
  MinusOutlined,
  PlusOutlined,
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
  Tooltip,
} from "antd";
import classNames from "classnames";
import { isString, uniqueId } from "lodash";
import { onKeyDownEvent } from "../../../pages/influencer/form/formUtils";
import firebase from "../../../firebase";
import { useEffect, useState } from "react";
import moment from "moment";
import { useTabs } from "../../../pages/influencer/form/useTabs";
import { ItineraryFormTab } from "../../../pages/influencer/form/activity/form-tabs/ItineraryFormTab";
import { generatePanes } from "../../utils/commonAdminUtils";
import { TabsVariant } from "../../../pages/influencer/form/activity/HourlyAndSingleDay";
import { formatMomentDate, formatMomentTime } from "../../../utils/utils";

type Props = {
  data: any;
  handleModalClose: () => void;
  isRelaunch: boolean;
};

let addPaymentField: {
  (): void;
  (defaultValue?: any, insertIndex?: number | undefined): void;
};

const EventModalForm = ({ data, handleModalClose, isRelaunch }: Props) => {
  const [eventCategory, setEventCategory] = useState<any[]>([]);
  const [numOfDays, setNumOfDays] = useState<number>(
    data.data?.location?.noOfDays || 0
  );
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState<Array<string>>(
    data.data.featuredKeyword || []
  );
  const [itineraryPanesFormData, setItineraryPanesFormData] = useState<any>(
    data.data?.summary || {}
  );
  const [isRejected, setIsRejected] = useState(false);
  const paymentCategory = !isString(data.data.payment);
  const isOnline = data.data.eventType === "online";

  const { state: itinerayTabs, methods: itinerayMethods } = useTabs(
    {
      activeKey: "day1",
      panes: generatePanes(
        Object.keys(data.data?.summary || {}).length || 1,
        "Day",
        ItineraryFormTab
      ),
    },
    ItineraryFormTab
  );

  const updateTabFormData = (type: TabsVariant, value: any, key: any) => {
    if (type === "itinerary") {
      setItineraryPanesFormData({
        ...itineraryPanesFormData,
        [key]: value,
      });
    }
  };

  const handleRemove = () => {
    setNumOfDays((pre) => {
      if (pre > 0) {
        return pre - 1;
      }
      return pre;
    });
  };

  const updateTags = (e: any) => {
    setTags([...tags, e.target.value]);
    setTagInput("");
  };

  const onTagClose = (id: number) => {
    setTags(tags.filter((_, i) => id !== i));
  };

  const handleRejectionConfirmation = (value: any) => {
    setIsRejected(false);
    handleModalClose();
  };

  const onSubmit = (value: any) => {
    let formValue: any = {
      eventType: data.data.eventType,
      eventName: value.eventName,
      eventDescription: value.description,
      payment: value.paymentList ? value.paymentList : value.payment,
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
      imgLink: data.data?.imgLink,
    };

    if (!isOnline) {
      formValue["location"] = {
        destination: value.destination,
        noOfDays: numOfDays,
      };

      formValue["summary"] = itineraryPanesFormData;
    }

    formValue = {
      ...formValue,
      status: "processing",
      booked: 0,
    };

    handleModalClose();
  };

  const getInitialData = () => {
    const { data: d } = data;
    let initialData: any = {
      eventName: d.eventName,
      description: d.eventDescription,
      payment: d.payment,
      eventFormat: d.sailentFeatures.format,
      ageGroupFrom: d.sailentFeatures.ageGroup.from,
      ageGroupTo: d.sailentFeatures.ageGroup.to,
      eventLanguage: d.sailentFeatures.language,
      startDate: moment(d.sailentFeatures.startDate, "DD-MM-YYYY"),
      startTime: moment(d.sailentFeatures.startTime, "h:mm:ss a"),
      numberOfTicket: d.sailentFeatures.availableTicket,
      cancellationPolicy: d.cancellationPolicy,
      termsAndCondition: d.termsAndCondition,
      exclusion: d.exclusion,
      inclusion: d.inclusion,
    };

    if (!isOnline) {
      initialData = {
        ...initialData,
        destination: d.location.destination,
      };
    }
    return initialData;
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
  }, []);

  return (
    <div className={classNames({ "tw-pointer-events-none": isRelaunch })}>
      <Form
        name="eventForm"
        onKeyDown={onKeyDownEvent}
        onFinish={onSubmit}
        initialValues={getInitialData()}
        layout="vertical"
        autoComplete="off"
      >
        <Row gutter={[10, 10]}>
          <Col span={24}>
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
          </Col>
          <Col span={24}>
            <Form.Item
              name="sailentFeatures"
              className="antd-inline-form tw-relative tw-mb-0"
            >
              <h3 className="tw-font-medium tw-text-base tw-mb-5 tw-mt-5">
                Sailent Features
              </h3>
              <Form.Item label="What is your Event format ?" name="eventFormat">
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
            </Form.Item>
          </Col>
          {!isOnline && (
            <>
              {" "}
              <Col span={24}>
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
              </Col>
              <Col span={24}>
                <div className="tw-flex tw-justify-between tw-mb-5">
                  <h3 className="tw-text-base tw-font-medium">Summary</h3>
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
                    {itinerayTabs.panes.map(
                      ({ title, Content, key, closable }) => (
                        <Tabs.TabPane tab={title} key={key} closable={closable}>
                          <Content
                            initialData={itineraryPanesFormData[key]}
                            keyValue={key}
                            updateTabFormData={updateTabFormData}
                          />
                        </Tabs.TabPane>
                      )
                    )}
                  </Tabs>
                </Form.Item>
              </Col>{" "}
            </>
          )}
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

export default EventModalForm;
