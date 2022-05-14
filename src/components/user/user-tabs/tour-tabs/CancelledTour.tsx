import { ArrowLeftOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import TripDetailCard from "../../card/TripDetailCard";
import {
  CAB_DETAILS,
  HOTEL_DETAILS,
  INCLUDE_EXCLUDE,
  PAYMENT_CARD,
  REFUND_CARD,
  TRAVEL_ITINERARY,
  UPCOMING_TRIP_DATA,
} from "../userTabsConstants";
import {
  Col,
  Collapse,
  Divider,
  Modal,
  Row,
  Steps,
  Table,
  TableColumnsType,
} from "antd";
import UserCard from "../../card/UserCard";
import { uniqueId } from "lodash";
import hotel from "../../../../assets/svg/hotel.svg";
import taxi from "../../../../assets/svg/taxi.svg";
import { CabDetailsType, HotelDetailsType } from "Models";
import InformationSection from "../../../view-more-details/InformationSection";
import { indCurrency } from "../../../../utils/utils";

const { Panel } = Collapse;

type Props = {
  isParentHeaderVisible: boolean;
  handleParentHeader: (value: boolean) => void;
};

type TripType = {
  icon: string;
  title: string;
  duration: string;
  type: string;
  mode: string;
  bookingId: string;
  bookingDate: string;
  activityDate: string;
  bookingAmt: number;
  travellers: {
    name: string;
    age: number;
    contact: string;
  }[];
};

const { Step } = Steps;

const CancelledTour = ({
  isParentHeaderVisible,
  handleParentHeader,
}: Props) => {
  const [showList, setShowList] = useState(true);
  const [activeCard, setActiveCard] = useState<TripType | undefined>();
  const [showHotalModal, setShowHotalModal] = useState(false);
  const [showCabModal, setShowCabModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showRefundModal, setShowRefundModal] = useState(false);
  const [currentCancellationStep] = useState(2);

  const handleViewBookingClick = (id: number) => {
    setActiveCard(UPCOMING_TRIP_DATA[id]);
    handleParentHeader(false);
    setShowList(false);
  };

  const handleShowList = () => {
    setShowList(true);
    handleParentHeader(true);
    setActiveCard(undefined);
  };

  function callback(key: any) {
    console.log(key);
  }

  const hotelColumnSchema: TableColumnsType<HotelDetailsType> = [
    {
      title: "STAY",
      dataIndex: "stay",
      key: "stay",
    },
    {
      title: "HOTEL NAME",
      dataIndex: "hotelName",
      key: "hotelName",
      render: (value, record) => (
        <div>
          <p>{value}</p>
          {record.hotelContact && <p>({record.hotelContact})</p>}
        </div>
      ),
    },
    {
      title: "CITY",
      dataIndex: "city",
      key: "city",
    },
    {
      title: "ROOM TYPE",
      dataIndex: "roomType",
      key: "roomType",
    },
    {
      title: "MEAL PLAN",
      dataIndex: "mealPlan",
      key: "mealPlan",
      render: (_, record) => (
        <div>
          {record.lunch && <p>Lunch</p>}
          {record.dinner && <p>Dinner</p>}
        </div>
      ),
    },
    {
      title: "CHECK-IN",
      dataIndex: "checkIn",
      key: "checkIn",
      render: (_, record) => (
        <div>
          <p>{record.checkInDate}</p>
          {record.checkInTime && <p>{record.checkInTime}</p>}
        </div>
      ),
    },
    {
      title: "CHECK-OUT",
      dataIndex: "checkOut",
      key: "checkOut",
      render: (_, record) => (
        <div>
          <p>{record.checkOutDate}</p>
          {record.checkOutTime && <p>{record.checkOutTime}</p>}
        </div>
      ),
    },
  ];

  const cabColumnSchema: TableColumnsType<CabDetailsType> = [
    {
      title: "DATE",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "CAB TYPE",
      dataIndex: "cabType",
      key: "cabType",
    },
    {
      title: "PICK-UP",
      dataIndex: "pickUp",
      key: "pickUp",
    },
    {
      title: "DROP",
      dataIndex: "drop",
      key: "drop",
    },
    {
      title: "PASSENGERS",
      dataIndex: "passengers",
      key: "passengers",
    },
    {
      title: "LUGGAGE",
      dataIndex: "luggage",
      key: "luggage",
    },
  ];

  const getTourTitle = (type: string) => {
    if (type === "Activity") {
      return "Tour Details";
    } else if (type === "Event") {
      return "Event Details";
    } else {
      return "Retreat Details";
    }
  };

  return (
    <div>
      {!isParentHeaderVisible && (
        <div className="tw-flex tw-justify-between tw-items-center">
          <p className="tw-font-bold tw-text-3xl tw-mb-5">
            Overview of Booking
          </p>

          <ArrowLeftOutlined
            onClick={handleShowList}
            className="tw-text-secondary-color tw-text-xl tw-cursor-pointer"
          />
        </div>
      )}

      {showList ? (
        <div>
          {UPCOMING_TRIP_DATA.map((value, id) => (
            <TripDetailCard
              key={id}
              tripId={"krishna"}
              collection_name={"lksdfksdl"}
              id={id}
              title={value.title}
              description={value.duration}
              icon={value.icon}
              bookingDate={value.bookingDate}
              bookingId={value.bookingId}
              paidAmt={value.bookingAmt}
              type={value.type}
              handleButtonClick={handleViewBookingClick}
            />
          ))}
        </div>
      ) : (
        <Row gutter={25}>
          <Col span={18}>
            {activeCard && (
              <Collapse onChange={callback} expandIconPosition="right">
                <Panel
                  header={
                    <>
                      <p>{activeCard.title}</p>
                      <p className="tw-text-secondary-color tw-text-xs">
                        {`${activeCard.activityDate} • ${activeCard.travellers.length} Traveller (s)`}
                      </p>
                    </>
                  }
                  key="1"
                >
                  <p className="tw-text-base tw-mb-2">
                    Your Booking is Confirm
                  </p>
                  <div className="tw-flex tw-justify-between">
                    <p>
                      <span className="tw-text-xs tw-text-secondary-color tw-mr-2">
                        Booking Id:
                      </span>
                      {activeCard.bookingId}
                    </p>
                    <p>
                      <span className="tw-text-xs tw-text-secondary-color tw-mr-2">
                        Booking On:
                      </span>
                      {activeCard.bookingDate}
                    </p>
                  </div>
                  <div className="tw-mt-10">
                    <p className="tw-text-center tw-text-lg tw-font-medium">
                      {activeCard.title}
                    </p>
                    <p className="tw-text-center tw-text-secondary-color">
                      {activeCard.travellers.length} Travellers
                    </p>
                  </div>
                  <div className="tw-flex tw-justify-center tw-mb-5">
                    <UserCard
                      title={activeCard.duration}
                      description={activeCard.activityDate}
                      icon={activeCard.icon}
                      shadow={false}
                    />
                  </div>

                  <Row
                    gutter={[20, 10]}
                    className="tw-bg-gray-background tw-p-5 tw-rounded-lg"
                  >
                    <Col
                      span={12}
                      className="tw-text-secondary-color tw-font-medium"
                    >
                      TRAVELLER
                    </Col>
                    <Col
                      span={6}
                      className="tw-text-secondary-color tw-font-medium"
                    >
                      AGE
                    </Col>
                    <Col
                      span={6}
                      className="tw-text-secondary-color tw-font-medium"
                    >
                      CONTACT
                    </Col>
                    {activeCard.travellers.map((d) => (
                      <React.Fragment key={uniqueId()}>
                        <Col span={12} className="tw-font-medium">
                          {d.name}
                        </Col>
                        <Col span={6} className="tw-font-medium">
                          {d.age}
                        </Col>
                        <Col span={6} className="tw-font-medium">
                          {d.contact ? d.contact : "---"}
                        </Col>
                      </React.Fragment>
                    ))}
                  </Row>
                </Panel>

                {activeCard.mode === "offline" && (
                  <Panel header={getTourTitle(activeCard.type)} key="2">
                    <div className="tw-flex tw-gap-2">
                      <UserCard
                        title="Hotel Details"
                        description="Basic info, for a faster
                      booking"
                        icon={hotel}
                        shadow={false}
                        handleCardClick={() => setShowHotalModal(true)}
                      />
                      <UserCard
                        title="Cab Details"
                        description="Basic info, for a faster booking"
                        icon={taxi}
                        shadow={false}
                        handleCardClick={() => setShowCabModal(true)}
                      />
                    </div>
                    <Modal
                      title="Hotel Details"
                      visible={showHotalModal}
                      width={1000}
                      onCancel={() => setShowHotalModal(false)}
                      footer={null}
                    >
                      <Table
                        pagination={false}
                        dataSource={HOTEL_DETAILS}
                        columns={hotelColumnSchema}
                      />

                      <p className="tw-text-secondary-color tw-mt-10">
                        • Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor
                      </p>
                    </Modal>
                    <Modal
                      title="Cab Details"
                      visible={showCabModal}
                      width={1000}
                      onCancel={() => setShowCabModal(false)}
                      footer={null}
                    >
                      <Table
                        pagination={false}
                        dataSource={CAB_DETAILS}
                        columns={cabColumnSchema}
                      />

                      <p className="tw-text-secondary-color tw-mt-10">
                        • Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor
                      </p>
                    </Modal>
                  </Panel>
                )}

                {activeCard.type === "Activity" && (
                  <Panel header="Travel itinerary" key="3">
                    {TRAVEL_ITINERARY.map((d, i) => (
                      <div key={i} className="tw-mt-5">
                        <p className="tw-text-base tw-font-medium tw-mb-2">
                          {d.title}
                        </p>
                        <p className="tw-text-secondary-color">
                          {d.description}
                        </p>
                      </div>
                    ))}
                  </Panel>
                )}

                {activeCard.type === "Event" && (
                  <Panel header="Event Summary" key="7">
                    {TRAVEL_ITINERARY.map((d, i) => (
                      <div key={i} className="tw-mt-5">
                        <p className="tw-text-base tw-font-medium tw-mb-2">
                          {d.title}
                        </p>
                        <p className="tw-text-secondary-color">
                          {d.description}
                        </p>
                      </div>
                    ))}
                  </Panel>
                )}

                <Panel header="Inclusion & Exclusion" key="4">
                  {INCLUDE_EXCLUDE.map((d, i) => (
                    <InformationSection
                      header={d.header}
                      content={d.details}
                      key={i}
                    />
                  ))}
                </Panel>

                <Panel header="Refund Status" key="8">
                  <Steps
                    current={currentCancellationStep}
                    className="tw-my-10"
                    progressDot
                  >
                    <Step title="Booking Cancelled" description="14 Feb’2016" />
                    <Step
                      title={`Refund Proceed ${indCurrency(3300)}`}
                      description="14 Feb’2016"
                    />
                    <Step
                      title="CRefund Reflect in your account"
                      description="14 Feb’2016"
                    />
                  </Steps>

                  <div className="tw-pl-7">
                    <ul className="tw-list-disc tw-list-outside">
                      <li className="tw-text-secondary-color">
                        INR.3300 has been proceed in HDFC bank ******3137 It
                        takes 3 working days for refund to reflect in HDFC Bank
                        account.
                      </li>
                      {INCLUDE_EXCLUDE[0].details.map((s, i) => (
                        <li key={i} className="tw-text-secondary-color">
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Panel>

                <Panel header="Important Information" key="5">
                  <div className="tw-px-7">
                    <ul className="tw-list-disc tw-list-outside">
                      {INCLUDE_EXCLUDE[0].details.map((s, i) => (
                        <li
                          key={i}
                          className="tw-text-secondary-color tw-text-xs"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Panel>

                <Panel header="Cancellation" key="6">
                  <div className="tw-px-7">
                    <ul className="tw-list-disc tw-list-outside">
                      <li className="tw-text-secondary-color tw-text-xs">
                        Your tour is already cancelled, you can re-book your
                        tour again
                      </li>
                    </ul>
                  </div>
                </Panel>
              </Collapse>
            )}
          </Col>
          <Col span={6}>
            <Row gutter={[0, 40]}>
              <Col span={24}>
                <UserCard
                  title={REFUND_CARD.title}
                  description={REFUND_CARD.description}
                  icon={REFUND_CARD.icon}
                  handleCardClick={() => setShowRefundModal(true)}
                />
                <Modal
                  visible={showRefundModal}
                  width={600}
                  onCancel={() => setShowRefundModal(false)}
                  footer={null}
                >
                  <p className="tw-text-center tw-mt-2 tw-text-xl tw-font-medium">
                    Refund Details
                  </p>
                  <div className="tw-flex tw-flex-col tw-items-center tw-mb-5">
                    <p className="tw-text-center tw-mt-2 tw-w-2/4">
                      Basic info, for a faster booking experience and travel
                    </p>
                    <div className="tw-mt-2 tw-w-3/4 tw-shadow-card tw-p-5 tw-rounded-lg">
                      <p className="tw-text-lg tw-font-medium tw-mb-1">
                        Refund Amount
                      </p>
                      <p className="tw-flex tw-justify-between tw-text-secondary-color tw-mb-1">
                        <span>Refund to Bank</span>
                        <span>{indCurrency(9000)}</span>
                      </p>

                      <Divider />

                      <p className="tw-text-lg tw-font-medium tw-mb-1">Other</p>
                      <p className="tw-flex tw-justify-between tw-text-secondary-color tw-mb-1">
                        <span>Refund Request Date</span>
                        <span>12 Feb’2020</span>
                      </p>
                      <p className="tw-flex tw-justify-between tw-text-secondary-color tw-mb-1">
                        <span>Refund Processed On</span>
                        <span>12 Feb’2020</span>
                      </p>
                      <p className="tw-flex tw-justify-between tw-text-secondary-color tw-mb-1">
                        <span>Refund Pay Mode</span>
                        <span>Bank Transfer</span>
                      </p>
                      <p className="tw-flex tw-justify-between tw-text-secondary-color tw-mb-1">
                        <span>ARN(Aaaquired ref no)</span>
                        <span>000987654321</span>
                      </p>
                      <p className="tw-flex tw-justify-between tw-text-secondary-color tw-mb-1">
                        <span>BRN(Bank ref no)</span>
                        <span>000987654321</span>
                      </p>
                    </div>
                  </div>
                </Modal>
              </Col>
              <Col span={24}>
                <UserCard
                  title={PAYMENT_CARD.title}
                  description={PAYMENT_CARD.description}
                  icon={PAYMENT_CARD.icon}
                  handleCardClick={() => setShowPaymentModal(true)}
                />
                <Modal
                  visible={showPaymentModal}
                  width={600}
                  onCancel={() => setShowPaymentModal(false)}
                  footer={null}
                >
                  <p className="tw-text-center tw-mt-2 tw-text-xl tw-font-medium">
                    Payment Details
                  </p>
                  <div className="tw-flex tw-flex-col tw-items-center tw-mb-5">
                    <p className="tw-text-center tw-mt-2 tw-w-2/4">
                      Basic info, for a faster booking experience and travel
                    </p>
                    <div className="tw-mt-2 tw-w-3/4 tw-shadow-card tw-p-5 tw-rounded-lg">
                      <p className="tw-flex tw-justify-between tw-text-secondary-color tw-mb-1">
                        <span>Tour Package</span>
                        <span>{indCurrency(40000)}</span>
                      </p>
                      <p className="tw-flex tw-justify-between tw-text-secondary-color tw-mb-1">
                        <span>Flights</span>
                        <span>---</span>
                      </p>
                      <p className="tw-flex tw-justify-between tw-text-secondary-color tw-mb-1">
                        <span>Hotel</span>
                        <span>---</span>
                      </p>
                      <p className="tw-flex tw-justify-between tw-text-secondary-color tw-mb-1">
                        <span>C(GST)</span>
                        <span>---</span>
                      </p>
                      <p className="tw-flex tw-justify-between tw-text-secondary-color tw-mb-1">
                        <span>S(GST)</span>
                        <span>---</span>
                      </p>
                      <p className="tw-flex tw-justify-between tw-text-secondary-color tw-mb-1">
                        <span>Discount Coupon</span>
                        <span>{indCurrency(500)}</span>
                      </p>
                      <Divider className="tw-my-2" />
                      <p className="tw-flex tw-justify-between tw-text-secondary-color tw-font-medium tw-text-base">
                        <span>Total Amount</span>
                        <span>{indCurrency(39500)}</span>
                      </p>
                      <Divider className="tw-my-2" />
                      <p className="tw-flex tw-justify-between tw-text-secondary-color tw-font-medium tw-text-base">
                        <span>Amount Paid</span>
                        <span>{indCurrency(10000)}</span>
                      </p>
                      <Divider className="tw-my-2" />
                      <p className="tw-flex tw-justify-between tw-text-secondary-color tw-font-medium tw-text-base">
                        <span>Cancellation Charge</span>
                        <span>{indCurrency(10000)}</span>
                      </p>
                      <Divider className="tw-my-2" />
                      <p className="tw-flex tw-justify-between tw-text-secondary-color tw-font-medium tw-text-base">
                        <span>Refund Amount</span>
                        <span>{indCurrency(29500)}</span>
                      </p>
                    </div>
                  </div>
                </Modal>
              </Col>
            </Row>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default CancelledTour;
