import { Col, Row } from "antd";
import { startCase } from "lodash";
import { EventObjectTypes, TitleBreadCrumb } from "Models";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import IconCard from "../../components/card/icon-card/IconCard";
import MoreDetailsPageCarousal from "../../components/common/carousel/MoreDetailsPageCarousal";
import Container from "../../components/common/container/Container";
import PageHeader from "../../components/common/page-header/PageHeader";
import TitleBreadcrumb from "../../components/common/title-breadcrumb/TitleBreadcrumb";
import MoreDetailsPageHeader from "../../components/view-more-details/MoreDetailsPageHeader";
import {
  LEFT_SPACING_LARGE_VALUE,
  RIGHT_SPACING_SMAL_VALUE,
  RIGHT_SPACING_VALUE,
} from "../../constant/comman.const";
import { CAROUSAL_ACTIVITY } from "../../constant/imageConst";
import { VIEW_MORE_EVENT_DETAILS } from "./data.mock";

type ParamTypes = {
  eventName: string;
  eventType: string;
};

const ViewMoreDetailsForEvent = () => {
  const [slashedTableName, setSlashedTableName] = useState<
    Array<TitleBreadCrumb>
  >([]);
  const [eventDetails, setEventDetails] = useState<EventObjectTypes>();
  const { eventName, eventType } = useParams<ParamTypes>();
  const EVENT_TYPE = startCase(eventType);
  const EVENT_NAME = startCase(eventName);
  const { state }: { state: EventObjectTypes } = useLocation();

  useEffect(() => {
    setEventDetails(state);
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
        name: EVENT_TYPE,
        url: `/event/${EVENT_TYPE}`,
      },
      {
        name: EVENT_NAME,
        url: "",
      },
    ]);
  }, [EVENT_NAME, EVENT_TYPE, state]);

  return (
    <Container className="">
      {eventDetails ? (
        <Row
          className="tw-top-m"
          gutter={[LEFT_SPACING_LARGE_VALUE, RIGHT_SPACING_VALUE]}
        >
          <Col span={7} order={2} className="tw-pt-14">
            SIDE PENAL
          </Col>
          <Col span={17} order={1} className="">
            <Row gutter={[0, RIGHT_SPACING_SMAL_VALUE]}>
              <Col span={24}>
                <TitleBreadcrumb titleLinks={slashedTableName} />
                <div className="tw-mt-5">
                  <MoreDetailsPageCarousal images={CAROUSAL_ACTIVITY} />
                </div>
                <div className="tw-mt-5">
                  <MoreDetailsPageHeader
                    title={eventDetails.name}
                    ratting={5}
                    review={"125 Reviews"}
                  />
                </div>
              </Col>
              <Col
                span={24}
                className="tw-p-6 tw-rounded-md tw-shadow-md tw-bg-white"
              >
                <PageHeader
                  title={`About ${eventDetails.name}`}
                  className="tw-text-lg"
                />
              </Col>
              <Col span={24}>
                <Row gutter={20} justify="space-between">
                  {VIEW_MORE_EVENT_DETAILS.map((d, i) => (
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
            </Row>
          </Col>
        </Row>
      ) : (
        <h1>Loading...</h1>
      )}
    </Container>
  );
};

export default ViewMoreDetailsForEvent;
