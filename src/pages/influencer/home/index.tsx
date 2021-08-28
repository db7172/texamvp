import { Col, Row } from "antd";
import Container from "../../../components/common/container/Container";
import ChooseUsBox from "../../../components/influencer/chooseusCard/ChooseUsBox";
import Information from "../../../components/influencer/information/Information";
import howItWorks from "../../../assets/png/influencer/how_it_works.png";
import { CHOOSE_US } from "./mockData";
import InfluencerTestimonials from "../../../components/influencer/testimonials/InfluencerTestimonials";
import HowToJoin from "../../../components/influencer/howToJoin/HowToJoin";
import FaqSection from "../../../components/view-more-details/FaqSection";
import faq_img from "../../../assets/png/influencer/FAQ.png";
import JoinTeam from "../../../components/influencer/jointeam/JoinTeam";
import InfluencerLogin from "../../../components/influencer/influencerLogin/InfluencerLogin";

const Influencer = () => {
  return (
    <Container>
      <Row gutter={[20, 100]}>
        <Col span={24}>
          <Row gutter={20} className="tw-mt-10">
            <Col span={12} className="tw-flex tw-flex-col tw-justify-center">
              <div>
                <p className="tw-text-2xl tw-font-normal">All About Online</p>
                <h3 className="tw-title-main">Travel Influencer</h3>
                <p className="tw-text-secondary-color tw-text-sm tw-leading-6">
                  Pharetra viverra nulla nunc, nisl est sodales adipiscing
                  massa. <br /> Molestie praesent et sed venenatis. Vitae
                  euismod dolor, maecenas <br /> laoreet facilisi.
                </p>
              </div>
            </Col>
            <Col span={12}>
              <InfluencerLogin />
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Information />
        </Col>
        <Col span={24}>
          <Row gutter={[40, 40]}>
            <Col span={24}>
              <h4 className="tw-text-3xl tw-text-center tw-font-medium">
                Why Choose Us ?
              </h4>
            </Col>

            {CHOOSE_US.map(({ title, description, img }, i) => (
              <Col span={12} key={i}>
                <ChooseUsBox
                  title={title}
                  description={description}
                  img={img}
                />
              </Col>
            ))}
          </Row>
        </Col>
        <Col span={24}>
          <h4 className="tw-text-3xl tw-tracking-1 tw-text-center tw-font-medium tw-mb-10">
            How it works ?
          </h4>
          <div className="tw-mb-10">
            <img src={howItWorks} alt="how it works?" />
          </div>

          <p className="tw-text-center tw-text-base">
            How to sell your Trip Activity ?{" "}
            <span className="tw-text-blue-500 tw-underline tw-cursor-pointer">
              Learn more
            </span>
          </p>
        </Col>
        <Col span={24}>
          <InfluencerTestimonials />
        </Col>
        <Col span={24}>
          <HowToJoin />
        </Col>
        <Col span={24}>
          <FaqSection imgPosition="left" imgUrl={faq_img} />
        </Col>
        <Col span={24}>
          <JoinTeam />
        </Col>
      </Row>
    </Container>
  );
};

export default Influencer;
