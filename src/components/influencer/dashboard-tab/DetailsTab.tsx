import { Button, Col, Row, Select, Form, Tooltip, Table } from "antd";
import classNames from "classnames";
import { isNumber } from "lodash";
import { DataDetailsType } from "Models";
import { useState } from "react";
import { indCurrency } from "../../../utils/utils";
import { DETAILS } from "./data";
import DetailsTabCardContainer from "./details-tab-component/DetailsTabCardContainer";

type ButtonType = "activity" | "event" | "retreat";

const statusOptions = [
  {
    value: "",
    label: "Select Option",
  },
  {
    value: "underProcess",
    label: "Under Process",
  },
  {
    value: "uploaded",
    label: "Uploaded",
  },
  {
    value: "onProgress",
    label: "On Progress",
  },
  {
    value: "booked",
    label: "Booked",
  },
  {
    value: "rejected",
    label: "Rejected",
  },
];

const highLowOptions = [
  {
    value: "",
    label: "Select Option",
  },
  {
    value: "highToLow",
    label: "High to Low",
  },
  {
    value: "lowToHigh",
    label: "Low to High",
  },
];

const columns = [
  {
    title: "S.No.",
    dataIndex: "sno",
    key: "sno",
  },
  {
    title: "Trip Id",
    dataIndex: "tripId",
    key: "tripId",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Phone No.",
    dataIndex: "phoneNo",
    key: "phoneNo",
  },
  {
    title: "City",
    dataIndex: "city",
    key: "city",
  },
  {
    title: "Amount Recieved",
    dataIndex: "amtRecd",
    key: "amtRecd",
  },
  {
    title: "Pending Amount",
    dataIndex: "pendingAmt",
    key: "pendingAmt",
  },
  {
    title: "Commission",
    dataIndex: "commission",
    key: "commission",
  },
];

const tableData = [
  {
    key: "1",
    sno: 1,
    tripId: 12345,
    name: "Courtney Henry",
    email: "raghu232@gmail.com",
    phoneNo: 8827145611,
    city: "Ahmedabad",
    amtRecd: indCurrency(16994),
    pendingAmt: indCurrency(16994),
    commission: indCurrency(16994),
  },
  {
    key: "1",
    sno: 2,
    tripId: 12345,
    name: "Courtney Henry",
    email: "raghu232@gmail.com",
    phoneNo: 8827145611,
    city: "Ahmedabad",
    amtRecd: indCurrency(16994),
    pendingAmt: indCurrency(16994),
    commission: indCurrency(16994),
  },
  {
    key: "1",
    sno: 3,
    tripId: 12345,
    name: "Courtney Henry",
    email: "raghu232@gmail.com",
    phoneNo: 8827145611,
    city: "Ahmedabad",
    amtRecd: indCurrency(16994),
    pendingAmt: indCurrency(16994),
    commission: indCurrency(16994),
  },
  {
    key: "1",
    sno: 4,
    tripId: 12345,
    name: "Courtney Henry",
    email: "raghu232@gmail.com",
    phoneNo: 8827145611,
    city: "Ahmedabad",
    amtRecd: indCurrency(16994),
    pendingAmt: indCurrency(16994),
    commission: indCurrency(16994),
  },
  {
    key: "1",
    sno: 5,
    tripId: 12345,
    name: "Courtney Henry",
    email: "raghu232@gmail.com",
    phoneNo: 8827145611,
    city: "Ahmedabad",
    amtRecd: indCurrency(16994),
    pendingAmt: indCurrency(16994),
    commission: indCurrency(16994),
  },
  {
    key: "1",
    sno: 6,
    tripId: 12345,
    name: "Courtney Henry",
    email: "raghu232@gmail.com",
    phoneNo: 8827145611,
    city: "Ahmedabad",
    amtRecd: indCurrency(16994),
    pendingAmt: indCurrency(16994),
    commission: indCurrency(16994),
  },
];

