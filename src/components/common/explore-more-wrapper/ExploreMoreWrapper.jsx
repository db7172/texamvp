import React from "react";
import BlogCarousel from "../carousel/BlogCarousel";
import DestinationCarousel from "../carousel/DestinationCarousel";
import Container from "../container/Container";
import Jumbotron from "../jumbotron/Jumbotron";
import Title from "../title/Title";

const ExploreMoreWrapper = ({
  children,
  coverImage,
  coverTitle,
  coverDescription,
  ratting,
  review,
  startingPrice,
  destinationName,
  path,
}) => {
  return (
    <>
      <div className="tw-mt-0">
        <Jumbotron
          image={coverImage}
          title={coverTitle}
          description={coverDescription}
          ratting={ratting}
          review={review}
          path={path}
          startingPrice={startingPrice}
        />
      </div>
      <Container>
        {children}
        <div className="md:tw-mt-20 tw-mt-14">
          <BlogCarousel
            description="Lorem ipsum is the dummy text for placing any thing"
            title={`Things to do ${
              destinationName ? `in ${destinationName}` : ""
            }`}
          />
        </div>

        <div className="md:tw-mt-20 tw-mt-14">
          <BlogCarousel
            description="Lorem ipsum is the dummy text for placing any thing"
            title={`Places to visit ${
              destinationName ? `in ${destinationName}` : ""
            }`}
          />
        </div>

        <div className="md:tw-mt-20 tw-mt-14">
          <Title
            title="Events"
            description="Lorem ipsum is the dummy text for placing any thing"
          />
          <div className="tw-mt-3">
            <DestinationCarousel setting={{ slidesToShow: 4 }} />
          </div>
        </div>
      </Container>
    </>
  );
};

export default ExploreMoreWrapper;
