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
    <div className="tw-mx-2 tw-my-4">
      <div className="tw-bg-white tw-shadow-md tw-rounded-lg tw-p-3">
        <div>
          <img className="tw-rounded-lg" src={imgUrl} alt={activityName} />
        </div>
        <div className="tw-flex tw-flex-col lg:tw-flex-row tw-justify-between tw-mt-3 tw-text-secondary-color">
          <div>
            <h3 className="tw-font-medium tw-text-lg tw-mb-2 tw-text-primary-color">
              {activityName}
            </h3>
            <p className="tw-font-medium tw-mb-2">{duration}</p>
            <RattingReview ratting={rating} review={review} />
            <p className="tw-mb-1">Cities: {cities}</p>
            <p className="tw-mb-1">
              Offered by{" "}
              <span className="tw-underline tw-cursor-pointer">{offerBy}</span>
            </p>
            <p>{otherDetails}</p>
          </div>
          <div className="tw-mt-3 tw-flex tw-flex-col tw-justify-between">
            <div className="lg:tw-flex tw-flex-col tw-items-end">
              <p className="tw-text-xs">Starting from</p>
              <p className="tw-text-2xl tw-text-yellow-color">
                {indCurrency(price)}
              </p>
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
