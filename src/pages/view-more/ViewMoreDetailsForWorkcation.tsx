import { Button, Col, Rate, Row } from "antd";
import { lowerCase, startCase } from "lodash";
import { TitleBreadCrumb } from "Models";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/common/container/Container";
import TitleBreadcrumb from "../../components/common/title-breadcrumb/TitleBreadcrumb";
import { RIGHT_SPACING_VALUE } from "../../constant/comman.const";
import map from "../../assets/svg/map.svg";
import MoreDetailsPageCarousal from "../../components/common/carousel/MoreDetailsPageCarousal";
import { CAROUSAL_ACTIVITY } from "../../constant/imageConst";
import ViewMoreWorkcationBookingCard from "../../components/view-more-details/ViewMoreWorkcationBookingCard";
import { indCurrency } from "../../utils/utils";
import ViewMoreOtherInformation from "../../components/view-more-details/ViewMoreOtherInformation";
import { INCLUSION_DETAILS, VIEW_MORE_WORKCATION } from "./data.mock";
import ViewMoreRoomDetails from "../../components/view-more-details/ViewMoreRoomDetails";

type ParamTypes = {
  destinationName: string;
  workationType: string;
};

const NAVIGATION_OPTION = ["About", "Rooms", "Reviews", "Location", "Policies"];

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
    <>
      <Container>
        <>
          <div className="tw-mt-10">
            <TitleBreadcrumb titleLinks={slashedTableName} />
          </div>
          <div className="tw-mt-5">
            <Rate className="tw-mb-2" value={5} />
            <p className="tw-font-medium tw-text-xl tw-mb-1">
              {WORKCATION_TYPE}
            </p>
            <div className="tw-flex tw-gap-2">
              <div className="tw-w-5 tw-h-5">
                <img src={map} alt="map" />
              </div>
              <p className="tw-text-secondary-color">
                Gauravaddo, Opp Lane Of Pizza Hut , Calangute, Bardez Goa
              </p>
            </div>
          </div>
          <Row gutter={RIGHT_SPACING_VALUE} className="tw-items-center">
            <Col span={17}>
              <MoreDetailsPageCarousal images={CAROUSAL_ACTIVITY} />
            </Col>
            <Col span={7}>
              <ViewMoreWorkcationBookingCard />
            </Col>
          </Row>
        </>
      </Container>
      <div className="tw-mt-10 tw-mb-8 tw-py-5 tw-shadow-card">
        <Container>
          <div className="tw-flex tw-justify-between tw-items-center">
            <ul className="tw-flex tw-gap-8">
              {NAVIGATION_OPTION.map((d) => (
                <a
                  className="hover:tw-text-primary-color"
                  href={`#${lowerCase(d)}`}
                >
                  <li
                    key={d}
                    className="tw-font-medium tw-text-base tw-px-5 tw-py-1.5 tw-rounded-lg tw-border hover:tw-border-primary-yellow"
                  >
                    {d}
                  </li>
                </a>
              ))}
            </ul>
            <div className="tw-flex tw-items-center tw-gap-10">
              <p className="tw-flex tw-items-center">
                <span className="tw-font-medium tw-text-2xl tw-text-yellow-color tw-mr-5">
                  {indCurrency(16949)}
                </span>
                <span className="tw-font-medium">For 2 Nights</span>
              </p>
              <Button type="default" className="tw-texa-button tw-m-0">
                Book Now
              </Button>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <Row gutter={RIGHT_SPACING_VALUE} className="tw-items-center">
          <Col
            span={17}
            className="tw-p-6 tw-rounded-md tw-shadow-card tw-bg-white"
          >
            <Row gutter={[0, 20]}>
              <Col span={24}>
                <ViewMoreOtherInformation
                  header={VIEW_MORE_WORKCATION.about.header}
                  image={VIEW_MORE_WORKCATION.about.image}
                  data={VIEW_MORE_WORKCATION.about.content}
                />
              </Col>
              <Col span={24}>
                <ViewMoreRoomDetails />
              </Col>
            </Row>
          </Col>
          <Col span={7}></Col>
        </Row>
      </Container>
    </>
  );
};

export default ViewMoreDetailsForWorkcation;
