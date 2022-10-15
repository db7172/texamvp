import React from "react";

const CheckBox = ({ label, checked, name, onChange }) => {
  return (
    <>
      <input
        className="tw-cursor-pointer"
        checked={checked}
        type="checkbox"
        name={name}
        id={name}
        onChange={onChange}
      />
      <label className="tw-ml-2 tw-text-base tw-cursor-pointer" htmlhtmlFor={name}>
        {label}
      </label>
    </>
  );
};

export default CheckBox;
