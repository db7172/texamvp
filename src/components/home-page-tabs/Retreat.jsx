import React, { useState } from "react";
import { upperCase } from "../../utils/utils";
import DropDown from "../form-component/DropDown";
import Input from "../form-component/Input";

export const reteratOptions = [
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

const Retreat = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState();

  const handleClick = () => {
    console.log({ selectedOption, checkInDate, checkOutDate, numberOfPeople });
  };
  return (
    <div className="tw-flex tw-flex-col xl:tw-flex-row">
      <div className="tw-flex-auto tw-grid xl:tw-grid-cols-4 md:tw-grid-cols-2 xl:tw-mr-5 tw-gap-5">
        <div className="">
          <DropDown
            label={upperCase("Destination")}
            optionsArr={reteratOptions}
            handleChange={(e) => setSelectedOption(e.target.value)}
            name="selectedOption"
            initialValue={selectedOption}
            placeHolder="Select your Destinaion"
          />
        </div>
        <div className="">
          <Input
            label={upperCase("Check In")}
            type="date"
            name="checkInDate"
            value={checkInDate}
            handleChange={(e) => setCheckInDate(e.target.value)}
          />
        </div>
        <div className="">
          <Input
            label={upperCase("Check Out")}
            type="date"
            name="checkOutDate"
            value={checkOutDate}
            handleChange={(e) => setCheckOutDate(e.target.value)}
          />
        </div>
        <div className="">
          <Input
            label={upperCase("Number of People")}
            type="number"
            name="numberOfPeople"
            min={1}
            value={numberOfPeople}
            placeholder="Select No. of People"
            handleChange={(e) => setNumberOfPeople(e.target.value)}
          />
        </div>
      </div>
      <button
        className="tw-bg-secondary-color tw-self-end tw-font-medium tw-px-14 tw-py-5 tw-rounded-xl xl:tw-w-max xl:tw-mt-0 tw-mt-5 tw-w-full"
        onClick={handleClick}
      >
        Search
      </button>
    </div>
  );
};

export default Retreat;
