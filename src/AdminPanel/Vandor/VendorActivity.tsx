import { Button, Col, Form, List, Modal, Row, Select } from "antd";
import { capitalize } from "lodash";
import { useEffect, useState } from "react";
import { paginationSetting } from "../constant/common.cont";
import {
  ALL_ACTIVITY,
  ALL_EVENT,
  ALL_WORKCATION,
  ALL_RETREAT,
} from "../PopularService/mockData";
import ActivityModalForm from "./ModalForm/ActivityModalForm";
import EventModalForm from "./ModalForm/EventModalForm";
import RetreatModalForm from "./ModalForm/RetreatModalForm";
import WorkcationModalForm from "./ModalForm/WorkcationModalForm";

const serviceType = ["activity", "event", "retreat", "workcation"];
const dummyActivityData = [...ALL_ACTIVITY];

const dummyEventData = [...ALL_EVENT];

const dummyWorkcationData = [...ALL_WORKCATION];

const VendorActivity = () => {
  const [selectedService, setSelectedService] = useState(serviceType[0]);
  const [listItem, setListItem] = useState<any[]>([]);

  //activity states
  const [activeActivity, setActiveActivity] = useState<any>({});
  const [isActivityModalOpen, setIsActivityModalOpen] = useState(false);

  //event states
  const [activeEvent, setActiveEvent] = useState<any>({});
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);

  //retreat states
  const [activeRetreat, setActiveRetreat] = useState<any>({});
  const [isRetreatModalOpen, setIsRetreatModalOpen] = useState(false);

  //workcation state
  const [activeWorkcation, setActiveWorkcation] = useState<any>({});
  const [isWorkcationModalOpen, setIsWorkcationModalOpen] = useState(false);

  const handleListItemUpdate = (value: string) => {
    switch (value) {
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
            originalData: d,
          };
        });
        setListItem(activityListItem);
        break;
      case "event":
        const eventListItem = dummyEventData.map((d) => {
          return {
            title: d.data.eventName,
            destination: d.data.location?.destination || "-",
            id: d.id,
            type: d.data.eventType,
            activeDate: d.data.sailentFeatures.startDate,
            originalData: d,
          };
        });
        setListItem(eventListItem);
        break;
      case "retreat":
        const retreatListItem = ALL_RETREAT.map((d) => {
          return {
            title: d.data.retreatName,
            destination: d.data.destination.destination || "-",
            id: d.id,
            type: "Workcation",
            activeDate: d.data.departureDates[0].dateRange.start,
            originalData: d,
          };
        });
        setListItem(retreatListItem);
        break;
      case "workcation":
        const workcationListItem = dummyWorkcationData.map((d) => {
          return {
            title: d.data.workationName,
            destination: d.data.destinations.destination || "-",
            id: d.id,
            type: "Retreat",
            activeDate: d.data.checkinAndCheckOutTime.checkIn,
            originalData: d,
          };
        });
        setListItem(workcationListItem);
        break;

      default:
        break;
    }
  };

  const handleSelectionChange = (value: string) => {
    setSelectedService(value);
  };

  const handleViewClick = (item: any, service: string) => {
    switch (service) {
      case "activity":
        setActiveActivity(item);
        setIsActivityModalOpen(true);
        break;
      case "event":
        setActiveEvent(item);
        setIsEventModalOpen(true);
        break;
      case "retreat":
        setActiveRetreat(item);
        setIsRetreatModalOpen(true);
        break;
      case "workcation":
        setActiveWorkcation(item);
        setIsWorkcationModalOpen(true);
        break;

      default:
        break;
    }
  };

  const handleActivityModalCancel = () => {
    setIsActivityModalOpen(false);
    setActiveActivity({});
  };

  const handleEventModalCancel = () => {
    setIsEventModalOpen(false);
    setActiveEvent({});
  };

  const handleRetreatModalCancel = () => {
    setIsRetreatModalOpen(false);
    setActiveRetreat({});
  };

  const handleWorkcationModalCancel = () => {
    setIsWorkcationModalOpen(false);
    setActiveWorkcation({});
  };

  useEffect(() => {
    handleListItemUpdate(selectedService);
  }, [selectedService]);

  return (
    <div>
      <Form size="middle" layout="vertical">
        <Row>
          <Col span={6}>
            <Form.Item name="serviceType" label="Service Type">
              <Select
                placeholder="Select event type"
                defaultValue={selectedService}
                onChange={handleSelectionChange}
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
        renderItem={(item) => (
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
                    handleViewClick(item.originalData, selectedService)
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
              handleModalClose={handleActivityModalCancel}
            />
          </div>
        </Modal>
      )}

      {isEventModalOpen && (
        <Modal
          title="Event Modal"
          visible={isEventModalOpen}
          onCancel={handleEventModalCancel}
          width={650}
          footer={null}
          className="tw-top-5 no-padding-modal"
        >
          <div
            style={{ height: 700 }}
            className="tw-overflow-y-auto tw-py-3 tw-px-7"
          >
            <EventModalForm
              data={activeEvent}
              handleModalClose={handleEventModalCancel}
            />
          </div>
        </Modal>
      )}

      {isRetreatModalOpen && (
        <Modal
          title="Retreat Modal"
          visible={isRetreatModalOpen}
          onCancel={handleRetreatModalCancel}
          width={650}
          footer={null}
          className="tw-top-5 no-padding-modal"
        >
          <div
            style={{ height: 700 }}
            className="tw-overflow-y-auto tw-py-3 tw-px-7"
          >
            <RetreatModalForm
              data={activeRetreat}
              handleModalClose={handleRetreatModalCancel}
            />
          </div>
        </Modal>
      )}

      {isWorkcationModalOpen && (
        <Modal
          title="Workcation Modal"
          visible={isWorkcationModalOpen}
          onCancel={handleWorkcationModalCancel}
          width={650}
          footer={null}
          className="tw-top-5 no-padding-modal"
        >
          <div
            style={{ height: 700 }}
            className="tw-overflow-y-auto tw-py-3 tw-px-7"
          >
            <WorkcationModalForm
              data={activeWorkcation}
              handleModalClose={handleWorkcationModalCancel}
            />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default VendorActivity;
