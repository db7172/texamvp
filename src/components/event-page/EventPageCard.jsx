import { Link } from "react-router-dom";
import { getViewMoreDetailsForEventPath } from "../../constant/comman.const";
import { indCurrency } from "../../utils/utils";
import PageCardContainer from "../card/page-card-container/PageCardContainer";
import coverImg from "../../assets/png/event.jpg";

const EventPageCard = ({ name, datetime, type, price, imgUrl, data }) => {
  const routingDetails = {
    pathname: getViewMoreDetailsForEventPath(
      data.data.formData.eventType,
      data.data.formData.eventName
    ),
    state: { data },
  };

  console.log(data.data.formData);

  return (
    <PageCardContainer imgUrl={coverImg} title={data.data.formData.eventName}>
      <p className="tw-font-medium tw-text-secondary-color tw-mt-2">
        {`${data.data.formData.sailentFeatures.startDate} | ${data.data.formData.sailentFeatures.startTime}`}
      </p>
      <p className="tw-mt-2 tw-text-secondary-color tw-font-medium">
        {data.data.formData.eventType}
      </p>

      <p className=" tw-my-5 tw-price tw-text-xl">
        <span className="tw-text-secondary-color tw-font-normal tw-text-xs tw-mr-2">
          Starting from
        </span>
        {indCurrency(data.data.formData.payment)}
        <span className="tw-text-secondary-color tw-font-normal tw-text-xs tw-ml-2">
          Onwards
        </span>
      </p>
      <Link to={routingDetails}>
        <button className="tw-w-full tw-py-3 tw-bg-secondary-color tw-rounded-lg tw-text-primary-color tw-font-medium">
          View Details
        </button>
      </Link>
    </PageCardContainer>
  );
};

export default EventPageCard;
