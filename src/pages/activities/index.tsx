import { RightOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import { lowerCase } from "lodash";
import { TitleBreadCrumb } from "Models";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IconCard from "../../components/card/icon-card/IconCard";
import ActivityCarousel from "../../components/common/carousel/ActivityCarousel";
import BlogCarousel from "../../components/common/carousel/BlogCarousel";
import DestinationCarousel from "../../components/common/carousel/DestinationCarousel";
import Container from "../../components/common/container/Container";
// import Jumbotron from "../../components/common/jumbotron/Jumbotron";
import Loader from "../../components/common/Loader/Loader";
import PageHeader from "../../components/common/page-header/PageHeader";
import TitleBreadcrumb from "../../components/common/title-breadcrumb/TitleBreadcrumb";
import Title from "../../components/common/title/Title";
import FaqSection from "../../components/view-more-details/FaqSection";
// import { getActivityIcon } from "../../constant/activity-icon";
import {
  RIGHT_SPACING_VALUE,
  getActivityPagePath,
} from "../../constant/comman.const";
import { ACTIVITY } from "../../constant/dummyData";
// import { DESTINATION_IMAGE } from "../../constant/imageConst";
import firebase from "../../firebase";

// type Icon = {
//   icon: string;
//   name: string;
// };

const Activites = () => {
  const [slashedTableName, setSlashedTableName] = useState<
    Array<TitleBreadCrumb>
  >([]);
  // const [activityIcon, setActivityIcon] = useState<Array<Icon>>([]);
  const [cardCount, setCardCount] = useState(23);
  const [activities, setActivities] = useState() as any;

  useEffect(() => {
    setSlashedTableName([
      {
        name: "Home",
        url: "/",
      },
      {
        name: "Activites",
        url: "",
      },
    ]);
  }, []);

  useEffect(() => {
    // setActivityIcon(getActivityIcon(cardCount));
    firebase
      .firestore()
      .collection("categories")
      .get()
      .then((querySnap) => {
        setActivities(
          querySnap.docs
            .map((doc) => ({ id: doc.id, data: doc.data() }))
            .filter((item) => {
              return item.data.type === "activity";
            })
        );
      });
  }, []);

  const handleCradClick = () => {
    setCardCount(cardCount + 12);
  };

  return (
    <>
      {/* <div className="tw-mt-0">
        <Jumbotron
          className=""
          image={DESTINATION_IMAGE}
          title="Explore Activities"
          description="Go on a trekking trip to the man-made heaven"
          ratting={5}
          review="1970 Reviews"
          path={"#activites-page"}
          startingPrice={16948}
          type={null}
          destinationName={null}
        />
      </div> */}
      <Container className="tw-pb-12">
      <Row className="tw-top-m" gutter={[0, RIGHT_SPACING_VALUE]}>
        {/* <Row gutter={[LEFT_SPACING_VALUE, RIGHT_SPACING_VALUE]}> */}
          <Col span={24}>
            <div id="activites-page" className="tw--mt-5">
              <TitleBreadcrumb titleLinks={slashedTableName} />
            </div>
            <div className="tw-mt-5">
              <PageHeader title={"Activites"} />
            </div>
          </Col>
          <Col span={24}>
            <Row gutter={[20, 20]}>
              {activities ? (
                activities.map((activity: any, i: number) => (
                  <Col span={4} className="effect" key={i}>
                    <Link
                      to={getActivityPagePath(lowerCase(activity.data.name))}
                    >
                      <IconCard
                        path={"path/"}
                        name={activity.data.name}
                        description={`124 Activites`}
                        key={i}
                      />
                    </Link>
                  </Col>
                ))
              ) : (
                <Loader />
              )}
              <Col span={4}>
                <div
                  className="tw-shadow-card tw-rounded-xl md:tw-h-36 md:tw-w-36 tw-h-32 tw-w-32 tw-flex tw-justify-evenly tw-items-center tw-flex-col tw-bg-white tw-cursor-pointer"
                  onClick={handleCradClick}
                >
                  <div className="tw-rounded-full tw-p-5 tw-shadow-lg">
                    <RightOutlined
                      style={{ fontSize: "25px", color: "#3b82f6" }}
                    />
                  </div>
                  <Button
                    type="link"
                    className="tw-p-0 tw-m-0 tw-text-blue-500 tw-underline hover:tw-text-blue-500 focus:tw-text-blue-500 "
                  >
                    View more
                  </Button>
                </div>
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <ActivityCarousel
              setting={{ slidesToShow: 3 }}
              title="Activity of the Month"
              data={ACTIVITY}
              path={getActivityPagePath("Activity of the Month")}
              description="Lorem ipsum is the dummy text for placing any thing"
            />
          </Col>
          <Col span={24}>
            <ActivityCarousel
              setting={{ slidesToShow: 3 }}
              title="Popular Activities"
              data={ACTIVITY}
              path={getActivityPagePath("Popular Activities")}
              description="Lorem ipsum is the dummy text for placing any thing"
            />
          </Col>
          <Col span={24}>
            <Title
              title="Activites By Destionation"
              description="Lorem ipsum is the dummy text for placing any thing"
              path="#"
            />
            <div className="tw-mt-3">
              <DestinationCarousel setting={{ slidesToShow: 4 }} />
            </div>
          </Col>
          <Col span={24}>
            <FaqSection title="activities" />
          </Col>
          <Col span={24}>
            <BlogCarousel
              title="Blogs About Activities"
              description="Lorem ipsum is the dummy text for placing any thing"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Activites;
