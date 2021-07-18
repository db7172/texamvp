export const SECONDARY_COLOR = "#FFE606";

// email id validation regex
export const emailRegex =
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const DESTINATION_NAME = ":destinationName";
const ACTIVITY_TYPE = ":activityType";
const EVENT_TYPE = ":eventType";

export const ROUTES = {
  HOME: "/",
  DESTINATION: `/destination/${DESTINATION_NAME}`,
  ACTIVITY: `/activity/${ACTIVITY_TYPE}`,
  ACTIVITY_IN_CITY: `/activity/${ACTIVITY_TYPE}/${DESTINATION_NAME}`,
  EVENT: `/event/${EVENT_TYPE}`,
  EVENT_IN_CITY: `/event/${EVENT_TYPE}/${DESTINATION_NAME}`,
  NOT_FOUND: "/404",
};

export const getDestinationPagePath = (destinationName) => {
  let path = ROUTES.DESTINATION;
  path = path.replace(DESTINATION_NAME, destinationName);

  return path;
};

// ACTIVITY
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

// EVENT
export const getEventPagePath = (eventType) => {
  let path = ROUTES.EVENT;
  path = path.replace(EVENT_TYPE, eventType);

  return path;
};

export const getEventPageWithCityPath = (eventType, destinationName) => {
  let path = ROUTES.EVENT_IN_CITY;
  path = path.replace(EVENT_TYPE, eventType);
  path = path.replace(DESTINATION_NAME, destinationName);

  return path;
};
