import React from "react";
import { indCurrency } from "../../../utils/utils";

const EventCard = ({ name, datetime, type, price, imgUrl }) => {
  return (
    <div className="tw-card-wrapper tw-zoom-effect">
      <div className="card-container">
        <div className="card_img_height">
          <img className="tw-rounded-md" src={imgUrl} alt={name} />
        </div>
        <div className="tw-mt-5 tw-text-secondary-color">
          <div>
            <h3 className="tw-font-medium tw-tracking-1 tw-text-base tw-text-primary-color">
              {name}
            </h3>
            <p className="tw-font-medium tw-mt-2">{datetime}</p>
            <p className="tw-mt-2 tw-mb-3 tw-font-medium">{type}</p>
          </div>
          <div className="tw-my-5 tw-border-y tw-py-2 tw-border-gray-200">
            <p className="tw-price tw-text-xl">
              <span className="tw-text-secondary-color tw-font-normal tw-mr-2 tw-text-xs">
                Starting from
              </span>
              {indCurrency(price)}
              <span className="tw-text-secondary-color tw-font-normal tw-text-xs tw-ml-2">
                Onwards
              </span>
            </p>
          </div>
          <button className="tw-w-full tw-py-3 tw-bg-secondary-color tw-rounded-lg tw-text-primary-color tw-font-medium">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
