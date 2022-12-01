import React from "react";
import PropTypes from "prop-types";

const Input = ({
  label,
  type,
  name,
  initialValue,
  handleChange,
  ...restProps
}) => {
  return (
    <>
      <label className="tw-block tw-form-label" htmlFor={name}>
        {label}
      </label>
      <input
        className="tw-form-input"
        type={type}
        name={name}
        id={name}
        value={initialValue}
        onChange={handleChange}
        {...restProps}
      />
    </>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  initialValue: PropTypes.string,
};

export default Input;
