import React from "react";
import time from "../../../assets/svg/time.svg";
import { indCurrency } from "../../../utils/utils";
import GreenBadge from "../../green-badge/GreenBadge";

const RetreatCard = ({ name, duration, type, price, imgUrl, language }) => {
  return (
    <div className="card-wrapper">
      <div className="card-container">
        <div>
          <img className="tw-rounded-lg" src={imgUrl} alt={name} />
        </div>
        <div className="tw-border-b tw-border-gray-200">
          <div className="tw-mt-5 tw-text-secondary-color">
            <div className="tw-flex ">
              <h4 className="tw-font-medium tw-text-lg tw-mb-2 tw-text-primary-color">
                {name}
              </h4>
              <div className="tw-min-w-max tw-ml-3 tw-mt-1">
                <GreenBadge ratting={4.4} />
              </div>
            </div>
            <p className="tw-mt-4">
              Instructed in {language} | {type}
            </p>
            <p className="tw-flex tw-mt-5 tw-mb-4">
              <img src={time} alt="" />{" "}
              <span className="tw-ml-2">{duration}</span>
            </p>
          </div>
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
  );
};

export default RetreatCard;
