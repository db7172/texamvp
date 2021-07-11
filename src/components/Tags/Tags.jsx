import React from "react";

const Tags = ({ tag, className }) => {
  return (
    <span
      className={`${className} tw-font-lato tw-text-xs tw-bg-gray-background tw-px-3 tw-py-1`}
    >
      {tag}
    </span>
  );
};

export default Tags;
