import star from "../../assets/svg/star.svg";
import GreenBadge from "../green-badge/GreenBadge";
import time from "../../assets/svg/time.svg";
import wifi from "../../assets/svg/wifi.svg";
import cooking from "../../assets/svg/cooking.svg";
import { indCurrency } from "../../utils/utils";
import PageCardContainer from "../card/page-card-container/PageCardContainer";
import { getViewMoreDetailsForWorkcationPath } from "../../constant/comman.const";
import { Link } from "react-router-dom";

const WorkationPageCard = ({
  name,
  duration,
  facility,
  price,
  imgUrl,
  city,
}) => {
  const routingDetails = {
    pathname: getViewMoreDetailsForWorkcationPath(city, name),
    state: { name, duration, facility, price, imgUrl, city },
  };
  return (
    <PageCardContainer imgUrl={imgUrl}>
      <div className="tw-flex tw-justify-between tw-items-center">
        <div className="tw-flex">
          {Array(5)
            .fill(null)
            .map((_, i) => (
              <img key={i} className="tw-w-3 tw-mr-1" src={star} alt="" />
            ))}
          <p className="tw-text-primary-color tw-ml-2">Hotel</p>
        </div>
        <GreenBadge ratting={4.4} />
      </div>
      <p className="tw-text-primary-color tw-mt-2">Phuentsholing</p>
      <h3 className="tw-font-medium tw-tracking-1 tw-text-lg tw-text-primary-color tw-mt-1">
        {name}
      </h3>
      <p className="tw-flex tw-mt-1 tw-text-secondary-color">
        <img src={time} alt="" /> <span className="tw-ml-2">{duration}</span>
      </p>
      <div className="tw-flex tw-mt-2 tw-flex-wrap tw-text-secondary-color">
        {facility.Breakfast && (
          <p className="tw-flex tw-mr-3">
            <img src={cooking} alt="" />{" "}
            <span className="tw-ml-2">Breakfast at hotel</span>
          </p>
        )}
        {facility.FreeWifi && (
          <p className="tw-flex">
            <img src={wifi} alt="" /> <span className="tw-ml-2">Free Wifi</span>
          </p>
        )}
      </div>

      <p className="tw-text-yellow-color tw-font-bold tw-my-5 tw-text-xl">
        <span className="tw-text-secondary-color tw-font-normal tw-text-xs tw-mr-2">
          Starting from
        </span>
        {indCurrency(price)}
        <span className="tw-text-secondary-color tw-font-normal tw-ml-2 tw-text-xs">
          Per Person
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

export default WorkationPageCard;
