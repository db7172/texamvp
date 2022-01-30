import { capitalize } from "lodash";
import { useState } from "react";
import { Form, Button, DatePicker, Select } from "antd";
import moment from "moment";

const ActivityTab = ({
  dropDownLabel,
  type,
  placeHolder,
  DropDownOptions,
  dateLabel,
  onClick,
}) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [form] = Form.useForm();

  const handleClick = () => {
    onClick(selectedOption, dateTime, type);
  };

  return (
    <div className="tw-flex tw-items-center">
      <Form
        layout="vertical"
        form={form}
        size="large"
        className="activity_tab_container_form"
      >
        <Form.Item name="activity" label={capitalize(dropDownLabel)}>
          <Select
            showSearch
            placeholder={placeHolder}
            optionFilterProp="children"
            onChange={(e) => setSelectedOption(e)}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {DropDownOptions.map((o, i) => (
              <Select.Option key={i} value={o.data.name}>
                {o.data.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item name="startDate" label={capitalize(dateLabel)}>
          <DatePicker
            onChange={(_, d) => setDateTime(d)}
            placeholder="Select Your Date"
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

export default ActivityTab;
