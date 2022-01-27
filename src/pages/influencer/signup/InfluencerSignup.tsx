import Container from "../../../components/common/container/Container";
import { Steps, Button, Input, Form, Select } from "antd";
import { ChangeEvent, ReactNode, useState, useContext } from "react";
import checkMark from "../../../assets/png/influencer/check-mark-yellow.png";
import circal from "../../../assets/png/influencer/circal.png";
import Modal from "antd/lib/modal/Modal";
import Text from "antd/lib/typography/Text";
import ActivityProfile from "../../../components/influencer/activity-profile/ActivityProfile";
import firebase from "../../../firebase";
import { AuthContext } from "../../../Auth";

const auth = firebase.auth();

const { Step } = Steps;

declare global {
  interface Window {
    recaptchaVerifier: any;
    confirmationResult: any;
  }
}

const steps = [
  {
    title: "Personal Details",
  },
  {
    title: "Activity Profile",
  },
];

type PersonalFormData = {
  fullName: string;
  email: string;
  number: number;
  password: string;
};

type PersonalDetailsProps = {
  showModal: () => void;
  handlePersonalData: (value: PersonalFormData) => void;
};

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
  const phoneNumber = "+91" + value.number;
  const appVerifier = window.recaptchaVerifier;
  firebase
    .auth()
    .signInWithPhoneNumber(phoneNumber, appVerifier)
    .then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
      console.log("OTP sent.");
    })
    .catch((error) => {
      console.log(error);
    });
}
let name = "";
let number = "";
let email = "";
let password = "";

