import { Button, Form, Input } from "antd";

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
          name="password"
          label="Password"
          rules={[
            {
              pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,16}$/,
              message: "The password is not valid!",
            },
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password
            className="tw-rounded-lg"
            placeholder="Enter Your Password"
          />
        </Form.Item>
        <Form.Item
          name="confirmPassword"
          label="Confirm Password"
          dependencies={["password"]}
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
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
            placeholder="Re-Enter Your Password"
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
