import { Button, Col, Rate, Row } from "antd";
import { lowerCase, startCase } from "lodash";
import { TitleBreadCrumb } from "Models";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Container from "../../components/common/container/Container";
import TitleBreadcrumb from "../../components/common/title-breadcrumb/TitleBreadcrumb";
import { RIGHT_SPACING_VALUE, ROUTES } from "../../constant/comman.const";
import map from "../../assets/svg/map.svg";
import MoreDetailsPageCarousal from "../../components/common/carousel/MoreDetailsPageCarousal";
import ViewMoreWorkcationBookingCard from "../../components/view-more-details/ViewMoreWorkcationBookingCard";
import { indCurrency } from "../../utils/utils";
import ViewMoreOtherInformation from "../../components/view-more-details/ViewMoreOtherInformation";
import { VIEW_MORE_WORKCATION } from "./data.mock";
import ViewMoreRoomDetails from "../../components/view-more-details/ViewMoreRoomDetails";
import ViewMoreSectionTitleWithImg from "../../components/view-more-details/ViewMoreSectionTitleWithImg";
import hotel from "../../assets/svg/hotel.svg";
import WorkationCarousel from "../../components/common/carousel/WorkationCarousel";
import { WORKATION } from "../../constant/dummyData";
import FaqSection from "../../components/view-more-details/FaqSection";
import Title from "../../components/common/title/Title";
import ViewMoreTestimonial from "../../components/view-more-details/ViewMoreTestimonial";
import BlogCarousel from "../../components/common/carousel/BlogCarousel";
import firebase from "../../firebase";
import Loader from "../../components/common/Loader/Loader";

type ParamTypes = {
  destinationName: string;
  workationType: string;
};

const LOCATION = {
  header: "Location",
  image: hotel,
};

const NAVIGATION_OPTION = ["About", "Rooms", "Reviews", "Location", "Policies"];

const ViewMoreDetailsForWorkcation = () => {
  const [slashedTableName, setSlashedTableName] = useState<
    Array<TitleBreadCrumb>
  >([]);
  const { destinationName, workationType } = useParams<ParamTypes>();
  const WORKCATION_TYPE = startCase(workationType);
  const DESTINATION_NAME = startCase(destinationName);
  const { search }: { search: string } = useLocation();
  const [workationDetails, setWorkationDetails] = useState() as any;

  useEffect(() => {
    setSlashedTableName([
      {
        name: "Home",
        url: "/",
      },
      {
        name: "Workcation",
        url: ROUTES.WORKCATIONS,
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
    firebase
      .firestore()
      .collection("workation")
      .doc(search.substring(1))
      .get()
      .then((doc) => {
        if (doc.exists) {
          setWorkationDetails(doc.data());
        } else {
          console.log("not found");
        }
      });
  }, [DESTINATION_NAME, WORKCATION_TYPE]);

  return (
    <>
      {workationDetails ? (
        <>
          <Container>
            <>
              <div className="tw-mt-10">
                <TitleBreadcrumb titleLinks={slashedTableName} />
              </div>
              <div className="tw-mt-5">
                <Rate className="tw-mb-2" value={5} />
                <p className="tw-font-medium tw-text-xl tw-mb-1">
                  {workationDetails.workationName}
                </p>
                <div className="tw-flex tw-gap-2">
                  <div className="tw-w-5 tw-h-5">
                    <img src={map} alt="map" />
                  </div>
                  <p className="tw-text-secondary-color">
                    {workationDetails.destinations.destination}
                  </p>
                </div>
              </div>
              <Row gutter={RIGHT_SPACING_VALUE} className="tw-items-center">
                <Col span={17}>
                  <MoreDetailsPageCarousal images={workationDetails.imgLink} />
                </Col>
                <Col span={7}>
                  <ViewMoreWorkcationBookingCard {...workationDetails} />
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
                      {indCurrency(
                        workationDetails.accomodation.data.room1
                          .paymentRatePerPerson
                      )}
                    </span>
                    <span className="tw-font-medium">For 1 Nights</span>
                  </p>
                  <Button type="default" className="tw-texa-button tw-m-0">
                    Book Now
                  </Button>
                </div>
              </div>
            </Container>
          </div>
          <Container>
            <Row gutter={[0, RIGHT_SPACING_VALUE]} className="tw-items-center">
              <Col
                span={20}
                className="tw-p-6 tw-rounded-md tw-shadow-card tw-bg-white"
              >
                <Row gutter={[0, 20]}>
                  <Col span={24}>
                    <ViewMoreOtherInformation
                      header={VIEW_MORE_WORKCATION.about.header}
                      image={VIEW_MORE_WORKCATION.about.image}
                      data={workationDetails.description}
                    />
                  </Col>
                  <Col span={24}>
                    <ViewMoreRoomDetails {...workationDetails} />
                  </Col>
                  <Col span={24}>
                    <ViewMoreSectionTitleWithImg
                      header={LOCATION.header}
                      image={LOCATION.image}
                    />
                    <div className="tw-my-5">
                      <iframe
                        title="location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82634.01441356662!2d72.88642358324472!3d19.210528728687713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6da82cefc5b%3A0x754baa6c6a4d49c!2sRaghuleela%20Mega%20Mall!5e0!3m2!1sen!2sin!4v1642092310258!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        allowFullScreen
                        loading="lazy"
                      />
                    </div>
                  </Col>
                  <Col span={24}>
                    <ViewMoreOtherInformation
                      header={VIEW_MORE_WORKCATION.policies.header}
                      image={VIEW_MORE_WORKCATION.policies.image}
                      data={VIEW_MORE_WORKCATION.policies.content}
                    />
                  </Col>
                </Row>
              </Col>
              <Col span={24}>
                <WorkationCarousel
                  title="Similar Workcations"
                  data={WORKATION}
                  setting={{ slidesToShow: 3 }}
                  description="Lorem ipsum is the dummy text for placing any thing"
                  path=""
                  hideViewAll
                />
              </Col>
              <Col span={24}>
                <FaqSection title={WORKCATION_TYPE} />
              </Col>
              <Col span={24}>
                <Title
                  title="Visitors Reviews"
                  description="Lorem ipsum is the dummy text for placing any thing"
                  path="#"
                />
                <div className="tw-mt-10">
                  <ViewMoreTestimonial slidesToShow={3} arrows />
                </div>
              </Col>
              <Col span={24}>
                <BlogCarousel
                  description="Lorem ipsum is the dummy text for placing any thing"
                  title="Binge worthy blogs by members"
                />
              </Col>
            </Row>
          </Container>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default ViewMoreDetailsForWorkcation;
