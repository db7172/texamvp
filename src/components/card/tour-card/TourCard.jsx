import React from "react";
import { indCurrency } from "../../../utils/utils";
import RattingReview from "../../common/ratting/RattingReview";

const TourCard = ({
  activityName,
  duration,
  cities,
  offerBy,
  otherDetails,
  imgUrl,
  rating,
  review,
  price,
}) => {
  return (
    <div className="card-wrapper">
      <div className="card-container">
        <div>
          <img
            className="tw-rounded-lg tw-h-auto tw-w-full"
            src={imgUrl}
            alt={activityName}
          />
        </div>
        <div className="tw-flex tw-flex-col lg:tw-flex-row tw-justify-between tw-mt-5 tw-text-secondary-color">
          <div className="tw-pr-1">
            <h3 className="tw-font-medium tw-text-base tw-mb-3 tw-text-primary-color">
              {activityName}
            </h3>
            <p className="tw-font-medium tw-mb-3">{duration}</p>
            <div className="tw-mb-2">
              <RattingReview ratting={rating} review={review} />
            </div>
            <p className="tw-mb-2">Cities: {cities}</p>
            <p className="tw-mb-2">
              Offered by{" "}
              <span className="tw-underline tw-cursor-pointer">{offerBy}</span>
            </p>
            <p>{otherDetails}</p>
          </div>
          <div className="tw-mt-3 tw-flex tw-flex-col tw-justify-between">
            <div className="lg:tw-flex tw-flex-col tw-items-end">
              <p className="tw-text-xs">Starting from</p>
              <p className="tw-text-2xl tw-price">{indCurrency(price)}</p>
              <p className="tw-text-xs">Per Person</p>
            </div>
            <button className="tw-px-4 lg:tw-px-3 tw-py-3 tw-bg-secondary-color tw-rounded-lg tw-text-primary-color tw-text-xs tw-font-medium">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
