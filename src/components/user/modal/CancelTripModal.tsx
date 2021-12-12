import { LeftOutlined } from "@ant-design/icons";
import { Button, Checkbox, Divider, Modal, Steps } from "antd";
import { useEffect, useState } from "react";
import { indCurrency } from "../../../utils/utils";
import { INCLUDE_EXCLUDE } from "../user-tabs/userTabsConstants";

type Props = {
  showModal: boolean;
  handleShowModal: (value: boolean) => void;
  tripName: string;
  numberOfPeople: number;
  travelingDate: string;
  image: string;
};

const { Step } = Steps;

const CancelTripModal = ({
  showModal,
  handleShowModal,
  tripName,
  numberOfPeople,
  travelingDate,
  image,
}: Props) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isTripSelected, setIsTripSelected] = useState(true);

  useEffect(() => {
    setCurrentStep(0);
  }, [showModal]);

  const getSelectTripSection = () => {
    return (
      <div className="tw-px-10">
        <p className="tw-text-center tw-font-medium tw-text-3xl tw-mb-7">
          Select your Trip
        </p>
        <div
          className="tw-flex tw-items-center tw-shadow-card tw-py-4 tw-px-6 tw-rounded-lg tw-cursor-pointer"
          onClick={() => setIsTripSelected(!isTripSelected)}
        >
          <div className="tw-w-1/12">
            <Checkbox
              checked={isTripSelected}
              onChange={(e) => setIsTripSelected(e.target.checked)}
            />
          </div>
          <div className="tw-flex tw-justify-between tw-items-center tw-w-11/12">
            <div>
              <p className="tw-text-base">{tripName}</p>
              <p className="tw-text-secondary-color">
                <span>{travelingDate}</span>
                <span className="tw-mx-2">•</span>
                <span>{numberOfPeople} People</span>
              </p>
            </div>
            <div className="tw-h-10 tw-w-10">
              <img className="tw-rounded-full" src={image} alt="icon" />
            </div>
          </div>
        </div>
        <div className="tw-flex tw-justify-end tw-mt-5">
          <Button
            type="default"
            className="tw-texa-button"
            onClick={() => setCurrentStep(1)}
          >
            REVIEW CANCELLATION
          </Button>
        </div>
      </div>
    );
  };

  const getReviewRefundSection = () => {
    return (
      <div className="tw-px-10">
        <div className="tw-shadow-card tw-py-4 tw-px-6 tw-rounded-lg">
          <p className="tw-text-lg tw-font-medium tw-flex tw-justify-between tw-mb-2">
            <span>Total Paid</span> <span>{indCurrency(3000)}</span>
          </p>
          <p className="tw-text-secondary-color tw-flex tw-justify-between tw-mb-2">
            <span>Tour Price</span> <span>{indCurrency(3500)}</span>
          </p>
          <p className="tw-text-secondary-color tw-flex tw-justify-between tw-mb-2">
            <span>Coupon Discount</span> <span>- {indCurrency(500)}</span>
          </p>
          <Divider />
          <p className="tw-text-lg tw-font-medium tw-flex tw-justify-between tw-mb-2 tw-mt-5">
            <span>Deduction</span> <span>{indCurrency(3500)}</span>
          </p>
          <p className="tw-text-secondary-color tw-flex tw-justify-between tw-mb-2">
            <span>Cancellation Charges</span> <span>{indCurrency(3500)}</span>
          </p>
          <Divider />
          <p className="tw-text-lg tw-font-medium tw-flex tw-justify-between tw-mb-2 tw-mt-5">
            <span>Refund</span> <span>{indCurrency(0)}</span>
          </p>
        </div>
        <div className="tw-flex tw-justify-end tw-mt-5">
          <Button
            type="default"
            className="tw-texa-button"
            onClick={() => setCurrentStep(2)}
          >
            CONFIRM CANCELLATION
          </Button>
        </div>
      </div>
    );
  };

  const getConfirmRefundSection = () => {
    return (
      <div className="tw-px-10">
        <div className="tw-shadow-card tw-py-4 tw-px-6 tw-rounded-lg">
          <p className="tw-text-lg tw-font-medium tw-flex tw-justify-between">
            <span>Total refund</span> <span>{indCurrency(0)}</span>
          </p>
          <p className="tw-text-secondary-color tw-mb-2">
            <span>{travelingDate}</span>
          </p>

          <Divider />
          <div className="tw-pl-7">
            <ul className="tw-list-disc tw-list-outside">
              {INCLUDE_EXCLUDE[0].details.map((s, i) => (
                <li key={i} className="tw-text-secondary-color">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="tw-flex tw-justify-end tw-mt-5">
          <Button
            type="default"
            className="tw-texa-button"
            onClick={() => handleShowModal(false)}
          >
            SUBMIT
          </Button>
        </div>
      </div>
    );
  };

  return (
    <Modal
      visible={showModal}
      onCancel={() => handleShowModal(false)}
      width={800}
      footer={null}
    >
      <div className="tw-w-full tw-flex tw-items-center tw-flex-row-reverse">
        <div className="tw-w-2/6">
          <p className="tw-text-right">
            {currentStep > 0 && (
              <span
                onClick={() => setCurrentStep((prev) => prev - 1)}
                className="tw-text-secondary-color tw-cursor-pointer"
              >
                <span className="tw-mr-1">
                  <LeftOutlined />
                </span>
                <span className="tw-underline tw-mt-1">Go Back</span>
              </span>
            )}
          </p>
        </div>
        <div className="tw-w-4/6">
          <p className="tw-mt-1 tw-text-right tw-pr-10 tw-mb-10 tw-text-2xl tw-font-medium">
            Cancel your trip
          </p>
        </div>
      </div>

      <div className="tw-px-10">
        <Steps current={currentStep} className="tw-mb-10">
          <Step title="Select Trip" />
          <Step title="Review Refund" />
          <Step title="Confirm Refund" />
        </Steps>

        {currentStep === 0 && getSelectTripSection()}
        {currentStep === 1 && getReviewRefundSection()}
        {currentStep === 2 && getConfirmRefundSection()}
      </div>
    </Modal>
  );
};

export default CancelTripModal;
