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
      <Container>{children}</Container>
    </>
  );
};

export default ExploreMoreWrapper;
