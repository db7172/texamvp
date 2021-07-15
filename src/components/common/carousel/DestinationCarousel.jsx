import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { defaultSettings } from "../../../utils/utils";
import { DESTINATION_IMG } from "../../../constant/imageConst";
import { toUpper } from "lodash";
import { Link } from "react-router-dom";
import { getDestinationPagePath } from "../../../constant/comman.const";
const DestinationCarousel = ({ setting }) => {
  const settings = {
    ...defaultSettings,
    ...setting,
  };

  const data = [
    {
      href: DESTINATION_IMG.MUMBAI,
      title: "mumbai",
    },
    {
      href: DESTINATION_IMG.AGRA,
      title: "agra",
    },
    {
      href: DESTINATION_IMG.AMRITSAR,
      title: "amritsar",
    },
    {
      href: DESTINATION_IMG.DELHI,
      title: "new delhi",
    },
    {
      href: DESTINATION_IMG.MUMBAI,
      title: "mumbai",
    },
    {
      href: DESTINATION_IMG.AGRA,
      title: "agra",
    },
    {
      href: DESTINATION_IMG.AMRITSAR,
      title: "amritsar",
    },
    {
      href: DESTINATION_IMG.DELHI,
      title: "new delhi",
    },
  ];

  return (
    <Slider {...settings}>
      {data.map(({ href, title }, i) => (
        <div className="tw-max-h-96" key={i}>
          <Link to={getDestinationPagePath(title)}>
            <div className="tw-flex tw-flex-col tw-items-center tw-justify-center">
              <img src={href} alt="" />
              <h3 className="tw-mt-8 tw-text-2xl">{toUpper(title)}</h3>
            </div>
          </Link>
        </div>
      ))}
    </Slider>
  );
};

export default DestinationCarousel;
