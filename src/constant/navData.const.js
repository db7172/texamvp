import { chunkArray } from "../utils/utils";

export const activityOptions = [
  "Trekking",
  "Camping",
  "Skiingg",
  "Surfing",
  "Kayking",
  "Scuba Diving",
  "Snookering",
  "Web Shows",
  "Ladakh",
  "Cycle Trip",
  "Trekking",
  "Camping",
  "Skiingg",
  "Surfing",
  "Kayking",
  "Scuba Diving",
  "Snookering",
  "Web Shows",
  "Ladakh",
];

export const eventOptions = [
  "Comedy",
  "Music Fest",
  "Online Course",
  "Theatre",
  "Music",
  "Comedy",
  "Music Fest",
  "Online Course",
  "Theatre",
  "Music",
  "Comedy",
  "Music Fest",
  "Online Course",
  "Theatre",
];

export const workcationOptions = [
  "Kashmir",
  "Himachal",
  "Uttarakhand",
  "Kerala",
  "Arunachal Pradesh",
  "Kashmir",
  "Himachal",
  "Uttarakhand",
  "Kerala",
  "Arunachal Pradesh",
  "Kashmir",
  "Himachal",
  "Uttarakhand",
  "Kerala",
];

export const reteratOptions = [
  "Kashmir",
  "Himachal",
  "Uttarakhand",
  "Kerala",
  "Arunachal Pradesh",
  "Kashmir",
  "Himachal",
  "Uttarakhand",
  "Kerala",
  "Arunachal Pradesh",
  "Kashmir",
  "Himachal",
  "Uttarakhand",
  "Kerala",
];

export const ACTIVITY_DATA = {
  title: "Activity Type",
  options: chunkArray(activityOptions, 5),
};

export const EVENT_DATA = {
  title: "Event Type",
  options: chunkArray(eventOptions, 5),
};

export const RETREAT_DESTINATION = {
  workcation: {
    title: "Workcation Destination",
    options: chunkArray(workcationOptions, 5),
  },
  reterat: { title: "Reterat", options: chunkArray(reteratOptions, 5) },
  multidata: true,
};
