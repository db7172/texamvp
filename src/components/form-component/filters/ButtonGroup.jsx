import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const ButtonGroup = ({ title, option, handleClick }) => {
  return (
    <>
      <h3 className="tw-text-lg tw-font-medium">{title}</h3>
      <div className="tw-mt-4 tw-flex tw-flex-wrap">
        {Object.keys(option).map((o, i) => (
          <button
            className={classNames(
              "tw-py-2 tw-px-5 tw-rounded-md tw-mr-2 tw-my-2",
              option[o] ? "tw-bg-secondary-color" : "tw-bg-gray-background"
            )}
            key={i}
            name={o}
            onClick={handleClick}
          >
            {o}
          </button>
        ))}
      </div>
    </>
  );
};

ButtonGroup.propTypes = {
  title: PropTypes.string.isRequired,
  option: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ButtonGroup;
