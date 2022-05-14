import { Link } from "react-router-dom";
import { getViewMoreDetailsForEventPath } from "../../constant/comman.const";
import { indCurrency } from "../../utils/utils";
import PageCardContainer from "../card/page-card-container/PageCardContainer";
import coverImg from "../../assets/png/event.jpg";

const EventPageCard = (props) => {
  const routingDetails = {
    pathname: getViewMoreDetailsForEventPath(
      props.data.eventType,
      props.data.eventName
    ),
    state: { props },
  };

  console.log(props.data);
  const data = props.data;

  return (
    <PageCardContainer imgUrl={coverImg} title={data.eventName}>
      <p className="tw-font-medium tw-text-secondary-color tw-mt-2">
        {`${data.sailentFeatures.startDate} | ${data.sailentFeatures.startTime}`}
      </p>
      <p className="tw-mt-2 tw-text-secondary-color tw-font-medium">
        {data.eventType}
      </p>

      <p className=" tw-my-5 tw-price tw-text-xl">
        <span className="tw-text-secondary-color tw-font-normal tw-text-xs tw-mr-2">
          Starting from
        </span>
        {indCurrency(data.payment)}
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
