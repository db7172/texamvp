import {
  CheckCircleOutlined,
  LeftOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { Carousel, Col, Row } from "antd";
import { uniqueId } from "lodash";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { defaultSettings } from "../../utils/utils";
import { COMPLETED } from "../../components/influencer/dashboard-tab/data";
import Container from "../../components/common/container/Container";
import InfluencerProfileCard from "../../components/influencer/profile/InfluencerProfileCard";
import TourCard from "../../components/card/tour-card/TourCard";
import UserReview from "../../components/common/UserReview/UserReview";
import { mockActivities, mockProfileUser } from "./mockProfile";

const reviewData = [
  {
    title: "Reviews & Rating",
    desciption: "279 People",
    icon: StarOutlined,
  },
  {
    title: "Trip Completed",
    desciption: "79 Complated Trip",
    icon: CheckCircleOutlined,
  },
];

const settings = {
  ...defaultSettings,
  slidesToShow: 2,
};

const comments = COMPLETED.ACTIVITY[0].review.splice(0, 3);

const InfluencerPublicProfile = () => {
  const history = useHistory();

  return (
    <Container>
      <div className="tw-inline-block">
        <div
          className="tw-flex tw-items-center tw-text-secondary-color hover:tw-text-secondary-color tw-my-7 tw-cursor-pointer"
          onClick={() => history.goBack()}
        >
          <LeftOutlined className="tw-mr-1" />{" "}
          <span className="tw-underline tw-font-medium">GO BACK</span>
        </div>
      </div>

      <Row gutter={40}>
        <Col span={7}>
          <InfluencerProfileCard {...mockProfileUser} />
          <Row gutter={[0, 20]} className="card-container tw-mt-10">
            {reviewData.map(({ title, desciption, icon: Icon }) => (
              <Col
                span={24}
                key={uniqueId()}
                className="tw-flex tw-items-center tw-gap-5"
              >
                <div className="tw-bg-gray-background tw-flex-center tw-w-14 tw-h-14 tw-rounded-full">
                  <Icon className="tw-text-2xl tw-text-secondary-color" />
                </div>
                <div>
                  <p className="tw-text-base tw-font-medium">{title}</p>
                  <p className="tw-text-secondary-color">{desciption}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
        <Col span={17}>
          <div className="card-container tw-mb-10">
            <p className="tw-font-medium tw-text-base tw-mb-5">About</p>
            <p className="tw-text-secondary-color">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
            </p>
          </div>
          <div>
            <div className="tw-flex tw-justify-between">
              <p className="tw-text-lg tw-font-medium">
                Up Coming Trip of Darshan Bhatt
              </p>
              <Link to="#">
                <span className="tw-underline tw-text-blue-500">View More</span>
              </Link>
            </div>
            <div className="tw-p-5">
              <Carousel autoplay {...settings}>
                {mockActivities.map((d, i) => (
                  <TourCard key={i} data={d.data} id={d.id} />
                ))}
              </Carousel>
            </div>
          </div>
          <div>
            <div className="tw-flex tw-justify-between tw-mt-2 tw-mb-5">
              <p className="tw-text-lg tw-font-medium">Reviews</p>
              <Link to="#">
                <span className="tw-underline tw-text-blue-500">View More</span>
              </Link>
            </div>
            <Row gutter={[0, 20]}>
              {comments.map((d) => (
                <Col span={24} className="card-container" key={uniqueId()}>
                  <UserReview d={d} />
                </Col>
              ))}
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default InfluencerPublicProfile;