const PersonalDetails = ({
  showModal,
  handlePersonalData,
}: PersonalDetailsProps) => {
  const handleSubmit = (value: PersonalFormData) => {
    handlePersonalData(value);
    onSignInSubmit(value);
    console.log(value);
    name = value.fullName;
    number = "+91" + value.number;
    email = value.email;
    password = value.password;
    showModal();
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

  return (
    <>
      <div className="tw-text-center tw-mb-14">
        <h4 className="tw-text-xl tw-font-medium tw-mb-3">Personal Details</h4>
        <p className="tw-text-secondary-color">
          In fames morbi dictumst faucibus. Enim in aenean tincidunt dolor at id
          risus non. Vel aliquet sapien, ornare nec in turpis a proin.
        </p>
      </div>
      <div id="recaptcha-container">
        <div id="sign-in-container"></div>
      </div>
      <Form
        name="basicDetails"
        initialValues={{
          prefix: "91",
        }}
        size="large"
        layout="vertical"
        onFinish={handleSubmit}
        // onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Full Name"
          name="fullName"
          rules={[{ required: true, message: "Please input your full name!" }]}
        >
          <Input placeholder="Enter Your Full Name" className="tw-rounded-lg" />
        </Form.Item>

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
            type="tel"
            pattern="[0-9]*"
            placeholder="Enter Your Phone Number"
          />
        </Form.Item>

        <Form.Item
          name="email"
          label="E-mail ID"
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
          <Input className="tw-rounded-lg" placeholder="Enter Your E-mail id" />
        </Form.Item>

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
            placeholder="Enter Your Password"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="default"
            className="tw-w-full tw-texa-button"
            htmlType="submit"
          >
            Proceed Next
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

const emailOTP = 4321;
const mobileOTP = 1234;

const InfluencerSignup = () => {
  const [current, setCurrent] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [personalFormData, setPersonalFormData] = useState<PersonalFormData>();
  const [otp, setOtp] = useState({
    mobileOTP: "",
    emailOTP: "",
  });
  const [show, setShow] = useState(0);

  const [otpError, setOtpError] = useState({
    mobileOTP: false,
    emailOTP: false,
  });

  console.log(otp.mobileOTP);

  const handleOtpChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    let name = e.target.name;
    // value = value.replace(/[^0-9]/g, "").replace(/(\..*?)\..*/g, "$1");
    setOtp({
      ...otp,
      [name]: value,
    });
    if (name === "mobileOTP") {
      setOtpError({
        ...otpError,
        mobileOTP: value.length === 4 && parseFloat(value) !== mobileOTP,
      });
    } else {
      setOtpError({
        ...otpError,
        emailOTP: value.length === 4 && parseFloat(value) !== emailOTP,
      });
    }
  };

  const { setCurrentUser } = useContext(AuthContext);

  function verifyOTP() {
    const code = otp.mobileOTP;
    window.confirmationResult
      .confirm(code)
      .then((result: any) => {
        const user = result.user;
        setCurrentUser(user);
        setCurrent(1);
        console.log(current);
        setIsModalVisible(false);
        auth.currentUser
          ?.linkWithCredential(
            firebase.auth.EmailAuthProvider.credential(email, password)
          )
          .then((usercred) => {
            var user = usercred.user;
            console.log("Account linking success", user);
            user?.updateProfile({
              displayName: name,
            });
          })
          .catch((error) => {
            console.log("Account linking error", error);
          });
        firebase.firestore().collection("venders").doc(user.uid).set({
          name: name,
          number: number,
          email: email,
        });
      })
      .catch((error: any) => {
        setOtpError({
          ...otpError,
          mobileOTP: true,
        });
      });
  }

  const handleProceedClick = () => {
    verifyOTP();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handlePersonalData = (value: PersonalFormData) => {
    setPersonalFormData(value);
  };

  const customDot = (dot: ReactNode, { status }: { status: string }) => {
    return (
      <img
        className="tw-w-full"
        src={status === "wait" ? circal : checkMark}
        alt="checkmark"
      />
    );
  };

  function resendOtp() {
    setShow(1);
    document.getElementById("sign-in-container")?.remove();
    var newDiv = document.createElement("div");
    newDiv.id = "sign-in-container";
    document.getElementById("recaptcha-container")?.appendChild(newDiv);
    window.recaptchaVerifier.clear();
    configureRecaptcha();
    firebase.auth().signInWithPhoneNumber(number, window.recaptchaVerifier);
  }

  return (
    <Container>
      <div className="tw-flex tw-flex-col tw-items-center tw-mt-24">
        <div className="tw-w-full tw-max-w-lg stepper-x tw-mb-10">
          <Steps current={current} progressDot={customDot}>
            {steps.map((item) => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
        </div>
        <div className="tw-w-full tw-max-w-xl tw-p-7 tw-shadow-card tw-rounded-lg">
          {current === 0 && (
            <PersonalDetails
              handlePersonalData={handlePersonalData}
              showModal={() => setIsModalVisible(true)}
            />
          )}
          {current === 1 && <ActivityProfile />}
        </div>
      </div>
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
            <p className="tw-font-medium tw-text-base tw-mb-1">
              +91 {personalFormData?.number}
            </p>
            <p
              className="tw-text-xs tw-text-blue-500 tw-underline tw-cursor-pointer tw-mb-5"
              onClick={resendOtp}
            >
              Resend OTP
            </p>
            <p className="tw-mb-1">Enter Your 6 Digit OTP</p>
            <Input
              className="tw-w-1/4 tw-mb-2 tw-text-center"
              name="mobileOTP"
              onChange={handleOtpChange}
              value={otp.mobileOTP}
              maxLength={6}
            />

            {otpError.mobileOTP ? (
              <Text type="danger" className="">
                Enter valid OTP.
              </Text>
            ) : null}

            <p
              className="tw-text-blue-500 tw-font-medium tw-mt-5"
              style={{ display: show ? "block" : "none" }}
            >
              Your OTP sent successfully
            </p>
          </div>
          {/* <Divider className="tw-border-t-2 tw-border-c4c4c4" /> */}
          {/* <div className="tw-flex tw-flex-col tw-items-center">
            <h3 className="tw-font-medium tw-text-xl tw-mb-2">
              Verify Your Email Id
            </h3>
            <p className="tw-max-w-xs tw-text-center tw-text-secondary-color tw-font-lato tw-mb-5">
              An OTP (valid for next 15 mins.) has been sent to you on your
              Email Id
            </p>
            <p className="tw-font-medium tw-text-base tw-mb-1">
              {personalFormData?.email}
            </p>
            <p className="tw-text-xs tw-text-blue-500 tw-underline tw-mb-5">
              Resend OTP
            </p>
            <p className="tw-mb-1">Enter Your 4 Digit OTP</p>
            <Input
              className="tw-w-1/4 tw-mb-2 tw-text-center"
              name="emailOTP"
              onChange={handleOtpChange}
              value={otp.emailOTP}
              maxLength={4}
            />

            {otpError.emailOTP ? (
              <Text type="danger" className="">
                Enter valid OTP.
              </Text>
            ) : null}

            <p className="tw-text-blue-500 tw-font-medium tw-mt-5">
              Your OTP sent successfully
            </p>
          </div> */}
        </div>
        <Button
          type="default"
          className="tw-w-full tw-texa-button"
          onClick={handleProceedClick}
          disabled={
            // otpError.emailOTP ||
            otpError.mobileOTP ||
            // otp.emailOTP.length !== 4 ||
            otp.mobileOTP.length !== 6
          }
        >
          Submit
        </Button>
      </Modal>
    </Container>
  );
};

export default InfluencerSignup;
