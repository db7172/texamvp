import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { defaultSettings } from "../../../utils/utils";
import { Link } from "react-router-dom";
import { getDestinationPagePath } from "../../../constant/comman.const";
import place from "../../../assets/png/place4.png";
import { Carousel } from "antd";
import { capitalize } from "lodash";

const DestinationCarousel = ({ setting }) => {
  const settings = {
    ...defaultSettings,
    ...setting,
  };

  const destinationPlace = [
    {
      href: place,
      title: "mumbai",
    },
    {
      href: place,
      title: "agra",
    },
    {
      href: place,
      title: "amritsar",
    },
    {
      href: place,
      title: "new delhi",
    },
    {
      href: place,
      title: "mumbai",
    },
    {
      href: place,
      title: "agra",
    },
    {
      href: place,
      title: "amritsar",
    },
    {
      href: place,
      title: "new delhi",
    },
  ];

  return (
    <Carousel autoplay {...settings}>
      {destinationPlace.map(({ href, title }, i) => (
        <div className="tw-mr-3 tw-zoom-effect" key={i}>
          <Link to={getDestinationPagePath(title)}>
            <div className="tw-relative tw-p-1 tw-flex tw-justify-center">
              <img
                className="tw-w-full tw-h-auto tw-rounded-lg"
                src={href}
                alt=""
              />
              <div className="tw-absolute tw-bottom-1 tw-right-1 tw-left-1 tw-rounded-lg tw-bg-gray-900 tw-bg-opacity-70 tw-p-1">
                <p className="tw-m-3 tw-text-base tw-font-semibold tw-text-white">
                  {capitalize(title)}
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
