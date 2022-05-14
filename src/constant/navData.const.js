import { chunkArray } from "../utils/utils";
import firebase from "../firebase";

let activityData = [];

async function getAcitivty() {
  await firebase
    .firestore()
    .collection("categories")
    .get()
    .then((querySnap) => {
      activityData.push(
        querySnap.docs
          .map((doc) => doc.data())
          .filter((item) => {
            return item.type === "activity";
          })
      );
    });
}

getAcitivty();

export const activityOption = activityData;

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

export const destinationOptions = [
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

export const retreatOptions = [
  "Yoga",
  "Meditaion",
  "Spiritual Balnce",
  "Yoga",
  "Meditaion",
  "Spiritual Balnce",
  "Yoga",
  "Meditaion",
  "Spiritual Balnce",
  "Yoga",
  "Meditaion",
  "Spiritual Balnce",
  "Yoga",
  "Meditaion",
];

export const ACTIVITY_DATA = {
  title: "Activity Type",
  options: chunkArray(activityOption, 5),
};

export const EVENT_DATA = {
  title: "Event Type",
  options: chunkArray(eventOptions, 5),
};

export const RETREAT_DATA = {
  title: "Retreat",
  options: chunkArray(retreatOptions, 5),
};

export const WORKCATION_DATA = {
  title: "Workcation",
  options: chunkArray(workcationOptions, 5),
};

export const RETREAT_DESTINATION = {
  workcation: {
    title: "Workcation",
    options: chunkArray(workcationOptions, 5),
  },
  reterat: { title: "Reterat", options: chunkArray(destinationOptions, 5) },
  multidata: true,
};
