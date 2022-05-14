import { Button, Col, List, Row } from "antd";
import { paginationSetting } from "../constant/common.cont";

const mockData = [
  {
    name: "Person Name",
    number: "+911234567890",
    email: "person.name@gmail.com",
    joiningDate: "01/02/2022",
  },
  {
    name: "Person Name",
    number: "+911234567890",
    email: "person.name@gmail.com",
    joiningDate: "01/02/2022",
  },
  {
    name: "Person Name",
    number: "+911234567890",
    email: "person.name@gmail.com",
    joiningDate: "01/02/2022",
  },
  {
    name: "Person Name",
    number: "+911234567890",
    email: "person.name@gmail.com",
    joiningDate: "01/02/2022",
  },
  {
    name: "Person Name",
    number: "+911234567890",
    email: "person.name@gmail.com",
    joiningDate: "01/02/2022",
  },
];

const UserActivity = () => {
  return (
    <div className="page-layout">
      <div className="home-cover">
        <div className="tw-flex tw-justify-between tw-items-center tw-mb-5">
          <p className="tw-font-medium tw-text-base">Users Activity</p>
          <Button className="tw-texa-button tw-m-0">Download CSV</Button>
        </div>
        <List
          itemLayout="vertical"
          size="large"
          pagination={paginationSetting}
          header={
            <Row gutter={24} className="tw-px-6">
              <Col span={6}>Name</Col>
              <Col span={6}>Number</Col>
              <Col span={6}>Email</Col>
              <Col span={6}>Joining Date</Col>
            </Row>
          }
          dataSource={mockData}
          renderItem={(item, i) => (
            <List.Item key={i}>
              <Row gutter={24}>
                <Col span={6} className="tw-items-center tw-flex">
                  {item.name}
                </Col>
                <Col span={6} className="tw-items-center tw-flex">
                  {item.number}
                </Col>
                <Col span={6} className="tw-items-center tw-flex">
                  {item.email}
                </Col>
                <Col span={6}>{item.joiningDate}</Col>
              </Row>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default UserActivity;
