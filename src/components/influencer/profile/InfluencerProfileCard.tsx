import { Col, Progress, Row } from "antd";
import { uniqueId } from "lodash";

import user1 from "../../../assets/png/influencer/user/user1.png";

const mockData = {
  img: user1,
  name: "Darshan Bhatt",
  profile: "Travel Infulancer",
  ratting: 4.5,
  reviews: 77,
  otherDetails: [
    {
      key: "Age",
      value: "35 Years",
    },
    {
      key: "Gender",
      value: "Male",
    },
    {
      key: "Lives In",
      value: "Mumbai",
    },
    {
      key: "Years In Business",
      value: "Since 2001",
    },
    {
      key: "Activity Conducted",
      value: "279 Activity",
    },
    {
      key: "Certificate",
      value: "3 Certificate",
    },
  ],
};

const InfluencerProfileCard = (props: any) => {
  return (
    <div className="card-container">
      <Row gutter={[10, 20]}>
        <Col span={24}>
          <div className="tw-h-20 tw-w-20 tw-mx-auto tw-mb-5">
            <img
              src={props.profileUrl}
              className="tw-rounded-full"
              alt="user"
            />
          </div>
          <div className="tw-text-center">
            <h4 className="tw-text-xl tw-font-medium">{props.name}</h4>
            <p className="tw-text-secondary-color">Travel Influencer</p>
          </div>
        </Col>
        <Col span={24}>
          <p className="tw-mb-1 tw-text-xs tw-font-medium">Star Rating</p>
          <Row gutter={10}>
            <Col span={15}>
              <Progress
                percent={90}
                strokeColor="#FFEF62"
                size="small"
                showInfo={false}
                status="active"
              />
            </Col>
            <Col span={9}>
              <p className="tw-font-medium">{mockData.ratting} Rating</p>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <p className="tw-mb-1 tw-text-xs tw-font-medium">Superb Reviews</p>
          <Row gutter={15}>
            <Col span={14}>
              <Progress
                percent={90}
                size="small"
                showInfo={false}
                status="active"
              />
            </Col>
            <Col span={9}>
              <p className="tw-font-medium">{mockData.reviews} Reviews</p>
            </Col>
          </Row>
        </Col>
        <Col span={24} className="tw-flex tw-justify-center">
          <div className="tw-w-1/2 tw-border-b" />
        </Col>
        {/* {mockData.otherDetails.map((d) => ( */}
        <Col span={24}>
          <Row gutter={10} className="tw-items-center">
            <Col span={15}>
              <span className="tw-font-medium">Age</span>
            </Col>
            <Col span={9}>
              <p className="tw-text-secondary-color">21</p>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row gutter={10} className="tw-items-center">
            <Col span={15}>
              <span className="tw-font-medium">Gender</span>
            </Col>
            <Col span={9}>
              <p className="tw-text-secondary-color">Male</p>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row gutter={10} className="tw-items-center">
            <Col span={15}>
              <span className="tw-font-medium">Lives in</span>
            </Col>
            <Col span={9}>
              <p className="tw-text-secondary-color">{props.city}</p>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row gutter={10} className="tw-items-center">
            <Col span={15}>
              <span className="tw-font-medium">Years In Business</span>
            </Col>
            <Col span={9}>
              <p className="tw-text-secondary-color">{props.operatingSince}</p>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row gutter={10} className="tw-items-center">
            <Col span={15}>
              <span className="tw-font-medium">Activity Conducted</span>
            </Col>
            <Col span={9}>
              <p className="tw-text-secondary-color">8</p>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row gutter={10} className="tw-items-center">
            <Col span={15}>
              <span className="tw-font-medium">Certificate</span>
            </Col>
            <Col span={9}>
              <p className="tw-text-secondary-color">2 Certificates</p>
            </Col>
          </Row>
        </Col>
        {/* ))} */}
      </Row>
    </div>
  );
};

export default InfluencerProfileCard;
