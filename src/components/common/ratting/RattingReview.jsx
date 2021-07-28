import classNames from "classnames";
import React from "react";
import star from "../../../assets/svg/star.svg";

const RattingReview = ({ ratting, review, className }) => {
  return (
    <div className={classNames("tw-flex tw-flex-wrap", className)}>
      <div className="tw-flex tw-mb-2">
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
