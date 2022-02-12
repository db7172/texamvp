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
const ViewMoreEventCard = (props: any) => {
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

  console.log(props);

  if (props) {
    return (
      <section>
        <div>
          <p className="tw-text-secondary-color">
            Starting from{" "}
            <span className="tw-mx-1 tw-text-yellow-color tw-text-lg tw-font-bold">
              {indCurrency(props.payment)}
            </span>{" "}
            Per Person
          </p>
          <p className="tw-mt-3">
            <span className="tw-text-secondary-color tw-mr-2">Location :</span>{" "}
            <span className="tw-font-medium">
              {props.eventType === "online" ? "Online" : "offline"}
            </span>
          </p>
          <p className="tw-mt-3">
            <span className="tw-text-secondary-color tw-mr-2">
              Event Type :
            </span>{" "}
            <span className="tw-font-medium">
              {props.sailentFeatures.format}
            </span>
          </p>
          <p className="tw-mt-3">
            <span className="tw-text-secondary-color tw-mr-2">
              Start Date :
            </span>{" "}
            <span className="tw-font-medium">
              {props.sailentFeatures.startDate}
            </span>
          </p>
          <p className="tw-mt-3">
            <span className="tw-text-secondary-color tw-mr-2">
              Start Time :
            </span>{" "}
            <span className="tw-font-medium">
              {props.sailentFeatures.startTime}
            </span>
          </p>
          <p className="tw-mt-3">
            <span className="tw-text-secondary-color tw-mr-2">
              Activity By :
            </span>{" "}
            <span className="tw-font-medium tw-text-blue-500 tw-underline">
              {props.venderName}
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
  } else {
    return <p>Loading...</p>;
  }
};

export default ViewMoreEventCard;
