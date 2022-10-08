import { Button, Col, Row, Form, Select } from "antd";
import classNames from "classnames";
import { useEffect, useState } from "react";
import CompletedTabComponent from "./completed-tab-component/CompletedTabComponent";
import { COMPLETED, highLowOptions } from "./data";
import { ButtonType } from "./DetailsTab";
import firebase from "../../../firebase";

const CompletedTab = () => {
  const [activeButton, setActiveButton] = useState<ButtonType>("activity");
  const [activity, setActivity] = useState([]) as any;

  useEffect(() => {
    const user = firebase.auth().currentUser;
    if (user) {
      firebase
        .firestore()
        .collection("completedTours")
        .where("venderId", "==", user.uid)
        .get()
        .then((querySnap) => {
          setActivity(
            querySnap.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
          );
        });
    }
  }, []);


  return (
    <Row gutter={[0, 40]}>
      <Col span={24}>
        <Row gutter={20} className="tw-items-center">
          <Col span={5}>
            <p className="tw-font-bold tw-text-3xl tw-text-secondary-color">
              Completed
            </p>
          </Col>
          <Col span={19} className="tw-bg-white tw-shadow-card">
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
          onValuesChange={(values) => {}}
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
        {activeButton === "activity" && (
          <CompletedTabComponent activity={activity} />
        )}
        {activeButton === "event" && (
          <CompletedTabComponent data={COMPLETED.EVENT} />
        )}
        {activeButton === "retreat" && (
          <CompletedTabComponent data={COMPLETED.RETREAT} />
        )}
      </Col>
    </Row>
  );
};

export default CompletedTab;
