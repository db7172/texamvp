import { ArrowLeftOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import TripDetailCard from "../../card/TripDetailCard";
import {
  CAB_DETAILS,
  HOTEL_DETAILS,
  INCLUDE_EXCLUDE,
  PAYMENT_CARD,
  TRAVEL_ITINERARY,
  UPCOMING_TRIP_DATA,
} from "../userTabsConstants";
import {
  Button,
  Col,
  Collapse,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Table,
  TableColumnsType,
} from "antd";
import UserCard from "../../card/UserCard";
import { uniqueId } from "lodash";
import download from "../../../../assets/svg/down-arrow.svg";
import email from "../../../../assets/svg/email.svg";
import hotel from "../../../../assets/svg/hotel.svg";
import taxi from "../../../../assets/svg/taxi.svg";
import { CabDetailsType, HotelDetailsType } from "Models";
import InformationSection from "../../../view-more-details/InformationSection";

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

const UpcomingTour = ({ isParentHeaderVisible, handleParentHeader }: Props) => {
  const [showList, setShowList] = useState(true);
  const [activeCard, setActiveCard] = useState<TripType | undefined>();
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showHotalModal, setShowHotalModal] = useState(false);
  const [showCabModal, setShowCabModal] = useState(false);

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
                  <div className="tw-flex tw-justify-center">
                    <div>
                      <Button type="default" className="tw-mr-2">
                        <span className="tw-mr-2">
                          <img src={download} alt="download" />
                        </span>{" "}
                        <span style={{ color: "#2979FF" }}>
                          Download Voucher
                        </span>
                      </Button>
                      <Button
                        type="default"
                        onClick={() => setShowEmailModal(true)}
                      >
                        <span className="tw-mr-2">
                          <img src={email} alt="email" />
                        </span>{" "}
                        <span style={{ color: "#2979FF" }}>Email Voucher</span>
                      </Button>
                    </div>
                    <Modal
                      visible={showEmailModal}
                      onCancel={() => setShowEmailModal(false)}
                      footer={null}
                    >
                      <p className="tw-text-center tw-text-lg tw-font-medium tw-mb-3">
                        Send E-ticket on email and phone
                      </p>
                      <div className="tw-flex tw-justify-center">
                        <p className="tw-text-secondary-color tw-w-5/6 tw-text-center">
                          You can send E-ticket to the registered email/phone as
                          well as to a different email phone
                        </p>
                      </div>
                      <div className="tw-flex tw-justify-center tw-mt-5">
                        <Form
                          name="basicDetails"
                          initialValues={{
                            prefix: "91",
                          }}
                          className="tw-w-5/6"
                          size="large"
                          layout="vertical"
                          onFinish={(value) => console.log(value)}
                          // onFinishFailed={onFinishFailed}
                        >
                          <Form.Item
                            label="Mobile Number"
                            className="tw-rounded-lg"
                            name="number"
                            rules={[
                              {
                                required: true,
                                message: "Please input your number!",
                              },
                              {
                                max: 10,
                                min: 10,
                                message:
                                  "The input is not valid mobile number!",
                              },
                            ]}
                          >
                            <Input
                              addonBefore={prefixSelector}
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
                            <Input
                              className="tw-rounded-lg"
                              placeholder="Enter Your E-mail id"
                            />
                          </Form.Item>
                          <Row gutter={25}>
                            <Col span={12}>
                              <Form.Item>
                                <Button
                                  type="default"
                                  className="tw-w-full tw-texa-button"
                                  htmlType="submit"
                                >
                                  Submit
                                </Button>
                              </Form.Item>
                            </Col>
                            <Col span={12}>
                              <Form.Item>
                                <Button
                                  type="default"
                                  className="tw-w-full border-btn tw-rounded-lg"
                                  onClick={() => setShowEmailModal(false)}
                                >
                                  Cancel
                                </Button>
                              </Form.Item>
                            </Col>
                          </Row>
                        </Form>
                      </div>
                    </Modal>
                  </div>
                </Panel>
                <Panel header="Tour Details" key="2">
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
                      • Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor
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
                      • Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor
                    </p>
                  </Modal>
                </Panel>

                <Panel header="Travel itinerary" key="3">
                  {TRAVEL_ITINERARY.map((d, i) => (
                    <div key={i} className="tw-mt-5">
                      <p className="tw-text-base tw-font-medium tw-mb-2">
                        {d.title}
                      </p>
                      <p className="tw-text-secondary-color">{d.description}</p>
                    </div>
                  ))}
                </Panel>

                <Panel header="Inclusion & Exclusion" key="4">
                  {INCLUDE_EXCLUDE.map((d, i) => (
                    <InformationSection
                      header={d.header}
                      content={d.details}
                      key={i}
                    />
                  ))}
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
                    <p className="tw-text-dark-red tw-mb-3">
                      Cancellation charges apply as per policy.
                    </p>
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
                    <div className="tw-flex tw-justify-end">
                      <Button
                        type="default"
                        className="tw-texa-button"
                        // onClick={handleProceedClick}
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                </Panel>
              </Collapse>
            )}
          </Col>
          <Col span={6}>
            <UserCard
              title={PAYMENT_CARD.title}
              description={PAYMENT_CARD.description}
              icon={PAYMENT_CARD.icon}
              handleCardClick={() => console.log(PAYMENT_CARD.key)}
            />
          </Col>
        </Row>
      )}
    </div>
  );
};

export default UpcomingTour;
