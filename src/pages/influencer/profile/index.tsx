import {
  CheckCircleOutlined,
  LeftOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { Carousel, Col, Row } from "antd";
import { uniqueId } from "lodash";
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";
import TourCard from "../../../components/card/tour-card/TourCard";
import UserReview from "../../../components/common/UserReview/UserReview";
import Container from "../../../components/common/container/Container";
import { COMPLETED } from "../../../components/influencer/dashboard-tab/data";
import InfluencerProfileCard from "../../../components/influencer/profile/InfluencerProfileCard";
import { ACTIVITY } from "../../../constant/dummyData";
import { defaultSettings } from "../../../utils/utils";
import { useEffect, useState } from "react";
import firebase from "../../../firebase";

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

type Props = {
  history: RouteComponentProps["history"];
};

const comments = COMPLETED.ACTIVITY[0].review.splice(0, 3);

const InfluencerProfile = ({ history }: Props) => {
  const [userData, setUserData] = useState([]) as any;

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        firebase
          .firestore()
          .collection("venders")
          .doc(user.uid)
          .get()
          .then((doc) => {
            setUserData(doc.data());
          });
        firebase
          .firestore()
          .collection("hr_sg_avy")
          .where("data.userId", "==", user.uid)
          .get()
          .then((querySnap) => {
            querySnap.docs.map((doc) => console.log(doc.data()));
          })
          .catch((error) => console.log(error));
      }
    });
  }, []);

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
          <InfluencerProfileCard {...userData} />
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
            <p className="tw-text-secondary-color">{userData.about}</p>
          </div>
          <div>
            <div className="tw-flex tw-justify-between">
              <p className="tw-text-lg tw-font-medium">
                Up Coming Trip of {userData.name}
              </p>
              <Link to="#">
                <span className="tw-underline tw-text-blue-500">View More</span>
              </Link>
            </div>
            <div className="tw-p-5">
              <Carousel autoplay {...settings}>
                {/* {ACTIVITY.map((d, i) => (
                  <TourCard {...d} key={i} />
                ))} */}
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

export default InfluencerProfile;
