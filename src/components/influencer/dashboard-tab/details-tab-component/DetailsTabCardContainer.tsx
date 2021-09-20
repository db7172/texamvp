import {
  Button,
  Col,
  Input,
  Modal,
  Row,
  Tooltip,
  Form,
  Radio,
  Space,
} from "antd";
import { isNumber, uniqueId } from "lodash";
import { indCurrency } from "../../../../utils/utils";

import share from "../../../../assets/svg/influencer/share.svg";
import cancel from "../../../../assets/svg/influencer/cancel.svg";
import edit from "../../../../assets/svg/influencer/edit.svg";
import classNames from "classnames";
import { useState } from "react";
import { InfoCircleOutlined } from "@ant-design/icons";
import { AdditionalInfoType, DataDetailsType } from "Models";

const mockReason = [
  {
    value: "reason1",
    label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    value: "reason2",
    label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    value: "reason3",
    label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    value: "reason4",
    label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },

  { value: "other", label: "Other Reason" },
];

const getStatusClass = (status: string): string => {
  switch (status) {
    case "under process":
    case "upload":
      return "tw-bg-gray-background tw-text-c4c4c4";

    case "on progress":
      return "tw-bg-lite-blue tw-text-blue-dark";

    case "booked":
      return "tw-bg-lite-green tw-text-green-background";

    default:
      return "";
  }
};

type Props = {
  data: DataDetailsType[];
  viewMore: (value: DataDetailsType) => void;
};

