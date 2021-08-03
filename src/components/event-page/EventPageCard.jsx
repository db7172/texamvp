import { indCurrency } from "../../utils/utils";
import PageCardContainer from "../card/page-card-container/PageCardContainer";

const EventPageCard = ({ name, datetime, type, price, imgUrl }) => {
  return (
    <PageCardContainer imgUrl={imgUrl} title={name}>
      <p className="tw-font-medium tw-text-secondary-color tw-mt-2">
        {datetime}
      </p>
      <p className="tw-mt-2 tw-text-secondary-color tw-font-medium">{type}</p>

      <p className=" tw-my-5 tw-price tw-text-xl">
        <span className="tw-text-secondary-color tw-font-normal tw-text-xs tw-mr-2">
          Starting from
        </span>
        {indCurrency(price)}
        <span className="tw-text-secondary-color tw-font-normal tw-text-xs tw-ml-2">
          Onwards
        </span>
      </p>
      <button className="tw-w-full tw-py-3 tw-bg-secondary-color tw-rounded-lg tw-text-primary-color tw-font-medium">
        View Details
      </button>
    </PageCardContainer>
  );
};

export default EventPageCard;
