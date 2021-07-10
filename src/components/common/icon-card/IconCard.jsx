import React from "react";
import PropTypes from "prop-types";

const IconCard = ({ path, name, number }) => {
  return (
    <div className="tw-shadow-icon-card tw-rounded-xl md:tw-h-36 md:tw-w-36 tw-h-32 tw-w-32 tw-flex tw-justify-evenly tw-items-center tw-flex-col tw-bg-white">
      <div>
        <img className="tw-w-full tw-h-auto" src={path} alt={name} />
      </div>
      <div className="tw-flex tw-items-center tw-flex-col">
        <h5 className="tw-mb-1 md:tw-text-xl tw-font-medium">{name}</h5>
        <p className="tw-font-lato tw-text-secondary-color md:tw-text-sm">
          {number} Activity
        </p>
      </div>
    </div>
  );
};

IconCard.propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};

export default IconCard;
