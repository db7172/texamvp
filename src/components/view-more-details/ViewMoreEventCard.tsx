import { Button } from "antd";
import { Package } from "Models";
import { useState } from "react";
import { indCurrency } from "../../utils/utils";
import ViewMorePriceCard from "./ViewMorePriceCard";

const MOCK_PACKAGE: Package[] = [
  {
    type: "Bronze",
    price: 6499,
    description:
      "Ac eget sollicitudin ut proin. Quisque sapien quam ac mattis donec faucibus.",
  },
  {
    type: "Silver",
    price: 7499,
    description:
      "Ac eget sollicitudin ut proin. Quisque sapien quam ac mattis donec faucibus.",
  },
  {
    type: "Gold",
    price: 8499,
    description:
      "Ac eget sollicitudin ut proin. Quisque sapien quam ac mattis donec faucibus.",
  },
];
const ViewMoreEventCard = () => {
  const [active, setActive] = useState<Package>(MOCK_PACKAGE[0]);

  const handlePlanClick = (value: Package) => {
    setActive(value);
  };

  const handleSubmit = () => {
    console.log(active);
  };

  return (
    <section>
      <div>
        <p className="tw-text-secondary-color">
          Starting from{" "}
          <span className="tw-mx-1 tw-text-yellow-color tw-text-lg tw-font-bold">
            {indCurrency(400)}
          </span>{" "}
          Per Person
        </p>
        <p className="tw-mt-3">
          <span className="tw-text-secondary-color tw-mr-2">Location :</span>{" "}
          <span className="tw-font-medium">Mumbai</span>
        </p>
        <p className="tw-mt-3">
          <span className="tw-text-secondary-color tw-mr-2">Event Type :</span>{" "}
          <span className="tw-font-medium">Music</span>
        </p>
        <p className="tw-mt-3">
          <span className="tw-text-secondary-color tw-mr-2">Start Date :</span>{" "}
          <span className="tw-font-medium">12 Feb’ 2022</span>
        </p>
        <p className="tw-mt-3">
          <span className="tw-text-secondary-color tw-mr-2">Start Time :</span>{" "}
          <span className="tw-font-medium">8:00 PM</span>
        </p>
        <p className="tw-mt-1">
          <span className="tw-text-secondary-color tw-mr-2">Activity By :</span>{" "}
          <span className="tw-font-medium tw-text-blue-500 tw-underline">
            Vishal joshi
          </span>
        </p>
      </div>
      <div className="tw-mt-5 tw-pt-3 tw-pb-6 tw-border-t tw-border-b">
        {MOCK_PACKAGE.map((d, i) => (
          <ViewMorePriceCard
            data={d}
            active={active}
            handlePlanClick={handlePlanClick}
          />
        ))}
      </div>
      <Button
        type="default"
        className="tw-texa-button tw-w-full"
        onClick={handleSubmit}
      >
        Book Now
      </Button>
    </section>
  );
};

export default ViewMoreEventCard;
