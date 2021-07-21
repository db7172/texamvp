export const SECONDARY_COLOR = "#FFE606";

// email id validation regex
export const emailRegex =
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const DESTINATION_NAME = ":destinationName";
const ACTIVITY_TYPE = ":activityType";
const EVENT_TYPE = ":eventType";
const WORKATION_TYPE = ":workationType";
const RETREAT_TYPE = ":retreatType";

export const ROUTES = {
  HOME: "/",
  DESTINATION: `/destination/${DESTINATION_NAME}`,
  ACTIVITY: `/activity/${ACTIVITY_TYPE}`,
  ACTIVITY_IN_CITY: `/activity/${ACTIVITY_TYPE}/${DESTINATION_NAME}`,
  EVENT: `/event/${EVENT_TYPE}`,
  EVENT_IN_CITY: `/event/${EVENT_TYPE}/${DESTINATION_NAME}`,
  WORKATION: `/workation/${WORKATION_TYPE}`,
  WORKATION_IN_CITY: `/workation/${WORKATION_TYPE}/${DESTINATION_NAME}`,
  RETREAT: `/retreat/${RETREAT_TYPE}`,
  RETREAT_IN_CITY: `/retreat/${RETREAT_TYPE}/${DESTINATION_NAME}`,
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

// RETREAT
export const getRetreatPagePath = (retreatType) => {
  let path = ROUTES.RETREAT;
  path = path.replace(RETREAT_TYPE, retreatType);

  return path;
};

export const getRetreatPageWithCityPath = (retreatType, destinationName) => {
  let path = ROUTES.RETREAT_IN_CITY;
  path = path.replace(RETREAT_TYPE, retreatType);
  path = path.replace(DESTINATION_NAME, destinationName);

  return path;
};

// WORKATION
export const getWorkationPagePath = (workationType) => {
  let path = ROUTES.WORKATION;
  path = path.replace(WORKATION_TYPE, workationType);

  return path;
};

export const getWorkationPageWithCityPath = (
  workationType,
  destinationName
) => {
  let path = ROUTES.WORKATION_IN_CITY;
  path = path.replace(WORKATION_TYPE, workationType);
  path = path.replace(DESTINATION_NAME, destinationName);

  return path;
};
