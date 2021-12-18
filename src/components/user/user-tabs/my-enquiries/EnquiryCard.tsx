import { InfoCircleOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Row } from "antd";
import classNames from "classnames";
import { indCurrency } from "../../../../utils/utils";

type EnquiryProp = {
  id: number;
  title: string;
  icon: string;
  description: string;
  bookingId: string;
  bookingDate: string;
  type: string;
  status: string;
  paidAmt: number;
  handleButtonClick: (id: number) => void;
};

const EnquiryCard = ({
  id,
  title,
  icon,
  description,
  bookingId,
  bookingDate,
  paidAmt,
  type,
  status,
  handleButtonClick,
}: EnquiryProp) => {
  const getCurrentStatus = () => {
    return (
      <div>
        <p className="tw-text-center">
          <span
            className={classNames(
              "tw-px-3 tw-py-2 tw-rounded-md",
              {
                "tw-bg-gray-background tw-text-secondary-color":
                  status !== "Completed" && status !== "Error",
              },
              {
                "tw-bg-lite-green tw-text-green-background":
                  status === "Completed",
              },
              {
                "tw-bg-lite-red tw-text-dark-red": status === "Error",
              }
            )}
          >
            {status}
          </span>
        </p>
        <p className="tw-text-xs tw-text-center tw-mt-2">
          <span className="tw-mr-1 tw-text-secondary-color">Status</span>
          {status !== "Error" && (
            <span
              className="tw-text-blue-500 tw-underline tw-cursor-pointer"
              onClick={() => handleButtonClick(id)}
            >
              View Info
            </span>
          )}
        </p>
      </div>
    );
  };

  return (
    <div className="tw-mb-10 tw-shadow-card tw-rounded-lg tw-p-5">
      <div className="tw-relative">
        <div className="activity-label">{type}</div>
        <Row gutter={20} className="tw-items-center tw-mt-5">
          <Col span={7}>
            <div className="tw-flex tw-gap-2 tw-items-center">
              <div className="tw-w-2/6">
                <div className="tw-h-16 tw-w-16 tw-rounded-full tw-flex-center tw-bg-gray-background">
                  <img src={icon} alt="icon" />
                </div>
              </div>
              <div className="tw-w-4/6">
                <p className="tw-text-ellipsis tw-text-base">{title}</p>
                <p className="tw-text-secondary-color tw-text-xs">
                  {description}
                </p>
              </div>
            </div>
          </Col>
          <Col span={4}>
            <p>{bookingId}</p>
            <p className="tw-text-secondary-color tw-text-xs">Booking id</p>
          </Col>
          <Col span={3}>
            <p>{bookingDate}</p>
            <p className="tw-text-secondary-color tw-text-xs">Booking Date</p>
          </Col>
          <Col span={3}>
            <p>{bookingDate}</p>
            <p className="tw-text-secondary-color tw-text-xs">Booking Date</p>
          </Col>
          <Col span={4}>{getCurrentStatus()}</Col>
          <Col span={3}>
            <p className="tw-text-blue-500">{indCurrency(paidAmt)}</p>
            <p className="tw-text-secondary-color tw-text-xs">Paid Amount</p>
          </Col>
          <Col span={24}>
            {status === "Completed" && (
              <div>
                <Divider className="tw-my-5" />
                <div className="tw-flex tw-justify-between">
                  <p className="tw-text-sm tw-flex tw-items-center tw-text-secondary-color">
                    <InfoCircleOutlined />
                    <span className="tw-ml-2 tw-pt-1">
                      Euismod vitae velit at tincidunt. Dignissim ac et
                      tincidunt faucibus lectus.
                    </span>
                  </p>
                  <Button type="default" className="tw-texa-button tw-m-0">
                    View Booking
                  </Button>
                </div>
              </div>
            )}
            {status === "Error" && (
              <div>
                <Divider className="tw-my-5" />
                <div className="tw-flex tw-justify-between">
                  <p className="tw-text-sm tw-flex tw-items-center tw-text-dark-red">
                    <InfoCircleOutlined />
                    <span className="tw-ml-2 tw-pt-1">
                      Euismod vitae velit at tincidunt. Dignissim ac et
                      tincidunt faucibus lectus.
                    </span>
                  </p>
                  <p className="tw-text-sm tw-text-blue-500 tw-underline tw-cursor-pointer">
                    Contact our custumer care
                  </p>
                </div>
              </div>
            )}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default EnquiryCard;