const DetailsTabCardContainer = ({ data, viewMore }: Props) => {
  const [activeCard, setActiveCard] = useState<DataDetailsType>();
  const [shareMessageModal, setShareMessageModal] = useState(false);
  const [cancelBookingModal, setCancelBookingModal] = useState(false);
  const [shareMessageForm] = Form.useForm();
  const [cancelBookingForm] = Form.useForm();

  const handleCancelClick = (value: DataDetailsType) => {
    setActiveCard(value);
    setCancelBookingModal(true);
  };

  const handleCancelBookingModalCancel = () => {
    setCancelBookingModal(false);
    setActiveCard(undefined);
  };

  const handleClosingBookingSubmit = (value: any) => {
    console.log(value);
    cancelBookingForm.setFieldsValue({ radioButton: "", otherMessage: "" });
    setCancelBookingModal(false);
  };

  const handleShareClick = (value: DataDetailsType) => {
    setActiveCard(value);
    setShareMessageModal(true);
  };

  const handleShareMessageModalCancel = () => {
    setShareMessageModal(false);
    setActiveCard(undefined);
    shareMessageForm.setFieldsValue({ message: "" });
  };

  const handleSendMessageSubmit = (value: any) => {
    console.log(value);
    shareMessageForm.setFieldsValue({ message: "" });
    setShareMessageModal(false);
  };

  const addtionalInfomation = (obj: AdditionalInfoType) => {
    return (
      <div className="tw-p-2 tw-w-36">
        {Object.entries(obj).map(([key, value]) => (
          <div className="tw-flex tw-justify-between">
            <span>{key}</span>
            <span>{value}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <Row gutter={[0, 20]}>
        {data.map((d) => (
          <Col
            span={24}
            key={uniqueId()}
            className="tw-shadow-card tw-rounded-md tw-p-7 tw-flex tw-justify-between"
          >
            <div
              className="tw-flex tw-gap-3"
              style={{ maxWidth: d.date ? "250px" : "330px" }}
            >
              <div>
                <img src={d.image} alt="details card" />
              </div>
              <div style={{ width: d.date ? "180px" : "220px" }}>
                <Tooltip title={d.title}>
                  <h5 className="tw-text-base tw-font-medium tw-mb-3 tw-text-ellipsis">
                    {d.title}
                  </h5>
                </Tooltip>
                <p className="tw-text-xs tw-text-secondary-color tw-font-medium">
                  {d.description}
                </p>
              </div>
            </div>
            {isNumber(d.price) ? (
              <div>
                <p className="tw-text-secondary-color tw-text-base tw-mb-3">
                  Price
                </p>
                <p className="tw-text-base tw-font-medium">
                  {indCurrency(d.price)}
                </p>
              </div>
            ) : (
              <div>
                <p className="tw-text-secondary-color tw-text-base tw-mb-3">
                  {d.price.label}
                </p>
                <p className="tw-text-base tw-font-medium tw-flex tw-items-center">
                  {d.price.additionalInfo.Bronze}
                  <Tooltip
                    className="tw-ml-2"
                    title={addtionalInfomation(d.price.additionalInfo)}
                  >
                    <InfoCircleOutlined className="tw-text-secondary-color" />
                  </Tooltip>
                </p>
              </div>
            )}
            <div className="tw-w-24">
              <p className="tw-text-secondary-color tw-text-base tw-mb-3">
                Status
              </p>
              <p
                className={classNames(
                  getStatusClass(d.status.toLowerCase()),
                  "tw-rounded-md tw-p-2 tw-text-xs tw-font-medium tw-max-w-max"
                )}
              >
                {d.status}
              </p>
            </div>

            <div>
              <p className="tw-text-secondary-color tw-text-base tw-mb-3">
                Booked
              </p>
              {isNumber(d.bookedTickets) ? (
                <p>
                  <span
                    className={classNames(
                      d.bookedTickets > 0
                        ? "tw-text-primary-color"
                        : "tw-text-secondary-color"
                    )}
                  >
                    {d.bookedTickets}
                  </span>
                  <span className="tw-text-secondary-color">
                    /{d.totlaTickets}
                  </span>
                </p>
              ) : (
                <p className="tw-flex tw-items-center">
                  <span
                    className={classNames(
                      d.bookedTickets.totalBooked > 0
                        ? "tw-text-primary-color"
                        : "tw-text-secondary-color"
                    )}
                  >
                    {d.bookedTickets.totalBooked}
                  </span>
                  <span className="tw-text-secondary-color">
                    /{d.totlaTickets}
                  </span>
                  <Tooltip
                    className="tw-ml-2"
                    title={addtionalInfomation(d.bookedTickets.additionalInfo)}
                  >
                    <InfoCircleOutlined className="tw-text-secondary-color" />
                  </Tooltip>
                </p>
              )}
            </div>

            {d.date && (
              <div>
                <p className="tw-text-secondary-color tw-text-base tw-mb-3">
                  Date
                </p>
                <p className="tw-font-medium">{d.date}</p>
              </div>
            )}

            <div>
              <div className="tw-flex tw-gap-1 tw-mb-2">
                <div>
                  <Tooltip title="Send Message">
                    <img
                      className="tw-cursor-pointer"
                      src={share}
                      alt="share"
                      onClick={() => handleShareClick(d)}
                    />
                  </Tooltip>
                </div>
                <div>
                  <Tooltip title="Edit">
                    <img className="tw-cursor-pointer" src={edit} alt="edit" />
                  </Tooltip>
                </div>
                <div>
                  <Tooltip title="Cancel">
                    <img
                      className="tw-cursor-pointer"
                      src={cancel}
                      alt="cancel"
                      onClick={() => handleCancelClick(d)}
                    />
                  </Tooltip>
                </div>
              </div>
              <p
                className="tw-text-right tw-text-xs tw-text-blue-500 tw-underline tw-cursor-pointer"
                onClick={() => viewMore(d)}
              >
                View details
              </p>
            </div>
          </Col>
        ))}
      </Row>
      <Modal
        title="Send Message"
        visible={shareMessageModal}
        footer={null}
        onCancel={handleShareMessageModalCancel}
        width={800}
      >
        {activeCard && (
          <>
            <div className="tw-flex tw-gap-3 tw-mb-9">
              <div>
                <img src={activeCard.image} alt="details card" />
              </div>
              <div>
                <Tooltip title={activeCard.title}>
                  <h5 className="tw-text-base tw-font-medium tw-mb-3 tw-text-ellipsis">
                    {activeCard.title}
                  </h5>
                </Tooltip>
                <p className="tw-text-xs tw-text-secondary-color tw-font-medium">
                  {activeCard.description}
                </p>
              </div>
            </div>
            <div>
              <Form
                name="sendMessage"
                onFinish={handleSendMessageSubmit}
                autoComplete="off"
                layout="vertical"
                form={shareMessageForm}
              >
                <Form.Item
                  label="Your Message"
                  name="message"
                  rules={[
                    { required: true, message: "Please input your message!" },
                  ]}
                >
                  <Input.TextArea className="tw-rounded-md" rows={5} />
                </Form.Item>
                <div className="tw-flex tw-justify-end">
                  <Button
                    type="default"
                    className="tw-texa-button"
                    htmlType="submit"
                  >
                    Send
                  </Button>
                </div>
              </Form>
            </div>
          </>
        )}
      </Modal>
      <Modal
        title="Reason for Closing Booking"
        visible={cancelBookingModal}
        footer={null}
        onCancel={handleCancelBookingModalCancel}
      >
        {activeCard && (
          <>
            <Form
              name="sendMessage"
              onFinish={handleClosingBookingSubmit}
              autoComplete="off"
              layout="vertical"
              form={cancelBookingForm}
            >
              <Form.Item
                name="radioButton"
                rules={[
                  { required: true, message: "Please select your reason!" },
                ]}
              >
                <Radio.Group>
                  <Space direction="vertical">
                    {mockReason.map((d) => (
                      <Radio value={d.value}>{d.label}</Radio>
                    ))}
                  </Space>
                </Radio.Group>
              </Form.Item>
              <Form.Item name="otherMessage">
                <Input.TextArea
                  className="tw-rounded-md"
                  placeholder="Type Your reason..."
                  rows={5}
                />
              </Form.Item>
              <div className="tw-flex tw-justify-end">
                <Button
                  type="default"
                  className="tw-texa-button"
                  htmlType="submit"
                >
                  Submit
                </Button>
              </div>
            </Form>
          </>
        )}
      </Modal>
    </div>
  );
};

export default DetailsTabCardContainer;
