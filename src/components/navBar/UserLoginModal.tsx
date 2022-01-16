import { Button, Divider, Form, Input, Modal, Select } from "antd";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Auth";
import firebase from "../../firebase";

type Props = {
  isModalOpen: boolean;
  handleModalCancel: () => void;
  handleLogin: (value: boolean) => void;
};

const UserLoginModal = ({
  isModalOpen,
  handleModalCancel,
  handleLogin,
}: Props) => {
  const [signInForm] = Form.useForm();
  const [userDetailsForm] = Form.useForm();
  const [isNewUser, setIsNewUser] = useState(false);
  const [isNumDisable, setIsNumDisable] = useState(isModalOpen);
  const { setCurrentUser } = useContext(AuthContext);
  const [userData, setUserData] = useState({}) as any;
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

  function configureRecaptcha() {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "sign-in-container",
      {
        size: "invisible",
        callback: (response: any) => {
          onSignInSubmit(null);
          console.log("Recaptcha verified");
        },
      }
    );
  }

  function onSignInSubmit(value: any) {
    configureRecaptcha();
    const number = "+" + value.prefix + value.number;
    const appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(number, appVerifier)
      .then((confirmationResult: any) => {
        window.confirmationResult = confirmationResult;
        console.log("OTP sent.");
      })
      .catch((error: any) => {
        console.log(error);
      });
  }

  const handleNumberSubmit = (value: any) => {
    // handle sending otp to mobile things here
    // console.log(value);
    onSignInSubmit(value);
    setIsNumDisable(true);
  };

  const handleVerify = (value: any) => {
    // verify if its 1st time user or not here
    // if 1st time userer set isNewUser true else handleModalCancel after doing necessary task
    const code = value.otp;
    window.confirmationResult
      .confirm(code)
      .then((result: any) => {
        // User signed in successfully.
        const user = result.user;
        console.log(user);
        // const checkIfVender = firebase
        //   .firestore()
        //   .collection("venders")
        //   .doc(user.uid);
        // checkIfVender
        //   .get()
        //   .then((doc) => {
        //     if (doc.exists) {
        //       // Show an error that user is already a vender.
        //       console.log("already exists");
        //       firebase.auth().signOut();
        //     } else {
        //       console.log("does not exists");
        //       setIsNewUser(true);
        //     }
        //   })
        //   .catch((err) => console.log(err));
        const checkIfNew = firebase
          .firestore()
          .collection("users")
          .doc(user.uid);
        checkIfNew.get().then((doc) => {
          if (doc.exists) {
            console.log("already a user");
            setIsNewUser(false);
            setCurrentUser(user);
            handleModalCancel();
            handleLogin(true);
          } else {
            setCurrentUser(user);
            console.log("does not exists");
            setIsNewUser(true);
            setUserData(user);
          }
        });
      })
      .catch((error: any) => {
        // User couldn't sign in (bad verification code?)
        // ...
      });
    console.log(value);
    // const newUser = value.otp === mockOtpNewUser;
    // console.log(value);
    // if (newUser) {
    //   setIsNewUser(true);
    // } else {
    //   handleModalCancel();
    //   handleLogin(true);
    // }
  };
  const handleUserDetailsSubmit = (value: any) => {
    console.log(value);

    // console.log(userData.uid);
    firebase.firestore().collection("users").doc(userData.uid).set(value);
    firebase.auth().currentUser?.updateProfile({
      displayName: value.name,
    });
    handleLogin(true);
    handleModalCancel();
  };

  function editNum() {
    document.getElementById("sign-in-container")?.remove();
    var newDiv = document.createElement("div");
    newDiv.id = "sign-in-container";
    document.getElementById("recaptcha-container")?.appendChild(newDiv);
    window.recaptchaVerifier.clear();
    setIsNumDisable(false);
  }

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
          <div id="recaptcha-container">
            <div id="sign-in-container"></div>
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
                      onClick={editNum}
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
                          min: 6,
                          max: 6,
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
              Having trouble? Please contact{" "}
              <a className="tw-text-blue-500" href="mailto:help@texatrove.com">
                help@texatrove.com
              </a>{" "}
              for further support.
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default UserLoginModal;
