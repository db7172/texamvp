import { Col, Row } from "antd";
import { TitleBreadCrumb } from "Models";
import { useEffect, useState } from "react";
import BlogCarousel from "../../components/common/carousel/BlogCarousel";
import WorkationCarousel from "../../components/common/carousel/WorkationCarousel";
import Container from "../../components/common/container/Container";
import PageHeader from "../../components/common/page-header/PageHeader";
import TitleBreadcrumb from "../../components/common/title-breadcrumb/TitleBreadcrumb";
import Pagination from "../../components/pagination";
import ViewAll from "../../components/view-all/ViewAll";
import FaqSection from "../../components/view-more-details/FaqSection";
import {
  getDestinationPagePath,
  getWorkationPagePath,
  RIGHT_SPACING_VALUE,
} from "../../constant/comman.const";
import firebase from "../../firebase";

const Workcations = () => {
  const [slashedTableName, setSlashedTableName] = useState<TitleBreadCrumb[]>(
    []
  );
  const [activePage, setActivePage] = useState(1);
  const [AllDestination, setAllDestination ] = useState([{}]);
  const [Workation, setWorkation ] = useState({});

  useEffect(() => {
    setSlashedTableName([
      {
        name: "Home",
        url: "/",
      },
      {
        name: "Workcations",
        url: "",
      },
    ]);
    // { description: "Netherlands", name: "Amsterdam", imgUrl: netherlands },
    firebase
      .firestore()
      .collection("destinations")
      .get()
      .then((querySnap) => {
        setAllDestination(
          querySnap.docs.map((doc) => ({ id: doc.id, description: doc.data().destinationDescription, name: doc.data().name, imgUrl: doc.data().banner }))
        );
      });

      firebase
      .firestore()
      .collection("workation")
      .get()
      .then((querySnap) => {
        setWorkation(
          querySnap.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
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
            <PageHeader title={"Workcations"} />
          </div>
        </Col>
        <Col span={24}>
          <ViewAll cards={AllDestination} path={getDestinationPagePath} />
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
          <WorkationCarousel
            title="Workcation of the month"
            data={Workation}
            setting={{ slidesToShow: 3 }}
            description="Lorem ipsum is the dummy text for placing any thing"
            path={getWorkationPagePath("Workcation of the month")}
          />
        </Col>
        <Col span={24}>
          <WorkationCarousel
            title="Popular Workation"
            data={Workation}
            setting={{ slidesToShow: 3 }}
            description="Lorem ipsum is the dummy text for placing any thing"
            path={getWorkationPagePath("Popular Workation")}
          />
        </Col>
        <Col span={24}>
          <FaqSection title="workation" />
        </Col>
        <Col span={24}>
          <BlogCarousel
            title="Blogs About Workcation"
            description="Lorem ipsum is the dummy text for placing any thing"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Workcations;
