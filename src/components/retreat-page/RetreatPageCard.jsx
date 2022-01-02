import React from "react";
import { Link } from "react-router-dom";
import time from "../../assets/svg/time.svg";
import { getViewMoreDetailsForRetreatPath } from "../../constant/comman.const";
import { indCurrency } from "../../utils/utils";
import PageCardContainer from "../card/page-card-container/PageCardContainer";
import GreenBadge from "../green-badge/GreenBadge";

const RetreatPageCard = ({ name, duration, type, price, imgUrl, language }) => {
  const routingDetails = {
    pathname: getViewMoreDetailsForRetreatPath(type, name),
    state: { name, duration, type, price, imgUrl, language },
  };
  return (
    <PageCardContainer imgUrl={imgUrl}>
      <div className="tw-flex">
        <h4 className="tw-font-medium tw-text-lg tw-mb-2 tw-text-primary-color">
          {name}
        </h4>
        <div className="tw-min-w-max tw-ml-3 tw-mt-1">
          <GreenBadge ratting={4.4} />
        </div>
      </div>
      <p className="tw-mt-2 tw-text-secondary-color">
        Instructed in {language} | {type}
      </p>
      <p className="tw-flex tw-mt-2">
        <img src={time} alt="" />{" "}
        <span className="tw-ml-2 tw-text-secondary-color">{duration}</span>
      </p>

      <p className="tw-text-yellow-color tw-flex tw-items-center tw-flex-wrap tw-font-bold tw-text-xl tw-my-5">
        <span className="tw-text-secondary-color tw-font-normal tw-text-xs tw-mr-2">
          Starting from
        </span>
        {indCurrency(price)}
        <span className="tw-text-secondary-color tw-font-normal tw-ml-2 tw-text-xs">
          Per Person
        </span>
      </p>
      <Link to={routingDetails}>
        <button className="tw-w-full tw-py-3 tw-bg-secondary-color tw-rounded-lg tw-text-primary-color tw-font-medium">
          View Details
        </button>
      </Link>
    </PageCardContainer>
  );
};

export default RetreatPageCard;
