import React, { useState } from "react";
import { upperCase } from "../../utils/utils";
import DropDown from "../form-component/DropDown";
import Input from "../form-component/Input";

const ActivityTab = ({
  dropDownLabel,
  placeHolder,
  DropDownOptions,
  dateLabel,
  onClick,
}) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [dateTime, setDateTime] = useState("");

  const handleClick = () => {
    onClick(selectedOption, dateTime);
  };

  return (
    <div className="tw-flex tw-flex-col md:tw-flex-row">
      <div className="tw-flex-auto tw-grid md:tw-grid-cols-2 md:tw-mr-5 tw-gap-5">
        <div>
          <DropDown
            label={upperCase(dropDownLabel)}
            optionsArr={DropDownOptions}
            handleChange={(e) => setSelectedOption(e.target.value)}
            name="selectedOption"
            initialValue={selectedOption}
            placeHolder={placeHolder}
          />
        </div>
        <div>
          <Input
            label={upperCase(dateLabel)}
            type="date"
            name="dateTime"
            value={dateTime}
            handleChange={(e) => setDateTime(e.target.value)}
          />
        </div>
      </div>
      <button
        className="tw-bg-secondary-color tw-self-end tw-font-medium tw-px-14 tw-py-5 tw-rounded-xl tw-mt-5 md:tw-mt-0 tw-w-full md:tw-w-max"
        onClick={handleClick}
      >
        Search
      </button>
    </div>
  );
};

export default ActivityTab;
