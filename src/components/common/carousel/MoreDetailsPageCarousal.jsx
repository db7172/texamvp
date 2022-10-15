import { Carousel } from "antd";
import React from "react";
import { defaultSettings } from "../../../utils/utils";

const MoreDetailsPageCarousal = ({ images }) => {
  const settings = {
    ...defaultSettings,
  };

  // 771 × 279 px

  return (
    <Carousel
      className="menual-carousal details_page_carousal"
      autoplay
      {...settings}
    >
      {images.map((d, i) => (
        <div style={{ width: "771px", height: "279px" }} key={i}>
          <img className="tw-w-full tw-h-auto" src={d} alt="" />
        </div>
      ))}
    </Carousel>
  );
};

export default MoreDetailsPageCarousal;
