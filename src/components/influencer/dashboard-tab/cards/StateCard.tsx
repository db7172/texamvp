import classNames from "classnames";
import { indCurrency } from "../../../../utils/utils";

type Props = {
  title: string;
  value: number;
  price: boolean;
  additionalData?: {
    negative: boolean;
    changes: number;
  };
};

const StateCard = ({ title, value, price = false, additionalData }: Props) => {
  return (
    <div className="tw-p-5 tw-bg-white tw-rounded-md tw-shadow-card">
      <p className="tw-text-xs tw-text-secondary-color tw-mb-2">{title}</p>
      <div
        style={{ height: "32px" }}
        className="tw-flex tw-justify-between tw-items-center"
      >
        <p className="tw-text-lg tw-font-medium">
          {price ? indCurrency(value) : value}
        </p>
        {Boolean(additionalData) && (
          <p
            className={classNames(
              "tw-text-xs tw-p-2 tw-rounded-md",
              additionalData?.negative
                ? "tw-bg-lite-red tw-text-dark-red"
                : "tw-bg-lite-green tw-text-green-background"
            )}
          >{`${additionalData?.negative ? "-" : "+"}${
            additionalData?.changes
          }%`}</p>
        )}
      </div>
    </div>
  );
};

export default StateCard;
