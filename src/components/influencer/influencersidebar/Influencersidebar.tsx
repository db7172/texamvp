import { Button, Col, Row } from "antd";
import LaunchIcon from "../../../assets/svg/influencer/Rocket.svg";
import CheckSquareOffset from "../../../assets/svg/influencer/CheckSquareOffset.svg";
import CurrencyDollar from "../../../assets/svg/influencer/CurrencyDollar.svg";
import FileText from "../../../assets/svg/influencer/FileText.svg";
import Sticker from "../../../assets/svg/influencer/Sticker.svg";

const Influencersidebar = () => {
  return (
    <div>
      <Row className="tw-shadow-md tw-py-7 tw-px-5 tw-bg-white tw-rounded-xl">
        <Col span={24}>
          <Button
            type="default"
            className="tw-bg-gray-background hover:tw-bg-gray-background  tw-w-full tw-flex tw-py-3 tw-px-4 tw-mt-0"
          >
            <div className="tw-w-1/4 tw-min-w-0">
              <img src={LaunchIcon} alt="" className="tw-w-6 tw-m-auto" />
            </div>
            <div className="tw-w-3/4 tw-text-left tw-pl-2 tw-leading-7">
              Launch
            </div>
          </Button>
          <Button
            type="default"
            className=" tw-w-full tw-flex tw-py-3 tw-px-4 tw- tw-mt-5 tw-border-0 tw-shadow-none "
          >
            <div className="tw-w-1/4 tw-min-w-0">
              <img src={Sticker} alt="" className="tw-w-6 tw-m-auto" />
            </div>
            <div className="tw-w-3/4 tw-text-left  tw-pl-2 tw-text-secondary-color tw-leading-7">
              Details
            </div>
          </Button>
          <Button
            type="default"
            className=" tw-w-full tw-flex tw-py-3 tw-px-4 tw- tw-mt-5 tw-border-0 tw-shadow-none"
          >
            <div className="tw-w-1/4 tw-min-w-0">
              <img
                src={CheckSquareOffset}
                alt=""
                className="tw-w-6 tw-m-auto"
              />
            </div>
            <div className="tw-w-3/4 tw-text-left tw-pl-2 tw-text-secondary-color tw-leading-7">
              Completed
            </div>
          </Button>
          <Button
            type="default"
            className=" tw-w-full tw-flex tw-py-3 tw-px-4 tw- tw-mt-5 tw-border-0 tw-shadow-none "
          >
            <div className="tw-w-1/4 tw-min-w-0">
              <img src={CurrencyDollar} alt="" className="tw-w-6 tw-m-auto" />
            </div>
            <div className="tw-w-3/4 tw-text-left tw-pl-2 tw-text-secondary-color tw-leading-7">
              Earning
            </div>
          </Button>
          <Button
            type="default"
            className=" tw-w-full tw-flex tw-py-3 tw-px-4 tw- tw-mt-5 tw-border-0 tw-shadow-none "
          >
            <div className="tw-w-1/4 tw-min-w-0">
              <img src={FileText} alt="" className="tw-w-6 tw-m-auto" />
            </div>
            <div className="tw-w-3/4 tw-text-left tw-pl-2 tw-text-secondary-color tw-leading-7">
              Statements
            </div>
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Influencersidebar;