const DetailsTab = () => {
  const [activeButton, setActiveButton] = useState<ButtonType>("activity");
  const [showViewMoreDetails, setShowViewMoreDetails] = useState(false);
  const [activeViewMoreData, setActiveViewMoreData] =
    useState<DataDetailsType>();

  const handleViewMore = (value: DataDetailsType) => {
    setActiveViewMoreData(value);
    setShowViewMoreDetails(true);
  };

  return (
    <>
      {showViewMoreDetails ? (
        <div>
          <span
            className="tw-text-secondary-color tw-text-xs tw-underline tw-cursor-pointer tw-inline-block tw-mb-5"
            onClick={() => setShowViewMoreDetails(false)}
          >
            Go Back
          </span>
          {activeViewMoreData ? (
            <>
              <div className="tw-shadow-card tw-rounded-md tw-p-7 tw-flex tw-justify-between tw-items-center tw-mb-10">
                <div
                  className="tw-flex tw-gap-3"
                  style={{
                    maxWidth: activeViewMoreData.date ? "250px" : "330px",
                  }}
                >
                  <div>
                    <img src={activeViewMoreData.image} alt="details card" />
                  </div>
                  <div
                    style={{
                      width: activeViewMoreData.date ? "180px" : "220px",
                    }}
                  >
                    <Tooltip title={activeViewMoreData.title}>
                      <h5 className="tw-text-base tw-font-medium tw-mb-3 tw-text-ellipsis">
                        {activeViewMoreData.title}
                      </h5>
                    </Tooltip>
                    <p className="tw-text-xs tw-text-secondary-color tw-font-medium">
                      {activeViewMoreData.description}
                    </p>
                  </div>
                </div>
                {activeViewMoreData.date && (
                  <div>
                    <p className="tw-text-secondary-color tw-text-base tw-mb-3">
                      Date
                    </p>
                    <p className="tw-font-medium">{activeViewMoreData.date}</p>
                  </div>
                )}

                <div>
                  <p className="tw-text-secondary-color tw-text-base tw-mb-3">
                    No. Of Tickets Booked
                  </p>

                  <p>
                    <span>
                      {isNumber(activeViewMoreData.bookedTickets)
                        ? activeViewMoreData.bookedTickets
                        : activeViewMoreData.bookedTickets.totalBooked}
                    </span>
                  </p>
                </div>

                <div>
                  <p className="tw-text-secondary-color tw-text-base tw-mb-3">
                    Total Revenue
                  </p>

                  <p>
                    <span>{indCurrency(112654)}</span>
                  </p>
                </div>
                <div>
                  <p className="tw-underline tw-text-blue-500 tw-cursor-pointer">
                    Download CSV
                  </p>
                </div>
              </div>
              <div>
                <Table
                  columns={columns}
                  dataSource={tableData}
                  scroll={{ x: 1500 }}
                />
              </div>
            </>
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      ) : (
        <Row gutter={[0, 40]}>
          <Col span={24}>
            <Row gutter={20} className="tw-items-center">
              <Col span={4}>
                <p className="tw-font-bold tw-text-3xl tw-text-secondary-color">
                  Details
                </p>
              </Col>
              <Col span={20} className="tw-bg-white tw-shadow-card">
                <div className="tw-py-5 tw-px-5 tw-flex tw-gap-5">
                  <Button
                    type="default"
                    className={classNames(
                      "tw-m-0 border-visible",
                      activeButton === "activity"
                        ? "tw-border-texa-active"
                        : "tw-border-texa-normal"
                    )}
                    onClick={() => setActiveButton("activity")}
                  >
                    Activity
                  </Button>
                  <Button
                    type="default"
                    className={classNames(
                      "tw-m-0 border-visible",
                      activeButton === "event"
                        ? "tw-border-texa-active"
                        : "tw-border-texa-normal"
                    )}
                    onClick={() => setActiveButton("event")}
                  >
                    Event
                  </Button>
                  <Button
                    type="default"
                    className={classNames(
                      "tw-m-0 border-visible",
                      activeButton === "retreat"
                        ? "tw-border-texa-active"
                        : "tw-border-texa-normal"
                    )}
                    onClick={() => setActiveButton("retreat")}
                  >
                    Retreat
                  </Button>
                </div>
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <Form
              size="large"
              autoComplete="off"
              layout="vertical"
              onValuesChange={(values) => console.log(values)}
            >
              <Row gutter={20}>
                <Col span={6}>
                  <Form.Item label="Status" name="status">
                    <Select
                      placeholder="Status"
                      className="tw-w-full"
                      options={statusOptions}
                    />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="Price" name="price">
                    <Select
                      placeholder="Price"
                      className="tw-w-full"
                      options={highLowOptions}
                    />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="Interest Shown" name="iterestShow">
                    <Select
                      placeholder="Interest Shown"
                      className="tw-w-full"
                      options={highLowOptions}
                    />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="Number of Bookings" name="noOfBooking">
                    <Select
                      placeholder="Number of Bookings"
                      className="tw-w-full"
                      options={highLowOptions}
                    />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
            {activeButton === "activity" && (
              <DetailsTabCardContainer
                data={DETAILS.ACTIVITY}
                viewMore={handleViewMore}
              />
            )}
            {activeButton === "event" && (
              <DetailsTabCardContainer
                data={DETAILS.EVENT}
                viewMore={handleViewMore}
              />
            )}
            {activeButton === "retreat" && (
              <DetailsTabCardContainer
                data={DETAILS.RETREAT}
                viewMore={handleViewMore}
              />
            )}
          </Col>
        </Row>
      )}
    </>
  );
};

export default DetailsTab;
