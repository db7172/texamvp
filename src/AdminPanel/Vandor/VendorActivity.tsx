import { Button, Col, Form, List, Modal, Row, Select } from "antd";
import { capitalize } from "lodash";
import { useEffect, useState } from "react";
import { paginationSetting } from "../constant/common.cont";
import { ALL_ACTIVITY } from "../PopularService/mockData";
import ActivityModalForm from "./ModalForm/ActivityModalForm";

const serviceType = ["activity", "event", "retreat", "workcation"];
const dummyActivityData = [
  ...ALL_ACTIVITY,
  ...ALL_ACTIVITY,
  ...ALL_ACTIVITY,
  ...ALL_ACTIVITY,
];

const VendorActivity = () => {
  const [selectedService, setSelectedService] = useState(serviceType[0]);
  const [listItem, setListItem] = useState<any[]>([]);

  //activity states
  const [activeActivity, setActiveActivity] = useState<any>({});
  const [isActivityModalOpen, setIsActivityModalOpen] = useState(false);

  useEffect(() => {
    switch (selectedService) {
      case "activity":
        const activityListItem = dummyActivityData.map((d) => {
          return {
            title: d.data.activityName,
            destination:
              d.data?.destinations?.destination ||
              d.data.destination?.map((d) => d.destination).join(", "),
            id: d.id,
            type:
              d.data.collection_name === "hr_sg_avy"
                ? "Single Day"
                : "Multi Day",
            activeDate: d.data.departureDate[0].dateRange.start,
          };
        });
        setListItem(activityListItem);
        break;
      case "event":
        setListItem([]);
        break;
      case "retreat":
        setListItem([]);
        break;
      case "workcation":
        setListItem([]);
        break;

      default:
        break;
    }
  }, [selectedService]);

  const handleViewClick = (id: string, service: string, index: number) => {
    console.log({ id, service, index });
    switch (service) {
      case "activity":
        setActiveActivity(dummyActivityData[index]);
        setIsActivityModalOpen(true);
        break;
      case "event":
        break;
      case "retreat":
        break;
      case "workcation":
        break;

      default:
        break;
    }
  };

  const handleActivityModalCancel = () => {
    setIsActivityModalOpen(false);
    setActiveActivity({});
  };

  return (
    <div>
      <Form size="middle" layout="vertical">
        <Row>
          <Col span={6}>
            <Form.Item name="serviceType" label="Service Type">
              <Select
                placeholder="Select event type"
                defaultValue={selectedService}
                onChange={(value) => setSelectedService(value)}
              >
                {serviceType.map((d) => (
                  <Select.Option value={d}>{capitalize(d)}</Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>
      </Form>

      <List
        itemLayout="vertical"
        size="large"
        pagination={paginationSetting}
        header={
          <Row gutter={20} className="tw-px-6">
            <Col span={7}>Title</Col>
            <Col span={7}>Destination</Col>
            <Col span={3}>Type</Col>
            <Col span={4}>Active Date</Col>
            <Col span={3}>Action</Col>
          </Row>
        }
        dataSource={listItem}
        renderItem={(item, index) => (
          <List.Item key={item.title}>
            <Row gutter={20}>
              <Col span={7} className="tw-items-center tw-flex">
                {item.title}
              </Col>
              <Col span={7} className="tw-items-center tw-flex">
                {item.destination}
              </Col>
              <Col span={3} className="tw-items-center tw-flex">
                {item.type}
              </Col>
              <Col span={4} className="tw-items-center tw-flex">
                {item.activeDate}
              </Col>
              <Col span={3} className="tw-items-center tw-flex">
                <Button
                  type="default"
                  className="tw-texa-button tw-m-0"
                  onClick={() =>
                    handleViewClick(item.id, selectedService, index)
                  }
                >
                  View Detail
                </Button>
              </Col>
            </Row>
          </List.Item>
        )}
      />

      {isActivityModalOpen && (
        <Modal
          title="Activity Modal"
          visible={isActivityModalOpen}
          onCancel={handleActivityModalCancel}
          width={650}
          footer={null}
          className="tw-top-5 no-padding-modal"
        >
          <div
            style={{ height: 700 }}
            className="tw-overflow-y-auto tw-py-3 tw-px-7"
          >
            <ActivityModalForm
              type={
                activeActivity.data.collection_name === "hr_sg_avy"
                  ? "singleDay"
                  : "multiDay"
              }
              data={activeActivity}
            />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default VendorActivity;
