import { startCase } from "lodash";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ActivityCarousel from "../../components/common/carousel/ActivityCarousel";
import BlogCarousel from "../../components/common/carousel/BlogCarousel";
import DestinationCarousel from "../../components/common/carousel/DestinationCarousel";
import EventCarousel from "../../components/common/carousel/EventCarousel";
import WorkationCarousel from "../../components/common/carousel/WorkationCarousel";
import Container from "../../components/common/container/Container";
import Jumbotron from "../../components/common/jumbotron/Jumbotron";
import TitleBreadcrumb from "../../components/common/title-breadcrumb/TitleBreadcrumb";
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
    <Container>
      <div className="tw-mt-14">
        <Jumbotron
          image={DESTINATION_IMAGE}
          title={destinationName}
          description="Go on a trekking trip to the man-made heaven"
          ratting={5}
          review="1970 reviews"
          startingPrice={16949}
        />
      </div>
      <div className="tw--mt-5">
        <TitleBreadcrumb titleLinks={slashedTableName} />
      </div>
      <div className="tw-mt-9">
        <h1 className="tw-text-4xl tw-font-medium">
          {startCase(destinationName)}
        </h1>
        <p className="tw-text-lg tw-tracking-wide tw-text-secondary-color tw-mt-5">
          The human instinct to explore new places and things is always there.
          People travel for all sorts of reasons, be it to spend time with their
          loved ones or today North Andaman and Baratang Island are also popular
          with travelers. From pristine beaches to bewildering{" "}
        </p>
        <p className="tw-text-right tw-text-lg tw-text-blue-500 tw-underline">
          <Link to="#">Read More</Link>
        </p>
      </div>
      <div className="md:tw-mt-20 tw-mt-14">
        <ActivityCarousel
          setting={{ slidesToShow: 3 }}
          title={`Popular Activities in ${DESTINATION_NAME}`}
          data={ACTIVITY}
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
      <div className="md:tw-mt-20 tw-mt-14">
        <BlogCarousel title={`Things to do in ${DESTINATION_NAME}`} />
      </div>

      <div className="md:tw-mt-20 tw-mt-14">
        <BlogCarousel title={`Places to visit in ${DESTINATION_NAME}`} />
      </div>

      <div className="md:tw-mt-20 tw-mt-14">
        <p className="md:tw-text-2xl tw-text-lg tw-font-medium">
          Places You Like
        </p>

        <div className="md:tw-mt-14 tw-mt-3">
          <DestinationCarousel setting={{ slidesToShow: 4 }} />
        </div>
      </div>
    </Container>
  );
};

export default DestinationPage;
