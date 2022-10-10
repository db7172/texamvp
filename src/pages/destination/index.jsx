import { startCase } from "lodash";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ActivityCarousel from "../../components/common/carousel/ActivityCarousel";
import EventCarousel from "../../components/common/carousel/EventCarousel";
import WorkationCarousel from "../../components/common/carousel/WorkationCarousel";
import ExploreMoreWrapper from "../../components/common/explore-more-wrapper/ExploreMoreWrapper";
import PageHeader from "../../components/common/page-header/PageHeader";
import TitleBreadcrumb from "../../components/common/title-breadcrumb/TitleBreadcrumb";
import {
  getActivityPageWithCityPath,
  getEventPageWithCityPath,
  getRetreatPageWithCityPath,
  getWorkationPageWithCityPath,
} from "../../constant/comman.const";
import { ACTIVITY, EVENT, RETREAT, WORKATION } from "../../constant/dummyData";
import firebase from "../../firebase";

const DestinationPage = () => {
  const { destinationName } = useParams();
  const DESTINATION_NAME = startCase(destinationName);
  const [destinationDetails, setDestinationDetails] = useState([]);
  const [slashedTableName, setSlashedTableName] = useState([]);

  useEffect(() => {
    setSlashedTableName([
      {
        name: "Home",
        url: "/",
      },
      {
        name: "Destinations",
        url: "/destinations",
      },
      {
        name: DESTINATION_NAME,
        url: "",
      },
    ]);
    let docName = DESTINATION_NAME.toLowerCase();
    firebase
      .firestore()
      .collection("destinations")
      .doc(docName)
      .get()
      .then((doc) => {
        setDestinationDetails(doc.data());
      });
  }, [DESTINATION_NAME]);

  return destinationDetails ? (
    <ExploreMoreWrapper
      coverImage={destinationDetails.banner}
      coverTitle={destinationDetails.name}
      coverDescription={destinationDetails.destinationDescription}
      ratting={5}
      path="#destination"
      review="1970 reviews"
      startingPrice={destinationDetails.startingPrice}
      destinationName={DESTINATION_NAME}
    >
      <div id="destination" className="tw--mt-5">
        <TitleBreadcrumb titleLinks={slashedTableName} />
      </div>
      <div className="tw-mt-9">
        <PageHeader
          title={destinationName}
          desc={destinationDetails.destinationDescription}
        />
      </div>
      <div className="md:tw-mt-20 tw-mt-14">
        <ActivityCarousel
          setting={{ slidesToShow: 3 }}
          title={`Popular Activities in ${DESTINATION_NAME}`}
          data={ACTIVITY}
          path={getActivityPageWithCityPath(
            "popular activities",
            destinationName
          )}
        />
      </div>
      <div className="md:tw-mt-20 tw-mt-14">
        <EventCarousel
          title={`Popular Events ${DESTINATION_NAME}`}
          data={EVENT}
          setting={{ slidesToShow: 3 }}
          event
          path={getEventPageWithCityPath("popular events", destinationName)}
        />
      </div>
      <div className="md:tw-mt-20 tw-mt-14">
        <WorkationCarousel
          title={`Popular Workation ${DESTINATION_NAME}`}
          data={WORKATION}
          setting={{ slidesToShow: 3 }}
          path={getWorkationPageWithCityPath(
            "Popular Workation",
            DESTINATION_NAME
          )}
        />
      </div>
      <div className="md:tw-mt-20 tw-mt-14">
        <EventCarousel
          title={`Popular Retreat ${DESTINATION_NAME}`}
          data={RETREAT}
          setting={{ slidesToShow: 3 }}
          path={getRetreatPageWithCityPath("Popular Retreat", DESTINATION_NAME)}
        />
      </div>
    </ExploreMoreWrapper>
  ) : (
    <p>Loading...</p>
  );
};

export default DestinationPage;
