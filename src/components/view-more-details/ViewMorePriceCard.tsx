import { CheckCircleFilled } from "@ant-design/icons";
import { Package } from "Models";
import React from "react";
import { indCurrency } from "../../utils/utils";

type Props = {
  handlePlanClick: (value: Package) => void;
  active: Package;
  data: Package;
};

const ViewMorePriceCard = ({ handlePlanClick, active, data }: Props) => {
  return (
    <div
      className="tw-p-3 tw-mt-3 tw-shadow tw-rounded-md tw-bg-gray-background tw-cursor-pointer"
      onClick={() => handlePlanClick(data)}
    >
      <div className="tw-flex tw-justify-between">
        <h3 className="tw-text-base tw-font-medium">{`${
          data.type
        } - ${indCurrency(data.price)}`}</h3>
        <CheckCircleFilled
          style={{
            color: active.type === data.type ? "yellow" : "white",
            fontSize: "25px",
          }}
        />
      </div>
      <p className="tw-mt-3 tw-text-secondary-color">{data.description}</p>
    </div>
  );
};

export default ViewMorePriceCard;
