/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { defaultSettings } from "../../utils/utils";
import CheckBox from "../form-component/CheckBox";
import TourCard from "../tour-card/TourCard";
import Title from "./Title";

const ActivityCarousel = ({ setting, title, data }) => {
  const [multiday, setMultiday] = useState(true);
  const [singleday, setSingleday] = useState(true);
  const [hourly, setHourly] = useState(true);
  const [show, setShow] = useState(true);
  const [activityData, setActivityData] = useState();

  const settings = {
    ...defaultSettings,
    ...setting,
  };

  useEffect(() => {
    // eslint-disable-next-line array-callback-return
    const modifiedData = data?.filter((d) => {
      setShow(true);
      if (multiday && d.type === "multi day") {
        return d;
      } else if (singleday && d.type === "single day") {
        return d;
      } else if (hourly && d.type === "hourly") {
        return d;
      } else if (!multiday && !singleday && !hourly) {
        setShow(false);
      }
    });
    setActivityData(modifiedData);
  }, [multiday, singleday, hourly, data]);

  return (
    <div>
      <div>
        <Title title={title} />
        <div className="tw-mt-5 tw-flex">
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
      <div className="tw-mt-7">
        {show ? (
          <Slider {...settings}>
            {activityData?.map((d, i) => (
              <TourCard {...d} key={i} />
            ))}
          </Slider>
        ) : (
          <div className="tw-flex tw-justify-center tw-items-center tw-h-96">
            <h1 className="tw-text-h1 tw-text-secondary-color">
              Select Activity Duration
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default ActivityCarousel;
