import { Button, Col, List, Row } from "antd";
import { CheckCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { paginationSetting } from "../constant/common.cont";

type Props = {
  listData: any[];
  handleServiceSelection: (serviceType: string, id: string) => void;
  serviceType: string;
};

const ServiceList = ({
  listData,
  handleServiceSelection,
  serviceType,
}: Props) => {
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={paginationSetting}
      header={
        <Row gutter={20} className="tw-px-6">
          <Col span={11}>Title</Col>
          <Col span={5}>Price</Col>
          <Col span={4}>Sales</Col>
          <Col span={4}>Action</Col>
        </Row>
      }
      dataSource={listData}
      renderItem={(item) => (
        <List.Item key={item.title}>
          <Row gutter={20}>
            <Col span={11} className="tw-items-center tw-flex">
              {item.title}
            </Col>
            <Col span={5} className="tw-items-center tw-flex">
              {item.price}
            </Col>
            <Col span={4} className="tw-items-center tw-flex">
              {item.sell}
            </Col>
            <Col span={4}>
              <Button
                className="tw-m-0 tw-flex-center"
                icon={
                  item.isSelected ? (
                    <CheckCircleOutlined className="tw-text-lg tw-text-yellow-color" />
                  ) : (
                    <PlusCircleOutlined className="tw-text-lg" />
                  )
                }
                onClick={() => handleServiceSelection(serviceType, item.id)}
              />
            </Col>
          </Row>
        </List.Item>
      )}
    />
  );
};

export default ServiceList;
