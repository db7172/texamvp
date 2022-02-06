/* eslint-disable react-hooks/exhaustive-deps */
import {
  capitalize,
  debounce,
  isEmpty,
  lowerCase,
  startCase,
  uniq,
} from "lodash";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ActivityCard from "../../components/activity-page/ActivityCard";
import ExploreMoreWrapper from "../../components/common/explore-more-wrapper/ExploreMoreWrapper";
import PageHeader from "../../components/common/page-header/PageHeader";
import TitleBreadcrumb from "../../components/common/title-breadcrumb/TitleBreadcrumb";
// import { POPULAR_ACTIVITY } from "../../constant/dummyData";
import { DESTINATION_IMAGE } from "../../constant/imageConst";
import { ReactComponent as Telephone } from "../../assets/svg/telephone.svg";
import Pagination from "../../components/pagination";
import ButtonGroup from "../../components/form-component/filters/ButtonGroup";
import RangeSelector from "../../components/form-component/filters/RangeSelector";
import { formatActiveButton } from "../../utils/utils";
import { Col, Modal, Row } from "antd";
import Sticky from "react-stickynode";
import Title from "../../components/common/title/Title";
import DestinationCarousel from "../../components/common/carousel/DestinationCarousel";
import FaqSection from "../../components/view-more-details/FaqSection";
import ViewMoreTestimonial from "../../components/view-more-details/ViewMoreTestimonial";
import BlogCarousel from "../../components/common/carousel/BlogCarousel";
import RequestCallbackModal from "../../components/common/request-callback/RequestCallbackModal";
import firebase from "../../firebase";

let appliedFileter = {};

const getDurationFilterData = (data) => {
  return data.filter((d) =>
    appliedFileter["duration"].includes(d.data.activityType)
  );
};

const getLevelFilterData = (data) => {
  return data.filter((d) =>
    appliedFileter["level"].includes(
      capitalize(d.data.sailentFeatures.activityLevel)
    )
  );
};

const getCategoriesFilterData = (data) => {
  return data.filter((d) =>
    appliedFileter["categories"].includes(
      capitalize(d.data.sailentFeatures.activityType)
    )
  );
};

const getDestinationFilterData = (data) => {
  const newData = data.filter((d) => {
    if (lowerCase(d.data.activityType) === "single day") {
      return appliedFileter["destination"].includes(
        capitalize(d.data.destinations.destination)
      );
    } else if (lowerCase(d.data.activityType) === "multi day") {
      let isMatches = false;
      for (let index = 0; index < d.data.destination.length; index++) {
        if (
          appliedFileter["destination"].includes(
            capitalize(d.data.destination[index].destination)
          )
        ) {
          isMatches = true;
          break;
        }
      }

      return isMatches;
    }

    return false;
  });

  return newData;
};

const getFromCityFilterData = (data) => {
  const newData = data.filter((d) => {
    let isMatches = false;
    for (let index = 0; index < d.data.departureCity.length; index++) {
      if (
        appliedFileter["fromCity"].includes(
          capitalize(d.data.departureCity[index])
        )
      ) {
        isMatches = true;
        break;
      }
    }

    return isMatches;
  });

  return newData;
};

const getPriceRangeFilterData = (data) => {
  return data.filter(
    (d) =>
      +d.data.payment >= +appliedFileter["priceRange"][0] &&
      +d.data.payment <= +appliedFileter["priceRange"][1]
  );
};

const DEBOUNCE_TIME = 200;

