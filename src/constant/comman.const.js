export const SECONDARY_COLOR = "#FFE606";
export const PAGE_SPACING = [0, 40];
export const RIGHT_SPACING_VALUE = 40;
export const RIGHT_SPACING_SMAL_VALUE = 40;
export const LEFT_SPACING_VALUE = 0;
export const LEFT_SPACING_LARGE_VALUE = 20;

// email id validation regex
export const emailRegex =
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export const ACTIVITY = {
  HOURLY: "hourly",
  SINGLE_DAY: "singleday",
  MULTY_DAY: "multyday",
};

export const EVENTS = {
  ONLINE: "online",
  OFFLINE: "offline",
};

export const RETREAT_TYPES = {
  RETREAT: "retreat",
  WORKATION: "workation",
};

const DESTINATION_NAME = ":destinationName";
const ACTIVITY_TYPE = ":activityType";
const ACTIVITY_NAME = ":activityName";
const ACTIVITY_ID = ":id";
const EVENT_TYPE = ":eventType";
const EVENT_NAME = ":eventName";
const WORKATION_TYPE = ":workationType";
const RETREAT_TYPE = ":retreatType";
const RETREAT_NAME = ":retreatName";

export const ROUTES = {
  HOME: "/",
  INFLUENCER: "/influencer",
  INFLUENCER_DASHBOARD: "/influencer/dashboard",
  INFLUENCER_SIGNUP: "/influencer/signup",
  INFLUENCER_PASSWARD_RESET: "/influencer/passwordreset",
  INFLUENCER_PROFILE: "/influencer/profile",
  INFLUENCER_PROFILE_SETTING: "/influencer/settings",
  INFLUENCER_APPLICATION: "/influencer/application",
  INFLUENCER_ACTIVITY_FORM: `/influencer/activity/${ACTIVITY_TYPE}`,
  INFLUENCER_EVENT_FORM: `/influencer/event/${EVENT_TYPE}`,
  INFLUENCER_RETREAT_FORM: `/influencer/retreat/${RETREAT_TYPE}`,
  USER_DASHBOARD: "/user/dashboard",
  PAYMENT: "/payment",
  DESTINATION: `/destination/${DESTINATION_NAME}`,
  RETREATS: `/retreats`,
  WORKCATIONS: `/workcations`,
  ACTIVITES: `/activities`,
  ACTIVITY: `/activity/${ACTIVITY_TYPE}`,
  ACTIVITY_IN_CITY: `/activity/${ACTIVITY_TYPE}/${DESTINATION_NAME}`,
  EVENTS: `/events`,
  EVENT: `/event/${EVENT_TYPE}`,
  EVENT_IN_CITY: `/event/${EVENT_TYPE}/${DESTINATION_NAME}`,
  WORKATION: `/workcation/${WORKATION_TYPE}`,
  WORKATION_IN_CITY: `/workcation/${WORKATION_TYPE}/${DESTINATION_NAME}`,
  RETREAT: `/retreat/${RETREAT_TYPE}`,
  RETREAT_IN_CITY: `/retreat/${RETREAT_TYPE}/${DESTINATION_NAME}`,
  VIEW_MORE_DETAILS_ACTIVITY: `/details/activity/${ACTIVITY_TYPE}/${ACTIVITY_NAME}/${ACTIVITY_ID}`,
  VIEW_MORE_DETAILS_EVENT: `/details/event/${EVENT_TYPE}/${EVENT_NAME}`,
  VIEW_MORE_DETAILS_RETREAT: `/details/retreat/${RETREAT_TYPE}/${RETREAT_NAME}`,
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

// VIEW DETAILS

export const getViewMoreDetailsForActivityPath = (
  activityType,
  activityName,
  id
) => {
  let path = ROUTES.VIEW_MORE_DETAILS_ACTIVITY;
  path = path.replace(ACTIVITY_TYPE, activityType);
  path = path.replace(ACTIVITY_NAME, activityName);
  path = path.replace(ACTIVITY_ID, id);

  return path;
};

export const getViewMoreDetailsForEventPath = (eventType, eventName) => {
  let path = ROUTES.VIEW_MORE_DETAILS_EVENT;
  path = path.replace(EVENT_TYPE, eventType);
  path = path.replace(EVENT_NAME, eventName);

  return path;
};

export const getViewMoreDetailsForRetreatPath = (retreatType, retreatName) => {
  let path = ROUTES.VIEW_MORE_DETAILS_RETREAT;
  path = path.replace(RETREAT_TYPE, retreatType);
  path = path.replace(RETREAT_NAME, retreatName);

  return path;
};

// influencer form

export const getActivityFormPath = (activityType) => {
  let path = ROUTES.INFLUENCER_ACTIVITY_FORM;
  path = path.replace(ACTIVITY_TYPE, activityType);

  return path;
};

export const getEventFormPath = (eventType) => {
  let path = ROUTES.INFLUENCER_EVENT_FORM;
  path = path.replace(EVENT_TYPE, eventType);

  return path;
};

export const getRetreatFormPath = (retreatType) => {
  let path = ROUTES.INFLUENCER_RETREAT_FORM;
  path = path.replace(RETREAT_TYPE, retreatType);

  return path;
};
