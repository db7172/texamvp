import { Col, Row } from "antd";
import { TitleBreadCrumb } from "Models";
import { useEffect, useState } from "react";
import ActivityCarousel from "../../components/common/carousel/ActivityCarousel";
import BlogCarousel from "../../components/common/carousel/BlogCarousel";
import EventCarousel from "../../components/common/carousel/EventCarousel";
import WorkationCarousel from "../../components/common/carousel/WorkationCarousel";
import Container from "../../components/common/container/Container";
import PageHeader from "../../components/common/page-header/PageHeader";
import TitleBreadcrumb from "../../components/common/title-breadcrumb/TitleBreadcrumb";
import Pagination from "../../components/pagination";
import ViewAll from "../../components/view-all/ViewAll";

import {
  getActivityPagePath,
  getDestinationPagePath,
  getEventPagePath,
  getRetreatPagePath,
  getWorkationPagePath,
  RIGHT_SPACING_VALUE,
} from "../../constant/comman.const";
import {
  ACTIVITY,
  EVENT,
  RETREAT,
  VIEW_ALL_DESTINATION,
  WORKATION,
} from "../../constant/dummyData";

const DUMMY_DESCRIPTION =
  "The human instinct to explore new places and things is always there. People travel for all sorts of reasons, be it to spend time with their loved ones or today North Andaman and Baratang Island are also popular with travelers. From pristine beaches to bewildering Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team.";

const DestinationsPage = () => {
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
        name: "Destination",
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
            <PageHeader title="Destination" desc={DUMMY_DESCRIPTION} />
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
          <ActivityCarousel
            setting={{ slidesToShow: 3 }}
            title="Popular Activities"
            data={ACTIVITY}
            path={getActivityPagePath("Popular Activities")}
            description="Lorem ipsum is the dummy text for placing any thing"
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
          <WorkationCarousel
            title="Popular Workation"
            data={WORKATION}
            setting={{ slidesToShow: 3 }}
            description="Lorem ipsum is the dummy text for placing any thing"
            path={getWorkationPagePath("Popular Workation")}
          />
        </Col>
        <Col span={24}>
          <EventCarousel
            title="Popular Retreat"
            data={RETREAT}
            setting={{ slidesToShow: 3 }}
            description="Lorem ipsum is the dummy text for placing any thing"
            path={getRetreatPagePath("Popular Retreat")}
            event={false}
          />
        </Col>
        <Col span={24}>
          <BlogCarousel
            title="Binge worthy blogs by members"
            description="Lorem ipsum is the dummy text for placing any thing"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default DestinationsPage;
