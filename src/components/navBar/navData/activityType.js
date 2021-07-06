import { chunkArray } from "../../../utils/utils";

const options = [
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

export const ACTIVITY_DATA = {
  title: "Activity Type",
  options: chunkArray(options, 5),
};
