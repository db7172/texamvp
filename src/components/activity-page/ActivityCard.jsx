import { indCurrency } from "../../utils/utils";
// import Tags from "../Tags/Tags";
import hotel from "../../assets/png/hotel.png";
import camera from "../../assets/png/photo-camera.png";
import taxi from "../../assets/png/taxi.png";
import { getViewMoreDetailsForActivityPath } from "../../constant/comman.const";
import { Link } from "react-router-dom";
import PageCardContainer from "../card/page-card-container/PageCardContainer";
import { Button, Tooltip } from "antd";
import firebase from "../../firebase";
import img from "../../assets/png/activity.png";
import { useEffect, useState } from "react";

const ActivityCard = (props) => {
  const { data } = props;
  const activityData = data.data;
  const [vender, setVender] = useState({});

  const routingDetails = {
    pathname: getViewMoreDetailsForActivityPath(
      activityData.sailentFeatures.activityType,
      activityData.activityName,
      props.data.id
    ),
    state: {
      ...props,
      activityName: activityData.activityName,
      duration: "3 Days",
      rating: 5,
      review: "89 Reviews",
      venderName: vender.companyName,
    },
  };

  useEffect(() => {
    firebase
      .firestore()
      .collection("venders")
      .doc(data.data.user)
      .get()
      .then((doc) => {
        if (doc.exists) setVender(doc.data());
      });
  }, [data.data.user]);

  return (
    <PageCardContainer
      imgUrl={data.data.imgLink[0]}
      title={activityData.activityName}
    >
      <div className="tw-flex tw-flex-wrap tw-mt-3">
        {/* {tags.map((t, i) => (
          <Tags className="tw-my-1 tw-mr-2 tw-text-xs" tag={t} key={i} />
        ))} */}
      </div>
      <p className="tw-font-medium tw-mt-3">
        <span className="tw-text-secondary-color">Cities : </span>
        {activityData.destinations
          ? activityData.destinations.destination
          : activityData.destination.map((d) => d.destination + ", ")}
        {/* <span>{activityData.destination[0].destination}</span>,{" "}
        <span>{activityData.destination[1]?.destination}</span>,{" "}
        <span>{activityData.destination[2]?.destination}</span> */}
      </p>
      <p className="tw-font-medium tw-mt-3">
        <span className="tw-text-secondary-color">Duration : </span>
        <span>{5}</span>
      </p>
      <p className="tw-font-medium tw-mt-3">
        <span className="tw-text-secondary-color">Activity Type : </span>
        <span>{activityData.sailentFeatures.activityType}</span>
      </p>
      <p className="tw-font-medium tw-mt-3">
        <span className="tw-text-secondary-color">Activity Level : </span>
        <span>{activityData.sailentFeatures.activityLevel}</span>
      </p>
      <p className="tw-font-medium tw-mt-3">
        <span className="tw-text-secondary-color">Activity By : </span>
        <span>{vender ? vender.companyName : null}</span>
      </p>
      <div className="tw-font-medium tw-mt-3 tw-flex tw-items-center">
        <span className="tw-text-secondary-color tw-mr-3">Includes : </span>
        <span className="tw-flex">
          <Tooltip title="Hotel stay">
            <div className="tw-mr-3 tw-p-3 tw-w-10 tw-h-10 tw-bg-gray-background tw-rounded-full">
              <img className="tw-w-full h-auto" src={hotel} alt="" />
            </div>
          </Tooltip>
          <Tooltip title="Traveling">
            <div className="tw-mr-3 tw-p-3 tw-w-10 tw-h-10 tw-bg-gray-background tw-rounded-full">
              <img className="tw-w-full h-auto" src={taxi} alt="" />
            </div>
          </Tooltip>
          <Tooltip title="Photography">
            <div className="tw-mr-3 tw-p-3 tw-w-10 tw-h-10 tw-bg-gray-background tw-rounded-full">
              <img className="tw-w-full h-auto" src={camera} alt="" />
            </div>
          </Tooltip>
        </span>
      </div>

      <div className="tw-my-6">
        <p className="tw-flex tw-items-center">
          <span className="tw-text-secondary-color tw-text-xs tw-mr-2">
            Starting from
          </span>
          <span className="tw-mr-2 tw-price tw-text-xl">
            {indCurrency(activityData.payment)}
          </span>
          <span className="tw-text-secondary-color tw-text-xs">Per Person</span>
        </p>
      </div>

      <Link to={routingDetails}>
        <Button type="default" className="tw-texa-button tw-w-full tw-m-0">
          View Details
        </Button>
      </Link>
    </PageCardContainer>
  );
};

export default ActivityCard;
