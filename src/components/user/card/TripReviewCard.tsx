import { Col, Row } from "antd";
import { ReviewData } from "Models";
import { indCurrency } from "../../../utils/utils";
import UserReview from "../../common/UserReview/UserReview";

type TripReviewProps = {
  id: number;
  title: string;
  icon: string;
  description: string;
  bookingId: string;
  bookingDate: string;
  type: string;
  paidAmt: number;
  comments: ReviewData;
};

const TripReviewCard = ({
  id,
  title,
  icon,
  description,
  bookingId,
  bookingDate,
  paidAmt,
  type,
  comments,
}: TripReviewProps) => {
  return (
    <div className="tw-mb-10 tw-shadow-card tw-rounded-lg tw-p-5">
      <div className="tw-relative">
        <div className="activity-label">{type}</div>
        <Row gutter={[20, 25]} className="tw-items-center tw-mt-5">
          <Col span={8}>
            <div className="tw-flex tw-gap-2 tw-items-center">
              <div className="tw-w-1/4">
                <div className="tw-h-16 tw-w-16 tw-rounded-full tw-flex-center tw-bg-gray-background">
                  <img src={icon} alt="icon" />
                </div>
              </div>
              <div className="tw-w-3/4">
                <p className="tw-text-ellipsis tw-text-base">{title}</p>
                <p className="tw-text-secondary-color tw-text-xs">
                  {description}
                </p>
              </div>
            </div>
          </Col>
          <Col span={5}>
            <p>{bookingId}</p>
            <p className="tw-text-secondary-color tw-text-xs">Booking id</p>
          </Col>
          <Col span={4}>
            <p>{bookingDate}</p>
            <p className="tw-text-secondary-color tw-text-xs">Booking Date</p>
          </Col>
          <Col span={4}>
            <p className="tw-text-blue-500">{indCurrency(paidAmt)}</p>
            <p className="tw-text-secondary-color tw-text-xs">Paid Amount</p>
          </Col>
          <Col span={3}>
            <p className="tw-text-secondary-color tw-text-xs">2 days ago</p>
          </Col>
          <Col span={24}>
            <UserReview d={comments} showUserName={false} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default TripReviewCard;
