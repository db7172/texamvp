import React from "react";
import { indCurrency } from "../../../utils/utils";

const EventCard = ({ name, datetime, type, price, imgUrl }) => {
  return (
    <div className="tw-mx-2 tw-my-4 tw-bg-white tw-shadow-card tw-rounded-lg tw-p-3">
      <div>
        <img className="tw-rounded-lg" src={imgUrl} alt={name} />
      </div>
      <div className="tw-mt-5 tw-text-secondary-color">
        <h4 className="tw-font-medium tw-text-lg tw-mb-2 tw-text-primary-color">
          {name}
        </h4>
        <p className="tw-font-medium tw-mt-2">{datetime}</p>
        <p className="tw-mt-3 tw-font-medium">{type}</p>
        <div className="tw-mt-3 tw-flex tw-justify-between tw-items-center">
          <p className="tw-text-yellow-color tw-font-bold tw-text-xl">
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
  );
};

export default EventCard;
