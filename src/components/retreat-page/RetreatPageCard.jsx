import React from "react";
import time from "../../assets/svg/time.svg";
import { indCurrency } from "../../utils/utils";
import GreenBadge from "../green-badge/GreenBadge";

const RetreatPageCard = ({ name, duration, type, price, imgUrl, language }) => {
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
          <div className="tw-w-8/12 tw-flex-col tw-flex tw-justify-evenly tw-border-r tw-pl-5 tw-pr-2">
            <div className="tw-mt-5 tw-text-secondary-color">
              <div className="tw-flex ">
                <h4 className="tw-font-medium tw-text-lg tw-mb-2 tw-text-primary-color">
                  {name}
                </h4>
                <div className="tw-min-w-max tw-ml-3 tw-mt-1">
                  <GreenBadge ratting={4.4} />
                </div>
              </div>
              <p className="tw-mt-2">
                Instructed in {language} | {type}
              </p>
              <p className="tw-flex tw-my-4">
                <img src={time} alt="" />{" "}
                <span className="tw-ml-2">{duration}</span>
              </p>
            </div>
          </div>
          <div className="tw-flex tw-flex-col tw-justify-end tw-pl-4">
            <p className="tw-text-yellow-color tw-flex tw-flex-wrap tw-font-bold tw-text-xl tw-mb-5">
              {indCurrency(price)}
              <span className="tw-text-secondary-color tw-font-normal tw-ml-2 tw-text-xs tw-my-2">
                Per Person
              </span>
            </p>
            <button className="tw-px-4 lg:tw-px-3 tw-py-3 tw-mb-5 tw-bg-secondary-color tw-rounded-lg tw-text-primary-color tw-text-xs tw-font-medium">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetreatPageCard;
