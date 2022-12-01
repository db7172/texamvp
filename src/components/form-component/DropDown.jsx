import React from "react";
import PropTypes from "prop-types";

const DropDown = ({
  label,
  optionsArr,
  handleChange,
  name,
  initialValue,
  placeHolder,
  ...restProps
}) => {
  return (
    <>
      <label className="tw-block tw-form-label" htmlFor={name}>
        {label}
      </label>

      <select
        className="tw-form-input arrowGray"
        id={name}
        name={name}
        value={initialValue}
        onChange={handleChange}
        {...restProps}
      >
        <option value="">{placeHolder}</option>
        {optionsArr?.map((value, index) => (
          <option key={index} value={value}>
            {value}
          </option>
        ))}
      </select>
    </>
  );
};

DropDown.propTypes = {
  label: PropTypes.string.isRequired,
  //   optionsArr: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  initialValue: PropTypes.string,
  placeHolder: PropTypes.string,
};
export default DropDown;
