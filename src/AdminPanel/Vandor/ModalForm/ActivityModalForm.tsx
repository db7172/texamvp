import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import {
  Checkbox,
  Col,
  DatePicker,
  Form,
  Input,
  Row,
  Select,
  Tag,
  TimePicker,
} from "antd";
import classNames from "classnames";
import { isString, uniqueId } from "lodash";
import moment from "moment";
import { useState } from "react";
import { onKeyDownEvent } from "../../../pages/influencer/form/formUtils";

type Props = {
  data: any;
  type: string;
};

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

const ActivityModalForm = ({ data, type }: Props) => {
  const paymentCategory = !isString(data.data.payment);
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState<Array<string>>(
    data.data.featureKeyWord || []
  );

  const updateTags = (e: any) => {
    setTags([...tags, e.target.value]);
    setTagInput("");
  };

  const onTagClose = (id: number) => {
    setTags(tags.filter((_, i) => id !== i));
  };

  return (
    <div className="">
      <Form
        name="activityForm"
        onKeyDown={onKeyDownEvent}
        // onFinish={onSubmit}
        initialValues={{
          activityName: data.data.activityName,
          description: data.data.description,
          payment: data.data.payment,
          departure: data.data.departureDate.map((d: any) => {
            return {
              dateOfDeparture: [
                moment(d.dateRange.start),
                moment(d.dateRange.end),
              ],
              ratePerPerson: d.ratePerPerson,
            };
          }),
          activityType: data.data.sailentFeatures.activityType,
          activityLevel: data.data.sailentFeatures.activityLevel,
          numberOfTicketInclude:
            data.data.sailentFeatures.numberOfTicketInclude,
          includes: data.data.sailentFeatures.includes,
          ageGroupFrom: data.data.sailentFeatures.ageGroup.from,
          ageGroupTo: data.data.sailentFeatures.ageGroup.to,
          destinationFistField: data.data.destinations.destination,
          googleMap: data.data.destinations.googleMap,
          departureCityList: data.data.departureCity,
          reportingDroppingPointList: data.data.reportingAndDroppingPoint,
          date: moment(data.data.itinerary.data),
          title: data.data.itinerary.title,
          itineraryDetails: data.data.itinerary.itineraryDetails,
          inclusion: data.data.inclusion,
          exclusion: data.data.exclusion,
          howToReachPickupPoint: data.data.tripEssential.howToReachPickupPoint,
          certificateRequired: data.data.tripEssential.certificateRequired,
          termsAndCondition: data.data.tripEssential.termsAndCondition,
          saftyNorms: data.data.tripEssential.saftyNorms,
          thingsToCarry: data.data.tripEssential.thingsToCarry,
          thingsProhibitted: data.data.tripEssential.thingsProhibitted,
          cancellationPolicy: data.data.tripEssential.cancellationPolicy,
        }}
        onValuesChange={(value, obj) => console.log(obj)}
        onFinishFailed={(error) => console.log(error)}
        layout="vertical"
        // size="large"
        autoComplete="off"
      >
        <Row gutter={[10, 10]}>
          <Col span={24}>
            <Form.Item label="Activity Name" name="activityName">
              <Input className="tw-rounded-md" placeholder="Activity Name" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="About Activity (Description)" name="description">
              <Input.TextArea
                rows={4}
                className="tw-rounded-md"
                placeholder="Description"
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item className="">
              <div className="tw-flex tw-justify-between">
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
            </Form.Item>
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
            <Form.Item className="tw-my-5">
              <div className="tw-flex tw-justify-between">
                <h3 className="tw-text-base tw-font-medium">Departure Dates</h3>
                <p
                  className="tw-flex tw-items-center tw-gap-2 tw-cursor-pointer tw-text-blue-500 tw-text-base"
                  onClick={() => addDepartureDateField()}
                >
                  <PlusOutlined />
                  <span>Add Dates</span>
                </p>
              </div>
            </Form.Item>
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
                label="What is your Activity Type ?"
                name="activityType"
              >
                <Input
                  className="tw-rounded-md"
                  placeholder="Enter Activity Type"
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
                name="numberOfTicketInclude"
              >
                <Input
                  type="tel"
                  pattern="[0-9]*"
                  className="tw-rounded-md"
                  min={1}
                  placeholder="Enter No. of People"
                />
              </Form.Item>

              {type === "hourly" && (
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

              <Form.Item
                className="checkboxinput"
                label="What package includes?"
                name="includes"
              >
                <Checkbox.Group>
                  <Row>
                    <Col span={12}>
                      <Checkbox
                        value="picAnddrop"
                        style={{ lineHeight: "32px" }}
                      >
                        Picup & Drop
                      </Checkbox>
                    </Col>
                    <Col span={12}>
                      <Checkbox
                        value="hotalStay"
                        style={{ lineHeight: "32px" }}
                      >
                        Hotal Stay
                      </Checkbox>
                    </Col>
                    <Col span={12}>
                      <Checkbox
                        value="photography"
                        style={{ lineHeight: "32px" }}
                      >
                        Photography
                      </Checkbox>
                    </Col>
                  </Row>
                </Checkbox.Group>
              </Form.Item>
            </Form.Item>
          </Col>
          <Col span={24}>
            <div className="tw-flex tw-justify-between">
              <h3 className="tw-text-base tw-font-medium tw-mb-5">
                Destinations
              </h3>
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
            <div className="tw-flex tw-justify-between tw-mb-5">
              <h3 className="tw-text-base tw-font-medium">Departure City</h3>
              <p
                className="tw-flex tw-items-center tw-gap-2 tw-cursor-pointer tw-text-blue-500 tw-text-base"
                onClick={() => addDepartureCityField()}
              >
                <PlusOutlined />
                <span>Add City</span>
              </p>
            </div>
            <Form.List name="departureCityList">
              {(fields, { add, remove }) => {
                addDepartureCityField = add;
                return (
                  <>
                    <div className="tw-flex tw-flex-wrap tw-mb-5">
                      {fields.map((field) => (
                        <div
                          className="tw-w-1/2 tw-flex tw-items-center tw-gap-2 tw-mb-5"
                          key={uniqueId("departureCity")}
                        >
                          <Form.Item
                            {...field}
                            label="Depature City"
                            className="tw-w-10/12 tw-m-0"
                          >
                            <Input
                              className="tw-rounded-md"
                              placeholder="Enter Destination"
                            />
                          </Form.Item>

                          <MinusCircleOutlined
                            className="tw-text-lg tw-text-secondary-color tw-mt-5"
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
            <div className="tw-flex tw-justify-between tw-mb-5">
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

            <Form.List name="reportingDroppingPointList">
              {(fields, { add, remove }) => {
                addReportingDroppingPointField = add;
                return (
                  <>
                    <div className="tw-mb-5">
                      {fields.map((field) => (
                        <div
                          className="tw-flex tw-items-center tw-gap-10 tw-mb-5"
                          key={uniqueId("reportingPoint")}
                        >
                          <Form.Item
                            {...field}
                            label="Reporting Point"
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
                            label="Droping Point"
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
                            className="tw-text-lg tw-text-secondary-color tw-mt-5"
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
          <Col span={24}></Col>
          <Col span={24}>
            <h3 className="tw-text-base tw-font-medium tw-mb-5">Itinerary</h3>
            <Form.Item name="date" label="Date of that day">
              <DatePicker
                className="tw-rounded-md tw-w-1/2"
                format="DD/MM/YYYY"
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
          </Col>
          <Col span={24}>
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
          </Col>
          <Col span={24}>
            <Form.Item name="inclusion" label="Inclusion">
              <Input.TextArea
                rows={6}
                className="tw-rounded-md"
                placeholder="Trip Inclusion"
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="exclusion" label="Exclusion">
              <Input.TextArea
                rows={6}
                className="tw-rounded-md"
                placeholder="Trip Exclusion"
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item>
              <h3 className="tw-text-base tw-font-medium tw-mb-4">
                Trip Essential
              </h3>

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
              <Form.Item name="thingsProhibitted" label="Things Prohibitted ?">
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
              <Form.Item name="certificateRequired" label="Certificate Require">
                <Input.TextArea
                  rows={6}
                  className="tw-rounded-md"
                  placeholder="Certificate Require"
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
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default ActivityModalForm;
