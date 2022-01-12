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

import checkMark from "../../assets/svg/check-mark.svg";
import cancel from "../../assets/svg/cancel.svg";
import bag from "../../assets/svg/bag.svg";
import info from "../../assets/svg/info.svg";

import { ACTIVITY } from "../../constant/dummyData";
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
  const [activityDetails, setActivityDetails] = useState() as any;
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

  console.log(activityDetails);

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
                  <ViewMoreActivityCard {...activityDetails} />
                  <div className="tw-mt-5">
                    <ViewMoreActivityBookingCard {...activityDetails} />
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
                    desc={activityDetails.data.data.data.formData.description}
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
                        header={"Inclusion"}
                        image={checkMark}
                        data={{
                          header: `Inclusion by ${activityDetails.venderName} `,
                          content: [
                            activityDetails.data.data.data.formData.inclusion,
                          ],
                        }}
                      />
                    </Col>
                    <Col span={24}>
                      <ViewMoreOtherInformation
                        header={"Exclusion"}
                        image={cancel}
                        data={{
                          header: `Tour exclusion by ${activityDetails.venderName}`,
                          content: [
                            activityDetails.data.data.data.formData.exclusion,
                          ],
                        }}
                      />
                    </Col>
                    <Col span={24}>
                      <ViewMoreOtherInformation
                        header={"Trip essentials"}
                        image={bag}
                        data={[
                          {
                            header: "How to reach Hempta Pass Trekk",
                            content: [
                              activityDetails.data.data.data.formData
                                .tripEssential.howToReachPickupPoint,
                            ],
                          },
                          {
                            header: "Thing To Carry",
                            content: [
                              activityDetails.data.data.data.formData
                                .tripEssential.thingsToCarry,
                            ],
                          },
                          {
                            header: "Thing Not Allowed",
                            content: [
                              activityDetails.data.data.data.formData
                                .tripEssential.thingsProhibitted,
                            ],
                          },
                          {
                            header: "Safty Norms",
                            content: [
                              activityDetails.data.data.data.formData
                                .tripEssential.saftyNorms,
                            ],
                          },
                          {
                            header: "Certificate Require",
                            content: [
                              activityDetails.data.data.data.formData
                                .tripEssential.certificateRequired,
                            ],
                          },
                        ]}
                      />
                    </Col>
                    <Col span={24}>
                      <ViewMoreOtherInformation
                        header={"Terms and Condition"}
                        image={info}
                        data={{
                          header: `Terms & Conditions by ${activityDetails.venderName}`,
                          content: [
                            activityDetails.data.data.data.formData
                              .tripEssential.termsAndCondition,
                          ],
                        }}
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
