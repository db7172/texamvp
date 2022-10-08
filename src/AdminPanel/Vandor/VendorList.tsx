import { Button, Col, Form, Input, List, Row } from "antd";
import { debounce } from "lodash";
import { useEffect, useState } from "react";
import Loader from "../../components/common/Loader/Loader";
import { paginationSetting } from "../constant/common.cont";

type Props = {
  listData: any[];
};

const VendorList = ({ listData }: Props) => {
  const [data, setData] = useState(listData);
  const [searchTerm, setSearchTerm] = useState("");

  const handleUserFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (term.length > 0) {
      setData(listData.filter((d) => d.id.toString().includes(term)));
    } else {
      setData(listData);
    }
  };

  useEffect(() => {
    setData(listData);
  }, [listData]);

  const debounceUseridFilter = debounce(handleUserFilter, 500);
  if (data) {
    return (
      <div>
        <Form size="middle" layout="vertical">
          <Row>
            <Col span={6}>
              <Form.Item name="userId" label="Vendor ID">
                <Input
                  value={searchTerm}
                  placeholder="Enter User Id"
                  onChange={debounceUseridFilter}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <List
          itemLayout="vertical"
          size="large"
          pagination={paginationSetting}
          header={
            <Row gutter={24} className="tw-px-6">
              <Col span={4}>Name</Col>
              <Col span={6}>id</Col>
              <Col span={4}>Number</Col>
              <Col span={6}>Email</Col>
              <Col span={4}>Action</Col>
            </Row>
          }
          dataSource={data}
          renderItem={(item) => (
            <List.Item key={item.title}>
              <Row gutter={24}>
                <Col span={4} className="tw-items-center tw-flex">
                  {item.data.name}
                </Col>
                <Col span={6} className="tw-items-center tw-flex">
                  {item.id}
                </Col>
                <Col span={4} className="tw-items-center tw-flex">
                  {item.data.number}
                </Col>
                <Col span={6} className="tw-items-center tw-flex">
                  {item.data.email}
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
      </div>
    );
  } else {
    return <Loader size="default" type="default" />;
  }
};

export default VendorList;
