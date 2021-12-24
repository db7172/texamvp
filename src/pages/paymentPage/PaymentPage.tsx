import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Checkbox, Col, Collapse, Divider, Row, Steps } from "antd";
import { useState } from "react";
import Container from "../../components/common/container/Container";
import { indCurrency } from "../../utils/utils";
import icon from "../../assets/svg/bag.svg";
import rightArrow from "../../assets/svg/right-arrow.svg";
import passangerIcon from "../../assets/svg/passanger.svg";
import contact from "../../assets/svg/contactBook.svg";
import activity from "../../assets/png/activityImg.png";
import { INCLUSTION_IMG } from "../view-more/data.mock";
import {
  PassangerForm,
  PassangerContactDetails,
} from "../../components/payment-page/PassangerForm";
import { uniqueId } from "lodash";

// do not remove this, below is the classnames for rounded img of inclusion card
const classNamesInclustionImg = {
  div: "tw-p-2 tw-rounded-full tw-bg-gray-background",
  img: "tw-h-4 tw-w-4",
};

const MOCK_PASSANGER = 2;

const mockAmtbrackup = [
  {
    type: "Convinience fee",
    amt: 1757,
  },
  {
    type: "Tax",
    amt: 2757,
  },
];

const PAYMENT_STEPS = [
  "Review Summery",
  "Passanger Details",
  "Make Payment",
  "Booking Confirmed",
];

const mockTripData = {
  img: activity,
  title: "Exciting andaman family trip",
  duration: "5 Days & 4 Nights",
  tripDate: "23’Oct 2022",
  person: "2 Adults",
  room: "1 Room",
  cost: 23000,
  cities: [
    {
      name: "Punakha",
      days: 1,
    },
    {
      name: "Paro",
      days: 3,
    },
    {
      name: "Thimpu",
      days: 3,
    },
  ],
  hotelType: "3 Star",
  cabType: "Hatchback",
};

const PANEL_HEADER = (
  <div className="tw-flex tw-gap-4 tw-items-center">
    <div className="tw-h-14 tw-w-14 tw-rounded-full tw-flex-center tw-bg-gray-background">
      <img className="tw-w-6" src={icon} alt="icon" />
    </div>

    <div>
      <p className="tw-text-lg tw-font-medium">Package details</p>
      <p className="tw-text-secondary-color tw-text-xs">
        Basic info, for a faster booking experience
      </p>
    </div>
  </div>
);

const tabHeader = (title: string, icon: string) => (
  <div className="tw-flex tw-gap-4 tw-items-center">
    <div className="tw-h-14 tw-w-14 tw-rounded-full tw-flex-center tw-bg-gray-background">
      <img className="tw-w-6" src={icon} alt="icon" />
    </div>

    <p className="tw-text-lg tw-font-medium">{title}</p>
  </div>
);

