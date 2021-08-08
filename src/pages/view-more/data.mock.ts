import age from "../../assets/svg/age.svg";
import duration from "../../assets/svg/duration.svg";
import level from "../../assets/svg/level.svg";
import mountant from "../../assets/svg/mountant.svg";

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
    description: "Lonawala",
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
