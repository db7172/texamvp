import { Button, Divider, Form, Input, Select } from "antd";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [signInForm] = Form.useForm();
  const description =
    "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print";

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

  return (
    <div className="px-10">
      <div className="tw-flex tw-flex-col tw-items-center">
        <h1 className="tw-font-bold tw-text-2xl">Welcome to Texatrove</h1>
        <p className="tw-w-9/12 tw-text-center tw-text-secondary-color tw-mt-3">
          {description}
        </p>
      </div>
      <Form
        form={signInForm}
        name="loginForm"
        initialValues={{
          prefix: "91",
        }}
        className="tw-w-10/12 tw-mx-auto"
        size="large"
        layout="vertical"
        onFinish={(value) => console.log(value)}
        // onFinishFailed={onFinishFailed}
      >
        <Form.Item
          className="tw-rounded-lg tw-mt-11"
          name="number"
          rules={[
            { required: true, message: "Please input your mobile number!" },
            {
              max: 10,
              min: 10,
              message: "The input is not valid mobile number!",
            },
          ]}
        >
          <Input
            addonBefore={prefixSelector}
            type="number"
            placeholder="Enter Your Mobile Number"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="default"
            className="tw-w-full tw-texa-button tw-mt-1.5"
            htmlType="submit"
          >
            Continue
          </Button>
        </Form.Item>
      </Form>

      <div className="tw-w-10/12 tw-mx-auto">
        <Divider className="tw-py-5">
          <span className="tw-text-secondary-color">OR</span>
        </Divider>
      </div>

      <p className="tw-text-base tw-text-center tw-font-medium tw-text-secondary-color">
        Signin As a{" "}
        <Link to="/influencer">
          <button className="tw-text-blue-500 tw-underline">
            Travel Influancer
          </button>
        </Link>
      </p>
      <div className="tw-w-10/12 tw-mx-auto tw-mt-14">
        <p className="tw-text-secondary-color tw-font-light">
          Having trouble? Please contact help@texatrove.com for further support.
        </p>
      </div>
    </div>
  );
};

export default UserLogin;
