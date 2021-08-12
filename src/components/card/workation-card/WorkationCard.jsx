import React from "react";
import star from "../../../assets/svg/star.svg";
import GreenBadge from "../../green-badge/GreenBadge";
import time from "../../../assets/svg/time.svg";
import wifi from "../../../assets/svg/wifi.svg";
import cooking from "../../../assets/svg/cooking.svg";
import { indCurrency } from "../../../utils/utils";

const WorkationCard = ({ name, duration, facility, price, imgUrl }) => {
  return (
    <div className="tw-card-wrapper tw-zoom-effect">
      <div className="card-container">
        <div className="card_img_height">
          <img className="tw-rounded-lg" src={imgUrl} alt={name} />
        </div>
        <div className="tw-mt-5 tw-text-secondary-color">
          <div className="tw-flex tw-justify-between tw-items-center">
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
          <p className="tw-text-primary-color tw-mt-2 tw-font-medium">
            Phuentsholing
          </p>
          <h3 className="tw-font-medium tw-tracking-1 tw-text-base tw-mt-2 tw-text-primary-color tw-text-ellipsis">
            {name}
          </h3>
          <p className="tw-flex tw-mt-2 tw-items-center">
            <img src={time} alt="" />{" "}
            <span className="tw-ml-2">{duration}</span>
          </p>
          <div className="tw-flex tw-mt-2">
            {facility.Breakfast && (
              <p className="tw-flex tw-mr-3 tw-items-center">
                <img src={cooking} alt="" />{" "}
                <span className="tw-ml-2">Breakfast at hotel</span>
              </p>
            )}
            {facility.FreeWifi && (
              <p className="tw-flex tw-items-center">
                <img src={wifi} alt="" />{" "}
                <span className="tw-ml-2">Free Wifi</span>
              </p>
            )}
          </div>
        </div>
        <div className="tw-my-5 tw-border-y tw-py-2 tw-border-gray-200">
          <p className="tw-price tw-text-xl tw-flex tw-items-center">
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
  );
};

export default WorkationCard;
