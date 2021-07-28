import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { defaultSettings } from "../../../utils/utils";
import { DESTINATION_IMG } from "../../../constant/imageConst";
import { upperCase } from "lodash";
import { Link } from "react-router-dom";
import { getDestinationPagePath } from "../../../constant/comman.const";
import place from "../../../assets/png/place4.png";

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
    <Slider {...settings}>
      {destinationPlace.map(({ href, title }, i) => (
        <div className="tw-mr-3 zoom-effect" key={i}>
          <Link to={getDestinationPagePath(title)}>
            <div className="tw-relative tw-p-1 tw-flex tw-justify-center">
              <img className="scal-effec" src={href} alt="" />
              <div className="tw-absolute tw-inset-1 tw-flex tw-items-center tw-justify-center tw-text-white hover:tw-bg-opacity-20 hover:tw-bg-black">
                <p className="tw-text-2xl tw-font-medium">{upperCase(title)}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </Slider>
    // <Slider {...settings}>
    //   {data.map(({ href, title }, i) => (
    //     <div className="tw-max-h-96" key={i}>
    //       <Link to={getDestinationPagePath(title)}>
    //         <div className="tw-flex tw-flex-col tw-items-center tw-justify-center">
    //           <img src={href} alt="" />
    //           <h3 className="tw-mt-8 tw-text-2xl">{toUpper(title)}</h3>
    //         </div>
    //       </Link>
    //     </div>
    //   ))}
    // </Slider>
  );
};

export default DestinationCarousel;