const Activity = () => {
  const { destinationName, activityType } = useParams();
  const DESTINATION_NAME = startCase(destinationName);
  const ACTIVITY_TYPE = startCase(activityType);
  const [slashedTableName, setSlashedTableName] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [activeDuration, setActiveDuration] = useState({});
  const [activeLevel, setActiveLevel] = useState({});
  const [destinationfilter, setDestinationfilter] = useState({});
  const [activeCategories, setActiveCategorie] = useState({});
  const [fromCityFilter, setFromCityFilter] = useState({});
  const [priceRangeFilter, setPriceRangeFilter] = useState([0, 1]);
  const [minMaxRange, setMinMaxRange] = useState([0, 1]);
  const [resetValue, setResetValue] = useState({});
  const [showRequestCallbackModal, setShowRequestCallbackModal] =
    useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const coverTitle = `${activityType}${
    isEmpty(DESTINATION_NAME) ? "" : " in " + destinationName
  }`;

  const [allActivity, setAllActivity] = useState([]);
  const [filterActivity, setFilterActivity] = useState([]);

  const getData = async (collection, type) => {
    const snapshot = await firebase.firestore().collection(collection).get();
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      data: { ...doc.data(), activityType: type },
    }));
  };

  const setData = async () => {
    const singleDay = await getData("hr_sg_avy", "Single Day");
    const multiday = await getData("multi-activity", "Multi Day");
    const mixedActivity = [...singleDay, ...multiday];
    setAllActivity(mixedActivity);
    setFilterActivity(mixedActivity);
    setIsLoading(false);
  };

  useEffect(() => {
    setData();
  }, []);

  useEffect(() => {
    if (allActivity.length) {
      const option = [];
      const priceRange = [];
      const activityLevel = [];
      const destination = [];
      const categories = [];
      const fromCity = [];

      allActivity.forEach((value) => {
        option.push(value.data.activityType);
        priceRange.push(+value.data.payment);
        activityLevel.push(
          capitalize(value.data.sailentFeatures.activityLevel)
        );
        if (value.data.activityType === "Single Day") {
          destination.push(capitalize(value.data.destinations?.destination));
        } else {
          value.data.destination.forEach((d) => {
            destination.push(capitalize(d.destination));
          });
        }
        categories.push(capitalize(value.data.sailentFeatures.activityType));
        value.data.departureCity.forEach((d) => {
          fromCity.push(capitalize(d));
        });
      });
      priceRange.sort(function (a, b) {
        return a - b;
      });

      const unq = uniq(option);
      const unqLevel = uniq(activityLevel);
      const unqDestination = uniq(destination);
      const unqCategories = uniq(categories);
      const unqFromCity = uniq(fromCity);

      setActiveDuration(formatActiveButton(unq));
      setMinMaxRange([priceRange[0], priceRange[priceRange.length - 1]]);
      setPriceRangeFilter([priceRange[0], priceRange[priceRange.length - 1]]);
      setActiveLevel(formatActiveButton(unqLevel));
      setDestinationfilter(formatActiveButton(unqDestination));
      setFromCityFilter(formatActiveButton(unqFromCity));
      setActiveCategorie(formatActiveButton(unqCategories));

      setResetValue({
        ...resetValue,
        fromCity: formatActiveButton(unqFromCity),
        duration: formatActiveButton(unq),
        destination: formatActiveButton(unqDestination),
        priceRange: [priceRange[0], priceRange[priceRange.length - 1]],
        level: formatActiveButton(unqLevel),
        categories: formatActiveButton(unqCategories),
      });
    }
  }, [allActivity]);

  useEffect(() => {
    if (isEmpty(DESTINATION_NAME)) {
      setSlashedTableName([
        {
          name: "Home",
          url: "/",
        },
        {
          name: "Activities",
          url: "/activities",
        },
        {
          name: ACTIVITY_TYPE,
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
          name: "Activities",
          url: "/activites",
        },
        {
          name: ACTIVITY_TYPE,
          url: `/activity/${ACTIVITY_TYPE}`,
        },
        {
          name: DESTINATION_NAME,
          url: "",
        },
      ]);
    }

    // const unq = uniq(option);
    // const unqLevel = uniq(ACTIVITY_LEVEL);
    // const unqDestination = uniq(DESTINATION_LEVEL);
    // const unqCategories = uniq(CATEGORIES);
    // const unqFromCity = uniq(FROM_CITY);

    // setActiveDuration(formatActiveButton(unq));
    // setActiveLevel(formatActiveButton(unqLevel));
    // setDestinationfilter(formatActiveButton(unqDestination));
    // setFromCityFilter(formatActiveButton(unqFromCity));
    // setActiveCategorie(formatActiveButton(unqCategories));

    // setResetValue({
    //   ...resetValue,
    //   fromCity: formatActiveButton(unqFromCity),
    //   duration: formatActiveButton(unq),
    //   destination: formatActiveButton(unqDestination),
    //   priceRange: INITIAL_RANGE,
    //   level: formatActiveButton(unqLevel),
    //   categories: formatActiveButton(unqCategories),
    // });

    // console.log(activityType);

    // firebase
    //   .firestore()
    //   .collection("hr_sg_avy")
    //   .get()
    //   .then((querySnap) => {
    //     setSingleActivity(
    //       querySnap.docs
    //         .map((doc) => ({ id: doc.id, data: doc.data() }))
    //         .filter((item) => {
    //           return (
    //             item.data.sailentFeatures.activityType.toLowerCase() ===
    //             activityType
    //           );
    //         })
    //     );
    //   });

    // firebase
    //   .firestore()
    //   .collection("multi-activity")
    //   .get()
    //   .then((querySnap) => {
    //     setmultiDay(
    //       querySnap.docs
    //         .map((doc) => ({ id: doc.id, data: doc.data() }))
    //         .filter((item) => {
    //           return (
    //             item.data.sailentFeatures.activityType.toLowerCase() ===
    //             activityType
    //           );
    //         })
    //     );
    //   });
  }, [DESTINATION_NAME, ACTIVITY_TYPE]);

  const handleShowCallbackModalCancel = () => {
    setShowRequestCallbackModal(false);
  };

  const handleShowCallbackModalOpen = () => {
    setShowRequestCallbackModal(true);
  };

  const handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    setActivePage(pageNumber);
  };

  const getAllFilterData = () => {
    let data = [...allActivity];
    if (!isEmpty(appliedFileter)) {
      Object.keys(appliedFileter).forEach((key) => {
        switch (key) {
          case "duration": {
            if (appliedFileter["duration"].length) {
              data = getDurationFilterData(data);
            }
            break;
          }

          case "priceRange":
            data = getPriceRangeFilterData(data);
            break;

          case "level":
            if (appliedFileter["level"].length) {
              data = getLevelFilterData(data);
            }
            break;

          case "destination":
            if (appliedFileter["destination"].length) {
              data = getDestinationFilterData(data);
            }
            break;

          case "categories":
            if (appliedFileter["categories"].length) {
              data = getCategoriesFilterData(data);
            }
            break;

          case "fromCity":
            if (appliedFileter["fromCity"].length) {
              data = getFromCityFilterData(data);
            }
            break;

          default:
            break;
        }
      });
    }

    return data;
  };

  const getFilterData = (pre, name, filterType) => {
    const isAddition = !pre[name];
    const newData = { ...pre, [name]: !pre[name] };
    if (appliedFileter[filterType]?.length) {
      appliedFileter[filterType] = uniq(
        isAddition
          ? [...appliedFileter[filterType], name]
          : appliedFileter[filterType].filter((d) => d !== name)
      );
    } else {
      appliedFileter[filterType] = uniq([name]);
    }

    const newFilterData = getAllFilterData();
    console.log(newFilterData);
    setFilterActivity(newFilterData);

    return newData;
  };

  const handleDurationClick = debounce((e) => {
    const name = e.target.name;
    setActiveDuration((pre) => getFilterData(pre, name, "duration"));
  }, DEBOUNCE_TIME);

  const handleLevelClick = debounce((e) => {
    const name = e.target.name;
    setActiveLevel((pre) => getFilterData(pre, name, "level"));
  }, DEBOUNCE_TIME);

  const handleDestinationClick = debounce((e) => {
    const name = e.target.name;
    setDestinationfilter((pre) => getFilterData(pre, name, "destination"));
  }, DEBOUNCE_TIME);

  const handleFromCityClick = debounce((e) => {
    const name = e.target.name;
    setFromCityFilter((pre) => getFilterData(pre, name, "fromCity"));
  }, DEBOUNCE_TIME);

  const handleCategoriesClick = debounce((e) => {
    const name = e.target.name;
    setActiveCategorie((pre) => getFilterData(pre, name, "categories"));
  }, DEBOUNCE_TIME);

  const handleRangeChange = (e) => {
    setPriceRangeFilter(e);
    appliedFileter["priceRange"] = e;

    const newFilterData = getAllFilterData();

    setFilterActivity(newFilterData);
  };

  const handleRequestCallbackSubmit = (value) => {
    console.log(value);
    handleShowCallbackModalCancel();
  };

  const handleReset = () => {
    setActiveDuration(resetValue.duration);
    setActiveLevel(resetValue.level);
    setDestinationfilter(resetValue.destination);
    setFromCityFilter(resetValue.fromCity);
    setActiveCategorie(resetValue.categories);
    setMinMaxRange(resetValue.priceRange);
    setPriceRangeFilter(resetValue.priceRange);
    setFilterActivity(allActivity);
    appliedFileter = {};
  };

  // if (activeDuration.Hourly) {
  //   totalActivities = singleActivity;
  // }
  // if (activeDuration.SingleDay) {
  //   totalActivities = singleActivity;
  // }
  // if (activeDuration.MultiDay) {
  //   totalActivities = multiDay;
  // } else {
  //   totalActivities = singleActivity.concat(multiDay);
  // }

  return (
    <ExploreMoreWrapper
      coverImage={DESTINATION_IMAGE}
      coverTitle={coverTitle}
      coverDescription="Go on a trekking trip to the man-made heaven"
      ratting={5}
      review="1970 reviews"
      path="#activity"
      startingPrice={16949}
      destinationName={isEmpty(DESTINATION_NAME) ? "" : DESTINATION_NAME}
    >
      <div id="activity" className="tw--mt-5">
        <TitleBreadcrumb titleLinks={slashedTableName} />
      </div>
      <div className="tw-mt-10">
        <PageHeader title={coverTitle} />
      </div>
      <Row id="row-header" className="tw-mt-10" gutter={40}>
        {/* filter part */}
        <Col span={7}>
          <Sticky top={0} className="tw-relative" bottomBoundary="#row-bottom">
            <div className="tw-px-5 tw-shadow-card tw-rounded-lg">
              <div className="tw-flex tw-justify-between tw-py-7 tw-border-b">
                <p className="tw-filter-title tw-font-medium">Filters</p>
                <button
                  className="tw-text-secondary-color tw-text-base"
                  onClick={handleReset}
                >
                  Reset all
                </button>
              </div>
              {!isEmpty(activeDuration) && (
                <div className="tw-py-7 tw-border-b">
                  <ButtonGroup
                    title="Duration ( in Days )"
                    option={activeDuration}
                    handleClick={handleDurationClick}
                  />
                </div>
              )}
              <div className="tw-py-7 tw-border-b">
                <RangeSelector
                  title="Budget Per Person ( in Rs. )"
                  min={minMaxRange[0]}
                  max={minMaxRange[1]}
                  value={priceRangeFilter}
                  handleClick={handleRangeChange}
                />
              </div>
              {!isEmpty(destinationfilter) && (
                <div className="tw-py-7 tw-border-b">
                  <ButtonGroup
                    title="Destination"
                    option={destinationfilter}
                    handleClick={handleDestinationClick}
                  />
                </div>
              )}
              {!isEmpty(activeLevel) && (
                <div className="tw-py-7 tw-border-b">
                  <ButtonGroup
                    title="Activity Level"
                    option={activeLevel}
                    handleClick={handleLevelClick}
                  />
                </div>
              )}
              {!isEmpty(activeCategories) && (
                <div className="tw-py-7 tw-border-b">
                  <ButtonGroup
                    title="Categories"
                    option={activeCategories}
                    handleClick={handleCategoriesClick}
                  />
                </div>
              )}
              {!isEmpty(fromCityFilter) && (
                <div className="tw-py-7">
                  <ButtonGroup
                    title="From City"
                    option={fromCityFilter}
                    handleClick={handleFromCityClick}
                  />
                </div>
              )}
            </div>
          </Sticky>
        </Col>
        {/* Card part */}
        <Col span={17}>
          <div>
            <h1 className="tw-section-title">
              {capitalize(
                `${activityType} packages ${
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
          {!isLoading && filterActivity.length ? (
            <div className="tw-mt-5">
              <div>
                {filterActivity.map((d, i) => (
                  <ActivityCard key={i} data={d} />
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
          ) : (
            <div>No data available</div>
          )}
        </Col>
      </Row>
      <div id="row-bottom" />
      <Row className="tw-mt-20" gutter={[40, 60]}>
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
          <FaqSection title={activityType ? activityType : "activities"} />
        </Col>
        <Col span={24}>
          <Title
            hideViewAll
            title="Traveller Reviews"
            description="Lorem ipsum is the dummy text for placing any thing"
          />
          <div className="tw-mt-10">
            <ViewMoreTestimonial slidesToShow={3} arrows />
          </div>
        </Col>
        <Col span={24}>
          <BlogCarousel
            description="Lorem ipsum is the dummy text for placing any thing"
            title={`Things to do while ${
              activityType ? activityType : "activities"
            }`}
          />
        </Col>
        <Col span={24}>
          <BlogCarousel
            description="Lorem ipsum is the dummy text for placing any thing"
            title={`Places to visit while ${
              activityType ? activityType : "activities"
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

export default Activity;
