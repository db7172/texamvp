import { Col, Row } from "antd";
import { startCase } from "lodash";
import { EventObjectTypes, TitleBreadCrumb } from "Models";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import IconCard from "../../components/card/icon-card/IconCard";
import EventCarousel from "../../components/common/carousel/EventCarousel";
import MoreDetailsPageCarousal from "../../components/common/carousel/MoreDetailsPageCarousal";
import Container from "../../components/common/container/Container";
import PageHeader from "../../components/common/page-header/PageHeader";
import TitleBreadcrumb from "../../components/common/title-breadcrumb/TitleBreadcrumb";
import FaqSection from "../../components/view-more-details/FaqSection";
import MoreDetailsPageHeader from "../../components/view-more-details/MoreDetailsPageHeader";
import ViewMoreEventCard from "../../components/view-more-details/ViewMoreEventCard";
import ViewMoreEventSummary from "../../components/view-more-details/ViewMoreEventSummary";
import ViewMoreOtherInformation from "../../components/view-more-details/ViewMoreOtherInformation";
import {
  getEventPagePath,
  LEFT_SPACING_LARGE_VALUE,
  RIGHT_SPACING_SMAL_VALUE,
  RIGHT_SPACING_VALUE,
  ROUTES,
} from "../../constant/comman.const";
import { EVENT } from "../../constant/dummyData";
import { CAROUSAL_ACTIVITY } from "../../constant/imageConst";
import {
  EVENT_ESSENTIALS,
  EXCLUSION_DETAILS,
  INCLUSION_DETAILS,
  TERMS_AND_CONDITIONS,
  VIEW_MORE_EVENT_DETAILS,
} from "./data.mock";
import firebase from "../../firebase";
import Loader from "../../components/common/Loader/Loader";

type ParamTypes = {
  eventName: string;
  eventType: string;
};

const ViewMoreDetailsForEvent = () => {
  const [slashedTableName, setSlashedTableName] = useState<
    Array<TitleBreadCrumb>
  >([]);
  const [eventDetails, setEventDetails] = useState() as any;
  const { eventName, eventType } = useParams<ParamTypes>();
  const EVENT_TYPE = startCase(eventType);
  const EVENT_NAME = startCase(eventName);
  const { search }: { search: string } = useLocation();

  useEffect(() => {
    setSlashedTableName([
      {
        name: "Home",
        url: "/",
      },
      {
        name: "Events",
        url: ROUTES.EVENTS,
      },
      {
        name: EVENT_TYPE,
        url: getEventPagePath(EVENT_TYPE),
      },
    ]);
    firebase
      .firestore()
      .collection("events")
      .doc(search.substring(1))
      .get()
      .then((doc) => {
        if (doc.exists) {
          const data = doc.data();
          setEventDetails(data);

          setSlashedTableName((pre) => [
            ...pre,
            {
              name: data?.eventName || "",
              url: "",
            },
          ]);
        } else {
          console.log("Not found");
        }
      });
  }, [EVENT_NAME, EVENT_TYPE, search]);

  return (
    <Container className="">
      {eventDetails ? (
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
                  <ViewMoreEventCard {...eventDetails} />
                </Col>
                {/* <Col
                  span={24}
                  className="tw-p-5 tw-rounded-md tw-shadow-card tw-bg-white"
                >
                  <ViewMoreTestimonial />
                </Col> */}
              </Row>
            </Col>
            <Col span={17} order={1} className="">
              <Row gutter={[0, RIGHT_SPACING_SMAL_VALUE]}>
                <Col span={24}>
                  <div className="tw-mt-5">
                    <MoreDetailsPageCarousal images={eventDetails?.imgLink} />
                  </div>
                  <div className="tw-mt-5">
                    <MoreDetailsPageHeader
                      title={eventDetails.eventName}
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
                    title={`About ${eventDetails.eventName}`}
                    className="tw-text-lg"
                    desc={eventDetails.eventDescription}
                  />
                </Col>
                <Col span={24}>
                  <Row gutter={20} justify="space-between">
                    {VIEW_MORE_EVENT_DETAILS.map((d) => (
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
                      <ViewMoreEventSummary {...eventDetails} />
                    </Col>
                    <Col span={24}>
                      <ViewMoreOtherInformation
                        header={INCLUSION_DETAILS.header}
                        image={INCLUSION_DETAILS.image}
                        data={{
                          header: "Tour Inclusion by TexaTrove",
                          content: eventDetails.inclusion,
                        }}
                      />
                    </Col>
                    <Col span={24}>
                      <ViewMoreOtherInformation
                        header={EXCLUSION_DETAILS.header}
                        image={EXCLUSION_DETAILS.image}
                        data={{
                          header: "Tour Exlusion by TexaTrove",
                          content: eventDetails.exlusion,
                        }}
                      />
                    </Col>
                    <Col span={24}>
                      <ViewMoreOtherInformation
                        header={EVENT_ESSENTIALS.header}
                        image={EVENT_ESSENTIALS.image}
                        data={{
                          header: "Cancellation Policy by TexaTrove",
                          content: eventDetails.cancellationPolicy,
                        }}
                      />
                    </Col>
                    <Col span={24}>
                      <ViewMoreOtherInformation
                        header={TERMS_AND_CONDITIONS.header}
                        image={TERMS_AND_CONDITIONS.image}
                        // data={TERMS_AND_CONDITIONS.content}
                        data={{
                          header: "Terms and Conditions by TexaTrove",
                          content: eventDetails.termsAndCondition,
                        }}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col span={24} order={3}>
              <EventCarousel
                title="Popular Events"
                data={EVENT}
                setting={{ slidesToShow: 3 }}
                path={getEventPagePath("Popular Events")}
                description="Lorem ipsum is the dummy text for placing any thing"
                event
              />
            </Col>
            <Col span={24} order={4}>
              <FaqSection />
            </Col>
          </Row>
        </>
      ) : (
        <Loader />
      )}
    </Container>
  );
};

export default ViewMoreDetailsForEvent;
