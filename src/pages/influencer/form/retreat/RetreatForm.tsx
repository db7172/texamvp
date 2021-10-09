import { useParams } from "react-router-dom";
import Retreat from "./Retreat";
import Workation from "./Workation";

const RetreatForm = () => {
  const { retreatType } = useParams<{ retreatType: "workation" | "retreat" }>();
  return <div>{retreatType === "workation" ? <Workation /> : <Retreat />}</div>;
};

export default RetreatForm;
