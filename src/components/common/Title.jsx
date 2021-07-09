import React from "react";

const Title = ({ title }) => {
  return (
    <div className="tw-flex tw-justify-between">
      <h3 className="tw-text-4xl tw-font-medium">{title}</h3>
      <button className="tw-text-blue-700 tw-underline tw-text-xl">
        View All
      </button>
    </div>
  );
};

export default Title;
