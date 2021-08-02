import React from "react";
import star from "../../../assets/svg/star.svg";
import left from "../../../assets/png/quote_left.png";
import right from "../../../assets/png/quote_right.png";

const TestimonialCard = ({ image, name, msg, rating }) => {
  return (
    <div>
      <div className="tw-flex tw-flex-col tw-items-center tw-w-full">
        <div className="tw-flex tw-flex-col tw-items-center">
          <div>
            <img className="tw-rounded-full" src={image} alt="customer" />
          </div>
          <p className="tw-mt-4 tw-font-bold tw-text-lg">{name}</p>
        </div>
        <div className="tw-flex tw-justify-center tw-mt-6">
          {Array(rating)
            .fill(null)
            .map((_, i) => (
              <img key={i} className="tw-w-6 tw-mr-1" src={star} alt="" />
            ))}
        </div>
        <div className="tw-w-4/6 tw-text-center tw-mx-auto tw-relative tw-p-10">
          <img className="left_qoute" src={left} alt="" />
          <p className="tw-text-secondary-color tw-text-lg">{msg}</p>
          <img className="right_qoute" src={right} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
