import { Button, Col, Row, Select, Form } from "antd";
import classNames from "classnames";
import { useState } from "react";
import { DETAILS } from "./data";
import DetailsTabCardContainer from "./details-tab-component/DetailsTabCardContainer";

type ButtonType = "activity" | "event" | "retreat";

const statusOptions = [
  {
    value: "",
    label: "Select Option",
  },
  {
    value: "underProcess",
    label: "Under Process",
  },
  {
    value: "uploaded",
    label: "Uploaded",
  },
  {
    value: "onProgress",
    label: "On Progress",
  },
  {
    value: "booked",
    label: "Booked",
  },
  {
    value: "rejected",
    label: "Rejected",
  },
];

const highLowOptions = [
  {
    value: "",
    label: "Select Option",
  },
  {
    value: "highToLow",
    label: "High to Low",
  },
  {
    value: "lowToHigh",
    label: "Low to High",
  },
];

const DetailsTab = () => {
  const [activeButton, setActiveButton] = useState<ButtonType>("activity");

  return (
    <Row gutter={[0, 40]}>
      <Col span={24}>
        <Row gutter={20} className="tw-items-center">
          <Col span={4}>
            <p className="tw-font-bold tw-text-3xl tw-text-secondary-color">
              Details
            </p>
          </Col>
          <Col span={20} className="tw-bg-white tw-shadow-card">
            <div className="tw-py-5 tw-px-5 tw-flex tw-gap-5">
              <Button
                type="default"
                className={classNames(
                  "tw-m-0 border-visible",
                  activeButton === "activity"
                    ? "tw-border-texa-active"
                    : "tw-border-texa-normal"
                )}
                onClick={() => setActiveButton("activity")}
              >
                Activity
              </Button>
              <Button
                type="default"
                className={classNames(
                  "tw-m-0 border-visible",
                  activeButton === "event"
                    ? "tw-border-texa-active"
                    : "tw-border-texa-normal"
                )}
                onClick={() => setActiveButton("event")}
              >
                Event
              </Button>
              <Button
                type="default"
                className={classNames(
                  "tw-m-0 border-visible",
                  activeButton === "retreat"
                    ? "tw-border-texa-active"
                    : "tw-border-texa-normal"
                )}
                onClick={() => setActiveButton("retreat")}
              >
                Retreat
              </Button>
            </div>
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Form
          size="large"
          autoComplete="off"
          layout="vertical"
          onValuesChange={(values) => console.log(values)}
        >
          <Row gutter={20}>
            <Col span={6}>
              <Form.Item label="Status" name="status">
                <Select
                  placeholder="Status"
                  className="tw-w-full"
                  options={statusOptions}
                />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="Price" name="price">
                <Select
                  placeholder="Price"
                  className="tw-w-full"
                  options={highLowOptions}
                />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="Interest Shown" name="iterestShow">
                <Select
                  placeholder="Interest Shown"
                  className="tw-w-full"
                  options={highLowOptions}
                />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="Number of Bookings" name="noOfBooking">
                <Select
                  placeholder="Number of Bookings"
                  className="tw-w-full"
                  options={highLowOptions}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
        {activeButton === "activity" && (
          <DetailsTabCardContainer data={DETAILS.ACTIVITY} />
        )}
        {activeButton === "event" && (
          <DetailsTabCardContainer data={DETAILS.EVENT} />
        )}
        {activeButton === "retreat" && (
          <DetailsTabCardContainer data={DETAILS.RETREAT} />
        )}
      </Col>
    </Row>
  );
};

export default DetailsTab;
