/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { defaultSettings } from "../../../utils/utils";
import CheckBox from "../../form-component/CheckBox";
import TourCard from "../../card/tour-card/TourCard";
import Title from "../title/Title";
import { Carousel } from "antd";

const ActivityCarousel = ({ setting, title, data, path, description }) => {
  const [multiday, setMultiday] = useState(false);
  const [singleday, setSingleday] = useState(false);
  const [hourly, setHourly] = useState(false);
  const [activityData, setActivityData] = useState([]);

  const settings = {
    ...defaultSettings,
    ...setting,
  };

  useEffect(() => {
    // eslint-disable-next-line array-callback-return
    const modifiedData = data?.filter((d) => {
      if (multiday && d.type === "multi day") {
        return d;
      } else if (singleday && d.type === "single day") {
        return d;
      } else if (hourly && d.type === "hourly") {
        return d;
      } else if (!multiday && !singleday && !hourly) {
        return d;
      }
    });
    setActivityData(modifiedData);
  }, [multiday, singleday, hourly, data]);

  return (
    <div>
      <div>
        <Title title={title} description={description} path={path || "#"} />
        <div className="tw-mt-5 tw-flex tw-flex-wrap">
          <div className="tw-mr-12">
            <CheckBox
              label="Multi Day Activity"
              checked={multiday}
              name="multiday"
              onChange={() => setMultiday(!multiday)}
            />
          </div>
          <div className="tw-mr-12">
            <CheckBox
              label="Single Day Activity"
              checked={singleday}
              name="singleday"
              onChange={() => setSingleday(!singleday)}
            />
          </div>
          <div className="tw-mr-12">
            <CheckBox
              label="Hourly Activity"
              checked={hourly}
              name="hourly"
              onChange={() => setHourly(!hourly)}
            />
          </div>
        </div>
      </div>
      <div className="tw-mt-5">
        <Carousel autoplay {...settings}>
          {activityData?.map((d, i) => (
            <TourCard {...d} key={i} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ActivityCarousel;
