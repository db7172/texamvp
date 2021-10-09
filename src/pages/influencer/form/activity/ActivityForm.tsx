import { useParams } from "react-router";
import HourlyAndSingleDay from "./HourlyAndSingleDay";
import MultiDays from "./MultiDays";

const ActivityForm = () => {
  const { activityType } =
    useParams<{ activityType: "hourly" | "singleday" | "multyday" }>();
  return (
    <>
      {activityType === "hourly" || activityType === "singleday" ? (
        <HourlyAndSingleDay />
      ) : (
        <MultiDays />
      )}
    </>
  );
};

export default ActivityForm;
