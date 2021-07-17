import React from "react";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import { indCurrency } from "../../../utils/utils";

const RangeSelector = ({ title, min, max, value, handleClick }) => {
  return (
    <>
      <h3 className="tw-text-lg tw-font-medium">{title}</h3>
      <div className="tw-mt-4 tw-pr-3">
        <Nouislider
          range={{ min: min, max: max }}
          start={value}
          step={1000}
          onChange={handleClick}
          connect
          animate
        />
      </div>
      <div className="tw-flex tw-justify-between tw-mt-3">
        <span>{indCurrency(value[0])}</span>
        <span>{indCurrency(value[1])}</span>
      </div>
    </>
  );
};

export default RangeSelector;
