import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { DatePicker, Form, Input, TimePicker } from "antd";
import { debounce, isUndefined, uniqueId } from "lodash";
import { formatMomentDate, formatMomentTime } from "../../../../../utils/utils";
import { TabsVariant } from "../HourlyAndSingleDay";

type ActivityFieldType = {
  activityTime: any;
  activityDetail: string;
};

let activityDetailsField: {
  (): void;
  (defaultValue?: any, insertIndex?: number | undefined): void;
};

export const ItineraryFormTab = ({
  captureBulletData,
  keyValue,
  updateTabFormData,
}: {
  captureBulletData: boolean;
  keyValue: string;
  updateTabFormData: (type: TabsVariant, a: any, b: any) => void;
}) => {
  const generateActivityList = (value: ActivityFieldType[]) => {
    const newValue = value.map((d) => {
      return {
        time: formatMomentTime(d.activityTime),
        activity: d.activityDetail || "",
      };
    });
    return newValue;
  };

  const debounceFunction = debounce((_, value) => {
    const newValue = {
      ...value,
    };
    newValue["date"] = formatMomentDate(value["date"]);

    if (captureBulletData) {
      const details =
        value.activityDetails && !isUndefined(value.activityDetails[0])
          ? generateActivityList(value.activityDetails)
          : [];
      newValue["itineraryDetails"] = [
        {
          time: formatMomentTime(value["activityTimeFirstField"]),
          activity: value["activityDetailFirstField"],
        },
        ...details,
      ];
      delete newValue["activityTimeFirstField"];
      delete newValue["activityDetails"];
      delete newValue["activityDetailFirstField"];
    }

    updateTabFormData("itinerary", newValue, keyValue);
  }, 5000);

  return (
    <Form
      name={"itinerary" + keyValue}
      className="tw-border-2 tw-p-5 tw-border-dashed tw-rounded-md"
      onValuesChange={debounceFunction}
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

      {captureBulletData ? (
        <>
          <Form.Item className="tw-mb-5 tw-relative">
            <div className="tw-flex tw-justify-between">
              Itinerary
              <p
                className="tw-flex tw-items-center tw-gap-2 tw-cursor-pointer tw-text-blue-500"
                onClick={() => activityDetailsField()}
              >
                <PlusOutlined />
                <span>Add details</span>
              </p>
            </div>
          </Form.Item>

          <Form.Item className="tw-flex">
            <div className="tw-flex tw-items-center tw-gap-10 tw-mb-5">
              <Form.Item
                label="Time"
                name="activityTimeFirstField"
                className="tw-m-0"
              >
                <TimePicker className="tw-rounded-md" />
              </Form.Item>

              <Form.Item
                label="Activity detail"
                name="activityDetailFirstField"
                className="tw-w-10/12 tw-m-0"
              >
                <Input
                  className="tw-rounded-md"
                  placeholder="Activity detail"
                />
              </Form.Item>

              <MinusCircleOutlined className="tw-text-lg tw-opacity-0" />
            </div>
            <Form.List name="activityDetails">
              {(fields, { add, remove }) => {
                activityDetailsField = add;
                return (
                  <>
                    <div className="">
                      {fields.map((field) => (
                        <div
                          className="tw-flex tw-items-center tw-justify-between tw-gap-10 tw-mb-5"
                          key={uniqueId("activityTime")}
                        >
                          <Form.Item
                            {...field}
                            key={uniqueId("activityTime")}
                            name={[field.name, "activityTime"]}
                            fieldKey={[field.fieldKey, "activityTime"]}
                            className="tw-m-0"
                          >
                            <TimePicker className="tw-rounded-md" />
                          </Form.Item>

                          <Form.Item
                            {...field}
                            key={uniqueId("activityDetail")}
                            name={[field.name, "activityDetail"]}
                            fieldKey={[field.fieldKey, "activityDetail"]}
                            className="tw-w-10/12 tw-m-0"
                          >
                            <Input
                              className="tw-rounded-md"
                              placeholder="Activity detail"
                            />
                          </Form.Item>

                          <MinusCircleOutlined
                            className="tw-text-lg tw-text-secondary-color"
                            onClick={() => remove(field.name)}
                          />
                        </div>
                      ))}
                    </div>
                  </>
                );
              }}
            </Form.List>
          </Form.Item>
        </>
      ) : (
        <Form.Item name="itineraryDetails" label="Itinerary">
          <Input.TextArea
            rows={4}
            className="tw-rounded-md"
            placeholder="Itinerary Details"
          />
        </Form.Item>
      )}
    </Form>
  );
};
