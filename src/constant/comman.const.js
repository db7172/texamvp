export const SECONDARY_COLOR = "#FFE606";

// email id validation regex
export const emailRegex =
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const DESTINATION_NAME = ":destinationName";

export const ROUTES = {
  HOME: "/",
  DESTINATION: `/destination/${DESTINATION_NAME}`,
  NOT_FOUND: "/404",
};

export const getDestinationPagePath = (destinationName) => {
  let path = ROUTES.DESTINATION;
  path = path.replace(DESTINATION_NAME, destinationName);

  return path;
};
