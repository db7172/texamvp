import { LeftOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import { Link, useParams } from "react-router-dom";
import Container from "../../../../components/common/container/Container";
import FormLeftPenal from "../../../../components/influencer/form/FormLeftPenal";

const ActivityForm = () => {
  const { activityType } = useParams<{ activityType: string }>();

  const createActivity = () => {
    return (
      <div className="tw-w-80 popover-right">
        <div className="popover-right-inner">
          <h4 className="tw-text-lg tw-font-medium tw-mb-3">Create Activity</h4>
          <p className="tw-text-secondary-color">
            Nunc molestie auctor eget vulputate venenatis, etiam ac orci. Tortor
            quam dolor amet sed urna lorem. Semper interdum odio tempus sit ac
            ornare tortor maecenas elementum. Mauris senectus etiam facilisi
            consequat sed mauris, enim.
          </p>
        </div>
      </div>
    );
  };

  return (
    <Container>
      <Link to="/influencer/dashboard" className="tw-my-10 tw-inline-block">
        <div className="tw-flex tw-items-center tw-text-secondary-color hover:tw-text-secondary-color">
          <LeftOutlined className="tw-mr-1" />{" "}
          <span className="tw-underline tw-font-medium">GO BACK</span>
        </div>
      </Link>
      <Row gutter={20} className="">
        <Col span={6}>
          <FormLeftPenal />
        </Col>
        <Col span={18}>
          <Row>
            <Col span={18} className="tw-p-8 tw-shadow-card">
              <div className="tw-relative">
                <h1 className="tw-font-medium tw-text-lg tw-mb-5">
                  Create an Activity
                </h1>
                <p className="tw-text-secondary-color">
                  Aliquam id morbi in dictumst. Molestie lacus curabitur ac
                  quis. Cursus vel neque amet praesent aenean aliquam ut massa
                  turpis. Mattis consequat, imperdiet ultricies dolor, lectus.
                  Vitae viverra libero, vitae fermentum in duis.
                </p>
                {createActivity()}
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ActivityForm;
