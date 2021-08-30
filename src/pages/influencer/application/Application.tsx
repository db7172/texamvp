import Container from "../../../components/common/container/Container";
import process_completed from "../../../assets/png/influencer/process-completed.png";
import { Button, Steps } from "antd";
import { ReactNode, useState } from "react";
import checkMark from "../../../assets/png/influencer/check-mark-yellow.png";
import circal from "../../../assets/png/influencer/circal.png";
import { Link } from "react-router-dom";

const { Step } = Steps;

const steps = [
  {
    title: "Application Recived",
  },
  {
    title: "Documents Verification",
  },
  {
    title: "Application Under Process",
  },
  {
    title: "Done",
  },
];

const customDot = (dot: ReactNode, { status }: { status: string }) => {
  return (
    <img
      className="tw-w-full"
      src={status === "wait" ? circal : checkMark}
      alt="checkmark"
    />
  );
};

const Application = () => {
  const [current] = useState(1);
  return (
    <Container>
      <section className="tw-flex tw-flex-col tw-items-center tw-mt-16">
        <h1 className="tw-text-xl tw-font-medium tw-mb-2">
          Your Registration Has Been Successfully Done
        </h1>
        <p className="tw-text-base tw-font-medium tw-mb-16">
          Application no : 1234567890
        </p>
        <div className="tw-mb-16">
          <img src={process_completed} alt="Application completion" />
        </div>
        <div className="tw-w-full tw-max-w-3xl stepper-x tw-mb-16">
          <Steps current={current} progressDot={customDot}>
            {steps.map((item) => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
        </div>
        <div className="tw-w-full tw-max-w-xs">
          <Link to="/influencer" className="tw-w-full">
            <Button
              type="default"
              className="tw-w-full tw-texa-button tw-mt-0 tw-mb-16"
              htmlType="submit"
            >
              Done
            </Button>
          </Link>
        </div>
        <p className="tw-max-w-xl tw-text-center tw-font-medium tw-text-base tw-text-secondary-color">
          In case you require any furthere in fromation , you may call on
          <span className="tw-text-primary-color">1800-102-0123</span> or send a
          email on{" "}
          <span className="tw-text-primary-color">info@texatrove.com</span>
        </p>
      </section>
    </Container>
  );
};

export default Application;
