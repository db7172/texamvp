import { Col, Rate, Row } from "antd";
import { startCase } from "lodash";
import { TitleBreadCrumb } from "Models";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/common/container/Container";
import TitleBreadcrumb from "../../components/common/title-breadcrumb/TitleBreadcrumb";
import {
  LEFT_SPACING_LARGE_VALUE,
  RIGHT_SPACING_VALUE,
} from "../../constant/comman.const";
import map from "../../assets/svg/map.svg";
import MoreDetailsPageCarousal from "../../components/common/carousel/MoreDetailsPageCarousal";
import { CAROUSAL_ACTIVITY } from "../../constant/imageConst";
import ViewMoreWorkcationBookingCard from "../../components/view-more-details/ViewMoreWorkcationBookingCard";

type ParamTypes = {
  destinationName: string;
  workationType: string;
};

const ViewMoreDetailsForWorkcation = () => {
  const [slashedTableName, setSlashedTableName] = useState<
    Array<TitleBreadCrumb>
  >([]);
  const { destinationName, workationType } = useParams<ParamTypes>();
  const WORKCATION_TYPE = startCase(workationType);
  const DESTINATION_NAME = startCase(destinationName);

  useEffect(() => {
    // setEventDetails(state);
    setSlashedTableName([
      {
        name: "Home",
        url: "/",
      },
      {
        name: "Workcation",
        url: "/workcation",
      },
      {
        name: DESTINATION_NAME,
        url: `/workcation/${DESTINATION_NAME}`,
      },
      {
        name: WORKCATION_TYPE,
        url: "",
      },
    ]);
  }, [DESTINATION_NAME, WORKCATION_TYPE]);

  return (
    <Container>
      <>
        <div className="tw-mt-10">
          <TitleBreadcrumb titleLinks={slashedTableName} />
        </div>
        <div className="tw-mt-5">
          <Rate className="tw-mb-2" value={5} />
          <p className="tw-font-medium tw-text-xl tw-mb-1">{WORKCATION_TYPE}</p>
          <div className="tw-flex tw-gap-2">
            <div className="tw-w-5 tw-h-5">
              <img src={map} alt="map" />
            </div>
            <p className="tw-text-secondary-color">
              Gauravaddo, Opp Lane Of Pizza Hut , Calangute, Bardez Goa
            </p>
          </div>
        </div>
        <Row gutter={RIGHT_SPACING_VALUE} className="tw-mt-10">
          <Col span={17}>
            <MoreDetailsPageCarousal images={CAROUSAL_ACTIVITY} />
          </Col>
          <Col span={7}>
            <ViewMoreWorkcationBookingCard />
          </Col>
        </Row>
      </>
    </Container>
  );
};

export default ViewMoreDetailsForWorkcation;
