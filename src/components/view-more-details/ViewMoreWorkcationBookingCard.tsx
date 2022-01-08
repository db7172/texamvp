import { Divider } from "antd";
import { indCurrency } from "../../utils/utils";

const ViewMoreWorkcationBookingCard = () => {
  return (
    <div className="tw-relative">
      <div className="tw-shadow-card tw-px-5 tw-pt-8 tw-pb-5 tw-rounded-lg">
        <p>
          <span className="tw-text-yellow-color tw-text-xl tw-mr-3">
            {indCurrency(28000)}
          </span>
          <span className="tw-text-secondary-color tw-line-through">
            {indCurrency(29000)}
          </span>
        </p>
        <p className="tw-text-xs tw-text-secondary-color tw-font-lato">
          Inclusive of all taxes
        </p>
        <Divider />
      </div>
    </div>
  );
};

export default ViewMoreWorkcationBookingCard;
