import { ArrowLeftOutlined } from "@ant-design/icons";
import {
  Button,
  Checkbox,
  Col,
  Collapse,
  Divider,
  Row,
  Steps,
  Typography,
} from "antd";
import { useEffect, useState } from "react";
import Container from "../../components/common/container/Container";
import { indCurrency } from "../../utils/utils";
import icon from "../../assets/svg/bag.svg";
import gstIcon from "../../assets/svg/gst.svg";
import timeOut from "../../assets/svg/timeOut.svg";
import rightArrow from "../../assets/svg/right-arrow.svg";
import passangerIcon from "../../assets/svg/passanger.svg";
import contact from "../../assets/svg/contactBook.svg";
import activity from "../../assets/png/activityImg.png";
import { INCLUSTION_IMG } from "../view-more/data.mock";
import {
  PassangerForm,
  PassangerContactDetails,
  GstDetails,
} from "../../components/payment-page/PassangerForm";
import { lowerCase } from "lodash";
import classNames from "classnames";
import { useHistory, useLocation } from "react-router-dom";
import moment from "moment";

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

const tabHeader = (title: string, icon: string, optional?: string) => (
  <div className="tw-flex tw-gap-4 tw-items-center">
    <div className="tw-h-14 tw-w-14 tw-rounded-full tw-flex-center tw-bg-gray-background">
      <img className="tw-w-7" src={icon} alt="icon" />
    </div>

    <p>
      <span className="tw-text-lg tw-font-medium">{title}</span>{" "}
      <span className="tw-ml-2 tw-text-secondary-color">{optional}</span>
    </p>
  </div>
);

