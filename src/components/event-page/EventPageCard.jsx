import React from "react";
import { indCurrency } from "../../utils/utils";

const EventPageCard = ({ name, datetime, type, price, imgUrl }) => {
  return (
    <div className="tw-mx-2 tw-my-5">
      <div className="tw-bg-white tw-shadow-md tw-border tw-rounded-lg tw-p-3 tw-grid tw-grid-cols-2 tw-gap-3">
        <div className="tw-flex tw-justify-center tw-items-center">
          <img
            src={imgUrl}
            alt=""
            className="tw-w-full tw-h-auto tw-rounded-md"
          />
        </div>
        <div className="tw-text-secondary-color tw-flex">
          <div className="tw-w-8/12 tw-flex-col tw-flex tw-justify-evenly tw-border-r tw-pl-5">
            <h4 className="tw-font-medium tw-text-lg tw-mb-2 tw-text-primary-color">
              {name}
            </h4>
            <p className="tw-font-medium tw-mt-2">{datetime}</p>
            <p className="tw-mt-3 tw-font-medium">{type}</p>
          </div>
          <div className="tw-flex tw-flex-col tw-justify-center tw-pl-4">
            <p className="tw-text-yellow-color tw-font-bold tw-text-xl">
              {indCurrency(price)}
              <span className="tw-text-secondary-color tw-font-normal tw-text-xs tw-ml-2">
                Onwards
              </span>
            </p>
            <button className="tw-px-4 tw-mt-6 lg:tw-px-3 tw-py-3 tw-bg-secondary-color tw-rounded-lg tw-text-primary-color tw-text-xs tw-font-medium">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPageCard;
