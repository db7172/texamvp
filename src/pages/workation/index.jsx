/* eslint-disable react-hooks/exhaustive-deps */
import { isEmpty, startCase } from "lodash";
import React, { useEffect, useState } from "react";
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
import { Col, Row } from "antd";

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
  const [priceRange, setPriceRange] = useState(INITIAL_RANGE);
  const [resetValue, setResetValue] = useState({});

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

    setHotelRatting(formatActiveButton(hotel));

    setResetValue({
      ...resetValue,
      priceRange: INITIAL_RANGE,
      accomodation: "",
      amenities: "",
      reviewRatting: "",
      ratting: formatActiveButton(hotel),
    });
  }, [DESTINATION_NAME, WORKATION_TYPE]);

  const handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    setActivePage(pageNumber);
  };

  const handleReset = () => {
    setPriceRange(resetValue.priceRange);
    setAccomodation(resetValue.accomodation);
    setAmenities(resetValue.amenities);
    setHotelRatting(resetValue.ratting);
    setReviewRatting(resetValue.reviewRatting);
  };

  const handleRangeChange = (e) => {
    setPriceRange(e);
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
      <Row gutter={40} className="tw-mt-10">
        {/* filter part */}
        <Col span={7}>
          <div className="tw-px-5 tw-shadow-md">
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
          </div>
        </Col>
        {/* Card part */}
        <Col span={17}>
          <div className="tw-flex tw-justify-between tw-items-center">
            <h1 className="tw-section-title tw-ml-3 tw-w-1/3">
              {startCase(
                `${workationType} ${
                  destinationName ? `in ${destinationName}` : ""
                }`
              )}
            </h1>
            <div className="tw-flex">
              <div className="tw-flex tw-rounded-md tw-mr-6 tw-p-3 tw-shadow-md tw-items-center">
                <span className="tw-mr-2">
                  <Telephone />
                </span>
                <p className="">Request Call back</p>
              </div>
              <div className="tw-mr-4 tw-rounded-md tw-pl-3 tw-shadow-md tw-flex tw-items-center">
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
    </ExploreMoreWrapper>
  );
};

export default WorkationPage;
