import { InfoCircleOutlined, StarFilled } from "@ant-design/icons";
import { Button, Col, Divider, Modal, Rate, Row, Tooltip } from "antd";
import { isNumber, uniqueId } from "lodash";
import { DataDetailsType } from "Models";
import { useState } from "react";
import { indCurrency } from "../../../../utils/utils";
import { addtionalInfomation } from "../DashboardUtils";

export type ReviewData = {
  name: string;
  ratting: number;
  profilePic: string;
  tags: string[];
  title: string;
  description: string;
};

type TripData = {
  image: string;
  title: string;
  description: string;
  price: DataDetailsType["price"];
  status: string;
  ratting: number;
  review: Array<ReviewData>;
};

type Props = {
  data: Array<TripData>;
};

const CompletedTabComponent = ({ data }: Props) => {
  const [activeReview, setActiveReview] = useState<Array<ReviewData>>([]);
  const [showReviewModal, setShowReviewModal] = useState(false);

  const handleViewAllClick = (value: Array<ReviewData>) => {
    setActiveReview(value);
    setShowReviewModal(true);
  };

  const handleCancel = () => {
    setShowReviewModal(false);
    setActiveReview([]);
  };

  return (
    <div>
      <Row gutter={[0, 40]}>
        {data.map((d) => (
          <Col
            span={24}
            key={uniqueId()}
            className="tw-shadow-card tw-rounded-md tw-p-7"
          >
            {/* img, title and desciption */}
            <div className="tw-flex tw-justify-between">
              <div className="tw-flex tw-gap-3" style={{ maxWidth: "220px" }}>
                <div>
                  <img src={d.image} alt="details card" />
                </div>
                <div style={{ width: "150px" }}>
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

              {/* price */}
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

              {/* status */}
              <div>
                <p className="tw-text-secondary-color tw-text-base tw-mb-3">
                  Status
                </p>
                <p className="tw-rounded-md tw-p-2 tw-text-xs tw-font-medium tw-max-w-max tw-text-yellow-color tw-bg-lite-yellow">
                  {d.status}
                </p>
              </div>

              {/* no of review */}
              <div>
                <p className="tw-text-secondary-color tw-text-base tw-mb-3">
                  No. of Reviews
                </p>
                <p className="tw-text-base tw-font-medium">{d.review.length}</p>
              </div>

              {/* ratting */}
              <div>
                <p className="tw-text-secondary-color tw-text-base tw-mb-3">
                  Avg. Ratings
                </p>
                <p className="tw-text-base tw-font-medium tw-flex tw-items-center">
                  <span>4.5</span>{" "}
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
              <div className="tw-flex tw-items-center tw-gap-3 tw-mb-5">
                <div className="tw-rounded-full tw-w-5 tw-h-5">
                  <img
                    className="tw-w-full"
                    src={d.review[0].profilePic}
                    alt="profilePic"
                  />
                </div>
                <p className="tw-font-medium tw-text-base">
                  {d.review[0].name}
                </p>
                <p
                  className="tw-text-xs tw-text-blue-500 tw-underline tw-cursor-pointer"
                  onClick={() => handleViewAllClick(d.review)}
                >
                  View All
                </p>
              </div>
              <div className="tw-flex tw-items-center tw-gap-3 tw-mb-5">
                <Rate disabled defaultValue={d.review[0].ratting} />
                <div className="tw-flex tw-gap-3">
                  {d.review[0].tags.map((t) => (
                    <p className="tw-bg-gray-background tw-text-xs tw-rounded-md tw-font-medium tw-py-2 tw-px-3">
                      {t}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="tw-text-base tw-font-medium tw-mb-2">
                  {d.review[0].title}
                </h3>
                <p className="tw-text-secondary-color tw-font-lato">
                  {d.review[0].description}
                </p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      <Modal
        title={`Booked Person (${activeReview.length})`}
        visible={showReviewModal}
        footer={null}
        onCancel={handleCancel}
        width={700}
        className="no-padding-modal"
      >
        <div
          style={{ maxHeight: "600px" }}
          className="tw-overflow-y-scroll tw-px-8 tw-py-5"
        >
          {activeReview.map((d, i) => (
            <div className="tw-mb-10">
              <div className="tw-flex tw-items-center tw-gap-3 tw-mb-5">
                <div className="tw-rounded-full tw-w-5 tw-h-5">
                  <img
                    className="tw-w-full"
                    src={d.profilePic}
                    alt="profilePic"
                  />
                </div>
                <p className="tw-font-medium tw-text-base">{d.name}</p>
                <p className="tw-text-xs tw-text-blue-500 tw-underline tw-cursor-pointer">
                  view details
                </p>
              </div>
              <div className="tw-flex tw-items-center tw-gap-3 tw-mb-5">
                <Rate disabled defaultValue={d.ratting} />
                <div className="tw-flex tw-gap-3">
                  {d.tags.map((t) => (
                    <p className="tw-bg-gray-background tw-text-xs tw-rounded-md tw-font-medium tw-py-2 tw-px-3">
                      {t}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="tw-text-base tw-font-medium tw-mb-2">
                  {d.title}
                </h3>
                <p className="tw-text-secondary-color tw-font-lato">
                  {d.description}
                </p>
              </div>
              {Boolean(i !== activeReview.length - 1) && <Divider />}
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
};

export default CompletedTabComponent;
