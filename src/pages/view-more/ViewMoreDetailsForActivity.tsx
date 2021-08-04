import { Col, Row } from "antd";
import { startCase } from "lodash";
import { ActivityObjectTypes, TitleBreadCrumb } from "Models";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import MoreDetailsPageCarousal from "../../components/common/carousel/MoreDetailsPageCarousal";
import Container from "../../components/common/container/Container";
import PageHeader from "../../components/common/page-header/PageHeader";
import TitleBreadcrumb from "../../components/common/title-breadcrumb/TitleBreadcrumb";
import MoreDetailsPageHeader from "../../components/view-more-details/MoreDetailsPageHeader";
import { CAROUSAL_ACTIVITY } from "../../constant/imageConst";

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
    <Container>
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
              <Col span={24}>
                <div className="tw-p-5 tw-rounded-md tw-shadow-md">
                  <PageHeader
                    title={`About ${activityDetails.activityName}`}
                    className="tw-text-lg"
                  />
                </div>
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
