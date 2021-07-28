import React from "react";
import star from "../../../assets/svg/star.svg";
import GreenBadge from "../../green-badge/GreenBadge";
import time from "../../../assets/svg/time.svg";
import wifi from "../../../assets/svg/wifi.svg";
import cooking from "../../../assets/svg/cooking.svg";
import { indCurrency } from "../../../utils/utils";

const WorkationCard = ({ name, duration, facility, price, imgUrl }) => {
  return (
    <div className="card-wrapper">
      <div className="card-container">
        <div>
          <img className="tw-rounded-lg" src={imgUrl} alt={name} />
        </div>
        <div className="tw-mt-5 tw-text-secondary-color tw-border-b tw-border-gray-200">
          <div className="tw-flex tw-mb-1 tw-justify-between tw-items-center">
            <div className="tw-flex">
              {Array(5)
                .fill(null)
                .map((_, i) => (
                  <img key={i} className="tw-w-3 tw-mr-1" src={star} alt="" />
                ))}
              <p className="tw-text-primary-color tw-text-xs tw-ml-2">Hotel</p>
            </div>
            <GreenBadge ratting={4.4} />
          </div>
          <p className="tw-text-primary-color tw-mt-1 tw-mb-1 tw-font-medium">
            Phuentsholing
          </p>
          <h3 className="tw-font-medium tw-text-lg tw-mb-5 tw-text-primary-color">
            {name}
          </h3>
          <p className="tw-flex tw-mb-5">
            <img src={time} alt="" />{" "}
            <span className="tw-ml-2">{duration}</span>
          </p>
          <div className="tw-flex tw-mb-5">
            {facility.Breakfast && (
              <p className="tw-flex tw-mr-3">
                <img src={cooking} alt="" />{" "}
                <span className="tw-ml-2">Breakfast at hotel</span>
              </p>
            )}
            {facility.FreeWifi && (
              <p className="tw-flex">
                <img src={wifi} alt="" />{" "}
                <span className="tw-ml-2">Free Wifi</span>
              </p>
            )}
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

export default WorkationCard;
