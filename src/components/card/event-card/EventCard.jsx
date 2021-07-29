import React from "react";
import { indCurrency } from "../../../utils/utils";

const EventCard = ({ name, datetime, type, price, imgUrl }) => {
  return (
    <div className="card-wrapper">
      <div className="card-container">
        <div>
          <img className="tw-rounded-lg" src={imgUrl} alt={name} />
        </div>
        <div className="tw-mt-5 tw-text-secondary-color">
          <div className="tw-border-b tw-border-gray-200">
            <h4 className="tw-font-medium tw-text-lg tw-text-primary-color">
              {name}
            </h4>
            <p className="tw-font-medium tw-mt-4">{datetime}</p>
            <p className="tw-mt-4 tw-mb-3 tw-font-medium">{type}</p>
          </div>
          <div className="tw-mt-3 tw-flex tw-justify-between tw-items-center">
            <p className="tw-price tw-text-xl">
              {indCurrency(price)}
              <span className="tw-text-secondary-color tw-font-normal tw-text-xs tw-ml-2">
                Onwards
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

export default EventCard;
