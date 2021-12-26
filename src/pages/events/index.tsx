import { Col, Row } from "antd";
import { TitleBreadCrumb } from "Models";
import { useEffect, useState } from "react";
import BlogCarousel from "../../components/common/carousel/BlogCarousel";
import DestinationCarousel from "../../components/common/carousel/DestinationCarousel";
import EventCarousel from "../../components/common/carousel/EventCarousel";
import Container from "../../components/common/container/Container";
import PageHeader from "../../components/common/page-header/PageHeader";
import TitleBreadcrumb from "../../components/common/title-breadcrumb/TitleBreadcrumb";
import Title from "../../components/common/title/Title";
import Pagination from "../../components/pagination";
import ViewAll from "../../components/view-all/ViewAll";
import FaqSection from "../../components/view-more-details/FaqSection";
import {
  getEventPagePath,
  RIGHT_SPACING_VALUE,
} from "../../constant/comman.const";
import { EVENT, VIEW_ALL_EVENTS } from "../../constant/dummyData";

const Events = () => {
  const [slashedTableName, setSlashedTableName] = useState<TitleBreadCrumb[]>(
    []
  );
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

  const handlePageChange = (pageNumber: number) => {
    console.log(`active page is ${pageNumber}`);
    setActivePage(pageNumber);
  };

  return (
    <Container>
      <Row className="tw-top-m" gutter={[0, RIGHT_SPACING_VALUE]}>
        <Col span={24}>
          <TitleBreadcrumb titleLinks={slashedTableName} />
          <div className="tw-mt-5">
            <PageHeader title={"Events"} />
          </div>
        </Col>
        <Col span={24}>
          <ViewAll cards={VIEW_ALL_EVENTS} path={getEventPagePath} />
        </Col>
        <Col span={24} className="tw-flex tw-justify-center">
          <Pagination
            currentPage={activePage}
            paginate={handlePageChange}
            sizePerPage={10}
            totalNumberOfValues={100}
          />
        </Col>
        <Col span={24}>
          <EventCarousel
            title="Events of the Month"
            data={EVENT}
            setting={{ slidesToShow: 3 }}
            path={getEventPagePath("Events of the Month")}
            description="Lorem ipsum is the dummy text for placing any thing"
            event
          />
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
          <Title
            title="Events By Destionation"
            description="Lorem ipsum is the dummy text for placing any thing"
            path="#"
          />
          <div className="tw-mt-3">
            <DestinationCarousel setting={{ slidesToShow: 4 }} />
          </div>
        </Col>
        <Col span={24}>
          <FaqSection title="event" />
        </Col>
        <Col span={24}>
          <BlogCarousel
            title="Blogs About Events"
            description="Lorem ipsum is the dummy text for placing any thing"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Events;
