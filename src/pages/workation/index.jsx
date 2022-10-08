/* eslint-disable react-hooks/exhaustive-deps */
import { capitalize, isEmpty, startCase, uniq } from "lodash";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ExploreMoreWrapper from "../../components/common/explore-more-wrapper/ExploreMoreWrapper";
import PageHeader from "../../components/common/page-header/PageHeader";
import TitleBreadcrumb from "../../components/common/title-breadcrumb/TitleBreadcrumb";
import { DESTINATION_IMAGE } from "../../constant/imageConst";
import { ReactComponent as Telephone } from "../../assets/svg/telephone.svg";
import Pagination from "../../components/pagination";
import { WORKATION } from "../../constant/dummyData";
import RangeSelector from "../../components/form-component/filters/RangeSelector";
import { formatActiveButton } from "../../utils/utils";
import WorkationPageCard from "../../components/workation-page/WorkationPageCard";
import RadioButton from "../../components/form-component/filters/RadioButton";
import HotelStarFilter from "../../components/form-component/filters/HotelStar";
import RattingFilter from "../../components/form-component/filters/RattingFilter";
import { Col, Modal, Row } from "antd";
import Sticky from "react-stickynode";
import Title from "../../components/common/title/Title";
import DestinationCarousel from "../../components/common/carousel/DestinationCarousel";
import FaqSection from "../../components/view-more-details/FaqSection";
import ViewMoreTestimonial from "../../components/view-more-details/ViewMoreTestimonial";
import BlogCarousel from "../../components/common/carousel/BlogCarousel";
import ButtonGroup from "../../components/form-component/filters/ButtonGroup";
import RequestCallbackModal from "../../components/common/request-callback/RequestCallbackModal";

// dummy data
const MIN = 10000,
  MAX = 80000;
const INITIAL_RANGE = [MIN, MAX];
const ACCOMODATION = [
  "Apartment",
  "Villa",
  "Hotel",
  "Homestay",
  "Resort",
  "Test 1",
  "Test 2",
  "Test 3",
];
const DESTINATION_FILTER_TYPES = [
  "Baku",
  "Bhutan",
  "Paris",
  "Toronto",
  "Rome",
  "Tokyo",
  "Cape Town",
];

const hotel = ["1", "2", "3", "4", "5"];

const AMENITIES = [
  "Air Conditioning",
  "Airport Tranfer (on demand)",
  "Banquet Hall",
  "Bonfire",
  "Business Service",
  "Test1",
  "Test2",
  "Test3",
];

