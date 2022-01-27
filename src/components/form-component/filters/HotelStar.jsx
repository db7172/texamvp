import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import star from "../../../assets/svg/star.svg";

const HotelStarFilter = ({ ratting, handleClick }) => {
  return (
    <>
      <h3 className="tw-text-lg tw-font-medium">Hotel Star</h3>
      <div className="tw-mt-4 tw-flex tw-flex-wrap">
        {Object.keys(ratting).map((o, i) => (
          <button
            className={classNames(
              "tw-py-2 tw-px-5 tw-rounded-md tw-mr-2 tw-my-2 tw-flex",
              ratting[o] ? "tw-bg-secondary-color" : "tw-bg-gray-background"
            )}
            key={i}
            name={o}
            onClick={handleClick}
          >
            {Array(i + 1)
              .fill(null)
              .map((_, i) => (
                <img
                  key={i}
                  name={o}
                  className="tw-w-3 tw-mr-1"
                  src={star}
                  alt=""
                />
              ))}
          </button>
        ))}
      </div>
    </>
  );
};

HotelStarFilter.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default HotelStarFilter;