const { Step } = Steps;
const { Panel } = Collapse;
const PaymentPage = (props: any) => {
  const [currentState, setCurrentState] = useState(0);
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  // const [activityDetails, setActivityDetails] = useState([]) as any;
  const [passangerFormDetails, setPassangerFormDetails] = useState<any>({});
  const { state } = useLocation<{
    numberOfPpl: number;
    price: number;
    activity: Object;
  }>();

  let activityDetails = props.location.state.activity;
  var startDate = moment(
    activityDetails.departureDate[0].dateRange.start,
    "DD.MM.YYYY"
  );
  var endDate = moment(
    activityDetails.departureDate[0].dateRange.end,
    "DD.MM.YYYY"
  );
  var duration = endDate.diff(startDate, "days");

  const history = useHistory();

  const handlePassangerFormSubmit = (details: any, id: number) => {
    const key = `passanger${id}`;
    setPassangerFormDetails({ ...passangerFormDetails, [key]: details });
  };

  const handleContactSubmit = (details: any) => {
    setPassangerFormDetails({
      ...passangerFormDetails,
      contactDetails: details,
    });
  };

  const handleGstSubmit = (details: any) => {
    setPassangerFormDetails({
      ...passangerFormDetails,
      gstDetails: details,
    });
  };

  // useEffect(() => {
  //   setActivityDetails(props.location.state.activity);
  // }, []);

  const reviewSummery = () => {
    return activityDetails ? (
      <>
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
                    src={activityDetails.imgLink[0]}
                    alt="activity"
                  />
                </Col>
                <Col span={16}>
                  <p className="tw-mb-2">
                    <span className="tw-mr-1 tw-text-xl tw-font-medium">
                      {activityDetails.activityName}
                    </span>{" "}
                    <span className="tw-font-medium">
                      ({`${duration} Days & ${duration - 1} Nights`})
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
                      {indCurrency(state?.price)}
                    </span>
                  </p>
                  <div className="tw-mb-3 tw-flex tw-gap-3">
                    <span className="tw-text-secondary-color tw-font-medium">
                      Cities:
                    </span>
                    <div className="tw-flex tw-gap-2 tw-items-center">
                      {activityDetails.destination.map((d: any, i: any) => (
                        <div
                          key={i}
                          className="tw-flex tw-gap-2 tw-items-center"
                        >
                          <span className="tw-font-medium">
                            {`${d.destination} (${moment(
                              d.destinationDateRang.end,
                              "DD.MM.YYYY"
                            ).diff(
                              moment(d.destinationDateRang.start, "DD.MM.YYYY"),
                              "days"
                            )}D)`}{" "}
                          </span>
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
                terms and confirm all passengers are between 2 to 40 years of
                age
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
      </>
    ) : (
      <>
        <p>Loading...</p>
      </>
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
            {Array(state?.numberOfPpl || MOCK_PASSANGER)
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
              key="contact"
              className="site-collapse-custom-panel tw-shadow-card"
            >
              <PassangerContactDetails handleFormSubmit={handleContactSubmit} />
            </Panel>

            <Panel
              header={tabHeader("Add GST details", gstIcon, "( Optional )")}
              key="gst"
              className="site-collapse-custom-panel tw-shadow-card"
            >
              <GstDetails handleFormSubmit={handleGstSubmit} />
            </Panel>
          </Collapse>
        </div>
        <Button
          type="default"
          className="tw-texa-button tw-mt-0"
          onClick={() => setCurrentState(2)}
        >
          Continue to pay
        </Button>
      </div>
    );
  };

  const paymentSummury = () => {
    return (
      <div className="tw-shadow-card tw-p-5 tw-rounded-lg tw-mb-9 tw-bg-white">
        <p className="tw-text-2xl tw-font-medium">Fare summary</p>
        <Divider className="tw-my-5" />
        <div className="tw-flex tw-justify-between tw-items-center tw-text-base tw-font-medium">
          <p>Total amount :</p>
          <p>{indCurrency(state.price * state.numberOfPpl || 28000)}</p>
        </div>
        <div className="tw-flex tw-justify-between tw-items-center tw-text-xs tw-text-secondary-color">
          <p>( inclusive of all taxes )</p>
          <p>
            {state.price || "14000"} x {state.numberOfPpl || MOCK_PASSANGER}{" "}
            Person{" "}
          </p>
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
          <p>{indCurrency(state.price * state.numberOfPpl || 28000)}</p>
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
    );
  };

  const passangerSummary = () => {
    const details = Object.entries(passangerFormDetails).reduce(
      (summary, current) => {
        if (lowerCase(current[0]).includes("passanger")) {
          return {
            ...summary,
            passanger: summary.passanger
              ? [...summary.passanger, current[1]]
              : [current[1]],
          };
        } else if (lowerCase(current[0]).includes("contact")) {
          return {
            ...summary,
            contact: current[1],
          };
        }
        return summary;
      },
      {} as {
        passanger: Array<any>;
        contact: any;
      }
    );

    console.log(details);

    return (
      <div>
        {details.passanger.length > 0 &&
          details.passanger.map((d: any, i: number) => (
            <p key={i}>
              <span className="tw-text-secondary-color tw-pr-2">
                {i + 1}. Name :
              </span>
              <span>{`${d.firstName} ${d.lastName}`}</span>
            </p>
          ))}

        <Divider />

        {details.contact && (
          <>
            <p>
              <span className="tw-text-secondary-color tw-pr-2">Email :</span>
              <span>{details.contact.email}</span>
            </p>

            <p>
              <span className="tw-text-secondary-color tw-pr-2">Phone :</span>
              <span>{details.contact.number}</span>
            </p>
          </>
        )}
      </div>
    );
  };

  return (
    <Container>
      <div>
        <span
          className="tw-text-blue-500 tw-flex tw-items-center tw-cursor-pointer tw-max-w-max tw-mt-10"
          onClick={() => history.goBack()}
        >
          <ArrowLeftOutlined />{" "}
          <span className="tw-ml-1 tw-underline">Back To Package</span>
        </span>
      </div>
      <Row gutter={25}>
        <Col span={17}>
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
          {currentState > 1 && (
            <div className="tw-bg-gray-background tw-rounded-lg tw-py-2 tw-px-3 tw-mt-5 tw-mb-9 tw-flex tw-items-center tw-gap-2">
              <div>
                <img className="tw-w-5" src={timeOut} alt="time out" />
              </div>
              <p>Your session will expire in 8 mins 32 sec </p>
            </div>
          )}

          <div className={classNames({ "tw-mt-20": currentState <= 1 })}>
            {paymentSummury()}
          </div>

          {currentState > 1 && (
            <>
              <div className="tw-bg-white tw-shadow-card tw-rounded-lg tw-p-5 tw-mb-9">
                <p className="tw-text-lg tw-font-medium">Package details</p>
                <Divider />
                <Row gutter={10}>
                  <Col span={6}>
                    <img
                      className="tw-rounded-full"
                      src={mockTripData.img}
                      alt="poster"
                    />
                  </Col>
                  <Col span={18}>
                    <Typography.Text
                      ellipsis
                      className="tw-pb-1 tw-font-medium tw-text-base"
                    >
                      {mockTripData.title}
                    </Typography.Text>
                    <p className="tw-font-medium">
                      <span className="tw-text-secondary-color tw-mr-2">
                        Duration :
                      </span>
                      <span>{mockTripData.duration}</span>
                    </p>
                    <p className="tw-font-medium">
                      <span className="tw-text-secondary-color tw-mr-2">
                        From :
                      </span>
                      <span>{mockTripData.tripDate}</span>
                    </p>
                  </Col>
                </Row>
              </div>
              <div className="tw-bg-white tw-shadow-card tw-rounded-lg tw-p-5">
                <div className=" tw-flex tw-justify-between tw-items-center">
                  <p className="tw-text-lg tw-font-medium">Contact details</p>
                  <p
                    className="tw-text-blue-500 tw-underline tw-cursor-pointer"
                    onClick={() => setCurrentState(1)}
                  >
                    Edit
                  </p>
                </div>
                <Divider />

                {passangerSummary()}
              </div>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default PaymentPage;
