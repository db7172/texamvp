import { Col, Row } from "antd";
import { startCase } from "lodash";
import { ActivityObjectTypes, TitleBreadCrumb } from "Models";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import IconCard from "../../components/card/icon-card/IconCard";
import ActivityCarousel from "../../components/common/carousel/ActivityCarousel";
import MoreDetailsPageCarousal from "../../components/common/carousel/MoreDetailsPageCarousal";
import Container from "../../components/common/container/Container";
import PageHeader from "../../components/common/page-header/PageHeader";
import TitleBreadcrumb from "../../components/common/title-breadcrumb/TitleBreadcrumb";
import Accomodations from "../../components/view-more-details/Accomodations";
import BookingTimeLineX from "../../components/view-more-details/BookingTimeLineX";
import FaqSection from "../../components/view-more-details/FaqSection";
import MoreDetailsPageHeader from "../../components/view-more-details/MoreDetailsPageHeader";
import ViewMoreActivityBookingCard from "../../components/view-more-details/ViewMoreActivityBookingCard";
import ViewMoreActivityCard from "../../components/view-more-details/ViewMoreActivityCard";
import ViewMoreOtherInformation from "../../components/view-more-details/ViewMoreOtherInformation";
import ViewMoreSummary from "../../components/view-more-details/ViewMoreSummary";
import ViewMoreTravellingInfo from "../../components/view-more-details/ViewMoreTravellingInfo";
import {
  getActivityPagePath,
  LEFT_SPACING_LARGE_VALUE,
  RIGHT_SPACING_SMAL_VALUE,
  RIGHT_SPACING_VALUE,
} from "../../constant/comman.const";
import { ACTIVITY } from "../../constant/dummyData";
import { CAROUSAL_ACTIVITY } from "../../constant/imageConst";
import {
  EXCLUSION_DETAILS,
  INCLUSION_DETAILS,
  TERMS_AND_CONDITIONS,
  TRIP_ESSENTIALS,
  VIEW_MORE_ACTIVITY_DETAILS,
} from "./data.mock";

type ParamTypes = {
  activityName: string;
  activityType: string;
};

const ViewMoreDetailsForActivity = () => {
  const [slashedTableName, setSlashedTableName] = useState<
    Array<TitleBreadCrumb>
  >([]);
  const [activityDetails, setActivityDetails] = useState<ActivityObjectTypes>();
  const { activityName, activityType } = useParams<ParamTypes>();
  const ACTIVITY_TYPE = startCase(activityType);
  const ACTIVITY_NAME = startCase(activityName);
  const { state }: { state: ActivityObjectTypes } = useLocation();

  useEffect(() => {
    setActivityDetails(state);
    setSlashedTableName([
      {
        name: "Home",
        url: "/",
      },
      {
        name: "Activites",
        url: "/activites",
      },
      {
        name: ACTIVITY_TYPE,
        url: `/activity/${ACTIVITY_TYPE}`,
      },
      {
        name: ACTIVITY_NAME,
        url: "",
      },
    ]);
  }, [ACTIVITY_NAME, ACTIVITY_TYPE, state]);

  return (
    <Container className="tw-pb-11">
      {activityDetails ? (
        <>
          <div className="tw-mt-10">
            <TitleBreadcrumb titleLinks={slashedTableName} />
          </div>
          <Row gutter={[LEFT_SPACING_LARGE_VALUE, RIGHT_SPACING_VALUE]}>
            <Col span={7} order={2} className="tw-pt-5">
              <Row gutter={[0, 40]}>
                <Col
                  span={24}
                  className="tw-p-5 tw-rounded-md tw-shadow-card tw-bg-white"
                >
                  <ViewMoreActivityCard />
                  <div className="tw-mt-5">
                    <ViewMoreActivityBookingCard />
                  </div>
                </Col>
                {/* <Col
                  span={24}
                  className="tw-p-5 tw-rounded-md tw-shadow-card tw-bg-white"
                >
                  <ViewMoreTestimonial />
                </Col> */}
              </Row>
            </Col>
            <Col span={17} order={1}>
              <Row gutter={[0, RIGHT_SPACING_SMAL_VALUE]}>
                <Col span={24}>
                  <div className="tw-mt-5">
                    <MoreDetailsPageCarousal images={CAROUSAL_ACTIVITY} />
                  </div>
                  <div className="tw-mt-5">
                    <MoreDetailsPageHeader
                      title={activityDetails.activityName}
                      duration={activityDetails.duration}
                      ratting={activityDetails.rating}
                      review={activityDetails.review}
                    />
                  </div>
                </Col>
                <Col
                  span={24}
                  className="tw-p-6 tw-rounded-md tw-shadow-card tw-bg-white"
                >
                  <PageHeader
                    title={`About ${activityDetails.activityName}`}
                    className="tw-text-lg"
                  />
                </Col>
                <Col span={24}>
                  <Row gutter={20} justify="space-between">
                    {VIEW_MORE_ACTIVITY_DETAILS.map((d, i) => (
                      <Col span={6} className="">
                        <IconCard
                          name={d.title}
                          description={d.description}
                          path={d.image}
                          imgClassName="tw-p-5 tw-rounded-full tw-bg-gray-background"
                        />
                      </Col>
                    ))}
                  </Row>
                </Col>
                <Col
                  span={24}
                  className="tw-p-6 tw-rounded-md tw-shadow-card tw-bg-white"
                >
                  <Row gutter={[0, 20]}>
                    <Col span={24}>
                      <BookingTimeLineX />
                    </Col>
                    <Col span={24}>
                      <ViewMoreSummary />
                    </Col>
                    <Col span={24}>
                      <Accomodations />
                    </Col>
                    <Col span={24}>
                      <ViewMoreTravellingInfo />
                    </Col>
                    <Col span={24}>
                      <ViewMoreOtherInformation
                        header={INCLUSION_DETAILS.header}
                        image={INCLUSION_DETAILS.image}
                        data={INCLUSION_DETAILS.content}
                      />
                    </Col>
                    <Col span={24}>
                      <ViewMoreOtherInformation
                        header={EXCLUSION_DETAILS.header}
                        image={EXCLUSION_DETAILS.image}
                        data={EXCLUSION_DETAILS.content}
                      />
                    </Col>
                    <Col span={24}>
                      <ViewMoreOtherInformation
                        header={TRIP_ESSENTIALS.header}
                        image={TRIP_ESSENTIALS.image}
                        data={TRIP_ESSENTIALS.content}
                      />
                    </Col>
                    <Col span={24}>
                      <ViewMoreOtherInformation
                        header={TERMS_AND_CONDITIONS.header}
                        image={TERMS_AND_CONDITIONS.image}
                        data={TERMS_AND_CONDITIONS.content}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col span={24} order={3}>
              <ActivityCarousel
                setting={{ slidesToShow: 3 }}
                title="Similar Activities"
                data={ACTIVITY}
                path={getActivityPagePath("Similar Activities")}
                description="Lorem ipsum is the dummy text for placing any thing"
              />
            </Col>
            <Col span={24} order={4}>
              <FaqSection />
            </Col>
          </Row>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </Container>
  );
};

export default ViewMoreDetailsForActivity;
