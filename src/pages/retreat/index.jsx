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
import { RETREAT } from "../../constant/dummyData";
import ButtonGroup from "../../components/form-component/filters/ButtonGroup";
import RangeSelector from "../../components/form-component/filters/RangeSelector";
import { formatActiveButton } from "../../utils/utils";
import RetreatPageCard from "../../components/retreat-page/RetreatPageCard";
import { Col, Modal, Row } from "antd";
import Sticky from "react-stickynode";
import EventCarousel from "../../components/common/carousel/EventCarousel";
import { getRetreatPagePath } from "../../constant/comman.const";
import FaqSection from "../../components/view-more-details/FaqSection";
import ViewMoreTestimonial from "../../components/view-more-details/ViewMoreTestimonial";
import BlogCarousel from "../../components/common/carousel/BlogCarousel";
import Title from "../../components/common/title/Title";
import RequestCallbackModal from "../../components/common/request-callback/RequestCallbackModal";

// dummy data

const option = ["Hourly", "Single-day", "Multi-day"];
const MIN = 10000,
  MAX = 80000;
const INITIAL_RANGE = [MIN, MAX];
const RETREAT_TYPES = ["Yoga", "Meditaion", "Spiritual Balnce"];
const CATEGORIES = ["Online", "Offline"];

const RetreatPage = () => {
  const { destinationName, retreatType } = useParams();
  const DESTINATION_NAME = startCase(destinationName);
  const RETREAT_TYPE = startCase(retreatType);
  const [slashedTableName, setSlashedTableName] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [duration, setDuration] = useState({});
  const [types, setTypes] = useState({});
  const [categories, setCategorie] = useState({});
  const [priceRange, setPriceRange] = useState(INITIAL_RANGE);
  const [resetValue, setResetValue] = useState({});
  const [showRequestCallbackModal, setShowRequestCallbackModal] =
    useState(false);

  const coverTitle = `${retreatType}${
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
          name: RETREAT_TYPE,
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
          name: RETREAT_TYPE,
          url: `/retreat/${RETREAT_TYPE}`,
        },
        {
          name: DESTINATION_NAME,
          url: "",
        },
      ]);
    }

    const unq = uniq(option);
    const unqTypes = uniq(RETREAT_TYPES);
    const unqCategories = uniq(CATEGORIES);

    setDuration(formatActiveButton(unq));
    setTypes(formatActiveButton(unqTypes));
    setCategorie(formatActiveButton(unqCategories));
    setResetValue({
      ...resetValue,
      duration: formatActiveButton(unq),
      priceRange: INITIAL_RANGE,
      types: formatActiveButton(unqTypes),
      categories: formatActiveButton(unqCategories),
    });
  }, [DESTINATION_NAME, RETREAT_TYPE]);

  const handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    setActivePage(pageNumber);
  };

  const handleShowCallbackModalCancel = () => {
    setShowRequestCallbackModal(false);
  };

  const handleShowCallbackModalOpen = () => {
    setShowRequestCallbackModal(true);
  };

  const handleReset = () => {
    setDuration(resetValue.duration);
    setTypes(resetValue.types);
    setCategorie(resetValue.categories);
    setPriceRange(resetValue.priceRange);
  };

  const handleDurationClick = (e) => {
    const name = e.target.name;
    setDuration((pre) => ({ ...pre, [name]: !pre[name] }));
  };

  const handleTypesClick = (e) => {
    const name = e.target.name;
    setTypes((pre) => ({ ...pre, [name]: !pre[name] }));
  };

  const handleCategoriesClick = (e) => {
    const name = e.target.name;
    setCategorie((pre) => ({ ...pre, [name]: !pre[name] }));
  };

  const handleRangeChange = (e) => {
    setPriceRange(e);
  };

  const handleRequestCallbackSubmit = (value) => {
    console.log(value);
    handleShowCallbackModalCancel();
  };

  return (
    <ExploreMoreWrapper
      coverImage={DESTINATION_IMAGE}
      coverTitle={coverTitle}
      coverDescription="Go on a trekking trip to the man-made heaven"
      ratting={5}
      review="1970 reviews"
      path="#retreat"
      startingPrice={16949}
      destinationName={isEmpty(DESTINATION_NAME) ? "" : DESTINATION_NAME}
    >
      <div id="retreat" className="tw--mt-5">
        <TitleBreadcrumb titleLinks={slashedTableName} />
      </div>
      <div className="tw-mt-10">
        <PageHeader title={coverTitle} />
      </div>
      <Row id="row-header" className="tw-mt-10" gutter={40}>
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
                <ButtonGroup
                  title="Duration ( in Days )"
                  option={duration}
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
                  option={categories}
                  handleClick={handleCategoriesClick}
                />
              </div>
              <div className="tw-py-7">
                <ButtonGroup
                  title="Retreat Type"
                  option={types}
                  handleClick={handleTypesClick}
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
                `${retreatType} packages ${
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
              {RETREAT.map((d, i) => (
                <RetreatPageCard {...d} key={i} />
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
          <EventCarousel
            title="Popular Retreat"
            data={RETREAT}
            setting={{ slidesToShow: 3 }}
            path={getRetreatPagePath("Popular Retreat")}
            description="Lorem ipsum is the dummy text for placing any thing"
          />
        </Col>
        <Col span={24}>
          <FaqSection title={retreatType ? retreatType : "retreat"} />
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
            title="Binge worthy blogs by members"
          />
        </Col>
      </Row>
    </ExploreMoreWrapper>
  );
};

export default RetreatPage;
