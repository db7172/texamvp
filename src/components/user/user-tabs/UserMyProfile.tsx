import { ArrowLeftOutlined, UploadOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Row,
  Select,
  Upload,
} from "antd";
import { uniqueId } from "lodash";
import { useState } from "react";
import userIcon from "../../../assets/png/userIcon.png";
import profile from "../../../assets/png/influencer/user/user1.png";
import { formatMomentDate } from "../../../utils/utils";
import UserCard from "../card/UserCard";

const OPTIONS = ["Option 1", "Option 2", "Option 3"];

const UserMyProfile = () => {
  const [profilePic, setProfilePic] = useState(profile);

  const handleUserProfileUpload = (e: any) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    setTimeout(() => {
      setProfilePic(e?.fileList[0]?.thumbUrl || profile);
    }, 1000);
    return e && e.fileList;
  };

  const handleSubmit = (value: any) => {
    const backendvalue = {
      ...value,
      dateOfBirth: formatMomentDate(value.dateOfBirth),
    };

    if (value.dateOfAnniversary) {
      backendvalue["dateOfAnniversary"] = formatMomentDate(
        value.dateOfAnniversary
      );
    }

    console.log(backendvalue);
    setIsEdit(false);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        {/* add loop/map for dynamic data from back end */}
        <Select.Option value="91">+91</Select.Option>
        <Select.Option value="86">+86</Select.Option>
        <Select.Option value="87">+87</Select.Option>
      </Select>
    </Form.Item>
  );
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div>
      <div className="tw-flex tw-justify-between tw-items-center">
        <p className="tw-font-bold tw-text-3xl tw-mb-5">
          {isEdit ? "Basic Profile Info" : "Account Details"}
        </p>
        {isEdit && (
          <ArrowLeftOutlined
            onClick={() => setIsEdit(false)}
            className="tw-text-secondary-color tw-text-xl tw-cursor-pointer"
          />
        )}
      </div>
      {isEdit ? (
        <div className="tw-shadow-card tw-bg-white tw-p-5 tw-rounded-lg">
          <div className="tw-flex tw-gap-5 tw-justify-center tw-items-center tw-w-full tw-mb-5">
            <div className="tw-w-20 tw-h-20 tw-rounded-full">
              <img src={`${profilePic}`} alt="profile" />
            </div>
            <div>
              <Upload
                name="panCardPhoto"
                beforeUpload={() => false}
                listType="picture"
                maxCount={1}
                onChange={handleUserProfileUpload}
              >
                <Button
                  type="default"
                  className="tw-bg-gray-background tw-rounded-lg hover:tw-bg-gray-background"
                  icon={<UploadOutlined />}
                >
                  Click to upload
                </Button>
              </Upload>
            </div>
          </div>
          <Form
            name="userForm"
            initialValues={{
              prefix: "91",
            }}
            className="tw-w-9/12 tw-mx-auto"
            size="large"
            layout="vertical"
            onFinish={handleSubmit}
            // onFinishFailed={onFinishFailed}
          >
            <Row gutter={25}>
              <Col span={12}>
                <Form.Item
                  label="First Name"
                  name="firstName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your first name!",
                    },
                  ]}
                >
                  <Input
                    placeholder="Enter Your First Name"
                    className="tw-rounded-lg"
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Last Name"
                  name="lastName"
                  rules={[
                    { required: true, message: "Please input your last name!" },
                  ]}
                >
                  <Input
                    placeholder="Enter Your Last Name"
                    className="tw-rounded-lg"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={25}>
              <Col span={12}>
                <Form.Item
                  label="E-mail ID"
                  name="email"
                  rules={[
                    {
                      type: "email",
                      message: "The input is not valid e-mail!",
                    },
                    {
                      required: true,
                      message: "Please input your e-mail!",
                    },
                  ]}
                >
                  <Input
                    className="tw-rounded-lg"
                    placeholder="Enter Your E-mail id"
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Phone Number"
                  className="tw-rounded-lg"
                  name="number"
                  rules={[
                    { required: true, message: "Please input your number!" },
                    {
                      max: 10,
                      min: 10,
                      message: "The input is not valid mobile number!",
                    },
                  ]}
                >
                  <Input
                    addonBefore={prefixSelector}
                    className="tw-rounded-lg"
                    type="number"
                    placeholder="Enter Your Phone Number"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={25}>
              <Col span={12}>
                <Form.Item
                  label="Country"
                  name="country"
                  rules={[
                    { required: true, message: "Please select your country!" },
                  ]}
                >
                  <Select placeholder="Country">
                    {/* add loop/map for dynamic data from back end */}

                    {OPTIONS.map((option) => (
                      <Select.Option key={uniqueId()} value={option}>
                        {option}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="State"
                  name="state"
                  rules={[
                    { required: true, message: "Please select your state!" },
                  ]}
                >
                  <Select placeholder="State">
                    {/* add loop/map for dynamic data from back end */}

                    {OPTIONS.map((option) => (
                      <Select.Option key={uniqueId()} value={option}>
                        {option}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={25}>
              <Col span={8}>
                <Form.Item
                  label="Gender"
                  name="gender"
                  rules={[
                    { required: true, message: "Please select your gender!" },
                  ]}
                >
                  <Select placeholder="Gender">
                    {/* add loop/map for dynamic data from back end */}

                    {OPTIONS.map((option) => (
                      <Select.Option key={uniqueId()} value={option}>
                        {option}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Date of Birth"
                  name="dateOfBirth"
                  rules={[
                    {
                      required: true,
                      message: "Please select your date of birth!",
                    },
                  ]}
                >
                  <DatePicker
                    placeholder="Date Of Birth"
                    className="tw-rounded-lg"
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Date of Anniversary" name="dateOfAnniversary">
                  <DatePicker
                    placeholder="Date Of Anniversary"
                    className="tw-rounded-lg"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={25}>
              <Col span={12}>
                <Form.Item>
                  <Button
                    type="default"
                    className="tw-w-full tw-texa-button"
                    htmlType="submit"
                  >
                    Submit
                  </Button>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item>
                  <Button
                    type="default"
                    className="tw-w-full border-btn tw-rounded-lg"
                    onClick={() => setIsEdit(false)}
                  >
                    Cancel
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
      ) : (
        <UserCard
          handleCardClick={() => setIsEdit(true)}
          icon={userIcon}
          title="User Profile"
          description="Basic info, for a faster booking experience and travel"
        />
      )}
    </div>
  );
};

export default UserMyProfile;