const { Step } = Steps;
const { Panel } = Collapse;
const PaymentPage = () => {
  const [currentState, setCurrentState] = useState(0);
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const [passangerFormDetails, setPassangerFormDetails] = useState<any>({});

  const handlePassangerFormSubmit = (details: any, id: number) => {
    const key = `passanger${id}`;
    setPassangerFormDetails({ ...passangerFormDetails, [key]: details });
  };

  const reviewSummery = () => {
    return (
      <div>
        <Collapse
          expandIconPosition="right"
          className="site-collapse-custom-collapse single-collapse"
        >
          <Panel
            header={PANEL_HEADER}
            key="1"
            className="site-collapse-custom-panel tw-shadow-card"
          >
            <Row gutter={25}>
              <Col span={8}>
                <img
                  className="tw-w-full tw-mt-1.5"
                  src={mockTripData.img}
                  alt="activity"
                />
              </Col>
              <Col span={16}>
                <p className="tw-mb-2">
                  <span className="tw-mr-1 tw-text-xl tw-font-medium">
                    {mockTripData.title}
                  </span>{" "}
                  <span className="tw-font-medium">
                    ({mockTripData.duration})
                  </span>
                </p>
                <p className="tw-text-blue-500 tw-mb-2">
                  <span className="tw-mr-2">{mockTripData.tripDate},</span>
                  <span className="tw-mr-2">BLG,</span>
                  <span className="tw-mr-2">{mockTripData.person},</span>
                  <span>{mockTripData.room}</span>
                </p>
                <p className="tw-mb-2 tw-flex tw-items-center">
                  <span className="tw-mr-3 tw-text-secondary-color tw-font-medium">
                    Total Cost:
                  </span>
                  <span className="tw-font-medium tw-text-yellow-color tw-text-lg">
                    {indCurrency(mockTripData.cost)}
                  </span>
                </p>
                <div className="tw-mb-3 tw-flex tw-gap-3">
                  <span className="tw-text-secondary-color tw-font-medium">
                    Cities:
                  </span>
                  <div className="tw-flex tw-gap-2 tw-items-center">
                    {mockTripData.cities.map((d, i) => (
                      <div key={i} className="tw-flex tw-gap-2 tw-items-center">
                        <span className="tw-font-medium">{`${d.name} (${d.days}D)`}</span>
                        {i !== mockTripData.cities.length - 1 && (
                          <img src={rightArrow} alt="" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="tw-mb-4 tw-flex tw-items-center">
                  <p className="tw-text-secondary-color tw-font-medium tw-mr-3">
                    Includes :
                  </p>
                  <div className="tw-flex tw-flex-wrap tw-gap-3">
                    <div className={classNamesInclustionImg.div}>
                      <img
                        className={classNamesInclustionImg.img}
                        src={INCLUSTION_IMG.hotel}
                        alt="hotel"
                      />
                    </div>
                    <div className={classNamesInclustionImg.div}>
                      <img
                        className={classNamesInclustionImg.img}
                        src={INCLUSTION_IMG.plane}
                        alt="plane"
                      />
                    </div>
                    <div className={classNamesInclustionImg.div}>
                      <img
                        className={classNamesInclustionImg.img}
                        src={INCLUSTION_IMG.taxi}
                        alt="taxi"
                      />
                    </div>
                    <div className={classNamesInclustionImg.div}>
                      <img
                        className={classNamesInclustionImg.img}
                        src={INCLUSTION_IMG.photo}
                        alt="camera"
                      />
                    </div>
                  </div>
                </div>
                <div className="tw-mb-4">
                  <span className="tw-text-secondary-color tw-font-medium tw-mr-3">
                    Hotel Includes In this Packages
                  </span>
                  <span className="tw-px-2 tw-py-1 tw-shadow-card tw-rounded-lg tw-font-medium">
                    {mockTripData.hotelType}
                  </span>
                </div>
                <div className="tw-mb-4">
                  <span className="tw-text-secondary-color tw-font-medium tw-mr-3">
                    Cab Includes In this Packages
                  </span>
                  <span className="tw-px-2 tw-py-1 tw-shadow-card tw-rounded-lg tw-font-medium">
                    {mockTripData.cabType}
                  </span>
                </div>
              </Col>
            </Row>
          </Panel>
        </Collapse>
        <div className="tw-mt-5 tw-shadow-card tw-rounded-lg tw-bg-white tw-p-5">
          <p className="tw-text-lg tw-font-medium tw-mb-1">
            Terms and condition
          </p>
          <Checkbox
            checked={isTermsAccepted}
            onClick={() => setIsTermsAccepted(!isTermsAccepted)}
          >
            <span className="tw-text-secondary-color tw-text-sm">
              Yes, secure my trip. I agree to the{" "}
              <span className="tw-text-blue-500 tw-cursor-pointer">
                terms and condition
              </span>{" "}
              and{" "}
              <span className="tw-text-blue-500 tw-cursor-pointer">
                Good Health
              </span>{" "}
              terms and confirm all passengers arebetween 2 to 40 years of age
            </span>
          </Checkbox>
        </div>
        <div className="">
          <Button
            type="default"
            onClick={() => setCurrentState(1)}
            className="tw-texa-button tw-mt-10"
          >
            Continue to pay
          </Button>
        </div>
      </div>
    );
  };

  const passangerDetails = () => {
    return (
      <div>
        <p className="tw-text-2xl tw-mt-2 tw-mb-5 tw-font-medium">
          Passenger details
        </p>
        <div>
          <Collapse
            expandIconPosition="right"
            className="site-collapse-custom-collapse single-collapse"
          >
            {Array(MOCK_PASSANGER)
              .fill(null)
              .map((_, i) => (
                <Panel
                  header={tabHeader(`Passanger - ${i + 1}`, passangerIcon)}
                  key={i + 1}
                  className="site-collapse-custom-panel tw-shadow-card"
                >
                  <PassangerForm
                    id={i + 1}
                    handleFormSubmit={handlePassangerFormSubmit}
                  />
                </Panel>
              ))}
            <Panel
              header={tabHeader("Contact details", contact)}
              key={uniqueId("contactForm")}
              className="site-collapse-custom-panel tw-shadow-card"
            >
              <PassangerContactDetails
                handleFormSubmit={(details) =>
                  setPassangerFormDetails({
                    ...passangerFormDetails,
                    contactDetails: details,
                  })
                }
              />
            </Panel>
          </Collapse>
        </div>
      </div>
    );
  };
  return (
    <Container>
      <Row gutter={25} className="tw-mt-10">
        <Col span={17}>
          <div>
            <span className="tw-text-blue-500 tw-flex tw-items-center tw-cursor-pointer tw-max-w-max">
              <ArrowLeftOutlined />{" "}
              <span className="tw-ml-1 tw-underline">Back To Package</span>
            </span>
          </div>
          <div className="tw-mt-8">
            <div className="payment-steps">
              <Steps current={currentState} progressDot>
                {PAYMENT_STEPS.map((step, i) => (
                  <Step title={step} key={i} />
                ))}
              </Steps>
            </div>
            <div className="tw-mt-8">
              {currentState === 0 && reviewSummery()}
              {currentState === 1 && passangerDetails()}
            </div>
          </div>
        </Col>

        {/* right panel */}
        <Col span={7}>
          <div className="tw-shadow-card tw-p-5 tw-rounded-lg tw-bg-white">
            <p className="tw-text-2xl tw-font-medium">Fare summary</p>
            <Divider className="tw-my-5" />
            <div className="tw-flex tw-justify-between tw-items-center tw-text-base tw-font-medium">
              <p>Total amount :</p>
              <p>{indCurrency(28000)}</p>
            </div>
            <div className="tw-flex tw-justify-between tw-items-center tw-text-xs tw-text-secondary-color">
              <p>( inclusive of all taxes )</p>
              <p>14000 x 2 Person </p>
            </div>
            <Divider className="tw-my-5" />
            <p className="tw-text-base tw-font-medium">Amount breakup</p>
            {mockAmtbrackup.map((d, i) => (
              <div
                key={i}
                className="tw-flex tw-justify-between tw-items-center tw-text-xs tw-text-secondary-color"
              >
                <p>{d.type} :</p>
                <p>{indCurrency(d.amt)}</p>
              </div>
            ))}
            <Divider className="tw-my-5" />
            <div className="tw-flex tw-justify-between tw-items-center tw-text-base tw-font-medium">
              <p>You Pay :</p>
              <p>{indCurrency(28000)}</p>
            </div>

            <p
              style={{ fontSize: "10px" }}
              className="tw-text-secondary-color tw-mt-10"
            >
              Yes, secure my trip. I agree to the{" "}
              <span className="tw-text-blue-500 tw-cursor-pointer">
                terms and condition
              </span>{" "}
              and{" "}
              <span className="tw-text-blue-500 tw-cursor-pointer">
                Good Health
              </span>{" "}
              terms and confirm all passengers arebetween 2 to 40 years of age
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PaymentPage;
