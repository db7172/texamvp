import { Button, Col, Row } from "antd";
import recommend from "../../../assets/png/influencer/Girl_recommend.png";

const Information = () => {
  return (
    <div>
      <Row gutter={20}>
        <Col span={12} className="tw-p-10">
          <h3 className="tw-text-3xl tw-font-medium tw-tracking-1">
            Who is it for ?
          </h3>
          <p className="tw-py-3 tw-text-secondary-color">
            Lorem Ipsum is simply dummy text of the printing and typesetting .
            Lorem Ipsum has been the industry's standard dummy text the 1500s,
            when an unknown printer took a galley of scrambled it to make a type
            specimen book.
          </p>
          <p className="tw-py-3 tw-text-secondary-color">
            Lorem Ipsum is simply dummy text of the printing and typesetting .
            Lorem Ipsum has been the industry's standard dummy text the 1500s,
            when an unknown printer took a galley of scrambled it to make a type
            specimen book.
          </p>
          <a href="#influencerHome">
            <Button type="default" className="tw-texa-button">
              Join Now
            </Button>
          </a>
        </Col>
        <Col span={12} className="tw-p-6">
          <div className="tw-w-96 tw-ml-auto">
            <img src={recommend} alt="" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Information;
