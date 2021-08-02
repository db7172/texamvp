import React, { useState } from "react";

const LIST_SIZE = 5;

const RadioButton = ({ title, value, onChange, selected }) => {
  const [viewMore, setViewMore] = useState(false);

  const getLinkText = (length, state, setViewMore) => {
    return (
      length > LIST_SIZE && (
        <p
          className="tw-text-right tw--mt-5 tw-text-blue-500 tw-underline tw-cursor-pointer"
          onClick={() => setViewMore(!viewMore)}
        >
          {state ? "View less" : "View more"}
        </p>
      )
    );
  };

  const getBuckets = (buckets, state) => {
    return buckets.slice(0, state ? buckets.length : LIST_SIZE);
  };

  return (
    <>
      <h3 className="tw-filter-title tw-font-medium">{title}</h3>
      <div className="tw-mt-4">
        {getBuckets(value, viewMore).map((v, i) => (
          <div key={i}>
            <input
              className="tw-mr-5"
              type="radio"
              id={v}
              name={title}
              value={v}
              checked={selected === v}
              onChange={onChange}
            />
            <label htmlFor={v}>{v}</label>
          </div>
        ))}
        {getLinkText(value.length, viewMore, setViewMore)}
      </div>
    </>
  );
};

export default RadioButton;
