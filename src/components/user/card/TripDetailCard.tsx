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
  tripId: string;
  collection_name: string;
  paidAmt: number;
  buttonText?: string;
  handleButtonClick: (
    id: number,
    tripId: string,
    collection_name: string
  ) => void;
};

const TripDetailCard = ({
  id,
  title,
  icon,
  description,
  bookingId,
  bookingDate,
  paidAmt,
  buttonText,
  tripId,
  collection_name,
  type,
  handleButtonClick,
}: TripDetails) => {
  return (
    <div className="tw-mb-10 tw-shadow-card tw-rounded-lg tw-p-5">
      <div className="tw-relative">
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
              onClick={() => handleButtonClick(id, tripId, collection_name)}
            >
              {buttonText ? buttonText : "View Booking"}
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default TripDetailCard;
