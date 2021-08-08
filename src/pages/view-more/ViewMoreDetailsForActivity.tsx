import { Col, Row } from "antd";
import { startCase } from "lodash";
import { ActivityObjectTypes, TitleBreadCrumb } from "Models";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import IconCard from "../../components/card/icon-card/IconCard";
import MoreDetailsPageCarousal from "../../components/common/carousel/MoreDetailsPageCarousal";
import Container from "../../components/common/container/Container";
import PageHeader from "../../components/common/page-header/PageHeader";
import TitleBreadcrumb from "../../components/common/title-breadcrumb/TitleBreadcrumb";
import Accomodations from "../../components/view-more-details/Accomodations";
import BookingTimeLineX from "../../components/view-more-details/BookingTimeLineX";
import MoreDetailsPageHeader from "../../components/view-more-details/MoreDetailsPageHeader";
import ViewMoreSummary from "../../components/view-more-details/ViewMoreSummary";
import ViewMoreTravellingInfo from "../../components/view-more-details/ViewMoreTravellingInfo";
import { CAROUSAL_ACTIVITY } from "../../constant/imageConst";
import { VIEW_MORE_ACTIVITY_DETAILS } from "./data.mock";

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
      <Row className="tw-top-m" gutter={20}>
        <Col span={7} order={2}>
          <h1>more info</h1>
        </Col>
        <Col span={17} order={1}>
          {activityDetails ? (
            <Row gutter={[0, 40]}>
              <Col span={24}>
                <TitleBreadcrumb titleLinks={slashedTableName} />
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
              <Col span={24} className="tw-p-6 tw-rounded-md tw-shadow-md">
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
              <Col span={24} className="tw-p-6 tw-rounded-md tw-shadow-md">
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
                </Row>
              </Col>
            </Row>
          ) : (
            <h1>Loading...</h1>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ViewMoreDetailsForActivity;
