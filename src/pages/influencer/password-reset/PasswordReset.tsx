import { ArrowLeftOutlined, CheckCircleOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row, Typography } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../../../components/common/container/Container";

const mobileOTP = 123456;

const PasswordReset = () => {
  const [step, setStep] = useState(1);
  const [emailOrMobile, setEmailOrMobile] = useState("");
  const [otp, setOtp] = useState({
    mobileOtp: "",
    error: false,
  });

  const onFinish = (value: any) => {
    console.log(value);
    setEmailOrMobile(value.emailOrMobile);
    setStep(2);
  };

  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtp({
      error: !(mobileOTP === +e.target.value),
      mobileOtp: e.target.value,
    });
  };

  const handleVerify = () => {
    if (!otp.error && +otp.mobileOtp === mobileOTP) {
      console.log("OTP verified");
      setStep(3);
    }
  };

  const onPasswordReset = (value: any) => {
    console.log(value);
    setStep(4);
  };

  return (
    <Container>
      <div className="tw-flex tw-items-center tw-justify-center">
        <div className="tw-mt-20 tw-w-6/12 tw-shadow-card tw-p-10 tw-rounded-md">
          <Row gutter={[20, 20]}>
            <Col span={24}>
              <Row gutter={20}>
                {step === 1 && (
                  <>
                    {" "}
                    <Col span={2}>
                      <Link to="/influencer">
                        <ArrowLeftOutlined className="tw-text-xl tw-text-secondary-color" />
                      </Link>
                    </Col>
                    <Col span={22}>
                      <div className="tw-flex tw-justify-center">
                        <p className="tw-text-2xl">Forgot password</p>
                      </div>
                    </Col>{" "}
                  </>
                )}

                {step === 2 && (
                  <>
                    {" "}
                    <Col span={2}>
                      <button onClick={() => setStep(1)}>
                        <ArrowLeftOutlined className="tw-text-xl tw-text-secondary-color" />
                      </button>
                    </Col>
                    <Col span={22}>
                      <div className="tw-flex tw-justify-center">
                        <p className="tw-text-2xl">Verify Your Email Id</p>
                      </div>
                    </Col>{" "}
                  </>
                )}

                {step === 3 && (
                  <Col span={24} className="tw-flex tw-justify-center">
                    <p className="tw-text-2xl">Change your password</p>
                  </Col>
                )}

                {step === 4 && (
                  <Col span={24} className="tw-flex tw-justify-center">
                    <p className="tw-text-2xl">
                      Your password change successfully
                    </p>
                  </Col>
                )}
              </Row>
            </Col>
            <Col span={24} className="tw-flex tw-flex-col tw-items-center">
              {step === 1 && (
                <>
                  <p className="tw-max-w-xs tw-text-center tw-text-secondary-color tw-font-lato tw-mb-5">
                    An OTP (valid for next 15 mins.) has been sent to you on
                    your Mobile number
                  </p>

                  <Form
                    name="passwordResetForm"
                    style={{ width: "400px" }}
                    initialValues={{ emailOrMobile }}
                    layout="vertical"
                    size="large"
                    onFinish={onFinish}
                  >
                    <Form.Item
                      label="Email / Mobile No"
                      name="emailOrMobile"
                      rules={[
                        {
                          required: true,
                          message: "Please input your e-mail / mobile no.!",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Enter your email or mobile no"
                        className="tw-rounded-lg"
                      />
                    </Form.Item>

                    <Form.Item>
                      <Button
                        type="primary"
                        className="tw-w-full tw-texa-button tw-m-0"
                        htmlType="submit"
                      >
                        SEND OTP
                      </Button>
                    </Form.Item>
                  </Form>
                </>
              )}
              {step === 2 && (
                <>
                  <div className="tw-flex tw-flex-col tw-items-center">
                    <p className="tw-max-w-xs tw-text-center tw-text-secondary-color tw-font-lato tw-mb-5">
                      An OTP (valid for next 15 mins.) has been sent to you on
                      your Mobile number
                    </p>
                    <p className="tw-font-medium tw-text-base tw-mb-3">
                      +911234567890
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
                      <Typography.Text type="danger">
                        Enter valid OTP.
                      </Typography.Text>
                    ) : null}

                    <button className="tw-text-xs tw-text-blue-500 tw-underline tw-my-2">
                      Resend OTP
                    </button>
                    <p className="tw-text-blue-500 tw-font-medium tw-mb-2">
                      Your OTP sent successfully
                    </p>
                  </div>
                  <Button
                    type="default"
                    className="tw-w-full tw-texa-button"
                    onClick={handleVerify}
                    disabled={otp.error || otp.mobileOtp.length < 6}
                  >
                    Verify
                  </Button>
                </>
              )}

              {step === 3 && (
                <div className="tw-flex tw-flex-col tw-items-center">
                  <p className="tw-max-w-xs tw-text-center tw-text-secondary-color tw-font-lato tw-mb-5">
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy
                    text used in laying out print
                  </p>

                  <Form
                    name="newPasswordForm"
                    style={{ width: "400px" }}
                    layout="vertical"
                    size="large"
                    onFinish={onPasswordReset}
                  >
                    <Form.Item
                      name="password"
                      label="Password"
                      rules={[
                        {
                          pattern:
                            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,16}$/,
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
                              new Error(
                                "The two passwords that you entered do not match!"
                              )
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
                        SUBMIT
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
              )}

              {step === 4 && (
                <div className="tw-flex tw-flex-col tw-items-center">
                  <p className="tw-max-w-xs tw-text-center tw-text-secondary-color tw-font-lato tw-mb-5">
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy
                    text used in laying out print
                  </p>
                  <div>
                    <CheckCircleOutlined className="tw-text-yellow-color tw-text-7xl" />
                  </div>
                  <Link to="/influencer" className="tw-block tw-w-full">
                    <Button type="default" className="tw-w-full tw-texa-button">
                      LOGIN
                    </Button>
                  </Link>
                </div>
              )}
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default PasswordReset;
