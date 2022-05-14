import { InfoCircleOutlined, StarFilled } from "@ant-design/icons";
import { Button, Col, Divider, Modal, Row, Tooltip } from "antd";
import { isNumber, uniqueId } from "lodash";
import { ReviewData, TripData } from "Models";
import { useEffect, useState } from "react";
import { indCurrency } from "../../../../utils/utils";
import UserReview from "../../../common/UserReview/UserReview";
import { addtionalInfomation } from "../DashboardUtils";
import firebase from "../../../../firebase";

// type Props = {
//   data: Array<TripData>;
// };

const CompletedTabComponent = ({ activity }: any) => {
  const [activeReview, setActiveReview] = useState<Array<ReviewData>>([]);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [review, setReview] = useState([]) as any;

  const handleViewAllClick = (value: Array<ReviewData>) => {
    setActiveReview(value);
    setShowReviewModal(true);
  };

  const handleCancel = () => {
    setShowReviewModal(false);
    setActiveReview([]);
  };

  const calcAvg = async () => {
    let sum = 0;
    await activity.map((data: any) => {
      return (sum += data.review.rating);
      let avg = sum / review.length;
    });
  };

  console.log(activity);

  return (
    // <div>Loading</div>
    <div>
      <Row gutter={[0, 40]}>
        {activity.map((d: any) => (
          <Col
            span={24}
            key={uniqueId()}
            className="tw-shadow-card tw-rounded-md tw-p-7"
          >
            {/* img, title and desciption */}
            <div className="tw-flex tw-justify-between">
              <div className="tw-flex tw-gap-3" style={{ maxWidth: "220px" }}>
                <div>
                  <img src={d.data.img} alt="details card" />
                </div>
                <div style={{ width: "150px" }}>
                  <Tooltip title={d.data.title}>
                    <h5 className="tw-text-base tw-font-medium tw-mb-3 tw-text-ellipsis">
                      {d.data.title}
                    </h5>
                  </Tooltip>
                  <p className="tw-text-xs tw-text-secondary-color tw-font-medium">
                    {d.data.description}
                  </p>
                </div>
              </div>

              {/* price */}
              {isNumber(d.data.paidAmt) ? (
                <div>
                  <p className="tw-text-secondary-color tw-text-base tw-mb-3">
                    Price
                  </p>
                  <p className="tw-text-base tw-font-medium">
                    {indCurrency(d.data.paidAmt)}
                  </p>
                </div>
              ) : (
                <div>
                  {/* <p className="tw-text-secondary-color tw-text-base tw-mb-3">
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
                  </p> */}
                </div>
              )}

              {/* status */}
              <div>
                <p className="tw-text-secondary-color tw-text-base tw-mb-3">
                  Status
                </p>
                <p className="tw-rounded-md tw-p-2 tw-text-xs tw-font-medium tw-max-w-max tw-text-yellow-color tw-bg-lite-yellow">
                  {"Completed"}
                </p>
              </div>

              {/* no of review */}
              <div>
                <p className="tw-text-secondary-color tw-text-base tw-mb-3">
                  No. of Reviews
                </p>
                <p className="tw-text-base tw-font-medium">
                  {d.data.review.length}
                </p>
              </div>

              {/* ratting */}
              <div>
                <p className="tw-text-secondary-color tw-text-base tw-mb-3">
                  Avg. Ratings
                </p>
                <p className="tw-text-base tw-font-medium tw-flex tw-items-center">
                  <span>{4.5}</span>{" "}
                  <StarFilled className="tw-text-yellow-color tw-ml-2" />
                </p>
              </div>

              {/* re-launch button */}
              <Button type="default" className="tw-texa-button">
                Re-Launch
              </Button>
            </div>
            <Divider />
            <div className="tw-mt-10">
              <UserReview
                ViewAll
                d={d.data.review[0]}
                handleViewAllClick={() => handleViewAllClick(d.review)}
              />
            </div>
          </Col>
        ))}
      </Row>
      <Modal
        title={`Booked Person (${activeReview.length})`}
        visible={showReviewModal}
        footer={null}
        style={{ top: 60 }}
        onCancel={handleCancel}
        width={700}
        className="no-padding-modal"
      >
        <div
          style={{ maxHeight: "600px" }}
          className="tw-overflow-y-auto tw-px-8 tw-py-5"
        >
          {activeReview.map((d, i) => (
            <div className="tw-mb-10" key={uniqueId()}>
              <UserReview ViewAll d={d} textForViewAll="view details" />
              {Boolean(i !== activeReview.length - 1) && <Divider />}
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
};

export default CompletedTabComponent;
