import {
  Button,
  Col,
  DatePicker,
  Form,
  InputNumber,
  Row,
  Select,
  TimePicker,
} from "antd";
import Modal from "antd/lib/modal/Modal";
import classNames from "classnames";
import { lowerCase } from "lodash";
import { useState } from "react";
import { CITY_ARR } from "../../constant/city-array";
import banner from "../../assets/png/carousal1.png";
import { indCurrency } from "../../utils/utils";
import { CheckCircleFilled } from "@ant-design/icons";

const MOCK_DATE = [
  {
    month: "May",
    date: [3, 4, 5, 6, 7, 8, 9, 10, 11],
  },
  {
    month: "Jun",
    date: [3, 4, 5, 6, 7, 8, 9, 10, 11],
  },
];

type Package = {
  type: string;
  price: number;
  description: string;
};

const MOCK_PACKAGE: Package[] = [
  {
    type: "Bronze",
    price: 6499,
    description:
      "Ac eget sollicitudin ut proin. Quisque sapien quam ac mattis donec faucibus.",
  },
  {
    type: "Silver",
    price: 7499,
    description:
      "Ac eget sollicitudin ut proin. Quisque sapien quam ac mattis donec faucibus.",
  },
  {
    type: "Gold",
    price: 8499,
    description:
      "Ac eget sollicitudin ut proin. Quisque sapien quam ac mattis donec faucibus.",
  },
];

