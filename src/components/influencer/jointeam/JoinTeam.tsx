import { Button, Col, Row } from "antd";
import jointeam from "../../../assets/png/influencer/jointeam.png";

const JoinTeam = () => {
  return (
    <div>
      <Row gutter={20}>
        <Col span={12} className="tw-p-6">
          <div className="tw-w-80 tw-ml-0">
            <img src={jointeam} alt="" />
          </div>
        </Col>
        <Col span={12} className="tw-p-10">
          <h3 className="tw-text-3xl tw-font-medium ">Join our Team Today</h3>
          <p className="tw-py-3 tw-text-secondary-color">
            Lorem Ipsum is simply dummy text of the printing and typesetting .
            Lorem Ipsum has been the industry's standard dummy text for oyu the
            1500s, when an unknown printer took a galley of and your cat
            scrambled it to make a type specimen book. <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting .
            Lorem Ipsum has been the industry's standard dummy text for oyu the
            1500s, when an unknown printer.
          </p>

          <Button type="default" className="tw-texa-button">
            Join Now
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default JoinTeam;
