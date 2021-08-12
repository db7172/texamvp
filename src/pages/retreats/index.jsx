import { Col, Row } from "antd";
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
import {
  getDestinationPagePath,
  getRetreatPagePath,
  PAGE_SPACING,
} from "../../constant/comman.const";
import { RETREAT, VIEW_ALL_DESTINATION } from "../../constant/dummyData";

const Retreats = () => {
  const [slashedTableName, setSlashedTableName] = useState([]);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    setSlashedTableName([
      {
        name: "Home",
        url: "/",
      },
      {
        name: "Retreats",
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
            <PageHeader title={"Retreat"} />
          </div>
        </Col>
        <Col span={24}>
          <ViewAll cards={VIEW_ALL_DESTINATION} path={getDestinationPagePath} />
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
            title="Retreat of the Month"
            data={RETREAT}
            setting={{ slidesToShow: 3 }}
            description="Lorem ipsum is the dummy text for placing any thing"
            path={getRetreatPagePath("Retreat of the Month")}
          />
        </Col>
        <Col span={24}>
          <EventCarousel
            title="Popular Retreat"
            data={RETREAT}
            setting={{ slidesToShow: 3 }}
            description="Lorem ipsum is the dummy text for placing any thing"
            path={getRetreatPagePath("Popular Retreat")}
          />
        </Col>
        <Col span={24}>
          <Title
            title="Retreat By Destionation"
            description="Lorem ipsum is the dummy text for placing any thing"
            path="#"
          />
          <div className="tw-mt-3">
            <DestinationCarousel setting={{ slidesToShow: 4 }} />
          </div>
        </Col>
        <Col span={24}>
          <BlogCarousel title="Things to do in While Retreat" />
        </Col>
        <Col span={24}>
          <BlogCarousel title="Places to visit For Retreat" />
        </Col>
      </Row>
    </Container>
  );
};

export default Retreats;
