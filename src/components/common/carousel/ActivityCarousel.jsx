/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { defaultSettings } from "../../../utils/utils";
import CheckBox from "../../form-component/CheckBox";
import TourCard from "../../card/tour-card/TourCard";
import Title from "../title/Title";
import { Carousel } from "antd";
import firebase from "../../../firebase";

const ActivityCarousel = ({ setting, title, data, path, description }) => {
  const [multiday, setMultiday] = useState(false);
  const [singleday, setSingleday] = useState(false);
  const [hourly, setHourly] = useState(false);
  const [activityData, setActivityData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [multiData, setMultiData] = useState([]);

  const settings = {
    ...defaultSettings,
    ...setting,
  };

  const getData = async (type) => {
    const snapshot = await firebase.firestore().collection(type).get();
    return snapshot.docs.map((doc) => doc.data());
  };

  const setData = async () => {
    if (hourly || singleday) {
      const singleDay = await getData("hr_sg_avy");
      setActivityData(singleDay);
      setIsLoading(false);
    } else if (multiday) {
      const multiday = await getData("multi-activity");
      setActivityData(multiday);
      setIsLoading(false);
    } else {
      const singleDay = await getData("hr_sg_avy");
      const multiday = await getData("multi-activity");
      setActivityData([...singleDay, ...multiday]);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    setData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [multiday, singleday, hourly, data]);

  return (
    <div>
      {!isLoading ? (
        <>
          <div>
            <Title title={title} description={description} path={path || "#"} />
            <div className="tw-mt-3 tw-flex tw-flex-wrap">
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
          <div className="tw-mt-3 menual-carousal">
            <Carousel autoplay {...settings}>
              {activityData.map((d, i) => (
                <TourCard key={i} data={d} />
              ))}
            </Carousel>
          </div>
        </>
      ) : (
        <div>No data</div>
      )}
    </div>
  );
};

export default ActivityCarousel;
