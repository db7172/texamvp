import { Col, Rate, Row } from "antd";
import { capitalize } from "lodash";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sticky from "react-stickynode";
import ReviewCard from "../../components/card/review-card/ReviewCard";
import Container from "../../components/common/container/Container";
import HotelStarFilter from "../../components/form-component/filters/HotelStar";
import Pagination from "../../components/pagination";
import { reviewDummyData } from "../../constant/reviewData.const";
import { formatActiveButton } from "../../utils/utils";
import ProgressRatting from "./ProgressRatting";

type Params = {
  reviewType: string;
};

const progressData = [
  {
    title: "Excellent",
    total: 3000,
    actual: 2000,
  },
  {
    title: "Very Good",
    total: 3000,
    actual: 500,
  },
  {
    title: "Good",
    total: 3000,
    actual: 250,
  },
  {
    title: "Poor",
    total: 3000,
    actual: 150,
  },
  {
    title: "Bad",
    total: 3000,
    actual: 100,
  },
];

const hotel = ["1", "2", "3", "4", "5"];

const SingleReview = () => {
  const { reviewType } = useParams<Params>();
  const [reviewData] = useState(reviewDummyData.slice(0, 10));
  const [activePage, setActivePage] = useState(1);
  const [hotelRatting, setHotelRatting] = useState<any>({});

  useEffect(() => {
    setHotelRatting(formatActiveButton(hotel));
  }, []);

  const handleReset = () => {
    setHotelRatting(formatActiveButton(hotel));
  };

  const handleHotelStarFilter = (e: React.ChangeEvent<HTMLButtonElement>) => {
    const name: any = e.target.name;
    setHotelRatting((pre: { [x: string]: any }) => ({
      ...pre,
      [name]: !pre[name],
    }));
  };

  const handlePageChange = (pageNumber: number) => {
    console.log(`active page is ${pageNumber}`);
    setActivePage(pageNumber);
  };

  return (
    <div>
      <div className="tw-w-full tw-h-96 tw-relative">
        <img
          className="tw-h-full tw-w-full tw-object-cover"
          src="https://images.unsplash.com/photo-1501555088652-021faa106b9b"
          alt=""
        />
        <div className="tw-absolute tw-inset-0 tw-bg-black tw-bg-opacity-20 tw-z-10 tw-flex tw-items-center tw-flex-col tw-justify-evenly tw-text-white">
          <div className="tw-text-center">
            <h3 className="tw-main-title-other-page tw-text-white">
              {capitalize(reviewType)}
            </h3>
            {/* <p className="tw-subtitle-other-page lg:tw-mt-4 tw-mt-0">
              ( Based on 1446 reviews )
            </p> */}
            {/* <p className="tw-text-lg tw-mt-14 tw-font-lato tw-animate-bounce">
            <a
              className="hover:tw-text-white tw-flex tw-items-center tw-justify-center"
              href={path}
            >
              <DoubleRightOutlined rotate={90} />
              <span className="tw-mx-2">Scroll down to discover</span>
              <DoubleRightOutlined rotate={90} />
            </a>
          </p> */}
          </div>
          <div className="tw-max-h-16" />
        </div>
      </div>
      <div className="tw-relative tw-z-20 md:tw-w-4/6 lg:tw-px-9 tw-px-3 lg:tw-py-12 tw-py-6 tw-mx-auto md:tw-flex tw-bg-white xl:tw-text-lg tw-text-base tw-items-center tw-shadow-card lg:tw--top-16 md:tw--top-12 tw-rounded-xl">
        <div className="md:tw-w-6/12">
          <p className="tw-text-center tw-font-medium">
            <span className="tw-price tw-text-2xl tw-mx-1">98.95%</span>{" "}
            Postitive Reviews
          </p>
        </div>
        <div className="md:tw-w-6/12 tw-flex tw-justify-center">
          <div className="tw-flex tw-gap-2 tw-flex-row tw-items-center">
            <Rate disabled defaultValue={5} />
            <p className="tw-mt-1 tw-font-medium lg:tw-mt-0">
              ( Based on 1457 reviews )
            </p>
          </div>
        </div>
      </div>
      <Container>
        <Row id="row-header" className="tw-mt-10" gutter={40}>
          <Col span={7}>
            <Sticky
              top={0}
              className="tw-relative"
              bottomBoundary="#row-bottom"
            >
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
                  {progressData.map((d, i) => (
                    <ProgressRatting
                      title={d.title}
                      total={d.total}
                      actual={d.actual}
                      key={i}
                    />
                  ))}
                </div>
                <div className="tw-py-7 tw-border-b">
                  <HotelStarFilter
                    ratting={hotelRatting}
                    handleClick={handleHotelStarFilter}
                  />
                </div>
              </div>
            </Sticky>
          </Col>
          <Col span={17}>
            <Row className="" gutter={[25, 25]}>
              {reviewData.map((d) => (
                <Col span={24}>
                  <ReviewCard
                    img={d.img}
                    name={d.name}
                    comment={d.comment}
                    place={d.place}
                    date={d.date}
                    star={d.star}
                  />
                </Col>
              ))}
            </Row>
            <div className="tw-flex tw-justify-center tw-mt-10">
              <Pagination
                currentPage={activePage}
                paginate={handlePageChange}
                sizePerPage={10}
                totalNumberOfValues={100}
              />
            </div>
          </Col>
        </Row>
        <div id="row-bottom" />
      </Container>
    </div>
  );
};

export default SingleReview;
