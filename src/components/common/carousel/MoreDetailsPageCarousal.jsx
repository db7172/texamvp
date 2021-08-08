import { Carousel } from "antd";
import React from "react";
import { defaultSettings } from "../../../utils/utils";

const MoreDetailsPageCarousal = ({ images }) => {
  const settings = {
    ...defaultSettings,
  };

  return (
    <Carousel
      className="menual-carousal details_page_carousal"
      autoplay
      {...settings}
    >
      {images.map((d, i) => (
        <div>
          <img className="tw-w-full tw-h-auto" src={d} alt="" />
        </div>
      ))}
    </Carousel>
  );
};

export default MoreDetailsPageCarousal;
