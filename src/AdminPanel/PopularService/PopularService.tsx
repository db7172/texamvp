import { Button, Col, Row } from "antd";
import classNames from "classnames";
import { useEffect, useState } from "react";
import "../adminStyle.css";
import ServiceList from "../common/ServiceList";
import ViewServiceList from "../common/ViewServiceList";
import firebase from 'firebase/app';

const db = firebase.firestore();

type ButtonType = "activity" | "event" | "retreat" | "workcation";

const PopularService = ({ destination = "" }) => {
  const [activeButton, setActiveButton] = useState<ButtonType>("activity");
  const [allActivityData, setAllActivityData] = useState<any[]>([]);
  const [selectedActivityData, setSelectedActivityData] = useState<any[]>([]);

  const [singleDetails, setSingleDetails] = useState([] as any);
  const [multiDetails, setMultiDetails] = useState([] as any);
  const [events, setEvents] = useState([] as any);
  const [retreat, setRetreat] = useState([] as any);
  const [Workation, setWorkation] = useState([] as any);
//   useEffect(() => {
//     if (ALL_ACTIVITY.length) {
//       setAllActivityData(
//         ALL_ACTIVITY.map((data) => {
//           return {
//             title: data.data.activityName,
//             price: isString(data.data.payment)
//               ? indCurrency(data.data.payment)
//               : getPriceData(data.data.payment),
//             sell: 100,
//             id: data.id,
//             isSelected: false,
//           };
//         })
//       );
//     }
//   }, []);
let activity = [];

useEffect(() => {
    db.collection("hr_sg_avy")
      .get()
      .then((querySnap) => {
        setSingleDetails(
          querySnap.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
    db.collection("multi-activity")
      .get()
      .then((querySnap) => {
        setMultiDetails(
          querySnap.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
    db.collection("events")
      .get()
      .then((querySnap) => {
        setEvents(
          querySnap.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
    db.collection("retreat")
      .get()
      .then((querySnap) => {
        setRetreat(
          querySnap.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
      db.collection("workation")
      .get()
      .then((querySnap) => {
        setWorkation(
          querySnap.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
      return () => {
        setSingleDetails([]);
        setMultiDetails([]);
        setEvents([]);
        setRetreat([]);
        setWorkation([]);
      }
  }, []);
  activity = singleDetails.concat(multiDetails);

  const handleServiceSelection = (serviceType: string, id: string) => {
    switch (serviceType) {
      case "activity":
        setAllActivityData(
          allActivityData.map((data) => {
            if (data.id === id) {
              const selectedService = {
                ...data,
                isSelected: !data.isSelected,
              };
              if (selectedService.isSelected) {
                setSelectedActivityData((pre) => [...pre, selectedService]);
              }
              return selectedService;
            }

            return data;
          })
        );
        break;

      default:
        break;
    }
  };

  return (
    <Row gutter={[0, 0]}>
      <Col span={24}>
        <Row gutter={0} className="tw-items-center tw-mt-5">
          <Col span={24} className="tw-bg-white tw-shadow-card">
            <div className="tw-py-5 tw-px-10 tw-flex tw-gap-10">
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
              <Button
                type="default"
                className={classNames(
                  "tw-m-0 border-visible",
                  activeButton === "workcation"
                    ? "tw-border-texa-active"
                    : "tw-border-texa-normal"
                )}
                onClick={() => setActiveButton("workcation")}
              >
                Workcation
              </Button>
            </div>
          </Col>
        </Row>
      </Col>

      <Col span={24}>
        <div className="page-layout">
          <div className="home-cover">
            {activeButton === "activity" && (
              <ServiceList
                listData={activity}
                serviceType="activity"
                handleServiceSelection={handleServiceSelection}
              />
            )}
            {activeButton === "event" && (
              <ServiceList
                listData={events}
                serviceType="activity"
                handleServiceSelection={handleServiceSelection}
              />
            )}
            {activeButton === "retreat" && (
              <ServiceList
                listData={retreat}
                serviceType="activity"
                handleServiceSelection={handleServiceSelection}
              />
            )}
            {activeButton === "workcation" && (
              <ServiceList
                listData={Workation}
                serviceType="activity"
                handleServiceSelection={handleServiceSelection}
              />
            )}
          </div>
        </div>
      </Col>

      <Col span={24}>
        <div className="page-layout tw-py-0">
          <div className="home-cover">
            {activeButton === "activity" && (
              <>
                <div className="card-title">
                  <h3>Selected activity</h3>
                </div>
                <ViewServiceList listData={selectedActivityData} />
                <div className="tw-flex tw-justify-end tw-gap-5">
                  <div style={{ width: "200px" }}>
                    <Button
                      type="default"
                      className="tw-texa-button tw-w-full"
                      onClick={() => {
                      }}
                    >
                      Submit
                    </Button>
                  </div>
                  <div style={{ width: "200px" }}>
                    <Button
                      className="tw-w-full border-btn tw-rounded-lg"
                      onClick={() => {
                        setSelectedActivityData([]);
                      }}
                    >
                      Clear
                    </Button>
                  </div>
                </div>
              </>
            )}
            {activeButton === "event" && (
              <>
                <div className="card-title">
                  <h3>Selected event</h3>
                </div>
                <ViewServiceList listData={selectedActivityData} />
                <div className="tw-flex tw-justify-end tw-gap-5">
                  <div style={{ width: "200px" }}>
                    <Button
                      type="default"
                      className="tw-texa-button tw-w-full"
                      onClick={() => {
                      }}
                    >
                      Submit
                    </Button>
                  </div>
                  <div style={{ width: "200px" }}>
                    <Button
                      className="tw-w-full border-btn tw-rounded-lg"
                      onClick={() => {
                        setSelectedActivityData([]);
                      }}
                    >
                      Clear
                    </Button>
                  </div>
                </div>
              </>
            )}
            {activeButton === "retreat" && (
              <>
                <div className="card-title">
                  <h3>Selected retreat</h3>
                </div>
                <ViewServiceList listData={selectedActivityData} />
                <div className="tw-flex tw-justify-end tw-gap-5">
                  <div style={{ width: "200px" }}>
                    <Button
                      type="default"
                      className="tw-texa-button tw-w-full"
                      onClick={() => {
                      }}
                    >
                      Submit
                    </Button>
                  </div>
                  <div style={{ width: "200px" }}>
                    <Button
                      className="tw-w-full border-btn tw-rounded-lg"
                      onClick={() => {
                        setSelectedActivityData([]);
                      }}
                    >
                      Clear
                    </Button>
                  </div>
                </div>
              </>
            )}
            {activeButton === "workcation" && (
              <>
                <div className="card-title">
                  <h3>Selected workcation</h3>
                </div>
                <ViewServiceList listData={selectedActivityData} />
                <div className="tw-flex tw-justify-end tw-gap-5">
                  <div style={{ width: "200px" }}>
                    <Button
                      type="default"
                      className="tw-texa-button tw-w-full"
                      onClick={() => {
                      }}
                    >
                      Submit
                    </Button>
                  </div>
                  <div style={{ width: "200px" }}>
                    <Button
                      className="tw-w-full border-btn tw-rounded-lg"
                      onClick={() => {
                        setSelectedActivityData([]);
                      }}
                    >
                      Clear
                    </Button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default PopularService;
