export const SECONDARY_COLOR = "#FFE606";

// email id validation regex
export const emailRegex =
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const DESTINATION_NAME = ":destinationName";
const ACTIVITY_TYPE = ":activityType";

export const ROUTES = {
  HOME: "/",
  DESTINATION: `/destination/${DESTINATION_NAME}`,
  ACTIVITY: `/activity/${ACTIVITY_TYPE}`,
  ACTIVITY_IN_CITY: `/activity/${ACTIVITY_TYPE}/${DESTINATION_NAME}`,
  NOT_FOUND: "/404",
};

export const getDestinationPagePath = (destinationName) => {
  let path = ROUTES.DESTINATION;
  path = path.replace(DESTINATION_NAME, destinationName);

  return path;
};

export const getActivityPagePath = (activityType) => {
  let path = ROUTES.ACTIVITY;
  path = path.replace(ACTIVITY_TYPE, activityType);

  return path;
};

export const getActivityPageWithCityPath = (activityType, destinationName) => {
  let path = ROUTES.ACTIVITY_IN_CITY;
  path = path.replace(ACTIVITY_TYPE, activityType);

  path = path.replace(DESTINATION_NAME, destinationName);

  return path;
};
