import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import ActivityCarousel from "../../components/common/carousel/ActivityCarousel";
import BlogCarousel from "../../components/common/carousel/BlogCarousel";
import Container from "../../components/common/container/Container";
import PageHeader from "../../components/common/page-header/PageHeader";
import TitleBreadcrumb from "../../components/common/title-breadcrumb/TitleBreadcrumb";
import Pagination from "../../components/pagination";
import ViewAll from "../../components/view-all/ViewAll";
import { getActivityPagePath, PAGE_SPACING } from "../../constant/comman.const";
import { ACTIVITY, VIEW_ALL_CARD } from "../../constant/dummyData";

const Activites = () => {
  const [slashedTableName, setSlashedTableName] = useState([]);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    setSlashedTableName([
      {
        name: "Home",
        url: "/",
      },
      {
        name: "Activites",
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
      <Row className="tw-mt-20" gutter={PAGE_SPACING}>
        <Col span={24}>
          <TitleBreadcrumb titleLinks={slashedTableName} />
          <div className="tw-mt-5">
            <PageHeader title={"Activites"} />
          </div>
        </Col>
        <Col span={24}>
          <ViewAll cards={VIEW_ALL_CARD} path={getActivityPagePath} />
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
          <ViewAll cards={VIEW_ALL_CARD} path={getActivityPagePath} />
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
          <ViewAll cards={VIEW_ALL_CARD} path={getActivityPagePath} />
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
          <ViewAll cards={VIEW_ALL_CARD} path={getActivityPagePath} />
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
          <BlogCarousel title="Binge worthy blogs by members" />
        </Col>
      </Row>
    </Container>
  );
};

export default Activites;
