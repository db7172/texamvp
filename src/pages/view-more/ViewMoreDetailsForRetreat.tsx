import { Col, Row } from "antd";
import { startCase } from "lodash";
import { RetreatObjectTypes, TitleBreadCrumb } from "Models";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import IconCard from "../../components/card/icon-card/IconCard";
import MoreDetailsPageCarousal from "../../components/common/carousel/MoreDetailsPageCarousal";
import Container from "../../components/common/container/Container";
import PageHeader from "../../components/common/page-header/PageHeader";
import TitleBreadcrumb from "../../components/common/title-breadcrumb/TitleBreadcrumb";
import MoreDetailsPageHeader from "../../components/view-more-details/MoreDetailsPageHeader";
import ViewMoreEventCard from "../../components/view-more-details/ViewMoreEventCard";
import ViewMoreRetreatInstructor from "../../components/view-more-details/ViewMoreRetreatInstructor";
import {
  LEFT_SPACING_LARGE_VALUE,
  RIGHT_SPACING_SMAL_VALUE,
  RIGHT_SPACING_VALUE,
} from "../../constant/comman.const";
import { CAROUSAL_ACTIVITY } from "../../constant/imageConst";
import { VIEW_MORE_RETREAT_DETAILS } from "./data.mock";

type ParamTypes = {
  retreatName: string;
  retreatType: string;
};

const ViewMoreDetailsForRetreat = () => {
  const [slashedTableName, setSlashedTableName] = useState<
    Array<TitleBreadCrumb>
  >([]);
  const { retreatName, retreatType } = useParams<ParamTypes>();
  const RETREAT_TYPE = startCase(retreatType);
  const RETREAT_NAME = startCase(retreatName);
  const [retreatDetails, setRetreatDetails] = useState<RetreatObjectTypes>();
  const { state }: { state: RetreatObjectTypes } = useLocation();

  useEffect(() => {
    setRetreatDetails(state);
    setSlashedTableName([
      {
        name: "Home",
        url: "/",
      },
      {
        name: "Events",
        url: "/events",
      },
      {
        name: RETREAT_TYPE,
        url: `/retreat/${RETREAT_TYPE}`,
      },
      {
        name: RETREAT_NAME,
        url: "",
      },
    ]);
  }, [RETREAT_NAME, RETREAT_TYPE, state]);

  console.log({ retreatName, retreatType });
  return (
    <Container>
      {retreatDetails ? (
        <>
          <div className="tw-mt-10">
            <TitleBreadcrumb titleLinks={slashedTableName} />
          </div>
          <Row gutter={[LEFT_SPACING_LARGE_VALUE, RIGHT_SPACING_VALUE]}>
            <Col span={7} order={2} className="tw-pt-5">
              <Row gutter={[0, RIGHT_SPACING_SMAL_VALUE]}>
                <Col
                  span={24}
                  className="tw-p-5 tw-rounded-md tw-shadow-card tw-bg-white"
                >
                  <ViewMoreEventCard />
                </Col>
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
                      title={retreatDetails.name}
                      ratting={5}
                      review={"125 Reviews"}
                    />
                  </div>
                </Col>
                <Col
                  span={24}
                  className="tw-p-6 tw-rounded-md tw-shadow-card tw-bg-white"
                >
                  <PageHeader
                    title={`About ${retreatDetails.name}`}
                    className="tw-text-lg"
                  />
                </Col>
                <Col span={24}>
                  <Row gutter={20} justify="space-between">
                    {VIEW_MORE_RETREAT_DETAILS.map((d) => (
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
                      <ViewMoreRetreatInstructor />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </Container>
  );
};

export default ViewMoreDetailsForRetreat;
