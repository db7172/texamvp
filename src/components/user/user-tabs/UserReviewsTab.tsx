import { Button, Col, Form, Input, Modal, Rate, Row, Select } from "antd";
import classNames from "classnames";
import { isUndefined } from "lodash";
import { useEffect, useState } from "react";
import { COMPLETED } from "../../influencer/dashboard-tab/data";
import TripDetailCard from "../card/TripDetailCard";
import TripReviewCard from "../card/TripReviewCard";
import { UPCOMING_TRIP_DATA } from "./userTabsConstants";
import firebase from "../../../firebase";

const SORTBY = [
  {
    label: "Oldest",
    value: "oldest",
  },
  {
    label: "Newest",
    value: "newest",
  },
  {
    label: "High to Low Rating",
    value: "highToLow",
  },
  {
    label: "Low to High Rating",
    value: "lowToHigh",
  },
];

const mockReview = COMPLETED.ACTIVITY[0].review[0];

const UserReviewsTab = (props: any) => {
  const [activeButton, setActiveButton] = useState(1);
  const [activeModalId, setActiveModalId] = useState<number | undefined>();
  const [rating, setRating] = useState<undefined | number>(5);
  const [trips, setTrips] = useState([]) as any;
  const [form] = Form.useForm();

  const onModalCancel = () => {
    setActiveModalId(undefined);
    form.resetFields();
  };

  const onRatingSubmit = (value: any) => {
    console.log({ ...value, rating });
    console.log(activeModalId);
  };

  let userId = props.id;
  let userData = props.data;

  useEffect(() => {
    firebase
      .firestore()
      .collection("completedTours")
      .where("userId", "==", props.id)
      .get()
      .then((querySnap) => {
        setTrips(
          querySnap.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData.completedTours, userData]);

  // console.log(userData);
  console.log(userId);
  console.log(trips);

  const getReviewYourProduct = () => {
    return (
      <div className="tw-mt-14">
        {trips.map((value: any, id: any) => (
          <TripDetailCard
            key={id}
            id={id}
            title={value.data.title}
            description={value.data.duration}
            icon={value.data.icon}
            bookingDate={value.data.bookingDate}
            bookingId={value.id}
            paidAmt={value.data.paidAmt}
            type={value.data.type}
            buttonText="Rate Your Trip"
            handleButtonClick={(id) => setActiveModalId(value.id)}
          />
        ))}
      </div>
    );
  };

  const getYourReview = () => {
    return (
      <div>
        <div className="tw-flex tw-justify-between tw-items-center">
          <p>Reviews</p>
          <div className="tw-bg-white tw-rounded-md tw-shadow-card tw-pl-3 tw-py-1">
            <span>Sorted By :</span>
            <Select
              options={SORTBY}
              defaultValue="newest"
              style={{ width: 160 }}
              bordered={false}
              placeholder="Location"
            />
          </div>
        </div>
        <div
          style={{ height: "80vh" }}
          className="tw-mt-5 tw-overflow-y-scroll"
        >
          {UPCOMING_TRIP_DATA.map((value, id) => (
            <TripReviewCard
              key={id}
              id={id}
              title={value.title}
              description={value.duration}
              icon={value.icon}
              bookingDate={value.bookingDate}
              bookingId={value.bookingId}
              paidAmt={value.bookingAmt}
              type={value.type}
              comments={mockReview}
            />
          ))}
        </div>
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
        {activeButton === 2 && getYourReview()}
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
