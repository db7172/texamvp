import { Avatar, Col, Row } from "antd";

type NotificationProps = {
  profile: string;
  title: string;
  description: string;
  action: string;
  time: string;
  tripPic: string;
};

const NotificationOption = ({
  profile,
  tripPic,
  time,
  title,
  description,
  action,
}: NotificationProps) => {
  return (
    <Row gutter={20} className="tw-items-center">
      <Col span={4}>
        <div className="tw-flex-center">
          <Avatar src={profile} />
        </div>
      </Col>
      <Col span={15}>
        <div className="tw-flex tw-justify-between tw-items-center tw-gap-2">
          <p className="tw-font-medium">{title}</p>
          <p className="tw-text-xs tw-text-secondary-color">{time}</p>
        </div>
        <div>
          <p className="tw-text-xs tw-text-secondary-color">
            <span className="tw-font-medium">{action}</span>{" "}
            <span>{description}</span>
          </p>
        </div>
      </Col>
      <Col span={5}>
        <div className="tw-flex-center">
          <img src={tripPic} alt="trip" />
        </div>
      </Col>
    </Row>
  );
};

export default NotificationOption;
