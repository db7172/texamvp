import React from "react";
import PropTypes from "prop-types";

const IconCard = ({ path, name, number }) => {
  return (
    <div className="tw-shadow-icon-card tw-rounded-xl tw-h-40 tw-w-40 tw-flex tw-justify-evenly tw-items-center tw-flex-col tw-bg-white">
      <img className="" src={path} alt={name} />
      <div>
        <h5 className="tw-mb-1 tw-text-xl tw-font-medium">{name}</h5>
        <p className="tw-font-lato tw-text-secondary-color tw-text-sm">
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
