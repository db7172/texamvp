/* eslint-disable react-hooks/exhaustive-deps */
import { startCase } from "lodash";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ActivityCard from "../../components/activity-page/ActivityCard";
import ExploreMoreWrapper from "../../components/common/explore-more-wrapper/ExploreMoreWrapper";
import PageHeader from "../../components/common/page-header/PageHeader";
import TitleBreadcrumb from "../../components/common/title-breadcrumb/TitleBreadcrumb";
import { POPULAR_ACTIVITY } from "../../constant/dummyData";
import { DESTINATION_IMAGE } from "../../constant/imageConst";
import { ReactComponent as Telephone } from "../../assets/svg/telephone.svg";
import Pagination from "../../components/pagination";
import ButtonGroup from "../../components/form-component/filters/ButtonGroup";
import { uniq } from "lodash";
import RangeSelector from "../../components/form-component/filters/RangeSelector";

const option = ["Hourly", "Single-day", "Multi-day", "Multi-day"];
const MIN = 10000,
  MAX = 80000;
const INITIAL_RANGE = [MIN, MAX];
const ACTIVITY_LEVEL = [
  "Easy",
  "Moderate",
  "Difficult",
  "Pro",
  "Difficult",
  "Pro",
];
const CATEGORIES = [
  "Adventure",
  "Trekking",
  "Rentals",
  "Local Experiences",
  "Water Sports",
  "Outdoors",
  "Theme Park",
  "Resorts",
  "Events",
  "Activity",
];

const formatActiveButton = (arr) => {
  return arr.reduce((pre, value) => {
    pre[value] = false;
    return pre;
  }, {});
};

const Activity = () => {
  const { destinationName, activityType } = useParams();
  const DESTINATION_NAME = startCase(destinationName);
  const ACTIVITY_TYPE = startCase(activityType);
  const [slashedTableName, setSlashedTableName] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [activeDuration, setActiveDuration] = useState({});
  const [activeLevel, setActiveLevel] = useState({});
  const [activeCategories, setActiveCategorie] = useState({});
  const [priceRange, setPriceRange] = useState(INITIAL_RANGE);
  const [resetValue, setResetValue] = useState({});

  useEffect(() => {
    setSlashedTableName([
      {
        name: "Home",
        url: "/",
      },
      {
        name: ACTIVITY_TYPE,
        url: "/",
      },
      {
        name: DESTINATION_NAME,
        url: "",
      },
    ]);

    const unq = uniq(option);
    const unqLevel = uniq(ACTIVITY_LEVEL);
    const unqCategories = uniq(CATEGORIES);

    setActiveDuration(formatActiveButton(unq));
    setActiveLevel(formatActiveButton(unqLevel));
    setActiveCategorie(formatActiveButton(unqCategories));

    setResetValue({
      ...resetValue,
      duration: formatActiveButton(unq),
      priceRange: INITIAL_RANGE,
      level: formatActiveButton(unqLevel),
      categories: formatActiveButton(unqCategories),
    });
  }, []);

  const handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    setActivePage(pageNumber);
  };

  const handleDurationClick = (e) => {
    const name = e.target.name;
    setActiveDuration((pre) => ({ ...pre, [name]: !pre[name] }));
  };

  const handleLevelClick = (e) => {
    const name = e.target.name;
    setActiveLevel((pre) => ({ ...pre, [name]: !pre[name] }));
  };

  const handleCategoriesClick = (e) => {
    const name = e.target.name;
    setActiveCategorie((pre) => ({ ...pre, [name]: !pre[name] }));
  };

  const handleRangeChange = (e) => {
    setPriceRange(e);
  };

  const handleReset = () => {
    setActiveDuration(resetValue.duration);
    setActiveLevel(resetValue.level);
    setActiveCategorie(resetValue.categories);
    setPriceRange(resetValue.priceRange);
  };

  return (
    <ExploreMoreWrapper
      coverImage={DESTINATION_IMAGE}
      coverTitle={`${activityType} in ${destinationName}`}
      coverDescription="Go on a trekking trip to the man-made heaven"
      ratting={5}
      review="1970 reviews"
      startingPrice={16949}
      destinationName={DESTINATION_NAME}
    >
      <div className="tw--mt-5">
        <TitleBreadcrumb titleLinks={slashedTableName} />
      </div>
      <div className="tw-mt-9">
        <PageHeader title={destinationName} />
      </div>
      <div className="tw-mt-9 tw-grid tw-grid-cols-4 tw-gap-3">
        {/* filter part */}
        <div>
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
                option={activeDuration}
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
                title="Activity Level"
                option={activeLevel}
                handleClick={handleLevelClick}
              />
            </div>
            <div className="tw-py-7">
              <ButtonGroup
                title="Categories"
                option={activeCategories}
                handleClick={handleCategoriesClick}
              />
            </div>
          </div>
        </div>
        {/* Card part */}
        <div className="tw-col-span-3">
          <div className="tw-flex tw-justify-between tw-items-center">
            <h1 className="tw-text-2xl tw-font-medium tw-ml-3">
              {startCase(`${activityType} in ${destinationName}`)}
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
          <div className="tw-mt-5">
            {POPULAR_ACTIVITY.map((d, i) => (
              <ActivityCard {...d} key={i} />
            ))}
            <div className="tw-flex tw-justify-center tw-mt-10">
              <Pagination
                currentPage={activePage}
                paginate={handlePageChange}
                sizePerPage={10}
                totalNumberOfValues={100}
              />
            </div>
          </div>
        </div>
      </div>
    </ExploreMoreWrapper>
  );
};

export default Activity;
