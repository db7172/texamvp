import { Carousel } from "antd";
import React, { useEffect, useState } from "react";
import { defaultSettings } from "../../../utils/utils";
import EventCard from "../../card/event-card/EventCard";
import RetreatCard from "../../card/retreat-card/RetreatCard";
import CheckBox from "../../form-component/CheckBox";
import Title from "../title/Title";
import firebase from "../../../firebase";

const EventCarousel = ({ title, setting, data, event, path, description }) => {
  const [online, setOnline] = useState(false);
  const [offline, setOffline] = useState(false);
  const [eventData, setEventData] = useState([]);
  const [retreatData, setRetreatData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const settings = {
    ...defaultSettings,
    ...setting,
  };

  const getData = async () => {
    const snapshot = await firebase.firestore().collection("events").get();
    return snapshot.docs.map((doc) => doc.data());
  };

  const setData = async () => {
    if (online && event) {
      const online = await getData("events");
      setEventData(
        online.filter((item) => {
          return item.eventType === "online";
        })
      );
      setIsLoading(false);
    } else if (offline && event) {
      const offline = await getData("events");
      setEventData(
        offline.filter((item) => {
          return item.eventType === "offline";
        })
      );
      setIsLoading(false);
    } else if (event) {
      const events = await getData("events");
      setEventData(events);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    setData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, online, offline, event]);

  return (
    <div>
      {!isLoading ? (
        <>
          <div>
            <Title title={title} description={description} path={path || "#"} />
            {event && (
              <div className="tw-mt-3 tw-flex tw-flex-wrap">
                <div className="tw-mr-12">
                  <CheckBox
                    label="Online"
                    checked={online}
                    name="online"
                    onChange={() => setOnline(!online)}
                  />
                </div>
                <div className="tw-mr-12">
                  <CheckBox
                    label="Offline"
                    checked={offline}
                    name="offline"
                    onChange={() => setOffline(!offline)}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="tw-mt-3 menual-carousal">
            <Carousel autoplay {...settings}>
              {eventData?.map((d, i) =>
                event ? (
                  <EventCard {...d} key={i} />
                ) : (
                  <RetreatCard {...d} key={i} />
                )
              )}
            </Carousel>
          </div>
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default EventCarousel;
