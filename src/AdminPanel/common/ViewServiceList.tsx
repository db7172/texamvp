import { Col, List, Row } from "antd";
import { paginationSetting } from "../constant/common.cont";

type Props = {
  listData: any[];
};

const ViewServiceList = ({ listData }: Props) => {
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={paginationSetting}
      header={
        <Row gutter={20} className="tw-px-6">
          <Col span={12}>Title</Col>
          <Col span={6}>Price</Col>
          <Col span={6}>Sales</Col>
        </Row>
      }
      dataSource={listData}
      renderItem={(item) => (
        <List.Item key={item.title}>
          <Row gutter={20}>
            <Col span={12} className="tw-items-center tw-flex">
              {item.title}
            </Col>
            <Col span={6} className="tw-items-center tw-flex">
              {item.price}
            </Col>
            <Col span={6} className="tw-items-center tw-flex">
              {item.sell}
            </Col>
          </Row>
        </List.Item>
      )}
    />
  );
};

export default ViewServiceList;
