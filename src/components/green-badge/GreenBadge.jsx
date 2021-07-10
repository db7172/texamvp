import React from "react";
import star from "../../assets/svg/star_white.svg";

const GreenBadge = ({ ratting }) => {
  return (
    <div className="tw-bg-green-background tw-flex tw-max-w-max tw-py-1 tw-px-2 tw-rounded-md tw-text-white">
      <span className="tw-mr-2">{ratting}</span>
      <img src={star} alt="" />
    </div>
  );
};

export default GreenBadge;
