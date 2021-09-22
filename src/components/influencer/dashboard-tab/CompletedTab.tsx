import { Button, Col, Row, Form, Select } from "antd";
import classNames from "classnames";
import { useState } from "react";
import { highLowOptions } from "./data";
import { ButtonType } from "./DetailsTab";

const CompletedTab = () => {
  const [activeButton, setActiveButton] = useState<ButtonType>("activity");

  return (
    <Row gutter={[0, 40]}>
      <Col span={24}>
        <Row gutter={20} className="tw-items-center">
          <Col span={4}>
            <p className="tw-font-bold tw-text-3xl tw-text-secondary-color">
              Completed
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
            <Col span={8}>
              <Form.Item label="Price" name="price">
                <Select
                  placeholder="Price"
                  className="tw-w-full"
                  options={highLowOptions}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Interest Shown" name="iterestShow">
                <Select
                  placeholder="Interest Shown"
                  className="tw-w-full"
                  options={highLowOptions}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
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
        {activeButton === "activity" && <h1>activity</h1>}
        {activeButton === "event" && <h1>event</h1>}
        {activeButton === "retreat" && <h1>retreat</h1>}
      </Col>
    </Row>
  );
};

export default CompletedTab;
