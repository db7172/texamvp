import React from "react";
import { indCurrency } from "../../utils/utils";
import Tags from "../Tags/Tags";
import hotel from "../../assets/png/hotel.png";
import camera from "../../assets/png/photo-camera.png";
import taxi from "../../assets/png/taxi.png";
import { getViewMoreDetailsForActivityPath } from "../../constant/comman.const";
import { Link } from "react-router-dom";
import PageCardContainer from "../card/page-card-container/PageCardContainer";

const ActivityCard = (props) => {
  const {
    imgUrl,
    title,
    tags,
    cities,
    duration,
    activityType,
    activityLevel,
    activityBy,
    price,
  } = props;
  const routingDetails = {
    pathname: getViewMoreDetailsForActivityPath(activityType, title),
    state: { ...props },
  };

  return (
    <PageCardContainer imgUrl={imgUrl} title={title}>
      <div className="tw-flex tw-flex-wrap tw-mt-2">
        {tags.map((t, i) => (
          <Tags className="tw-my-1 tw-mr-2 tw-text-xs" tag={t} key={i} />
        ))}
      </div>
      <p className="tw-font-medium tw-mt-2">
        <span className="tw-text-secondary-color">Cities : </span>
        <span>{cities}</span>
      </p>
      <p className="tw-font-medium tw-mt-2">
        <span className="tw-text-secondary-color">Duration : </span>
        <span>{duration}</span>
      </p>
      <p className="tw-font-medium tw-mt-2">
        <span className="tw-text-secondary-color">Activity Type : </span>
        <span>{activityType}</span>
      </p>
      <p className="tw-font-medium tw-mt-2">
        <span className="tw-text-secondary-color">Activity Level : </span>
        <span>{activityLevel}</span>
      </p>
      <p className="tw-font-medium tw-mt-2">
        <span className="tw-text-secondary-color">Activity By : </span>
        <span>{activityBy}</span>
      </p>
      <div className="tw-font-medium tw-mt-2 tw-flex tw-items-center">
        <span className="tw-text-secondary-color tw-mr-3">Includes : </span>
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

      <div className="tw-my-5">
        <p>
          <span className="tw-text-secondary-color tw-text-xs tw-mr-2">
            Starting from
          </span>
          <span className="tw-mr-2 tw-price tw-text-xl">
            {indCurrency(price)}
          </span>
          <span className="tw-text-secondary-color tw-text-xs">Per Person</span>
        </p>
      </div>

      <Link to={routingDetails}>
        <button className="tw-w-full tw-py-3 tw-bg-secondary-color tw-rounded-lg tw-text-primary-color tw-font-medium">
          View Details
        </button>
      </Link>
    </PageCardContainer>
  );
};

export default ActivityCard;
