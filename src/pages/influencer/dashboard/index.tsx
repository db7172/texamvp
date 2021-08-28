import { Col, Row } from "antd";
import Container from "../../../components/common/container/Container";
import Deshboardopshan from "../../../components/influencer/deshboardopshan/Deshboardopshan";
import Influencersidebar from "../../../components/influencer/influencersidebar/Influencersidebar";

const Dashboard = () => {
  return (
    <Container>
      <Row gutter={30} className="tw-mt-6">
        <Col span={5}>
          <Influencersidebar />
        </Col>
        <Col span={19}>
          <div className="tw-text-center tw-mt-16">
            <h4 className="tw-subtitle-other-page tw-mb-5">
              What type of services you want to create ?
            </h4>
            <p className="tw-text-secondary-color tw-text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit
              varius sed facilisi quam interdum nisl, aliquam. Id <br />{" "}
              eleifend odio etiam etiam massa purus molestie. Arcu aenean sed
              pretium integer.
            </p>
            <Row gutter={40} className="tw-mt-10">
              <Col span={8}>
                <Deshboardopshan />
              </Col>
              <Col span={8}>
                <Deshboardopshan />
              </Col>
              <Col span={8}>
                <Deshboardopshan />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
