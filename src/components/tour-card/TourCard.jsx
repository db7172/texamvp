import React from "react";
import star from "../../assets/svg/star.svg";
import { indCurrency } from "../../utils/utils";

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
    <div className="tw-m-4">
      <div className="tw-bg-white tw-shadow-card tw-rounded-lg tw-p-3">
        <div>
          <img className="tw-rounded-lg" src={imgUrl} alt="" />
        </div>
        <div className="tw-flex tw-flex-col lg:tw-flex-row tw-justify-between tw-mt-3 tw-text-secondary-color">
          <div>
            <h3 className="tw-font-medium tw-text-lg tw-mb-2 tw-text-black">
              {activityName}
            </h3>
            <p className="tw-font-medium tw-mb-2">{duration}</p>
            <div className="tw-flex tw-mb-1">
              <div className="tw-flex">
                {Array(rating)
                  .fill(null)
                  .map((_, i) => (
                    <img key={i} className="tw-w-3 tw-mr-1" src={star} alt="" />
                  ))}
              </div>
              <p>( {review} )</p>
            </div>
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
            <button className="tw-px-4 tw-py-3 tw-bg-secondary-color tw-rounded-lg tw-text-black tw-text-xs tw-font-medium">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
