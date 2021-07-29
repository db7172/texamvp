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
        <div className="">
          <img className="" src={imgUrl} alt={activityName} />
        </div>
        <div className="tw-flex tw-flex-col tw-justify-between tw-mt-5 tw-text-secondary-color">
          <div className="tw-border-b tw-border-gray-200">
            <h3 className="tw-font-medium tw-text-base tw-mb-5 tw-text-primary-color">
              {activityName}
            </h3>
            <p className="tw-font-medium tw-mb-2">{duration}</p>
            <div className="tw-mb-2">
              <RattingReview ratting={rating} review={review} />
            </div>
            <p className="tw-mb-2">Cities: {cities}</p>
            <p className="tw-mb-2">
              Offered by{" "}
              <span className="tw-underline tw-cursor-pointer">{offerBy}</span>
            </p>
            <p className="tw-mb-4">{otherDetails}</p>
          </div>
          <div className="tw-mt-3 tw-flex tw-justify-between tw-items-center">
            <p className="tw-price tw-text-xl">
              {indCurrency(price)}
              <span className="tw-text-secondary-color tw-font-normal tw-ml-2 tw-text-xs">
                Per Person
              </span>
            </p>
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
