import { Col, Row } from "antd";
import { startCase } from "lodash";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import MoreDetailsPageCarousal from "../../components/common/carousel/MoreDetailsPageCarousal";
import Container from "../../components/common/container/Container";
import TitleBreadcrumb from "../../components/common/title-breadcrumb/TitleBreadcrumb";
import { PAGE_SPACING } from "../../constant/comman.const";
import { CAROUSAL_ACTIVITY } from "../../constant/imageConst";

const ViewMoreDetailsForActivity = () => {
  const [slashedTableName, setSlashedTableName] = useState([]);
  const [activityDetails, setActivityDetails] = useState();
  const { activityType, activityName } = useParams();
  const ACTIVITY_TYPE = startCase(activityType);
  const ACTIVITY_NAME = startCase(activityName);
  const { state } = useLocation();

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
          <Row gutter={PAGE_SPACING}>
            <Col span={24}>
              <TitleBreadcrumb titleLinks={slashedTableName} />
              <div className="tw-mt-5">
                <MoreDetailsPageCarousal images={CAROUSAL_ACTIVITY} />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ViewMoreDetailsForActivity;
