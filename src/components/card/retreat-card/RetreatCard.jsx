import React from "react";
import time from "../../../assets/svg/time.svg";
import { indCurrency } from "../../../utils/utils";
import GreenBadge from "../../green-badge/GreenBadge";

const RetreatCard = ({ name, duration, type, price, imgUrl, language }) => {
  return (
    <div className="tw-card-wrapper tw-zoom-effect">
      <div className="card-container">
        <div className="card_img_height">
          <img className="tw-rounded-md" src={imgUrl} alt={name} />
        </div>

        <div className="tw-mt-5 tw-text-secondary-color">
          <div>
            <div className="tw-flex">
              <h3 className="tw-font-medium tw-text-base tw-text-primary-color">
                {name}
              </h3>
              <div className="tw-min-w-max tw-ml-3 tw-mt-1">
                <GreenBadge ratting={4.4} />
              </div>
            </div>
            <p className="tw-mt-2">
              Instructed in {language} | {type}
            </p>
            <p className="tw-flex tw-mt-2 tw-mb-4">
              <img src={time} alt="" />{" "}
              <span className="tw-ml-2">{duration}</span>
            </p>
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

export default RetreatCard;
