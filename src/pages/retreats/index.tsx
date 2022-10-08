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
  getDestinationPagePath,
  getRetreatPagePath,
  RIGHT_SPACING_VALUE,
} from "../../constant/comman.const";
import { RETREAT, VIEW_ALL_EVENTS } from "../../constant/dummyData";

const Retreats = () => {
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
        name: "Retreats",
        url: "",
      },
    ]);
  }, []);

  const handlePageChange = (pageNumber: number) => {
    setActivePage(pageNumber);
  };

  return (
    <Container>
      <Row className="tw-top-m" gutter={[0, RIGHT_SPACING_VALUE]}>
        <Col span={24}>
          <TitleBreadcrumb titleLinks={slashedTableName} />
          <div className="tw-mt-5">
            <PageHeader title={"Retreat"} />
          </div>
        </Col>
        <Col span={24}>
          <ViewAll cards={VIEW_ALL_EVENTS} path={getDestinationPagePath} />
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
            event={undefined}
          />
        </Col>
        <Col span={24}>
          <EventCarousel
            title="Popular Retreat"
            data={RETREAT}
            setting={{ slidesToShow: 3 }}
            description="Lorem ipsum is the dummy text for placing any thing"
            path={getRetreatPagePath("Popular Retreat")}
            event={undefined}
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
          <FaqSection title="retreat" />
        </Col>
        <Col span={24}>
          <BlogCarousel
            title="Blogs About Retreat"
            description="Lorem ipsum is the dummy text for placing any thing"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Retreats;
