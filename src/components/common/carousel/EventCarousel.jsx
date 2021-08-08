import { Carousel } from "antd";
import React, { useEffect, useState } from "react";
import { defaultSettings } from "../../../utils/utils";
import EventCard from "../../card/event-card/EventCard";
import RetreatCard from "../../card/retreat-card/RetreatCard";
import CheckBox from "../../form-component/CheckBox";
import Title from "../title/Title";

const EventCarousel = ({ title, setting, data, event, path, description }) => {
  const [online, setOnline] = useState(false);
  const [offline, setOffline] = useState(false);
  const [eventData, setEventData] = useState([]);

  const settings = {
    ...defaultSettings,
    ...setting,
  };

  useEffect(() => {
    // eslint-disable-next-line array-callback-return
    const modifiedData = data?.filter((d) => {
      if (online && d.type === "Online") {
        return d;
      } else if (offline && d.type === "Offline") {
        return d;
      } else if (!online && !offline) {
        return d;
      }
    });
    setEventData(modifiedData);
  }, [data, online, offline]);

  return (
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
  );
};

export default EventCarousel;
