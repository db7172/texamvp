import classNames from "classnames";
import React from "react";
import star from "../../assets/svg/star_white.svg";

const GreenBadge = ({ ratting, bgColor, width, className }) => {
  return (
    <div
      className={classNames(
        "tw-flex tw-py-1 tw-px-2 tw-rounded-md tw-text-white",
        bgColor ? bgColor : "tw-bg-green-background",
        width ? width : "tw-max-w-max",
        className
      )}
    >
      <span className="tw-mr-2">{ratting}</span>
      <img src={star} alt="" />
    </div>
  );
};

export default GreenBadge;
