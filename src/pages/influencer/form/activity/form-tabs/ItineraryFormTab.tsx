import { DatePicker, Form, Input } from "antd";
import { formatMomentDate } from "../../../../../utils/utils";
import { TabsVariant } from "../HourlyAndSingleDay";

export const ItineraryFormTab = ({
  keyValue,
  updateTabFormData,
}: {
  keyValue: string;
  updateTabFormData: (type: TabsVariant, a: any, b: any) => void;
}) => {
  return (
    <Form
      name={"itinerary" + keyValue}
      className="tw-border-2 tw-p-5 tw-border-dashed tw-rounded-md"
      onValuesChange={(_, value) => {
        const newValue = {
          ...value,
        };
        newValue["date"] = formatMomentDate(value["date"]);
        updateTabFormData("itinerary", newValue, keyValue);
      }}
    >
      <Form.Item name="date" label="Date of that day">
        <DatePicker
          className="tw-rounded-md tw-w-1/2"
          placeholder="Select Date of that day"
        />
      </Form.Item>

      <Form.Item name="title" label="Title - Main Highlight">
        <Input
          className="tw-rounded-md"
          placeholder="Enter Title - Main Highlight"
        />
      </Form.Item>

      <Form.Item name="itineraryDetails" label="Itinerary">
        <Input.TextArea
          rows={4}
          className="tw-rounded-md"
          placeholder="Itinerary Details"
        />
      </Form.Item>
    </Form>
  );
};
