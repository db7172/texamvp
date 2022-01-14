import { indCurrency } from "../../utils/utils";
// import Tags from "../Tags/Tags";
import hotel from "../../assets/png/hotel.png";
import camera from "../../assets/png/photo-camera.png";
import taxi from "../../assets/png/taxi.png";
import { getViewMoreDetailsForActivityPath } from "../../constant/comman.const";
import { Link } from "react-router-dom";
import PageCardContainer from "../card/page-card-container/PageCardContainer";
import { Button } from "antd";
import firebase from "../../firebase";
import img from "../../assets/png/activity.png";
import { useEffect, useState } from "react";

const ActivityCard = (props) => {
  const { imgUrl } = props;

  // const { totalActivities } = props;
  // const { multi } = props;
  const { data } = props;
  const activityData = data.data.data.formData;
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
      venderName: vender.name,
    },
  };
  // let totalActivities = single.concat(multi);
  // console.log(totalActivities[0].data.data.formData);

  useEffect(() => {
    firebase
      .firestore()
      .collection("venders")
      .doc(data.data.data.userID)
      .get()
      .then((doc) => {
        if (doc.exists) setVender(doc.data());
      });
  }, [data.data.data.userID]);

  return (
    <PageCardContainer imgUrl={img} title={activityData.activityName}>
      <div className="tw-flex tw-flex-wrap tw-mt-3">
        {/* {tags.map((t, i) => (
          <Tags className="tw-my-1 tw-mr-2 tw-text-xs" tag={t} key={i} />
        ))} */}
      </div>
      <p className="tw-font-medium tw-mt-3">
        <span className="tw-text-secondary-color">Cities : </span>
        <span>{activityData.destinations.destination}</span>
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
        <span>{vender ? vender.name : null}</span>
      </p>
      <div className="tw-font-medium tw-mt-3 tw-flex tw-items-center">
        <span className="tw-text-secondary-color tw-mr-3">Includes : </span>
        <span className="tw-flex">
          <div className="tw-mr-3 tw-p-3 tw-w-10 tw-h-10 tw-bg-gray-background tw-rounded-full">
            <img className="tw-w-full h-auto" src={hotel} alt="" />
          </div>
          <div className="tw-mr-3 tw-p-3 tw-w-10 tw-h-10 tw-bg-gray-background tw-rounded-full">
            <img className="tw-w-full h-auto" src={taxi} alt="" />
          </div>
          <div className="tw-mr-3 tw-p-3 tw-w-10 tw-h-10 tw-bg-gray-background tw-rounded-full">
            <img className="tw-w-full h-auto" src={camera} alt="" />
          </div>
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
