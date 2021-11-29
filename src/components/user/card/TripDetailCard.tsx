import { Button, Col, Row } from "antd";
import { indCurrency } from "../../../utils/utils";

type TripDetails = {
  id: number;
  title: string;
  icon: string;
  description: string;
  bookingId: string;
  bookingDate: string;
  type: string;
  paidAmt: number;
  handleButtonClick: (id: number) => void;
};

const TripDetailCard = ({
  id,
  title,
  icon,
  description,
  bookingId,
  bookingDate,
  paidAmt,
  type,
  handleButtonClick,
}: TripDetails) => {
  return (
    <div className="tw-relative tw-mb-10">
      <div className="activity-label">{type}</div>
      <Row gutter={20} className="tw-items-center tw-mt-5">
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
        <Col span={3}>
          <p>{bookingDate}</p>
          <p className="tw-text-secondary-color tw-text-xs">Booking Date</p>
        </Col>
        <Col span={3}>
          <p className="tw-text-blue-500">{indCurrency(paidAmt)}</p>
          <p className="tw-text-secondary-color tw-text-xs">Paid Amount</p>
        </Col>
        <Col span={5}>
          <Button
            type="default"
            className="tw-w-full tw-texa-button"
            onClick={() => handleButtonClick(id)}
          >
            View Booking
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default TripDetailCard;
