/* eslint-disable react-hooks/exhaustive-deps */
import { capitalize, isEmpty, startCase, uniq } from "lodash";
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

const option = ["Hourly", "SingleDay", "MultiDay", "MultiDay"];
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
const DESTINATION_LEVEL = [
  "Baku",
  "Bhutan",
  "Paris",
  "Toronto",
  "Rome",
  "Tokyo",
  "Cape Town",
];
const FROM_CITY = [
  "From Lucknow",
  "From Thane",
  "From Pune",
  "From Banglore",
  "From Kolkata",
  "From Amritsar",
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
  const [priceRange, setPriceRange] = useState(INITIAL_RANGE);
  const [resetValue, setResetValue] = useState({});
  const [showRequestCallbackModal, setShowRequestCallbackModal] =
    useState(false);

  const coverTitle = `${activityType}${
    isEmpty(DESTINATION_NAME) ? "" : " in " + destinationName
  }`;

  const [singleActivity, setSingleActivity] = useState([]);
  const [multiDay, setmultiDay] = useState([]);

  let totalActivities = [];

  console.log(activeDuration);
  console.log(activeLevel);
  console.log(destinationfilter);
  console.log(priceRange);

  useEffect(() => {
    if (isEmpty(DESTINATION_NAME)) {
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
          name: "Activites",
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

    const unq = uniq(option);
    const unqLevel = uniq(ACTIVITY_LEVEL);
    const unqDestination = uniq(DESTINATION_LEVEL);
    const unqCategories = uniq(CATEGORIES);
    const unqFromCity = uniq(FROM_CITY);

    setActiveDuration(formatActiveButton(unq));
    setActiveLevel(formatActiveButton(unqLevel));
    setDestinationfilter(formatActiveButton(unqDestination));
    setFromCityFilter(formatActiveButton(unqFromCity));
    setActiveCategorie(formatActiveButton(unqCategories));

    setResetValue({
      ...resetValue,
      fromCity: formatActiveButton(unqFromCity),
      duration: formatActiveButton(unq),
      destination: formatActiveButton(unqDestination),
      priceRange: INITIAL_RANGE,
      level: formatActiveButton(unqLevel),
      categories: formatActiveButton(unqCategories),
    });

    console.log(activityType);

    firebase
      .firestore()
      .collection("hr_sg_avy")
      .get()
      .then((querySnap) => {
        setSingleActivity(
          querySnap.docs
            .map((doc) => ({ id: doc.id, data: doc.data() }))
            .filter((item) => {
              return (
                item.data.data.formData.sailentFeatures.activityType ===
                activityType
              );
            })
        );
      });

    firebase
      .firestore()
      .collection("multi-activity")
      .get()
      .then((querySnap) => {
        setmultiDay(
          querySnap.docs
            .map((doc) => ({ id: doc.id, data: doc.data() }))
            .filter((item) => {
              return (
                item.data.data.formData.sailentFeatures.activityType ===
                activityType
              );
            })
        );
      });
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

  const handleDurationClick = (e) => {
    const name = e.target.name;
    setActiveDuration((pre) => ({ ...pre, [name]: !pre[name] }));
  };

  const handleLevelClick = (e) => {
    const name = e.target.name;
    setActiveLevel((pre) => ({ ...pre, [name]: !pre[name] }));
  };

  const handleDestinationClick = (e) => {
    const name = e.target.name;
    setDestinationfilter((pre) => ({ ...pre, [name]: !pre[name] }));
  };

  const handleFromCityClick = (e) => {
    const name = e.target.name;
    setFromCityFilter((pre) => ({ ...pre, [name]: !pre[name] }));
  };

  const handleCategoriesClick = (e) => {
    const name = e.target.name;
    setActiveCategorie((pre) => ({ ...pre, [name]: !pre[name] }));
  };

  const handleRangeChange = (e) => {
    setPriceRange(e);
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
    setPriceRange(resetValue.priceRange);
  };

  if (activeDuration.Hourly) {
    totalActivities = singleActivity;
  }
  if (activeDuration.SingleDay) {
    totalActivities = singleActivity;
  }
  if (activeDuration.MultiDay) {
    totalActivities = multiDay;
  }

  // if (activeLevel.Easy) {
  //   totalActivities.filter((item) => {
  //     return item.data.data.formData.sailentFeatures.activityLevel === "Easy";
  //   });
  // }
  // if (activeLevel.Moderate) {
  //   totalActivities.filter((item) => {
  //     return item.data.data.formData.sailentFeatures.activeLevel === "Moderate";
  //   });
  // }
  // if (activeLevel.Difficult) {
  //   totalActivities.filter((item) => {
  //     return (
  //       item.data.data.formData.sailentFeatures.activeLevel === "Difficult"
  //     );
  //   });
  // }
  // if (activeLevel.Pro) {
  //   totalActivities.filter((item) => {
  //     return item.data.data.formData.sailentFeatures.activeLevel === "Pro";
  //   });
  // }
  else {
    totalActivities = singleActivity.concat(multiDay);
  }

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
                  title="Destination"
                  option={destinationfilter}
                  handleClick={handleDestinationClick}
                />
              </div>
              <div className="tw-py-7 tw-border-b">
                <ButtonGroup
                  title="Activity Level"
                  option={activeLevel}
                  handleClick={handleLevelClick}
                />
              </div>
              <div className="tw-py-7 tw-border-b">
                <ButtonGroup
                  title="Categories"
                  option={activeCategories}
                  handleClick={handleCategoriesClick}
                />
              </div>
              <div className="tw-py-7">
                <ButtonGroup
                  title="From City"
                  option={fromCityFilter}
                  handleClick={handleFromCityClick}
                />
              </div>
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
          <div className="tw-mt-5">
            <div>
              {totalActivities.map((d, i) => (
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
