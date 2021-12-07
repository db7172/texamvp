import { Button, Divider, Form, Input, Modal, Select } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Props = {
  isModalOpen: boolean;
  handleModalCancel: () => void;
  handleLogin: (value: boolean) => void;
};

const mockOtpNewUser = "123456";
const mockOtpOldUser = "654321";

const UserLoginModal = ({
  isModalOpen,
  handleModalCancel,
  handleLogin,
}: Props) => {
  const [signInForm] = Form.useForm();
  const [userDetailsForm] = Form.useForm();
  const [isNewUser, setIsNewUser] = useState(false);
  const [isNumDisable, setIsNumDisable] = useState(isModalOpen);
  const description =
    "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print";

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }} disabled={isNumDisable}>
        {/* add loop/map for dynamic data from back end */}
        <Select.Option value="91">+91</Select.Option>
        <Select.Option value="86">+86</Select.Option>
        <Select.Option value="87">+87</Select.Option>
      </Select>
    </Form.Item>
  );

  const handleNumberSubmit = (value: any) => {
    // handle sending otp to mobile things here
    console.log(value);
    setIsNumDisable(true);
  };

  const handleVerify = (value: any) => {
    // verify if its 1st time user or not here
    // if 1st time userer set isNewUser true else handleModalCancel after doing necessary task
    console.log(value);
    const newUser = value.otp === mockOtpNewUser;
    console.log(value);
    if (newUser) {
      setIsNewUser(true);
    } else {
      handleModalCancel();
      handleLogin(true);
    }
  };

  const handleUserDetailsSubmit = (value: any) => {
    console.log(value);
    handleLogin(true);
    handleModalCancel();
  };

  useEffect(() => {
    setIsNumDisable(false);
    signInForm.resetFields();
  }, [isModalOpen, signInForm]);

  return (
    <Modal
      visible={isModalOpen}
      footer={null}
      style={{ top: 50 }}
      width={500}
      onCancel={handleModalCancel}
    >
      <div className="tw-py-7">
        <div className="px-10">
          <div className="tw-flex tw-flex-col tw-items-center tw-mb-7">
            <h1 className="tw-font-bold tw-text-2xl">Welcome to Texatrove</h1>
            <p className="tw-w-9/12 tw-text-center tw-text-secondary-color tw-mt-3">
              {description}
            </p>
          </div>
          {!isNewUser && (
            <>
              <Form
                form={signInForm}
                name="loginForm"
                initialValues={{
                  prefix: "91",
                }}
                className="tw-w-10/12 tw-mx-auto"
                size="large"
                layout="vertical"
                onFinish={isNumDisable ? handleVerify : handleNumberSubmit}
                // onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  label="Mobile Number"
                  className="tw-rounded-lg tw-mb-1"
                  name="number"
                  rules={[
                    {
                      required: true,
                      message: "Please input your mobile number!",
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
                    type="number"
                    placeholder="Enter Your Mobile Number"
                    disabled={isNumDisable}
                  />
                </Form.Item>

                {isNumDisable ? (
                  <>
                    <p
                      className="tw-text-right tw-text-blue-700 tw-cursor-pointer tw-underline"
                      onClick={() => setIsNumDisable(false)}
                    >
                      Edit Number
                    </p>

                    <Form.Item
                      label="OTP"
                      className="tw-rounded-lg tw-mb-1"
                      name="otp"
                      rules={[
                        {
                          required: true,
                          message: "Please input your OTP number!",
                        },
                        {
                          validator(_, value) {
                            // replace mockOtp value with original otp value
                            if (
                              !value ||
                              mockOtpOldUser === value ||
                              mockOtpNewUser === value
                            ) {
                              return Promise.resolve();
                            }
                            return Promise.reject(
                              new Error(
                                "The OTP that you entered do not match!"
                              )
                            );
                          },
                        },
                      ]}
                      hasFeedback
                    >
                      <Input
                        type="number"
                        placeholder="Enter Your OTP Number"
                      />
                    </Form.Item>

                    <Form.Item>
                      <Button
                        type="default"
                        className="tw-w-full tw-texa-button tw-mt-5"
                        htmlType="submit"
                      >
                        Verify
                      </Button>
                    </Form.Item>
                  </>
                ) : (
                  <Form.Item>
                    <Button
                      type="default"
                      className="tw-w-full tw-texa-button tw-mt-5"
                      htmlType="submit"
                    >
                      Continue
                    </Button>
                  </Form.Item>
                )}
              </Form>

              <div className="tw-w-10/12 tw-mx-auto">
                <Divider className="tw-py-2">
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
            </>
          )}

          {isNewUser && (
            <Form
              form={userDetailsForm}
              name="userDetailsForm"
              className="tw-w-10/12 tw-mx-auto"
              size="large"
              layout="vertical"
              onFinish={handleUserDetailsSubmit}
              // onFinishFailed={onFinishFailed}
            >
              <Form.Item
                name="email"
                label="Email Id"
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
              <Form.Item
                label="Name"
                name="name"
                rules={[
                  { required: true, message: "Please input your full name!" },
                ]}
              >
                <Input
                  placeholder="Enter Your Full Name"
                  className="tw-rounded-lg"
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="default"
                  className="tw-w-full tw-texa-button tw-mt-5"
                  htmlType="submit"
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          )}

          <div className="tw-w-10/12 tw-mx-auto tw-mt-14">
            <p className="tw-text-secondary-color tw-font-light">
              Having trouble? Please contact help@texatrove.com for further
              support.
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default UserLoginModal;
