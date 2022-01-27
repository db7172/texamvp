import { Link } from "react-router-dom";
import { getViewMoreDetailsForEventPath } from "../../../constant/comman.const";
import { indCurrency } from "../../../utils/utils";

const EventCard = (props) => {
  const { name, datetime, type, price, imgUrl } = props;
  const routingDetails = {
    pathname: getViewMoreDetailsForEventPath(type, name),
    state: { name, datetime, type, price, imgUrl },
  };

  let data = props ? props.data.formData : [];

  console.log(props);

  return (
    <div className="tw-card-wrapper tw-zoom-effect">
      <div className="card-container">
        <div className="card_img_height">
          <img className="tw-rounded-md" src="" alt={data.eventName} />
        </div>
        <div className="tw-mt-5 tw-text-secondary-color">
          <div>
            <h3 className="tw-font-medium tw-tracking-1 tw-text-base tw-text-primary-color tw-text-ellipsis">
              {data.eventName}
            </h3>
            <p className="tw-font-medium tw-mt-2">
              {data.sailentFeatures.startDate | data.sailentFeatures.startTime}
            </p>
            <p className="tw-mt-2 tw-font-medium">{data.eventType}</p>
          </div>
          <div className="tw-mb-5 tw-mt-3 tw-border-y tw-py-2 tw-border-gray-200">
            <p className="tw-price tw-text-xl tw-flex tw-items-center">
              <span className="tw-text-secondary-color tw-font-normal tw-mr-2 tw-text-xs">
                Starting from
              </span>
              {indCurrency(data.payment)}
              <span className="tw-text-secondary-color tw-font-normal tw-text-xs tw-ml-2">
                Onwards
              </span>
            </p>
          </div>
          <Link to={routingDetails}>
            <button className="tw-w-full tw-py-3 tw-bg-secondary-color tw-rounded-lg tw-text-primary-color tw-font-medium">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
