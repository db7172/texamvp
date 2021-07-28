import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { defaultSettings } from "../../../utils/utils";
import EventCard from "../../card/event-card/EventCard";
import RetreatCard from "../../card/retreat-card/RetreatCard";
import CheckBox from "../../form-component/CheckBox";
import Title from "../title/Title";

const EventCarousel = ({ title, setting, data, event, path, description }) => {
  const [online, setOnline] = useState(true);
  const [offline, setOffline] = useState(true);
  const [show, setShow] = useState(true);
  const [eventData, setEventData] = useState([]);

  const settings = {
    ...defaultSettings,
    ...setting,
  };

  useEffect(() => {
    // eslint-disable-next-line array-callback-return
    const modifiedData = data?.filter((d) => {
      setShow(true);
      if (online && d.type === "Online") {
        return d;
      } else if (offline && d.type === "Offline") {
        return d;
      } else if (!online && !offline) {
        setShow(false);
      }
    });
    setEventData(modifiedData);
  }, [data, online, offline]);

  return (
    <>
      <div>
        <Title title={title} description={description} path={path || "#"} />
        {event && (
          <div className="tw-mt-5 tw-flex tw-flex-wrap">
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
      <div className="tw-mt-7">
        {show ? (
          <Slider {...settings}>
            {eventData?.map((d, i) =>
              event ? (
                <EventCard {...d} key={i} />
              ) : (
                <RetreatCard {...d} key={i} />
              )
            )}
          </Slider>
        ) : (
          <div className="tw-flex tw-justify-center tw-items-center tw-h-96">
            <h1 className="tw-text-h1 tw-text-secondary-color">
              Select Event Type
            </h1>
          </div>
        )}
      </div>
    </>
  );
};

export default EventCarousel;
