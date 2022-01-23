import age from "../../assets/svg/age.svg";
import duration from "../../assets/svg/duration.svg";
import level from "../../assets/svg/level.svg";
import mountant from "../../assets/svg/mountant.svg";
import mic from "../../assets/svg/mic.svg";
import lang from "../../assets/svg/Translate.svg";

import checkMark from "../../assets/svg/check-mark.svg";
import cancel from "../../assets/svg/cancel.svg";
import bag from "../../assets/svg/bag.svg";
import info from "../../assets/svg/info.svg";

import photo from "../../assets/svg/photo-camera.svg";
import plane from "../../assets/svg/plane.svg";
import hotel from "../../assets/svg/hotel.svg";
import taxi from "../../assets/svg/taxi.svg";

export type ActivityInfoVMD = {
  image: string;
  title: string;
  description: string;
};

export const VIEW_MORE_ACTIVITY_DETAILS: ActivityInfoVMD[] = [
  {
    image: age,
    title: "Activity Age",
    description: "09-54",
  },
  {
    image: duration,
    title: "Base Camp",
    description: "Lonavala",
  },
  {
    image: level,
    title: "Ideal Duration",
    description: "1Days",
  },
  {
    image: mountant,
    title: "Activity Level",
    description: "Easy",
  },
];
export const VIEW_MORE_EVENT_DETAILS: ActivityInfoVMD[] = [
  {
    image: mic,
    title: "Live Performance",
    description: "Enjoy Music",
  },
  {
    image: age,
    title: "For Age",
    description: "18+",
  },
  {
    image: lang,
    title: "Language",
    description: "English",
  },
  {
    image: duration,
    title: "Ideal Duration",
    description: "2 Days",
  },
];

export const VIEW_MORE_RETREAT_DETAILS: ActivityInfoVMD[] = [
  {
    image: mic,
    title: "Yoga",
    description: "ELearning Session",
  },
  {
    image: age,
    title: "For Age",
    description: "18+",
  },
  {
    image: lang,
    title: "Language",
    description: "English",
  },
  {
    image: duration,
    title: "Ideal Duration",
    description: "2 Days",
  },
];

export const INCLUSTION_IMG = {
  photo: photo,
  plane: plane,
  hotel: hotel,
  taxi: taxi,
};

export const INCLUSION_DETAILS = {
  image: checkMark,
  header: "Inclusion",
  content: {
    header: "Inclusions by TexaTrove",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur",
    ],
  },
};

export const TERMS_AND_CONDITIONS = {
  image: info,
  header: "Terms and Condition",
  content: {
    header: "Terms & Conditions by TexaTrove",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur",
    ],
  },
};

export const EVENT_ESSENTIALS = {
  image: bag,
  header: "Event essentials",
  content: [
    {
      header: "How to reach",
      content: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur",
      ],
    },
  ],
};

export const EXCLUSION_DETAILS = {
  image: cancel,
  header: "Exclusion",
  content: {
    header: "Tour Exclusion by TexaTrove",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur",
    ],
  },
};

export const TRIP_ESSENTIALS = {
  image: bag,
  header: "Trip essentials",
  content: [
    {
      header: "How to reach Hempta Pass Trekk",
      content: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur",
      ],
    },
    {
      header: "Thing To Carry",
      content: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur",
      ],
    },
    {
      header: "Thing Not Allowed",
      content: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur",
      ],
    },
    {
      header: "Safty Norms",
      content: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur",
      ],
    },
    {
      header: "Certificate Require",
      content: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur",
      ],
    },
  ],
};

export const VIEW_MORE_WORKCATION = {
  about: {
    header: "About",
    image: hotel,
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  policies: {
    header: "Policies",
    image: hotel,
    content: {
      header: "",
      content: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur",
      ],
    },
  },
};
