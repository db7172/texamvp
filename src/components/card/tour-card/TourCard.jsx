import React from "react";
import { Link } from "react-router-dom";
import { getViewMoreDetailsForActivityPath } from "../../../constant/comman.const";
import { indCurrency } from "../../../utils/utils";
import RattingReview from "../../common/ratting/RattingReview";

const TourCard = (props) => {
  const {
    activityName,
    duration,
    cities,
    offerBy,
    otherDetails,
    imgUrl,
    rating,
    review,
    price,
  } = props;
  const type = "Trekking";

  const routingDetails = {
    pathname: getViewMoreDetailsForActivityPath(type, activityName),
    state: { ...props },
  };

  return (
    <div className="tw-card-wrapper tw-zoom-effect">
      <div className="card-container">
        <div className="card_img_height">
          <img className="tw-rounded-md" src={imgUrl} alt={activityName} />
        </div>
        <div className="tw-flex tw-flex-col tw-justify-between tw-mt-5 tw-text-secondary-color">
          <div>
            <h3 className="tw-font-medium tw-tracking-1 tw-text-base tw-text-primary-color">
              {activityName}
            </h3>

            <div className="tw-mt-2 tw-flex tw-justify-between">
              <p className="tw-font-medium">{duration}</p>
              <RattingReview ratting={rating} review={review} />
            </div>
            <p className="tw-mt-2">Cities: {cities}</p>
            <p className="tw-mt-2">
              Offered by{" "}
              <span className="tw-underline tw-cursor-pointer">{offerBy}</span>
            </p>
            <p className="tw-mt-2">{otherDetails}</p>
          </div>
          <div className="tw-my-5 tw-border-y tw-py-2 tw-border-gray-200">
            <p className="tw-price tw-text-xl">
              <span className="tw-text-secondary-color tw-font-normal tw-mr-2 tw-text-xs">
                Starting from
              </span>
              {indCurrency(price)}
              <span className="tw-text-secondary-color tw-font-normal tw-ml-2 tw-text-xs">
                Per Person
              </span>
            </p>
          </div>
          <Link to={routingDetails}>
            <button className="tw-w-full tw-py-3 tw-bg-secondary-color tw-rounded-lg tw-text-primary-color tw-font-medium">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
