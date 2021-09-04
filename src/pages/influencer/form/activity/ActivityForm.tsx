import {
  CloudUploadOutlined,
  LeftOutlined,
  MinusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Col, Divider, Row, Form, Upload, Input, DatePicker } from "antd";
import { Link, useParams } from "react-router-dom";
import Container from "../../../../components/common/container/Container";
import FormLeftPenal from "../../../../components/influencer/form/FormLeftPenal";
import lamp from "../../../../assets/svg/lamp.svg";
import video from "../../../../assets/png/influencer/video.png";
import { MouseEventHandler, useState } from "react";
import { uniqueId } from "lodash";
import Select from "rc-select";

let addPaymentField: {
  (): void;
  (defaultValue?: any, insertIndex?: number | undefined): void;
};

let addDepartureDateField: {
  (): void;
  (defaultValue?: any, insertIndex?: number | undefined): void;
};

const ActivityForm = () => {
  const { activityType } = useParams<{ activityType: string }>();

  const normFile = (e: any) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const createActivity = () => {
    return (
      <div className="tw-w-80 popover-right">
        <div className="popover-right-inner">
          <div className="lamp-icon-container">
            <img src={lamp} alt="lamp" />
          </div>
          <h4 className="tw-text-lg tw-font-medium tw-mb-3">Create Activity</h4>
          <div className="tw-mb-4">
            <img src={video} alt="video" />
          </div>
          <p className="tw-text-secondary-color">
            Nunc molestie auctor eget vulputate venenatis, etiam ac orci. Tortor
            quam dolor amet sed urna lorem. Semper interdum odio tempus sit ac
            ornare tortor maecenas elementum. Mauris senectus etiam facilisi
            consequat sed mauris, enim.
          </p>
        </div>
      </div>
    );
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
                {createActivity()}
              </div>
              <Divider className="tw-my-10" />
              <Form
                name="activityForm"
                // onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
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
                <Form.Item className="tw-mb-0">
                  <div className="tw-flex tw-justify-between">
                    <h3 className="tw-text-base tw-font-medium">Payment</h3>
                    <p
                      className="tw-flex tw-items-center tw-gap-2 tw-cursor-pointer tw-text-blue-500 tw-text-base"
                      onClick={() => addPaymentField()}
                    >
                      <PlusOutlined />
                      <span>Add Category</span>
                    </p>
                  </div>
                </Form.Item>
                <Form.Item
                  label="Rate Per Person"
                  className="tw-flex"
                  name="ratePerPerson"
                >
                  <Form.List name="ratePerPrice">
                    {(fields, { add, remove }) => {
                      addPaymentField = add;
                      return (
                        <>
                          <div className="tw-flex tw-flex-wrap">
                            <div className="tw-w-1/2 tw-flex tw-items-center tw-gap-2 tw-mb-5">
                              <Form.Item className="tw-w-10/12 tw-m-0">
                                <Input
                                  className="tw-rounded-md"
                                  type="number"
                                  prefix="₹"
                                  placeholder="Enter Your Rate Per Person"
                                />
                              </Form.Item>
                            </div>
                            {fields.map((field) => (
                              <div
                                className="tw-w-1/2 tw-flex tw-items-center tw-gap-2 tw-mb-5"
                                key={uniqueId("ratePerPrice")}
                              >
                                <Form.Item
                                  {...field}
                                  className="tw-w-10/12 tw-m-0"
                                >
                                  <Input
                                    className="tw-rounded-md"
                                    type="number"
                                    prefix="₹"
                                    placeholder="Enter Your Rate Per Person"
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
                <Form.Item className="tw-mb-0">
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
                <Form.Item className="tw-flex" name="departureDates">
                  <Form.List name="departure">
                    {(fields, { add, remove }) => {
                      addDepartureDateField = add;
                      return (
                        <>
                          <div className="tw-flex tw-flex-wrap">
                            <div className="tw-flex tw-items-center tw-gap-10 tw-mb-5">
                              <Form.Item
                                label="Depature Date Range"
                                className="tw-w-10/12 tw-m-0"
                              >
                                <DatePicker.RangePicker className="tw-rounded-md" />
                              </Form.Item>
                              <Form.Item
                                label="Rate Per Person"
                                className="tw-w-10/12 tw-m-0"
                              >
                                <Input
                                  className="tw-rounded-md"
                                  type="number"
                                  prefix="₹"
                                  placeholder="Rate Per Person"
                                />
                              </Form.Item>
                              <MinusCircleOutlined className="tw-text-lg tw-opacity-0" />
                            </div>
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
                </Form.Item>

                <Divider className="tw-my-10" />
                <Form.Item
                  label="Sailent Features"
                  name="sailentFeatures"
                  className="antd-inline-form"
                >
                  <Form.Item
                    label="What is your Activity Type ?"
                    name="activityType"
                  >
                    <Input className="tw-rounded-md" />
                  </Form.Item>

                  <Form.Item
                    label="What is your the Activity Level ?"
                    name="activityType"
                  >
                    <Select className="tw-rounded-md">
                      <Select.Option value="easy">Easy</Select.Option>
                      <Select.Option value="medium">Medium</Select.Option>
                      <Select.Option value="hard">Hard</Select.Option>
                    </Select>
                  </Form.Item>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ActivityForm;
