import { CloudUploadOutlined, LeftOutlined } from "@ant-design/icons";
import { Col, Divider, Row, Form, Upload } from "antd";
import { Link, useParams } from "react-router-dom";
import Container from "../../../../components/common/container/Container";
import FormLeftPenal from "../../../../components/influencer/form/FormLeftPenal";
import lamp from "../../../../assets/svg/lamp.svg";
import video from "../../../../assets/png/influencer/video.png";

const ActivityForm = () => {
  const { activityType } = useParams<{ activityType: string }>();

  const normFile = (e: any) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const createActivity = () => {
    return (
      <div className="tw-w-80 popover-right">
        <div className="popover-right-inner">
          <div className="lamp-icon-container">
            <img src={lamp} alt="lamp" />
          </div>
          <h4 className="tw-text-lg tw-font-medium tw-mb-3">Create Activity</h4>
          <div className="tw-mb-4">
            <img src={video} alt="video" />
          </div>
          <p className="tw-text-secondary-color">
            Nunc molestie auctor eget vulputate venenatis, etiam ac orci. Tortor
            quam dolor amet sed urna lorem. Semper interdum odio tempus sit ac
            ornare tortor maecenas elementum. Mauris senectus etiam facilisi
            consequat sed mauris, enim.
          </p>
        </div>
      </div>
    );
  };

  return (
    <Container>
      <Link to="/influencer/dashboard" className="tw-my-10 tw-inline-block">
        <div className="tw-flex tw-items-center tw-text-secondary-color hover:tw-text-secondary-color">
          <LeftOutlined className="tw-mr-1" />{" "}
          <span className="tw-underline tw-font-medium">GO BACK</span>
        </div>
      </Link>
      <Row gutter={20} className="">
        <Col span={6}>
          <FormLeftPenal />
        </Col>
        <Col span={18}>
          <Row>
            <Col span={18} className="tw-p-8 tw-shadow-card">
              <div className="tw-relative">
                <h1 className="tw-font-medium tw-text-lg tw-mb-5">
                  Create an Activity
                </h1>
                <p className="tw-text-secondary-color">
                  Aliquam id morbi in dictumst. Molestie lacus curabitur ac
                  quis. Cursus vel neque amet praesent aenean aliquam ut massa
                  turpis. Mattis consequat, imperdiet ultricies dolor, lectus.
                  Vitae viverra libero, vitae fermentum in duis.
                </p>
                {createActivity()}
              </div>
              <Divider className="tw-my-10" />
              <Form
                name="activityForm"
                // onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                layout="vertical"
                size="large"
                autoComplete="off"
              >
                <Form.Item
                  label="Upload Image"
                  className="tw-text-base tw-font-medium"
                >
                  <Form.Item
                    name="dragger"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                    noStyle
                  >
                    <Upload.Dragger
                      name="files"
                      multiple={true}
                      listType="picture-card"
                      beforeUpload={() => false}
                    >
                      <p className="ant-upload-drag-icon">
                        <CloudUploadOutlined className="" />
                      </p>
                      <p className="ant-upload-text">
                        Click or drag file to this area to upload
                      </p>
                      <p className="ant-upload-hint">
                        ( Recommended size - 840 x 460 px )
                      </p>
                    </Upload.Dragger>
                  </Form.Item>
                </Form.Item>
                <Divider className="tw-my-10" />
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ActivityForm;
