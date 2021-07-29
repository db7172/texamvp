import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { defaultSettings } from "../../../utils/utils";
import { upperCase } from "lodash";
import { Link } from "react-router-dom";
import { getDestinationPagePath } from "../../../constant/comman.const";
import place from "../../../assets/png/place4.png";
import { Carousel } from "antd";

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
        <div className="tw-mr-3 zoom-effect" key={i}>
          <Link to={getDestinationPagePath(title)}>
            <div className="tw-relative tw-p-1 tw-flex tw-justify-center">
              <img className="scal-effec" src={href} alt="" />
              <div className="tw-absolute tw-inset-1 tw-flex tw-items-end tw-justify-center tw-text-white hover:tw-bg-opacity-20 hover:tw-bg-black">
                <p className="tw-text-2xl tw-font-medium tw-mb-3">
                  {upperCase(title)}
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
