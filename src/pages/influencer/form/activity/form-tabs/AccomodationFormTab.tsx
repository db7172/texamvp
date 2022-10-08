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
  Checkbox,
} from "antd";
import { isUndefined, uniqueId } from "lodash";
import moment from "moment";
import { formatMomentDate } from "../../../../../utils/utils";
import { TabsVariant } from "../HourlyAndSingleDay";

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

const AMENITIES = [
  "Room service",
  "Power backup",
  "Smoking room",
  "Wifi",
  "Intercom",
  "Telephone",
  "Housekeeping",
  "Bathroom",
  "Restaurant",
];

export const AccomodationFormTab = ({
  keyValue,
  updateTabFormData,
  initialData,
}: {
  keyValue: string;
  updateTabFormData: (type: TabsVariant, a: any, b: any) => void;
  initialData?: any;
}) => {
  return (
    <Form
      name={"accomodation" + keyValue}
      className="tw-border-2 tw-p-5 tw-border-dashed tw-rounded-md"
      initialValues={
        initialData
          ? {
              ...initialData,
              dateRange: [
                moment(initialData.dateRange[0], "DD-MM-YYYY"),
                moment(initialData.dateRange[1], "DD-MM-YYYY"),
              ],
            }
          : undefined
      }
      onValuesChange={(_, obj) => {
        const newObj = {
          photos: obj.photos,
          data: {
            ...obj,
          },
        };
        if (!isUndefined(newObj.data["dateRange"])) {
          newObj.data["dateRange"] = [
            formatMomentDate(obj.dateRange[0]),
            formatMomentDate(obj.dateRange[1]),
          ];
        }
        delete newObj.data["photos"];
        updateTabFormData("accomodation", newObj, keyValue);
      }}
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
              <DatePicker.RangePicker
                className="tw-rounded-md"
                format="DD/MM/YYYY"
              />
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
      <Form.Item label="Amenities" name="amenities">
        <Checkbox.Group className="tw-w-full">
          <Row>
            {AMENITIES.map((d, i) => (
              <Col span={6} key={i}>
                <Checkbox value={d} style={{ lineHeight: "32px" }}>
                  {d}
                </Checkbox>
              </Col>
            ))}
          </Row>
        </Checkbox.Group>
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
