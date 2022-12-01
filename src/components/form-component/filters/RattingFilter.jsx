import React from "react";
import GreenBadge from "../../green-badge/GreenBadge";

const RattingFilter = ({ selected, onChange }) => {
  return (
    <>
      <h3 className="tw-text-lg tw-font-medium">Rating Star</h3>
      <div className="tw-mt-4">
        <div>
          <div className="tw-flex tw-items-center tw-mb-2">
            <input
              className="tw-mr-5"
              type="radio"
              id="+4"
              value="+4"
              checked={selected === "+4"}
              onChange={onChange}
            />
            <label className="tw-text-base tw-cursor-pointer" htmlFor="+4">
              <GreenBadge
                ratting="+4"
                width="tw-w-20"
                className="tw-justify-center"
              />
            </label>
          </div>
          <div className="tw-flex tw-items-center tw-mb-2">
            <input
              className="tw-mr-5"
              type="radio"
              id="+3.5"
              value="+3.5"
              checked={selected === "+3.5"}
              onChange={onChange}
            />
            <label className="tw-text-base tw-cursor-pointer" htmlFor="+3.5">
              <GreenBadge
                ratting="+3.5"
                bgColor="tw-bg-lightGreen-background"
                width="tw-w-20"
                className="tw-justify-center"
              />
            </label>
          </div>
          <div className="tw-flex tw-items-center">
            <input
              className="tw-mr-5"
              type="radio"
              id="+3"
              value="+3"
              checked={selected === "+3"}
              onChange={onChange}
            />
            <label className="tw-text-base tw-cursor-pointer" htmlFor="+3">
              <GreenBadge
                ratting="+3"
                bgColor="tw-bg-darkYellow-background"
                width="tw-w-20"
                className="tw-justify-center"
              />
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default RattingFilter;