const ViewMoreActivityBookingCard = () => {
  const [departureCity, setDepartureCity] = useState("mumbai");
  const [selectedDate, setSelectedDate] = useState("");
  const [active, setActive] = useState<Package>(MOCK_PACKAGE[0]);
  const [formValue, setFormValue] = useState({
    dateOfTravel: "",
    time: "",
    noOfPerson: 1,
  });
  const [form] = Form.useForm();

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleClick = (e: any) => {
    setSelectedDate(e.target.dataset.valueid);
  };

  const handleSubmit = () => {
    setIsModalVisible(true);
    console.log({
      departureCity,
      totalCost: active.price * formValue.noOfPerson,
    });
  };

  const handleModalSubmit = () => {
    setIsModalVisible(false);
    console.log({ formValue, selectedDate });
  };

  const handlePlanClick = (value: Package) => {
    setActive(value);
  };

  return (
    <section>
      <div className="tw-py-4 tw-border-b tw-border-t">
        <div className="tw-flex tw-justify-between tw-items-center">
          <span className="tw-text-secondary-color">Departure City</span>
          <Select
            showSearch
            // defaultValue="mumbai"
            value={departureCity}
            className="tw-font-medium"
            style={{ width: 120 }}
            placeholder="Location"
            onChange={(e) => setDepartureCity(e)}
          >
            {CITY_ARR.map((c, i) => (
              <Select.Option key={i} value={lowerCase(c)}>
                {c}
              </Select.Option>
            ))}
          </Select>
        </div>
        <div className="tw-mt-3">
          <div className="tw-pb-2 tw-border-b">
            <h4 className="tw-font-bold">Total Departues</h4>
          </div>
          <div>
            {MOCK_DATE.map((d, i) => (
              <div className="tw-flex-center tw-gap-5 tw-mt-3">
                <p className="tw-text-secondary-color">{d.month}</p>
                <div className="tw-flex tw-gap-2 tw-flex-wrap">
                  {d.date.map((date, index) => (
                    <button
                      data-valueid={`${lowerCase(d.month)}-${date}`}
                      key={index}
                      className={classNames(
                        "tw-h-8 tw-w-8 tw-flex-center tw-border tw-cursor-pointer",
                        selectedDate === `${lowerCase(d.month)}-${date}`
                          ? "tw-border-primary-yellow"
                          : null
                      )}
                      onClick={handleClick}
                    >
                      <p
                        data-valueid={`${lowerCase(d.month)}-${date}`}
                        className={classNames(
                          "tw-w-6 tw-h-6 tw-flex-center tw-rounded-full",
                          selectedDate === `${lowerCase(d.month)}-${date}`
                            ? "tw-bg-secondary-color"
                            : "tw-bg-gray-background"
                        )}
                      >
                        {date}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="tw-py-2">
        <Button
          type="default"
          onClick={handleSubmit}
          className="tw-texa-button tw-w-full"
        >
          Book Now
        </Button>
        <Modal
          title="Booking Details"
          visible={isModalVisible}
          footer={null}
          onCancel={handleCancel}
          width={800}
        >
          <div className="tw-flex tw-items-center tw-gap-3 tw-pb-5 tw-border-b">
            <div className="tw-h-16 tw-w-24">
              <img
                className="tw-w-auto tw-h-full tw-object-fill"
                src={banner}
                alt=""
              />
            </div>
            <div>
              <h4 className="tw-font-medium tw-text-base">
                Exciting Hampta Pass Trek trip
              </h4>
              <p className="tw-text-secondary-color">Mumbai . Trekking</p>
            </div>
          </div>
          <Row
            gutter={30}
            className="tw-mt-5 tw-border-b tw-pb-5 tw-flex tw-justify-between"
          >
            <Col span={12} className="tw-border-r">
              <h4 className="tw-text-base">Choose Your Package</h4>
              <div>
                {MOCK_PACKAGE.map((d, i) => (
                  <div
                    className="tw-p-3 tw-mt-3 tw-shadow tw-rounded-md tw-bg-gray-background tw-cursor-pointer"
                    onClick={() => handlePlanClick(d)}
                  >
                    <div className="tw-flex tw-justify-between">
                      <h3 className="tw-text-base tw-font-medium">{`${
                        d.type
                      } - ${indCurrency(d.price)}`}</h3>
                      <CheckCircleFilled
                        style={{
                          color: active.type === d.type ? "yellow" : "white",
                          fontSize: "25px",
                        }}
                      />
                    </div>
                    <p className="tw-mt-3 tw-text-secondary-color">
                      {d.description}
                    </p>
                  </div>
                ))}
              </div>
            </Col>

            <Col span={12}>
              <Form
                form={form}
                layout="vertical"
                size="large"
                initialValues={formValue}
                className="form-resets"
                onFinish={handleModalSubmit}
              >
                <Row gutter={12}>
                  <Col span={12}>
                    <Form.Item
                      name="dateOfTravel"
                      label="Date Of Travel"
                      rules={[{ required: true }]}
                    >
                      <DatePicker
                        className="tw-w-full tw-rounded-md"
                        onChange={(_, d) =>
                          setFormValue({ ...formValue, dateOfTravel: d })
                        }
                      />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      name="time"
                      label="Time Slot"
                      rules={[{ required: true }]}
                    >
                      <TimePicker
                        className="tw-w-full tw-rounded-md"
                        onChange={(_, t) =>
                          setFormValue({ ...formValue, time: t })
                        }
                      />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      name="noOfPerson"
                      label="Time Slot"
                      rules={[{ required: true }]}
                    >
                      <InputNumber
                        placeholder="Enter No. of people"
                        className="tw-w-full tw-rounded-md"
                        min={1}
                        onChange={(v) =>
                          setFormValue({ ...formValue, noOfPerson: v })
                        }
                      />
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>

          <div className="tw-mt-5 tw-flex tw-justify-between tw-items-center">
            <h4 className="tw-text-xl tw-text-yellow-color tw-font-medium">
              {indCurrency(active.price * formValue.noOfPerson)}
            </h4>
            <Form form={form}>
              <Button
                type="default"
                className="tw-texa-button tw-m-0"
                htmlType="submit"
              >
                Book Now
              </Button>
            </Form>
          </div>
        </Modal>
      </div>
    </section>
  );
};

export default ViewMoreActivityBookingCard;
