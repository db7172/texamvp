import React from "react";
import BlogCarousel from "../carousel/BlogCarousel";
import DestinationCarousel from "../carousel/DestinationCarousel";
import Container from "../container/Container";
import Jumbotron from "../jumbotron/Jumbotron";

const ExploreMoreWrapper = ({
  children,
  coverImage,
  coverTitle,
  coverDescription,
  ratting,
  review,
  startingPrice,
  destinationName,
}) => {
  return (
    <>
      <div className="tw-mt-5 tw-px-7">
        <Jumbotron
          image={coverImage}
          title={coverTitle}
          description={coverDescription}
          ratting={ratting}
          review={review}
          startingPrice={startingPrice}
        />
      </div>
      <Container>
        {children}
        <div className="md:tw-mt-20 tw-mt-14">
          <BlogCarousel
            title={`Things to do ${
              destinationName ? `in ${destinationName}` : ""
            }`}
          />
        </div>

        <div className="md:tw-mt-20 tw-mt-14">
          <BlogCarousel
            title={`Places to visit ${
              destinationName ? `in ${destinationName}` : ""
            }`}
          />
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
    </>
  );
};

export default ExploreMoreWrapper;