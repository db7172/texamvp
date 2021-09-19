import { Button, Col, Input, Modal, Row, Tooltip, Form } from "antd";
import { uniqueId } from "lodash";
import { indCurrency } from "../../../../utils/utils";

import share from "../../../../assets/svg/influencer/share.svg";
import cancel from "../../../../assets/svg/influencer/cancel.svg";
import edit from "../../../../assets/svg/influencer/edit.svg";
import classNames from "classnames";
import { useState } from "react";

type DataType = {
  image: string;
  title: string;
  description: string;
  price: number;
  status: string;
  totlaTickets: number;
  bookedTickets: number;
};

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

const DetailsTabCardContainer = ({ data }: { data: DataType[] }) => {
  const [activeForShare, setActiveForShare] = useState<DataType>();
  const [shareMessageModal, setShareMessageModal] = useState(false);

  const handleShareClick = (value: DataType) => {
    setActiveForShare(value);
    setShareMessageModal(true);
  };

  const handleShareMessageModalCancel = () => {
    setShareMessageModal(false);
    setActiveForShare(undefined);
  };

  const handleSendMessageSubmit = (value: any) => {
    console.log(value);
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
            <div className="tw-flex tw-gap-3" style={{ maxWidth: "330px" }}>
              <div>
                <img src={d.image} alt="details card" />
              </div>
              <div style={{ width: "220px" }}>
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
            <div>
              <p className="tw-text-secondary-color tw-text-base tw-mb-3">
                Price
              </p>
              <p className="tw-text-base tw-font-medium">
                {indCurrency(d.price)}
              </p>
            </div>
            <div className="tw-w-28">
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
            </div>
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
                    />
                  </Tooltip>
                </div>
              </div>
              <p className="tw-text-right tw-text-xs tw-text-blue-500 tw-underline tw-cursor-pointer">
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
        {activeForShare && (
          <>
            <div className="tw-flex tw-gap-3 tw-mb-9">
              <div>
                <img src={activeForShare.image} alt="details card" />
              </div>
              <div>
                <Tooltip title={activeForShare.title}>
                  <h5 className="tw-text-base tw-font-medium tw-mb-3 tw-text-ellipsis">
                    {activeForShare.title}
                  </h5>
                </Tooltip>
                <p className="tw-text-xs tw-text-secondary-color tw-font-medium">
                  {activeForShare.description}
                </p>
              </div>
            </div>
            <div>
              <Form
                name="sendMessage"
                onFinish={handleSendMessageSubmit}
                autoComplete="off"
                layout="vertical"
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
    </div>
  );
};

export default DetailsTabCardContainer;
