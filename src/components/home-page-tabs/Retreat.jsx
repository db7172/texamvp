import React, { useState } from "react";
import { Form, Button, DatePicker, Select, InputNumber } from "antd";
import { capitalize, lowerCase } from "lodash";
import { useHistory } from "react-router-dom";
import moment from "moment";

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
//   const [checkInDate, setCheckInDate] = useState("");
//   const [checkOutDate, setCheckOutDate] = useState("");
//   const [numberOfPeople, setNumberOfPeople] = useState();
  const history = useHistory();

  const [form] = Form.useForm();

  const handleClick = () => {
    history.push(`/workcation/${lowerCase(selectedOption)}`);
  };

  const handleDropdownChange = (e) => {
    setSelectedOption(e);
    form.setFieldsValue({
      startDate: moment().add(1, "d"),
      endDate: moment().add(2, "d"),
      numberOfPeople: 2,
    });
  };
  return (
    <div className="tw-flex tw-flex-col xl:tw-flex-row tw-items-center">
      <Form
        layout="vertical"
        form={form}
        size="large"
        className="tw-flex-auto tw-grid xl:tw-grid-cols-4 md:tw-grid-cols-2 xl:tw-mr-5 tw-gap-5"
      >
        <Form.Item name="workcation" label="Destination">
          <Select
            showSearch
            placeholder="Select your Destinaion"
            optionFilterProp="children"
            onChange={handleDropdownChange}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {reteratOptions.map((o, i) => (
              <Select.Option key={i} value={o}>
                {capitalize(o)}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item name="startDate" label="Check In">
          <DatePicker
            onChange={(_, d) => {}}
            placeholder="Select Your Date"
            className="width_full tw-rounded-md"
            format="DD/MM/YYYY"
          />
        </Form.Item>

        <Form.Item name="endDate" label="Check Out">
          <DatePicker
            onChange={(_, d) => {}}
            placeholder="Select Your Date"
            className="width_full tw-rounded-md"
            format="DD/MM/YYYY"
          />
        </Form.Item>

        <Form.Item name="numberOfPeople" label="Number of People">
          <InputNumber
            min={1}
            placeholder="Select No. of People"
            handleChange={(e) => {}}
            className="width_full tw-rounded-md"
          />
        </Form.Item>
      </Form>
      <Button onClick={handleClick} className="btn" size="large" type="default">
        Submit
      </Button>
    </div>
  );
};

export default Retreat;
