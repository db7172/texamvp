import React from "react";
import { indCurrency } from "../../utils/utils";
import Tags from "../Tags/Tags";
import hotel from "../../assets/png/hotel.png";
import camera from "../../assets/png/photo-camera.png";
import taxi from "../../assets/png/taxi.png";

const ActivityCard = ({
  imgUrl,
  title,
  tags,
  cities,
  duration,
  activityType,
  activityLevel,
  activityBy,
  price,
}) => {
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
        <div className="tw-flex">
          <div className="tw-w-7/12 tw-border-r tw-pl-5">
            <h3 className="tw-font-medium tw-text-lg">{title}</h3>
            <div className="tw-flex tw-flex-wrap tw-mt-2">
              {tags.map((t, i) => (
                <Tags className="tw-my-1 tw-mr-2 tw-text-xs" tag={t} key={i} />
              ))}
            </div>
            <p className="tw-font-medium tw-mt-3">
              <span className="tw-text-secondary-color">Cities : </span>
              <span>{cities}</span>
            </p>
            <p className="tw-font-medium tw-mt-3">
              <span className="tw-text-secondary-color">Duration : </span>
              <span>{duration}</span>
            </p>
            <p className="tw-font-medium tw-mt-3">
              <span className="tw-text-secondary-color">Activity Type : </span>
              <span>{activityType}</span>
            </p>
            <p className="tw-font-medium tw-mt-3">
              <span className="tw-text-secondary-color">Activity Level : </span>
              <span>{activityLevel}</span>
            </p>
            <p className="tw-font-medium tw-mt-3">
              <span className="tw-text-secondary-color">Activity By : </span>
              <span>{activityBy}</span>
            </p>
            <div className="tw-font-medium tw-mt-3 tw-flex  tw-items-center">
              <span className="tw-text-secondary-color tw-mr-3">
                Includes :{" "}
              </span>
              <span className="tw-flex">
                <div className="tw-mr-3 tw-p-3 tw-w-10 tw-h-10 tw-bg-gray-background tw-rounded-full">
                  <img className="tw-w-full h-auto" src={hotel} alt="" />
                </div>
                <div className="tw-mr-3 tw-p-3 tw-w-10 tw-h-10 tw-bg-gray-background tw-rounded-full">
                  <img className="tw-w-full h-auto" src={taxi} alt="" />
                </div>
                <div className="tw-mr-3 tw-p-3 tw-w-10 tw-h-10 tw-bg-gray-background tw-rounded-full">
                  <img className="tw-w-full h-auto" src={camera} alt="" />
                </div>
              </span>
            </div>
          </div>
          <div className="tw-w-5/12 tw-flex tw-flex-col tw-justify-end tw-pl-5">
            <div>
              <p className="tw-text-secondary-color tw-text-xs">
                Starting from
              </p>
              <p>
                <span className="tw-mr-2 tw-price tw-text-xl">
                  {indCurrency(price)}
                </span>
                <span className="tw-text-secondary-color tw-text-xs">
                  Per Person
                </span>
              </p>
            </div>
            <div>
              <button className="tw-px-4 tw-mt-4 lg:tw-px-3 tw-py-3 tw-bg-secondary-color tw-rounded-lg tw-text-primary-color tw-text-xs tw-font-medium">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
