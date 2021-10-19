import { Form, Input, Button, Divider, Select, Modal, Typography } from "antd";
import { upperCase } from "lodash";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import firebase from "../../../firebase";

const mobileOTP = 123456;

const InfluencerLogin = () => {
  const history = useHistory();
  const [loginWithEmail, setLoginWithEmail] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [otp, setOtp] = useState({
    mobileOtp: "",
    error: false,
  });
  const [mobile, setMobile] = useState("");

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtp({
      error: !(mobileOTP === +e.target.value),
      mobileOtp: e.target.value,
    });
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

  const onFinish = (values: any) => {
    if (loginWithEmail) {
      let email = values.emailOrMobile;
      let password = values.password;
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          history.push("/influencer/dashboard");
        })
        .catch((error) => {
          console.log(error.message);
          console.log(error.code);
        });
    } else {
      const mobileNo = values.prefix + values.mobile;
      console.log(mobileNo);
      setMobile(mobileNo);
      setIsModalVisible(true);
    }
  };

  const handleVerify = () => {
    if (!otp.error && +otp.mobileOtp === mobileOTP) {
      // logic for login with mobile will go here
      setIsModalVisible(false);
      console.log("loggedIn");
    }
  };

  return (
    <div className="tw-p-8 tw-shadow-card tw-rounded-lg">
      <div>
        <h4 className="tw-font-medium tw-text-2xl tw-mb-4">
          Login to your account
        </h4>
        <p className="tw-text-secondary-color tw-font-lato tw-mb-10">
          In fames morbi dictumst faucibus. Enim in aenean tincidunt dolor at id
          risus non. Vel aliquet sapien, ornare nec in turpis a proin.
        </p>
      </div>
      <Form
        initialValues={{
          prefix: "91",
        }}
        name="loginForm"
        layout="vertical"
        size="large"
        onFinish={onFinish}
      >
        {loginWithEmail ? (
          <div>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your e-mail!",
                },
                {
                  type: "email",
                  message: "The input is not valid e-mail!",
                },
              ]}
            >
              <Input
                placeholder="Enter Your Email."
                className="tw-rounded-lg"
              />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                placeholder="Enter Your Password"
                className="tw-rounded-lg"
              />
            </Form.Item>
          </div>
        ) : (
          <Form.Item
            label="Mobile No"
            name="mobile"
            rules={[
              {
                required: true,
                message: "Please input your mobile no!",
              },
              {
                max: 10,
                min: 10,
                message: "The input is not valid mobile number!",
              },
            ]}
          >
            <Input
              addonBefore={prefixSelector}
              style={{ width: "100%" }}
              placeholder="Enter Your Mobile No"
              className="tw-rounded-lg"
            />
          </Form.Item>
        )}

        <div className="tw-flex tw-justify-between tw-mb-3">
          <Button
            type="link"
            className="tw-m-0 tw-p-0 tw-text-secondary-color hover:tw-text-secondary-color focus:tw-text-secondary-color"
          >
            <span className="tw-underline tw-text-xs">Forgot password</span>
          </Button>
          <Button
            type="link"
            className="tw-m-0 tw-p-0 tw-text-secondary-color hover:tw-text-secondary-color focus:tw-text-secondary-color"
            onClick={() => setLoginWithEmail((pre) => !pre)}
          >
            <span className="tw-underline tw-text-xs">
              {loginWithEmail ? "Login with mobile" : "Login with email"}
            </span>
          </Button>
        </div>

        <Form.Item>
          <Button
            type="primary"
            className="tw-w-full tw-texa-button tw-m-0"
            htmlType="submit"
          >
            LOGIN
          </Button>
        </Form.Item>
      </Form>
      <Divider orientation="center" className="">
        <span className="tw-text-secondary-color tw-text-sm tw-font-normal">
          OR
        </span>
      </Divider>
      <Link to="/influencer/signup">
        <Button
          type="default"
          className="tw-w-full tw-bg-gray-background hover:tw-bg-gray-background focus:tw-bg-gray-background tw-mt-1"
        >
          {upperCase("Sign Up and Get Started")}
        </Button>
      </Link>

      <Modal
        visible={isModalVisible}
        // style={{ top: 20 }}
        footer={null}
        onCancel={handleCancel}
      >
        <div
          // style={{ height: "600px" }}
          className="tw-overflow-y-auto tw-mt-5"
        >
          <div className="tw-flex tw-flex-col tw-items-center">
            <h3 className="tw-font-medium tw-text-xl tw-mb-2">
              Verify Your Mobile Number
            </h3>
            <p className="tw-max-w-xs tw-text-center tw-text-secondary-color tw-font-lato tw-mb-5">
              An OTP (valid for next 15 mins.) has been sent to you on your
              Mobile number
            </p>
            <p className="tw-font-medium tw-text-base tw-mb-1">+{mobile}</p>
            <p className="tw-text-xs tw-text-blue-500 tw-underline tw-mb-5">
              Resend OTP
            </p>
            <p className="tw-mb-1">Enter Your 6 Digit OTP</p>
            <Input
              className="tw-w-1/4 tw-mb-2 tw-text-center"
              name="mobileOTP"
              onChange={handleOtpChange}
              value={otp.mobileOtp}
              maxLength={6}
            />

            {otp.error ? (
              <Typography.Text type="danger">Enter valid OTP.</Typography.Text>
            ) : null}

            <p className="tw-text-blue-500 tw-font-medium tw-mt-5">
              Your OTP sent successfully
            </p>
          </div>
        </div>
        <Button
          type="default"
          className="tw-w-full tw-texa-button"
          onClick={handleVerify}
          disabled={otp.error || otp.mobileOtp.length < 6}
        >
          Verify
        </Button>
      </Modal>
    </div>
  );
};

export default InfluencerLogin;
