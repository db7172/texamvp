import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { defaultSettings } from "../../../utils/utils";
import { Link } from "react-router-dom";
import { getDestinationPagePath } from "../../../constant/comman.const";
import { Carousel } from "antd";
import { capitalize } from "lodash";
import firebase from "../../../firebase";

const DestinationCarousel = ({ setting }) => {
  const settings = {
    ...defaultSettings,
    ...setting,
  };

  const [destinations, setDestinations] = useState([]);

  // const getData = async () => {
  //   await
  // };

  useEffect(() => {
    const getData = async () => {
      firebase
        .firestore()
        .collection("destinations")
        .get()
        .then((querySnapshot) => {
          setDestinations(querySnapshot.docs.map((doc) => doc.data()));
        });
    };
    getData();
  }, []);

  return (
    <Carousel className="menual-carousal auto-width-carousal" {...settings}>
      {destinations?.map((data, i) => (
        <div className="tw-mr-3 tw-zoom-effect" key={i}>
          <Link to={getDestinationPagePath(data.name)}>
            <div className="tw-relative tw-p-1 tw-flex tw-justify-center destination-card">
              <img
                className="tw-w-full tw-h-auto tw-rounded-lg"
                src={data.banner}
                alt=""
              />
              <div className="tw-absolute tw-bottom-1 tw-right-1 tw-left-1 tw-rounded-lg tw-bg-gray-900 tw-bg-opacity-70 tw-p-1">
                <p className="tw-m-3 tw-text-base tw-font-semibold tw-text-white">
                  {capitalize(data.name)}
                </p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </Carousel>
  );
};

export default DestinationCarousel;
