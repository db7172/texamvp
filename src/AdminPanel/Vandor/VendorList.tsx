import { Button, Col, List, Row } from "antd";
import { paginationSetting } from "../constant/common.cont";

type Props = {
  listData: any[];
};

const VendorList = ({ listData }: Props) => {
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={paginationSetting}
      header={
        <Row gutter={20} className="tw-px-6">
          <Col span={7}>Name</Col>
          <Col span={6}>Number</Col>
          <Col span={7}>Email</Col>
          <Col span={4}>Action</Col>
        </Row>
      }
      dataSource={listData}
      renderItem={(item) => (
        <List.Item key={item.title}>
          <Row gutter={20}>
            <Col span={7} className="tw-items-center tw-flex">
              {item.name}
            </Col>
            <Col span={6} className="tw-items-center tw-flex">
              {item.number}
            </Col>
            <Col span={7} className="tw-items-center tw-flex">
              {item.email}
            </Col>
            <Col span={4} className="tw-items-center tw-flex">
              <Button type="default" className="tw-texa-button tw-m-0">
                View Detail
              </Button>
            </Col>
          </Row>
        </List.Item>
      )}
    />
  );
};

export default VendorList;
