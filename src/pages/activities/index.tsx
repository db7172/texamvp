import { RightOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import { TitleBreadCrumb } from "Models";
import { useEffect, useState } from "react";
import IconCard from "../../components/card/icon-card/IconCard";
import ActivityCarousel from "../../components/common/carousel/ActivityCarousel";
import BlogCarousel from "../../components/common/carousel/BlogCarousel";
import DestinationCarousel from "../../components/common/carousel/DestinationCarousel";
import Container from "../../components/common/container/Container";
import Jumbotron from "../../components/common/jumbotron/Jumbotron";
import PageHeader from "../../components/common/page-header/PageHeader";
import TitleBreadcrumb from "../../components/common/title-breadcrumb/TitleBreadcrumb";
import Title from "../../components/common/title/Title";
import { getActivityIcon } from "../../constant/activity-icon";
import {
  RIGHT_SPACING_VALUE,
  LEFT_SPACING_VALUE,
  getActivityPagePath,
} from "../../constant/comman.const";
import { ACTIVITY } from "../../constant/dummyData";
import { DESTINATION_IMAGE } from "../../constant/imageConst";

type Icon = {
  icon: string;
  name: string;
};

const Activites = () => {
  const [slashedTableName, setSlashedTableName] = useState<
    Array<TitleBreadCrumb>
  >([]);
  const [activityIcon, setActivityIcon] = useState<Array<Icon>>([]);
  const [cardCount, setCardCount] = useState(23);

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
    setActivityIcon(getActivityIcon(cardCount));
  }, [cardCount]);

  const handleCradClick = () => {
    setCardCount(cardCount + 12);
  };

  return (
    <>
      <div className="tw-mt-0">
        <Jumbotron
          className=""
          image={DESTINATION_IMAGE}
          title="Explore Activities"
          description="Go on a trekking trip to the man-made heaven"
          ratting={5}
          review={1970}
          path={"#activites-page"}
          startingPrice={16948}
        />
      </div>
      <Container className="tw-pb-12">
        <Row gutter={[LEFT_SPACING_VALUE, RIGHT_SPACING_VALUE]}>
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
              {activityIcon.map(({ icon, name }: Icon, i) => (
                <Col span={4} className="effect">
                  <IconCard path={icon} name={name} number={124} key={i} />
                </Col>
              ))}
              <Col span={4}>
                <div
                  className="tw-shadow-md tw-rounded-xl md:tw-h-36 md:tw-w-36 tw-h-32 tw-w-32 tw-flex tw-justify-evenly tw-items-center tw-flex-col tw-bg-white tw-cursor-pointer"
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
            <BlogCarousel
              description="Lorem ipsum is the dummy text for placing any thing"
              title="Things to do in While Activies"
            />
          </Col>
          <Col span={24}>
            <BlogCarousel
              description="Lorem ipsum is the dummy text for placing any thing"
              title="Places to visit For Activities"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Activites;