const WorkationPage = () => {
  const { destinationName, workationType } = useParams();
  const DESTINATION_NAME = startCase(destinationName);
  const WORKATION_TYPE = startCase(workationType);
  const [slashedTableName, setSlashedTableName] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [accomodation, setAccomodation] = useState("");
  const [amenities, setAmenities] = useState("");
  const [hotelRatting, setHotelRatting] = useState({});
  const [reviewRatting, setReviewRatting] = useState("");
  const [destinationFilter, setDestinationFilter] = useState({});
  const [priceRange, setPriceRange] = useState(INITIAL_RANGE);
  const [resetValue, setResetValue] = useState({});
  const [showRequestCallbackModal, setShowRequestCallbackModal] =
    useState(false);

  const coverTitle = `${workationType}${
    isEmpty(DESTINATION_NAME) ? "" : " in " + destinationName
  }`;

  useEffect(() => {
    if (isEmpty(DESTINATION_NAME)) {
      setSlashedTableName([
        {
          name: "Home",
          url: "/",
        },
        {
          name: WORKATION_TYPE,
          url: "",
        },
      ]);
    } else {
      setSlashedTableName([
        {
          name: "Home",
          url: "/",
        },
        {
          name: WORKATION_TYPE,
          url: `/event/${WORKATION_TYPE}`,
        },
        {
          name: DESTINATION_NAME,
          url: "",
        },
      ]);
    }

    const unqDestination = uniq(DESTINATION_FILTER_TYPES);

    setHotelRatting(formatActiveButton(hotel));
    setDestinationFilter(formatActiveButton(unqDestination));

    setResetValue({
      ...resetValue,
      destination: formatActiveButton(unqDestination),
      priceRange: INITIAL_RANGE,
      accomodation: "",
      amenities: "",
      reviewRatting: "",
      ratting: formatActiveButton(hotel),
    });
  }, [DESTINATION_NAME, WORKATION_TYPE]);

  const handleShowCallbackModalCancel = () => {
    setShowRequestCallbackModal(false);
  };

  const handleShowCallbackModalOpen = () => {
    setShowRequestCallbackModal(true);
  };

  const handleRequestCallbackSubmit = (value) => {
    handleShowCallbackModalCancel();
  };

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const handleReset = () => {
    setPriceRange(resetValue.priceRange);
    setDestinationFilter(resetValue.destination);
    setAccomodation(resetValue.accomodation);
    setAmenities(resetValue.amenities);
    setHotelRatting(resetValue.ratting);
    setReviewRatting(resetValue.reviewRatting);
  };

  const handleRangeChange = (e) => {
    setPriceRange(e);
  };

  const handleDestinationClick = (e) => {
    const name = e.target.name;
    setDestinationFilter((pre) => ({ ...pre, [name]: !pre[name] }));
  };

  const handleAccomodationChange = (e) => {
    setAccomodation(e.target.value);
  };

  const handleAmenitiesChange = (e) => {
    setAmenities(e.target.value);
  };

  const handleHotelStarFilter = (e) => {
    const name = e.target.name;
    setHotelRatting((pre) => ({ ...pre, [name]: !pre[name] }));
  };

  const handleReviewRattingFilter = (e) => {
    setReviewRatting(e.target.value);
  };

  return (
    <ExploreMoreWrapper
      coverImage={DESTINATION_IMAGE}
      coverTitle={coverTitle}
      coverDescription="Go on a trekking trip to the man-made heaven"
      ratting={5}
      review="1970 reviews"
      startingPrice={16949}
      destinationName={isEmpty(DESTINATION_NAME) ? "" : DESTINATION_NAME}
      path="#workation"
    >
      <div className="tw--mt-5">
        <TitleBreadcrumb titleLinks={slashedTableName} />
      </div>
      <div id="workation" className="tw-mt-10">
        <PageHeader title={coverTitle} />
      </div>
      <Row id="row-header" gutter={40} className="tw-mt-10">
        {/* filter part */}
        <Col span={7}>
          <Sticky top={0} className="tw-relative" bottomBoundary="#row-bottom">
            <div className="tw-px-5 tw-shadow-card">
              <div className="tw-flex tw-justify-between tw-py-7 tw-border-b">
                <p className="tw-text-lg tw-font-medium">Filters</p>
                <button
                  className="tw-text-secondary-color tw-text-base"
                  onClick={handleReset}
                >
                  Reset all
                </button>
              </div>
              <div className="tw-py-7 tw-border-b">
                <RangeSelector
                  title="Budget Per Person ( in Rs. )"
                  min={MIN}
                  max={MAX}
                  value={priceRange}
                  handleClick={handleRangeChange}
                />
              </div>
              <div className="tw-py-7 tw-border-b">
                <RattingFilter
                  selected={reviewRatting}
                  onChange={handleReviewRattingFilter}
                />
              </div>
              <div className="tw-py-7 tw-border-b">
                <HotelStarFilter
                  ratting={hotelRatting}
                  handleClick={handleHotelStarFilter}
                />
              </div>
              <div className="tw-py-7 tw-border-b">
                <RadioButton
                  title="Accomodation"
                  value={ACCOMODATION}
                  selected={accomodation}
                  onChange={handleAccomodationChange}
                />
              </div>
              <div className="tw-py-7 tw-border-b">
                <RadioButton
                  title="Amenities"
                  value={AMENITIES}
                  selected={amenities}
                  onChange={handleAmenitiesChange}
                />
              </div>
              <div className="tw-py-7">
                <ButtonGroup
                  title="Destination"
                  option={destinationFilter}
                  handleClick={handleDestinationClick}
                />
              </div>
            </div>
          </Sticky>
        </Col>
        {/* Card part */}
        <Col span={17}>
          <div className="">
            <h1 className="tw-section-title">
              {capitalize(
                `${workationType} packages ${
                  destinationName ? `in ${destinationName}` : ""
                }`
              )}
            </h1>
            <div className="tw-flex tw-justify-end tw-mt-2">
              <div
                className="tw-flex tw-rounded-md tw-mr-6 tw-p-3 tw-shadow-card tw-items-center tw-cursor-pointer"
                onClick={handleShowCallbackModalOpen}
              >
                <span className="tw-mr-2">
                  <Telephone />
                </span>
                <p className="">Request Call back</p>
              </div>
              <div className="tw-mr-4 tw-rounded-md tw-pl-3 tw-shadow-card tw-flex tw-items-center">
                <span className="tw-mr-3">Sort By :</span>
                <select
                  className="focus:tw-outline-none tw-bg-white tw-mr-2 tw-py-3 tw-pr-5"
                  name="sort"
                  id="sort"
                >
                  <option value="lowToHigh">Duration - Low to High </option>
                  <option value="highToLow">Duration - High to Low </option>
                </select>
              </div>
              <Modal
                visible={showRequestCallbackModal}
                footer={null}
                onCancel={handleShowCallbackModalCancel}
              >
                <RequestCallbackModal
                  handleSubmit={handleRequestCallbackSubmit}
                />
              </Modal>
            </div>
          </div>
          {/* cards start from here */}
          <div className="tw-mt-5">
            <div>
              {WORKATION.map((d, i) => (
                <WorkationPageCard {...d} key={i} />
              ))}
            </div>
            <div className="tw-flex tw-justify-center tw-mt-10">
              <Pagination
                currentPage={activePage}
                paginate={handlePageChange}
                sizePerPage={10}
                totalNumberOfValues={100}
              />
            </div>
          </div>
        </Col>
      </Row>
      <div id="row-bottom" />
      <Row className="tw-mt-20" gutter={[40, 80]}>
        <Col span={24}>
          <Title
            title="Popular Destination"
            description="Lorem ipsum is the dummy text for placing any thing"
          />
          <div className="tw-mt-3">
            <DestinationCarousel setting={{ slidesToShow: 4 }} />
          </div>
        </Col>
        <Col span={24}>
          <FaqSection
            title={`${WORKATION_TYPE ? WORKATION_TYPE : ""}  workations`}
          />
        </Col>
        <Col span={24}>
          <Title
            hideViewAll
            title="Visitors Reviews"
            description="Lorem ipsum is the dummy text for placing any thing"
          />
          <div className="tw-mt-10">
            <ViewMoreTestimonial slidesToShow={3} arrows />
          </div>
        </Col>
        <Col span={24}>
          <BlogCarousel
            description="Lorem ipsum is the dummy text for placing any thing"
            title={`Things to do in ${
              WORKATION_TYPE ? WORKATION_TYPE : "workcation"
            }`}
          />
        </Col>
        <Col span={24}>
          <BlogCarousel
            description="Lorem ipsum is the dummy text for placing any thing"
            title={`Place to Visit in ${
              WORKATION_TYPE ? WORKATION_TYPE : "workcation"
            }`}
          />
        </Col>
        <Col span={24}>
          <BlogCarousel
            description="Lorem ipsum is the dummy text for placing any thing"
            title="Binge worthy blogs by members"
          />
        </Col>
      </Row>
    </ExploreMoreWrapper>
  );
};

export default WorkationPage;
