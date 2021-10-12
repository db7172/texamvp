import { ExclamationCircleFilled, UploadOutlined } from "@ant-design/icons";
import { Row, Form, Col, Input, Upload, Button } from "antd";
import { normFile } from "../../formUtils";
import { TabsVariant } from "../HourlyAndSingleDay";

export const RoomAccomodationTab = ({
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
            <Form.Item
              name="photos"
              className="tw-mb-0"
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
            <Form.Item className="tw-mb-0" name="roomName" label="Room Type">
              <Input className="tw-rounded-md" placeholder="Enter Room Type" />
            </Form.Item>
          </Col>
        </Row>
      </Form.Item>

      <Form.Item
        name="paymentRatePerPerson"
        label="Rate Per Person"
        className="tw-mt-5"
      >
        <Input
          className="tw-rounded-md"
          type="number"
          prefix="₹"
          placeholder="Enter Your Rate Per Person"
        />
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
