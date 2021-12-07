import { Button, Form, Input } from "antd";

const mockOldPassword = "Test@123";

const InfluencerChangePasswoard = () => {
  const [form] = Form.useForm();
  const handleSubmit = (value: any) => {
    console.log(value);
    form.resetFields();
  };

  return (
    <div className="tw-flex tw-justify-center tw-py-5">
      <Form
        name="newPasswordForm"
        style={{ width: "400px" }}
        layout="vertical"
        size="large"
        onFinish={handleSubmit}
        form={form}
      >
        <Form.Item
          name="oldPassword"
          label="Old Password"
          rules={[
            {
              required: true,
              message: "Please input your old password!",
            },
            {
              validator(_, value) {
                // kindly replace mockOldPassword with users original password
                // mockOldPassword is 'Test@123'
                if (!value || mockOldPassword === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The old passwords that you entered do not match!")
                );
              },
            },
          ]}
          hasFeedback
        >
          <Input.Password
            className="tw-rounded-lg"
            placeholder="Enter Your Old Password"
          />
        </Form.Item>

        <Form.Item
          name="newPassword"
          label="New Password"
          rules={[
            {
              pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,16}$/,
              message: "The new password is not valid!",
            },
            {
              required: true,
              message: "Please input your new password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password
            className="tw-rounded-lg"
            placeholder="Enter Your New Password"
          />
        </Form.Item>
        <Form.Item
          name="confirmNewPassword"
          label="Confirm New Password"
          dependencies={["newPassword"]}
          rules={[
            {
              required: true,
              message: "Please input your new password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("newPassword") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
          hasFeedback
        >
          <Input.Password
            className="tw-rounded-lg"
            placeholder="Re-Enter Your New Password"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            className="tw-w-full tw-texa-button tw-m-0"
            htmlType="submit"
          >
            Change Password
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default InfluencerChangePasswoard;
