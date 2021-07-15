import classNames from "classnames";
import React from "react";
import star from "../../../assets/svg/star.svg";

const RattingReview = ({ ratting, review, className }) => {
  return (
    <div className={classNames("tw-flex", className)}>
      <div className="tw-flex">
        {Array(ratting)
          .fill(null)
          .map((_, i) => (
            <img key={i} className="tw-w-3 tw-mr-1" src={star} alt="" />
          ))}
      </div>
      <p>( {review} )</p>
    </div>
  );
};

export default RattingReview;
