import { lowerCase } from "lodash";
import React from "react";
import { Link } from "react-router-dom";
import { indCurrency } from "../../../utils/utils";

const ViewAllCard = ({
  eventName,
  imgLink,
  payment,
  numberOfActivity = 123,
  path,
  description,
}) => {
  return (
    <div className="tw-flex tw-flex-col">
      <Link to={path(lowerCase(eventName))}>
        <div className="tw-relative tw-flex tw-justify-center">
          <img
            className="tw-w-full tw-h-auto tw-rounded-md"
            src={imgLink}
            alt=""
          />
          <div className="tw-absolute tw-bottom-0 tw-w-full tw-bg-gray-900 tw-bg-opacity-70 tw-p-5">
            <p className="tw-text-xl tw-font-semibold tw-text-white">{eventName}</p>
            {description ? (
              <p className="tw-text-base tw-text-white">{description}</p>
            ) : null}
          </div>
        </div>
      </Link>
      {payment && numberOfActivity ? (
        <div className="tw-p-5 tw-font-medium">
          <div className="tw-flex tw-justify-between tw-text-base">
            <p>Starting from</p>
            <p className="tw-font-lato tw-text-secondary-color tw-underline">
              <span>{numberOfActivity}</span> <span>Activity</span>
            </p>
          </div>
          <p className="tw-text-xl">{indCurrency(payment)}</p>
        </div>
      ) : null}
    </div>
  );
};

export default ViewAllCard;
