import { Button, Col, Row } from "antd";
import Container from "../../components/common/container/Container";
import InfluencerTestimonials from "../../components/influencer/testimonials/InfluencerTestimonials";
import FaqSection from "../../components/view-more-details/FaqSection";
import faq_img from "../../assets/png/influencer/FAQ.png";
import recommend from "../../assets/png/influencer/Girl_recommend.png";
import join from "../../assets/png/influencer/join_illustaration.png";
import jointeam from "../../assets/png/influencer/jointeam.png";

const AboutUs = () => {
  return (
    <Container>
      <Row gutter={[20, 100]}>
        <Col span={24}>
          <Row gutter={20} className="tw-mt-10">
            <Col span={12} className="tw-flex tw-flex-col tw-justify-center">
              <div>
                <p className="tw-text-2xl tw-font-normal">All About</p>
                <h3 className="tw-title-main">Retreat</h3>
                <p className="tw-text-secondary-color tw-text-sm tw-leading-6">
                  Pharetra viverra nulla nunc, nisl est sodales adipiscing
                  massa. <br /> Molestie praesent et sed venenatis. Vitae
                  euismod dolor, maecenas <br /> laoreet facilisi.
                </p>
              </div>
            </Col>
            <Col span={12}>
              <img className="tw-w-full tw-h-auto" src={faq_img} alt="FAQ" />
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row gutter={20}>
            <Col span={12} className="tw-p-10">
              <h3 className="tw-text-3xl tw-font-medium tw-tracking-1">
                Who is it for ?
              </h3>
              <p className="tw-py-3 tw-text-secondary-color">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                . Lorem Ipsum has been the industry's standard dummy text the
                1500s, when an unknown printer took a galley of scrambled it to
                make a type specimen book.
              </p>
              <p className="tw-py-3 tw-text-secondary-color">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                . Lorem Ipsum has been the industry's standard dummy text the
                1500s, when an unknown printer took a galley of scrambled it to
                make a type specimen book.
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
        </Col>

        <Col span={24}>
          <InfluencerTestimonials />
        </Col>

        <Col span={24}>
          <Row gutter={50}>
            <Col span={12} className="tw-p-10">
              <h3 className="tw-text-3xl tw-font-medium ">How To Join</h3>
              <p className="tw-py-3 tw-text-secondary-color tw-text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                .Lorem Ipsum has been the industry's standard dummy text for oyu
                the 1500s, when an unknown printer took a galley of and your cat
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
              <a href="#influencerHome">
                <Button type="default" className="tw-texa-button tw-mr-5">
                  Join Now
                </Button>
              </a>
              <a href="#influencerHome">
                <Button type="default" className="btn-outline">
                  Create Account
                </Button>
              </a>
            </Col>
            <Col span={12}>
              <div className="tw-w-100 tw-mt-8">
                <img src={join} alt="" />
              </div>
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <FaqSection imgPosition="left" imgUrl={faq_img} />
        </Col>

        <Col span={24}>
          <Row gutter={20}>
            <Col span={12} className="tw-p-6">
              <div className="tw-w-80 tw-ml-0">
                <img src={jointeam} alt="" />
              </div>
            </Col>
            <Col span={12} className="tw-p-10">
              <h3 className="tw-text-3xl tw-font-medium ">
                Join our Team Today
              </h3>
              <p className="tw-py-3 tw-text-secondary-color">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                . Lorem Ipsum has been the industry's standard dummy text for
                oyu the 1500s, when an unknown printer took a galley of and your
                cat scrambled it to make a type specimen book. <br />
                Lorem Ipsum is simply dummy text of the printing and typesetting
                . Lorem Ipsum has been the industry's standard dummy text for
                oyu the 1500s, when an unknown printer.
              </p>
              <a href="#influencerHome">
                <Button type="default" className="tw-texa-button">
                  Join Now
                </Button>
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
