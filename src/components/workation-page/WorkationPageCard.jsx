import React from "react";
import star from "../../assets/svg/star.svg";
import GreenBadge from "../green-badge/GreenBadge";
import time from "../../assets/svg/time.svg";
import wifi from "../../assets/svg/wifi.svg";
import cooking from "../../assets/svg/cooking.svg";
import { indCurrency } from "../../utils/utils";

const WorkationPageCard = ({ name, duration, facility, price, imgUrl }) => {
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
          <div className="tw-w-7/12 tw-flex-col tw-flex tw-border-r tw-px-4">
            <div className="tw-flex tw-mb-1 tw-justify-between tw-items-center">
              <div className="tw-flex">
                {Array(5)
                  .fill(null)
                  .map((_, i) => (
                    <img key={i} className="tw-w-3 tw-mr-1" src={star} alt="" />
                  ))}
                <p className="tw-text-primary-color tw-ml-2">Hotel</p>
              </div>
              <GreenBadge ratting={4.4} />
            </div>
            <p className="tw-text-primary-color tw-mt-1">Phuentsholing</p>
            <h3 className="tw-font-medium tw-text-lg tw-mb-2 tw-text-primary-color">
              {name}
            </h3>
            <p className="tw-flex tw-my-3">
              <img src={time} alt="" />{" "}
              <span className="tw-ml-2">{duration}</span>
            </p>
            <div className="tw-flex tw-mb-4 tw-flex-wrap">
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
          <div className="tw-flex tw-flex-col tw-justify-around tw-pl-4">
            <p className="tw-text-yellow-color tw-font-bold tw-text-xl">
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
    </div>
  );
};

export default WorkationPageCard;
