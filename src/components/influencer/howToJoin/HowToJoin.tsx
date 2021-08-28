import { Button, Col, Row } from "antd";
import join from "../../../assets/png/influencer/join_illustaration.png";
const HowToJoin = () => {
  return (
    <div>
      <Row gutter={50}>
        <Col span={12} className="tw-p-10">
          <h3 className="tw-text-3xl tw-font-medium ">How To Join</h3>
          <p className="tw-py-3 tw-text-secondary-color tw-text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            .Lorem Ipsum has been the industry's standard dummy text for oyu the
            1500s, when an unknown printer took a galley of and your cat
            scrambled it to make a type specimen book.
          </p>
          <h4 className="tw-text-xl tw-font-medium tw-pb-2">
            Steps to Join the Team
          </h4>
          <ol className="tw-list-inside tw-list-decimal tw-text-secondary-color tw-text-base tw-leading-relaxed">
            <li>Create on account Texatrove</li>
            <li>Join recommended Trip team</li>
            <li>Start recommending Trips</li>
            <li>Start Earning your Reward</li>
          </ol>

          <Button type="default" className="tw-texa-button tw-mr-5">
            Join Now
          </Button>
          <Button type="default" className="btn-outline">
            Create Account
          </Button>
        </Col>
        <Col span={12}>
          <div className="tw-w-100 tw-mt-8">
            <img src={join} alt="" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HowToJoin;
