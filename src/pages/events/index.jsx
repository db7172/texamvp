import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import BlogCarousel from "../../components/common/carousel/BlogCarousel";
import EventCarousel from "../../components/common/carousel/EventCarousel";
import Container from "../../components/common/container/Container";
import PageHeader from "../../components/common/page-header/PageHeader";
import TitleBreadcrumb from "../../components/common/title-breadcrumb/TitleBreadcrumb";
import Pagination from "../../components/pagination";
import ViewAll from "../../components/view-all/ViewAll";
import { getEventPagePath, PAGE_SPACING } from "../../constant/comman.const";
import { EVENT, VIEW_ALL_EVENTS } from "../../constant/dummyData";

const Events = () => {
  const [slashedTableName, setSlashedTableName] = useState([]);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    setSlashedTableName([
      {
        name: "Home",
        url: "/",
      },
      {
        name: "Events",
        url: "",
      },
    ]);
  }, []);

  const handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    setActivePage(pageNumber);
  };

  return (
    <Container>
      <Row className="tw-top-m" gutter={PAGE_SPACING}>
        <Col span={24}>
          <TitleBreadcrumb titleLinks={slashedTableName} />
          <div className="tw-mt-5">
            <PageHeader title={"Events"} />
          </div>
        </Col>
        <Col span={24}>
          <ViewAll cards={VIEW_ALL_EVENTS} path={getEventPagePath} />
        </Col>
        <Col span={24}>
          <EventCarousel
            title="Popular Events"
            data={EVENT}
            setting={{ slidesToShow: 3 }}
            path={getEventPagePath("Popular Events")}
            description="Lorem ipsum is the dummy text for placing any thing"
            event
          />
        </Col>
        <Col span={24}>
          <ViewAll cards={VIEW_ALL_EVENTS} path={getEventPagePath} />
        </Col>
        <Col span={24}>
          <EventCarousel
            title="Popular Events"
            data={EVENT}
            setting={{ slidesToShow: 3 }}
            path={getEventPagePath("Popular Events")}
            description="Lorem ipsum is the dummy text for placing any thing"
            event
          />
        </Col>
        <Col span={24}>
          <ViewAll cards={VIEW_ALL_EVENTS} path={getEventPagePath} />
        </Col>
        <Col span={24}>
          <EventCarousel
            title="Popular Events"
            data={EVENT}
            setting={{ slidesToShow: 3 }}
            path={getEventPagePath("Popular Events")}
            description="Lorem ipsum is the dummy text for placing any thing"
            event
          />
        </Col>
        <Col span={24}>
          <ViewAll cards={VIEW_ALL_EVENTS} path={getEventPagePath} />
        </Col>
        <Col span={24}>
          <Pagination
            currentPage={activePage}
            paginate={handlePageChange}
            sizePerPage={10}
            totalNumberOfValues={100}
          />
        </Col>
        <Col span={24}>
          <BlogCarousel title="Binge worthy blogs by members" />
        </Col>
      </Row>
    </Container>
  );
};

export default Events;
