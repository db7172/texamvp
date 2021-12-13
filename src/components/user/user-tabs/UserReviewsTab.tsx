import { Button, Col, Form, Input, Modal, Rate, Row } from "antd";
import classNames from "classnames";
import { isUndefined } from "lodash";
import { useState } from "react";
import TripDetailCard from "../card/TripDetailCard";
import { UPCOMING_TRIP_DATA } from "./userTabsConstants";

const UserReviewsTab = () => {
  const [activeButton, setActiveButton] = useState(1);
  const [activeModalId, setActiveModalId] = useState<number | undefined>();
  const [rating, setRating] = useState<undefined | number>(5);

  const [form] = Form.useForm();

  const onModalCancel = () => {
    setActiveModalId(undefined);
    form.resetFields();
  };

  const onRatingSubmit = (value: any) => {
    console.log({ ...value, rating });
    onModalCancel();
  };

  const getReviewYourProduct = () => {
    return (
      <div className="tw-mt-14">
        {UPCOMING_TRIP_DATA.map((value, id) => (
          <TripDetailCard
            key={id}
            id={id}
            title={value.title}
            description={value.duration}
            icon={value.icon}
            bookingDate={value.bookingDate}
            bookingId={value.bookingId}
            paidAmt={value.bookingAmt}
            type={value.type}
            buttonText="Rate Your Trip"
            handleButtonClick={(id) => setActiveModalId(id)}
          />
        ))}
      </div>
    );
  };

  return (
    <div>
      <Row gutter={20} className="tw-items-center">
        <Col span={24} className="tw-bg-white tw-rounded-md tw-shadow-card">
          <div className="tw-py-5 tw-px-5 tw-flex tw-gap-5">
            <Button
              type="default"
              className={classNames(
                "tw-m-0 border-visible",
                activeButton === 1
                  ? "tw-border-texa-active"
                  : "tw-border-texa-normal"
              )}
              onClick={() => setActiveButton(1)}
            >
              Review Your Product
            </Button>
            <Button
              type="default"
              className={classNames(
                "tw-m-0 border-visible",
                activeButton === 2
                  ? "tw-border-texa-active"
                  : "tw-border-texa-normal"
              )}
              onClick={() => setActiveButton(2)}
            >
              Your Review
            </Button>
          </div>
        </Col>
      </Row>

      <div className="tw-mt-5">
        {activeButton === 1 && getReviewYourProduct()}
        {activeButton === 2 && "Your Review"}
      </div>
      <Modal
        visible={!isUndefined(activeModalId)}
        width={450}
        title="Review Your Trip"
        onCancel={onModalCancel}
        footer={null}
      >
        <Form
          name="reviewModal"
          layout="vertical"
          size="large"
          form={form}
          onFinish={onRatingSubmit}
        >
          <div className="tw-flex tw-items-center tw-gap-5 tw-mb-5">
            <p className="tw-text-base">Ratings :-</p>
            <Rate onChange={(rate) => setRating(rate)} value={rating} />
          </div>

          <Form.Item label="Rating Reason" name="reason">
            <Input
              placeholder="Give A Title For Your Review"
              className="tw-rounded-lg"
            />
          </Form.Item>

          <Form.Item label="Description" name="description">
            <Input.TextArea
              placeholder="Give A Description"
              className="tw-rounded-lg"
            />
          </Form.Item>

          <Row gutter={25}>
            <Col span={12}>
              <Form.Item>
                <Button
                  type="default"
                  className="tw-w-full tw-texa-button"
                  htmlType="submit"
                >
                  Submit
                </Button>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item>
                <Button
                  type="default"
                  className="tw-w-full border-btn tw-rounded-lg"
                  onClick={onModalCancel}
                >
                  Cancel
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </div>
  );
};

export default UserReviewsTab;
