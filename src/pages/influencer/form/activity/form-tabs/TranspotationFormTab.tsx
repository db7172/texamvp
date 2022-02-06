import { Row, Form, Col, Input, DatePicker } from "antd";
import { formatMomentDate } from "../../../../../utils/utils";
import { TabsVariant } from "../HourlyAndSingleDay";

// const normFile = (e: any) => {
//   console.log("Upload event:", e);
//   if (Array.isArray(e)) {
//     return e;
//   }
//   return e && e.fileList;
// };

export const TranspotationFormTab = ({
  keyValue,
  updateTabFormData,
  singleDay = true,
}: {
  keyValue: string;
  updateTabFormData: (type: TabsVariant, a: any, b: any) => void;
  singleDay: boolean;
}) => {
  return (
    <Form
      name={"transpotation" + keyValue}
      className="tw-border-2 tw-p-5 tw-border-dashed tw-rounded-md"
      onValuesChange={(_, obj) => {
        const newObj = {
          ...obj,
        };

        newObj["pickupDate"] = formatMomentDate(obj.pickupDate);
        newObj["droppingDate"] = formatMomentDate(obj.droppingDate);

        if (!singleDay) {
          const formData = {
            photos: newObj["photos"],
            data: {
              ...newObj,
            },
          };
          delete formData.data["photos"];
          updateTabFormData("transpotation", formData, keyValue);
        } else {
          updateTabFormData("transpotation", newObj, keyValue);
        }
      }}
    >
      <Form.Item noStyle>
        <Row gutter={20}>
          {/* {!singleDay && (
            <Col span={12}>
              <Form.Item
                name="photos"
                label="Upload Photo"
                valuePropName="fileList"
                getValueFromEvent={normFile}
              >
                <Upload
                  name="photos"
                  beforeUpload={() => false}
                  maxCount={6}
                  multiple
                  listType="text"
                >
                  <Button
                    type="default"
                    className="tw-bg-gray-background tw-rounded-lg tw-m-0 hover:tw-bg-gray-background"
                    icon={<UploadOutlined />}
                  >
                    Click to upload
                  </Button>
                </Upload>
              </Form.Item>
            </Col>
          )} */}

          <Col span={12}>
            <Form.Item name="transportMode" label="Transportaion Mode">
              <Input
                className="tw-rounded-md"
                placeholder="Enter Your Cab Type"
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="maxCapacity" label="Max Passanger Capacity">
              <Input
                type="tel"
                pattern="[0-9]*"
                className="tw-rounded-md"
                placeholder="Max Passanger Capacity"
              />
            </Form.Item>
          </Col>
        </Row>
      </Form.Item>

      <Form.Item noStyle>
        <Row gutter={20}>
          <Col span={12}>
            <Form.Item name="pickupPoint" label="Pick up Point">
              <Input
                className="tw-rounded-md"
                placeholder="Enter Pick up Point"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="pickupDate" label="Pick up Date">
              <DatePicker
                className="tw-rounded-md tw-w-full"
                placeholder="Enter Pick up Date"
                format="DD/MM/YYYY"
              />
            </Form.Item>
          </Col>
        </Row>
      </Form.Item>

      <Form.Item noStyle>
        <Row gutter={20}>
          <Col span={12}>
            <Form.Item name="droppingPoint" label="Droping Point">
              <Input
                className="tw-rounded-md"
                placeholder="Enter Dropping Point"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="droppingDate" label="Droping Date">
              <DatePicker
                className="tw-rounded-md tw-w-full"
                placeholder="Enter Dropping Date"
                format="DD/MM/YYYY"
              />
            </Form.Item>
          </Col>
        </Row>
      </Form.Item>

      <Form.Item name="note" label="Note">
        <Input className="tw-rounded-md" placeholder="Enter Note" />
      </Form.Item>
    </Form>
  );
};
