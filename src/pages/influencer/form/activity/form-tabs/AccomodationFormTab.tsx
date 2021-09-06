import { ExclamationCircleFilled, UploadOutlined } from "@ant-design/icons";
import {
  Row,
  Form,
  Col,
  Input,
  Select,
  DatePicker,
  Upload,
  Button,
} from "antd";
import { uniqueId } from "lodash";
import { TabsVariant } from "../ActivityForm";

const normFile = (e: any) => {
  console.log("Upload event:", e);
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

export const AccomodationFormTab = ({
  keyValue,
  updateTabFormData,
}: {
  keyValue: string;
  updateTabFormData: (type: TabsVariant, a: any, b: any) => void;
}) => {
  return (
    <Form
      name={"accomodation" + keyValue}
      className="tw-border-2 tw-p-5 tw-border-dashed tw-rounded-md"
      onValuesChange={(_, value) =>
        updateTabFormData("accomodation", value, keyValue)
      }
    >
      <Form.Item noStyle>
        <Row gutter={20}>
          <Col span={12}>
            <Form.Item name="destinatioName" label="Destination">
              <Input
                className="tw-rounded-md"
                placeholder="Enter Destination"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="accomodationName" label="Accomodation Name">
              <Input
                className="tw-rounded-md"
                placeholder="Enter Accomodation Name"
              />
            </Form.Item>
          </Col>
        </Row>
      </Form.Item>
      <Form.Item noStyle>
        <Row gutter={20}>
          <Col span={8}>
            <Form.Item name="accomodationType" label="Accomodation Type">
              <Select
                className="tw-rounded-md"
                placeholder="Select Accomodation"
              >
                <Select.Option value="option1">Option 1</Select.Option>
                <Select.Option value="option2">Option 2</Select.Option>
                <Select.Option value="option3">Option 3</Select.Option>
              </Select>
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item name="mealProvided" label="Meal Provided">
              <Select className="tw-rounded-md" placeholder="Select Meal Type">
                <Select.Option value="option1">Option 1</Select.Option>
                <Select.Option value="option2">Option 2</Select.Option>
                <Select.Option value="option3">Option 3</Select.Option>
              </Select>
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item name="dateRange" label="Dates">
              <DatePicker.RangePicker className="tw-rounded-md" />
            </Form.Item>
          </Col>
        </Row>
      </Form.Item>

      <Form.Item noStyle>
        <Row gutter={20}>
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

          <Col span={12}>
            <Form.Item name="roomSharing" label="Room Sharing">
              <Select
                className="tw-rounded-md"
                placeholder="Select No. of persons"
              >
                {Array(10)
                  .fill(null)
                  .map((_, i) => (
                    <Select.Option key={uniqueId()} value={i + 1}>
                      {i + 1}
                    </Select.Option>
                  ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>
      </Form.Item>
      <Form.Item name="note" label="Note">
        <Input className="tw-rounded-md" placeholder="Enter Note" />
      </Form.Item>
      <Form.Item noStyle>
        <div className="tw-flex tw-items-center">
          <ExclamationCircleFilled className="tw-text-secondary-color tw-text-xs tw-mr-2" />
          <p className="tw-text-xs tw-text-secondary-color">
            Anything need to add to customize according to clients requirement,
            add note here
          </p>
        </div>
      </Form.Item>
    </Form>
  );
};
