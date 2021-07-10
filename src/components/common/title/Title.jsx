import React from "react";

const Title = ({ title }) => {
  return (
    <div className="tw-flex tw-justify-between">
      <h3 className="md:tw-text-4xl tw-text-2xl tw-font-medium">{title}</h3>
      <button className="tw-text-blue-700 tw-underline md:tw-text-xl tw-text-base">
        View All
      </button>
    </div>
  );
};

export default Title;
