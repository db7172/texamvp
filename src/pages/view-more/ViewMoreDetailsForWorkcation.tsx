import { startCase } from "lodash";
import { TitleBreadCrumb } from "Models";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type ParamTypes = {
  destinationName: string;
  workationType: string;
};

const ViewMoreDetailsForWorkcation = () => {
  const [slashedTableName, setSlashedTableName] = useState<
    Array<TitleBreadCrumb>
  >([]);
  const { destinationName, workationType } = useParams<ParamTypes>();
  const WORKCATION_TYPE = startCase(workationType);
  const DESTINATION_NAME = startCase(destinationName);

  useEffect(() => {
    // setEventDetails(state);
    setSlashedTableName([
      {
        name: "Home",
        url: "/",
      },
      {
        name: "Events",
        url: "/events",
      },
      {
        name: DESTINATION_NAME,
        url: `/workcation/${DESTINATION_NAME}`,
      },
      {
        name: DESTINATION_NAME,
        url: "",
      },
    ]);
  }, [DESTINATION_NAME, WORKCATION_TYPE]);

  return (
    <div>
      <p>ViewMoreDetailsForRetreat</p>
    </div>
  );
};

export default ViewMoreDetailsForWorkcation;
