import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { upperCase } from "../../utils/utils";
import { DESTINATION_IMG } from "../../constant/home.const";
import rightArrow from "../../assets/svg/nextArrow.svg";
import leftArrow from "../../assets/svg/prevArrow.svg";
const DestinationCarousel = ({ setting }) => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: (
      <img
        className="tw-flex tw-justify-center tw-items-center tw-rounded-full hover:tw-shadow-nav-bar"
        src={rightArrow}
        alt=""
      />
    ),
    prevArrow: (
      <img
        className="tw-flex tw-justify-center tw-items-center tw-rounded-full"
        src={leftArrow}
        alt=""
      />
    ),
    ...setting,
  };

  const data = [
    {
      href: DESTINATION_IMG.MUMBAI,
      title: "MUMBAI",
    },
    {
      href: DESTINATION_IMG.AGRA,
      title: "AGRA",
    },
    {
      href: DESTINATION_IMG.AMRITSAR,
      title: "AMRITSAR",
    },
    {
      href: DESTINATION_IMG.DELHI,
      title: "NEW DELHI",
    },
    {
      href: DESTINATION_IMG.MUMBAI,
      title: "MUMBAI",
    },
    {
      href: DESTINATION_IMG.AGRA,
      title: "AGRA",
    },
    {
      href: DESTINATION_IMG.AMRITSAR,
      title: "AMRITSAR",
    },
    {
      href: DESTINATION_IMG.DELHI,
      title: "NEW DELHI",
    },
  ];

  return (
    <Slider {...settings}>
      {data.map(({ href, title }, i) => (
        <div className="tw-max-h-96">
          <div className="tw-flex tw-flex-col tw-items-center tw-justify-center">
            <img src={href} alt="" />
            <h3 className="tw-mt-8 tw-text-2xl">{upperCase(title)}</h3>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default DestinationCarousel;
