/* eslint-disable react-hooks/exhaustive-deps */
import { isEmpty, startCase, uniq } from "lodash";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ExploreMoreWrapper from "../../components/common/explore-more-wrapper/ExploreMoreWrapper";
import PageHeader from "../../components/common/page-header/PageHeader";
import TitleBreadcrumb from "../../components/common/title-breadcrumb/TitleBreadcrumb";
import { DESTINATION_IMAGE } from "../../constant/imageConst";
import { ReactComponent as Telephone } from "../../assets/svg/telephone.svg";
import Pagination from "../../components/pagination";
import { EVENT } from "../../constant/dummyData";
import EventPageCard from "../../components/event-page/EventPageCard";
import ButtonGroup from "../../components/form-component/filters/ButtonGroup";
import RangeSelector from "../../components/form-component/filters/RangeSelector";
import { formatActiveButton } from "../../utils/utils";
import { Col, Row } from "antd";

// dummy data

const option = ["All", "Toaday", "Tommorrow", "Weekend"];
const MIN = 10000,
  MAX = 80000;
const INITIAL_RANGE = [MIN, MAX];
const EVENT_TYPES = [
  "Music",
  "Food",
  "Comedy",
  "Dance",
  "Workshop",
  "Courses",
  "Games",
];
const CATEGORIES = ["Online", "Offline"];

const EventPage = () => {
  const { destinationName, eventType } = useParams();
  const DESTINATION_NAME = startCase(destinationName);
  const EVENT_TYPE = startCase(eventType);
  const [slashedTableName, setSlashedTableName] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [eventDuration, setEventDuration] = useState({});
  const [eventTypes, setEventTypes] = useState({});
  const [eventCategories, setEventCategorie] = useState({});
  const [priceRange, setPriceRange] = useState(INITIAL_RANGE);
  const [resetValue, setResetValue] = useState({});

  const coverTitle = `${eventType}${
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
          name: "Event",
          url: "/events",
        },
        {
          name: EVENT_TYPE,
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
          name: "Event",
          url: "/events",
        },
        {
          name: EVENT_TYPE,
          url: `/event/${EVENT_TYPE}`,
        },
        {
          name: DESTINATION_NAME,
          url: "",
        },
      ]);
    }

    const unq = uniq(option);
    const unqTypes = uniq(EVENT_TYPES);
    const unqCategories = uniq(CATEGORIES);

    setEventDuration(formatActiveButton(unq));
    setEventTypes(formatActiveButton(unqTypes));
    setEventCategorie(formatActiveButton(unqCategories));
    setResetValue({
      ...resetValue,
      duration: formatActiveButton(unq),
      priceRange: INITIAL_RANGE,
      types: formatActiveButton(unqTypes),
      categories: formatActiveButton(unqCategories),
    });
  }, [DESTINATION_NAME, EVENT_TYPE]);

  const handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    setActivePage(pageNumber);
  };

  const handleReset = () => {
    setEventDuration(resetValue.duration);
    setEventTypes(resetValue.types);
    setEventCategorie(resetValue.categories);
    setPriceRange(resetValue.priceRange);
  };

  const handleDurationClick = (e) => {
    const name = e.target.name;
    setEventDuration((pre) => ({ ...pre, [name]: !pre[name] }));
  };

  const handleTypesClick = (e) => {
    const name = e.target.name;
    setEventTypes((pre) => ({ ...pre, [name]: !pre[name] }));
  };

  const handleCategoriesClick = (e) => {
    const name = e.target.name;
    setEventCategorie((pre) => ({ ...pre, [name]: !pre[name] }));
  };

  const handleRangeChange = (e) => {
    setPriceRange(e);
  };

  return (
    <ExploreMoreWrapper
      coverImage={DESTINATION_IMAGE}
      coverTitle={coverTitle}
      coverDescription="Go on a trekking trip to the man-made heaven"
      ratting={5}
      path="#event"
      review="1970 reviews"
      startingPrice={16949}
      destinationName={isEmpty(DESTINATION_NAME) ? "" : DESTINATION_NAME}
    >
      <div id="event" className="tw--mt-5">
        <TitleBreadcrumb titleLinks={slashedTableName} />
      </div>
      <div className="tw-mt-10">
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
              <ButtonGroup
                title="Duration ( in Days )"
                option={eventDuration}
                handleClick={handleDurationClick}
              />
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
              <ButtonGroup
                title="Categories"
                option={eventCategories}
                handleClick={handleCategoriesClick}
              />
            </div>
            <div className="tw-py-7">
              <ButtonGroup
                title="Activity Level"
                option={eventTypes}
                handleClick={handleTypesClick}
              />
            </div>
          </div>
        </Col>
        {/* Card part */}
        <Col span={17}>
          <div className="tw-flex tw-justify-between tw-items-center">
            <h1 className="tw-section-title tw-ml-3">
              {startCase(
                `${eventType} ${destinationName ? `in ${destinationName}` : ""}`
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
              {EVENT.map((d, i) => (
                <EventPageCard {...d} key={i} />
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

export default EventPage;
