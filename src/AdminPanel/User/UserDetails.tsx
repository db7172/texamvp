import { Button, Col, List, Modal, Row, Table } from "antd";
import { useState } from "react";
import { paginationSetting } from "../constant/common.cont";
import { mockUserData } from "./mockUser";

const UserDetails = () => {
  const [activeUserDetails, setActiveUserDetails] = useState<any>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewMoreClick = (data: any) => {
    setActiveUserDetails(data);
    setIsModalOpen(true);
  };

  const handleModalCancel = () => {
    setIsModalOpen(false);
    setActiveUserDetails(undefined);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Service",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "People",
      dataIndex: "noPpl",
      key: "noPpl",
    },
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Cost",
      dataIndex: "totalCost",
      key: "totalCost",
    },
    {
      title: "Paid",
      dataIndex: "paid",
      key: "paid",
    },
    {
      title: "Unpaid",
      dataIndex: "unpaid",
      key: "unpaid",
    },
    {
      title: "Booking Date",
      dataIndex: "bookingDate",
      key: "bookingDate",
    },
    {
      title: "Completed Date",
      dataIndex: "completedDate",
      key: "completedDate",
    },
  ];

  return (
    <div className="page-layout">
      <div className="home-cover">
        <div className="tw-flex tw-justify-between tw-items-center tw-mb-5">
          <p className="tw-font-medium tw-text-base">Users Details</p>
          <Button className="tw-texa-button tw-m-0">Download CSV</Button>
        </div>
        <List
          itemLayout="vertical"
          size="large"
          pagination={paginationSetting}
          header={
            <Row gutter={24} className="tw-px-6">
              <Col span={5}>Name</Col>
              <Col span={5}>ID</Col>
              <Col span={4}>Number</Col>
              <Col span={6}>Email</Col>
              <Col span={4}>Action</Col>
            </Row>
          }
          dataSource={mockUserData}
          renderItem={(item, i) => (
            <List.Item key={i}>
              <Row gutter={24}>
                <Col span={5} className="tw-items-center tw-flex">
                  {item.name}
                </Col>
                <Col span={5} className="tw-items-center tw-flex">
                  {item.userId}
                </Col>
                <Col span={4} className="tw-items-center tw-flex">
                  {item.number}
                </Col>
                <Col span={6} className="tw-items-center tw-flex">
                  {item.email}
                </Col>
                <Col span={4}>
                  <Button
                    className="tw-texa-button tw-m-0"
                    onClick={() => handleViewMoreClick(item)}
                  >
                    View more
                  </Button>
                </Col>
              </Row>
            </List.Item>
          )}
        />
        <Modal
          title="User Details"
          width={1200}
          visible={isModalOpen}
          footer={null}
          onCancel={handleModalCancel}
        >
          <Table
            pagination={paginationSetting}
            dataSource={activeUserDetails?.services || []}
            columns={columns}
          />
        </Modal>
      </div>
    </div>
  );
};

export default UserDetails;
