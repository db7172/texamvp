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
      <label className="tw-ml-2 tw-text-lg tw-cursor-pointer" htmlFor={name}>
        {label}
      </label>
    </>
  );
};

export default CheckBox;
