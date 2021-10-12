import Container from "../../../components/common/container/Container";
import { Steps, Button, Input, Form, Divider } from "antd";
import { ChangeEvent, ReactNode, useState } from "react";
import checkMark from "../../../assets/png/influencer/check-mark-yellow.png";
import circal from "../../../assets/png/influencer/circal.png";
import Modal from "antd/lib/modal/Modal";
import Text from "antd/lib/typography/Text";
import ActivityProfile from "../../../components/influencer/activity-profile/ActivityProfile";

const { Step } = Steps;

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
};

type PersonalDetailsProps = {
  showModal: () => void;
  handlePersonalData: (value: PersonalFormData) => void;
};

const PersonalDetails = ({
  showModal,
  handlePersonalData,
}: PersonalDetailsProps) => {
  const handleSubmit = (value: PersonalFormData) => {
    handlePersonalData(value);
    showModal();
  };
  return (
    <>
      <div className="tw-text-center tw-mb-14">
        <h4 className="tw-text-xl tw-font-medium tw-mb-3">Personal Details</h4>
        <p className="tw-text-secondary-color">
          In fames morbi dictumst faucibus. Enim in aenean tincidunt dolor at id
          risus non. Vel aliquet sapien, ornare nec in turpis a proin.
        </p>
      </div>
      <Form
        name="basicDetails"
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
            className="tw-rounded-lg"
            type="number"
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

  const [otpError, setOtpError] = useState({
    mobileOTP: false,
    emailOTP: false,
  });

  const handleOtpChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    let name = e.target.name;
    value = value.replace(/[^0-9]/g, "").replace(/(\..*?)\..*/g, "$1");
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

  const handleProceedClick = () => {
    setCurrent(1);
    setIsModalVisible(false);
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
            <p className="tw-text-xs tw-text-blue-500 tw-underline tw-mb-5">
              Resend OTP
            </p>
            <p className="tw-mb-1">Enter Your 4 Digit OTP</p>
            <Input
              className="tw-w-1/4 tw-mb-2 tw-text-center"
              name="mobileOTP"
              onChange={handleOtpChange}
              value={otp.mobileOTP}
              maxLength={4}
            />

            {otpError.mobileOTP ? (
              <Text type="danger" className="">
                Enter valid OTP.
              </Text>
            ) : null}

            <p className="tw-text-blue-500 tw-font-medium tw-mt-5">
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
            otp.mobileOTP.length !== 4
          }
        >
          Submit
        </Button>
      </Modal>
    </Container>
  );
};

export default InfluencerSignup;
