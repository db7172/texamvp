import { startCase } from "lodash";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ActivityCarousel from "../../components/common/carousel/ActivityCarousel";
import EventCarousel from "../../components/common/carousel/EventCarousel";
import WorkationCarousel from "../../components/common/carousel/WorkationCarousel";
import ExploreMoreWrapper from "../../components/common/explore-more-wrapper/ExploreMoreWrapper";
import PageHeader from "../../components/common/page-header/PageHeader";
import TitleBreadcrumb from "../../components/common/title-breadcrumb/TitleBreadcrumb";
import { getActivityPageWithCityPath } from "../../constant/comman.const";
import { ACTIVITY, EVENT, RETREAT, WORKATION } from "../../constant/dummyData";
import { DESTINATION_IMAGE } from "../../constant/imageConst";

const DestinationPage = () => {
  const { destinationName } = useParams();
  const DESTINATION_NAME = startCase(destinationName);
  const [slashedTableName, setSlashedTableName] = useState([]);

  useEffect(() => {
    setSlashedTableName([
      {
        name: "Home",
        url: "/",
      },
      {
        name: DESTINATION_NAME,
        url: "",
      },
    ]);
  }, [DESTINATION_NAME]);

  return (
    <ExploreMoreWrapper
      coverImage={DESTINATION_IMAGE}
      coverTitle={destinationName}
      coverDescription="Go on a trekking trip to the man-made heaven"
      ratting={5}
      review="1970 reviews"
      startingPrice={16949}
      destinationName={destinationName}
    >
      <div className="tw--mt-5">
        <TitleBreadcrumb titleLinks={slashedTableName} />
      </div>
      <div className="tw-mt-9">
        <PageHeader title={destinationName} />
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
        />
      </div>
      <div className="md:tw-mt-20 tw-mt-14">
        <WorkationCarousel
          title={`Popular Workation ${DESTINATION_NAME}`}
          data={WORKATION}
          setting={{ slidesToShow: 3 }}
        />
      </div>
      <div className="md:tw-mt-20 tw-mt-14">
        <EventCarousel
          title={`Popular Retreat ${DESTINATION_NAME}`}
          data={RETREAT}
          setting={{ slidesToShow: 3 }}
        />
      </div>
    </ExploreMoreWrapper>
  );
};

export default DestinationPage;
