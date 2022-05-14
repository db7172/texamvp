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
  ROUTES,
} from "../../constant/comman.const";

import checkMark from "../../assets/svg/check-mark.svg";
import cancel from "../../assets/svg/cancel.svg";
import bag from "../../assets/svg/bag.svg";
import info from "../../assets/svg/info.svg";

import { ACTIVITY } from "../../constant/dummyData";
import { CAROUSAL_ACTIVITY } from "../../constant/imageConst";
import { VIEW_MORE_ACTIVITY_DETAILS } from "./data.mock";
import firebase from "../../firebase";
import Loader from "../../components/common/Loader/Loader";

type ParamTypes = {
  activityName: string;
  activityType: string;
  collectionName: string;
};

const ViewMoreDetailsForActivity = () => {
  const [slashedTableName, setSlashedTableName] = useState<
    Array<TitleBreadCrumb>
  >([]);
  const [activityDetails, setActivityDetails] = useState() as any;
  const { activityName, activityType, collectionName } =
    useParams<ParamTypes>();
  const ACTIVITY_TYPE = startCase(activityType);
  const ACTIVITY_NAME = startCase(activityName);
  const { search }: { search: string } = useLocation();

  useEffect(() => {
    setSlashedTableName([
      {
        name: "Home",
        url: "/",
      },
      {
        name: "Activites",
        url: ROUTES.ACTIVITES,
      },
      {
        name: ACTIVITY_TYPE,
        url: getActivityPagePath(ACTIVITY_TYPE),
      },
    ]);

    firebase
      .firestore()
      .collection(collectionName)
      .doc(search.substring(1))
      .get()
      .then((doc) => {
        if (doc.exists) {
          const data = doc.data();
          setActivityDetails(data);

          setSlashedTableName((pre) => [
            ...pre,
            {
              name: data?.activityName || "",
              url: "",
            },
          ]);
        } else {
          console.log("not found");
        }
      });
  }, [ACTIVITY_NAME, ACTIVITY_TYPE]);

  console.log(search.substring(1), collectionName);

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
                    <MoreDetailsPageCarousal
                      images={activityDetails?.imgLink}
                    />
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
                    desc={activityDetails.description}
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
                      <BookingTimeLineX {...activityDetails} />
                    </Col>
                    <Col span={24}>
                      <ViewMoreSummary {...activityDetails} />
                    </Col>
                    <Col span={24}>
                      <Accomodations {...activityDetails} />
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
                          content: [activityDetails.inclusion],
                        }}
                      />
                    </Col>
                    <Col span={24}>
                      <ViewMoreOtherInformation
                        header={"Exclusion"}
                        image={cancel}
                        data={{
                          header: `Tour exclusion by ${activityDetails.venderName}`,
                          content: [activityDetails.exclusion],
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
                              activityDetails.tripEssential
                                .howToReachPickupPoint,
                            ],
                          },
                          {
                            header: "Thing To Carry",
                            content: [
                              activityDetails.tripEssential.thingsToCarry,
                            ],
                          },
                          {
                            header: "Thing Not Allowed",
                            content: [
                              activityDetails.tripEssential.thingsProhibitted,
                            ],
                          },
                          {
                            header: "Safty Norms",
                            content: [activityDetails.tripEssential.saftyNorms],
                          },
                          {
                            header: "Certificate Require",
                            content: [
                              activityDetails.tripEssential.certificateRequired,
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
                            activityDetails.tripEssential.termsAndCondition,
                          ],
                        }}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col span={24} order={3}>
              {/* <ActivityCarousel
                setting={{ slidesToShow: 3 }}
                title="Similar Activities"
                data={ACTIVITY}
                path={getActivityPagePath("Similar Activities")}
                description="Lorem ipsum is the dummy text for placing any thing"
              /> */}
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

export default ViewMoreDetailsForActivity;
