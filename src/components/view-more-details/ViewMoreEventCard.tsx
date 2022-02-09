import { Button, Form, InputNumber } from "antd";
import { Package } from "Models";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { indCurrency } from "../../utils/utils";
import ViewMorePriceCard from "./ViewMorePriceCard";

type ViewMoreEventCardType = {
  retreat?: boolean;
  props?: any;
};

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
const ViewMoreEventCard = ({ retreat = false }: ViewMoreEventCardType) => {
  const [active, setActive] = useState<Package>(MOCK_PACKAGE[0]);
  const [numberOfPpl, setNumberOfPpl] = useState(1);
  const [redirectState, setRedirectState] = useState<{
    pathname: string;
    state: any;
  }>({
    pathname: "/payment",
    state: { numberOfPpl, price: active.price },
  });

  const handlePlanClick = (value: Package) => {
    setActive(value);
  };

  useEffect(() => {
    const state = {
      numberOfPpl,
      price: active.price,
    };
    setRedirectState(() => ({ ...redirectState, state }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, numberOfPpl]);

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
        <p className="tw-mt-3">
          <span className="tw-text-secondary-color tw-mr-2">Activity By :</span>{" "}
          <span className="tw-font-medium tw-text-blue-500 tw-underline">
            Vishal joshi
          </span>
        </p>
      </div>
      <div className="tw-mt-5 tw-pt-3 tw-pb-6 tw-border-t tw-border-b">
        {MOCK_PACKAGE.map((d, i) => (
          <ViewMorePriceCard
            key={i}
            data={d}
            active={active}
            handlePlanClick={handlePlanClick}
          />
        ))}
      </div>
      <div className="tw-mt-5 tw-pt-3 tw-pb-6 tw-border-t tw-border-b">
        <Form size="large">
          <Form.Item
            name="noOfPerson"
            label="Number of people"
            className="tw-mb-0"
            initialValue={numberOfPpl}
            rules={[{ required: true }]}
          >
            <InputNumber
              placeholder="Enter No. of people"
              className="tw-w-full tw-rounded-md"
              min={1}
              onChange={(v) => setNumberOfPpl(v)}
            />
          </Form.Item>
        </Form>
      </div>
      <Link to={redirectState}>
        <Button type="default" className="tw-texa-button tw-w-full">
          Book Now
        </Button>
      </Link>
    </section>
  );
};

export default ViewMoreEventCard;
