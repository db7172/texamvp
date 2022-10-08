import { Col, Row, Form, Select, Tooltip } from "antd";
import { uniqueId } from "lodash";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip as ChartTooltip,
} from "recharts";
import { indCurrency } from "../../../utils/utils";
import StateCard from "./cards/StateCard";
import { CHART_DATA, EARNING, highLowOptions } from "./data";

const EarningTab = () => {
  return (
    <div>
      <p className="tw-font-bold tw-text-3xl tw-text-secondary-color tw-mb-10">
        Earning
      </p>
      <Row gutter={[20, 20]}>
        <Col span={24}>
          <Row gutter={20}>
            <Col span={8}>
              <StateCard
                price
                title="Pending Amount to Recieve"
                value={24567}
              />
            </Col>
            <Col span={8}>
              <StateCard
                price
                title="Month to Date"
                value={67949}
                additionalData={{
                  negative: true,
                  changes: 12,
                }}
              />
            </Col>
            <Col span={8}>
              <StateCard
                price
                title="Year to Date"
                value={74563}
                additionalData={{
                  negative: false,
                  changes: 12,
                }}
              />
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row gutter={20}>
            <Col span={16}>
              <div className="tw-flex tw-justify-between tw-items-center tw-mb-5">
                <div>
                  <p className="tw-text-lg tw-font-medium">Earning Summary</p>
                </div>
                <div className="tw-flex tw-items-center tw-gap-5">
                  <p className="tw-text-secondary-color">Sort by:</p>
                  <div className="tw-w-28">
                    <Select
                      className="tw-w-full"
                      options={[{ value: "month", label: "Month" }]}
                      value="month"
                    />
                  </div>
                  <div className="tw-w-28">
                    <Select
                      className="tw-w-full"
                      options={[{ value: "janApr", label: "Jul - Apr" }]}
                      value="janApr"
                    />
                  </div>
                </div>
              </div>

              <ResponsiveContainer width="100%" height="85%">
                <AreaChart
                  data={CHART_DATA}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <defs>
                    <linearGradient id="colorUv" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="40%" stopColor="#FFEE58" opacity="0.5" />
                      <stop offset="100%" stopColor="#fff" />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <ChartTooltip />
                  <Area
                    type="natural"
                    dataKey="value"
                    stroke="#FFEE58"
                    fill="url(#colorUv)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </Col>
            <Col span={8}>
              <Row gutter={[0, 20]}>
                <Col span={24}>
                  <StateCard
                    price={false}
                    title="Total Tickets Sold"
                    value={232}
                  />
                </Col>
                <Col span={24}>
                  <StateCard
                    price={false}
                    title="Total No. of Activities & Events launched"
                    value={45}
                  />
                </Col>
                <Col span={24}>
                  <StateCard
                    price={false}
                    title="Total No. of Activities & Events Completed"
                    value={36}
                  />
                </Col>
                <Col span={24}>
                  <StateCard
                    price={false}
                    title="Interest to Booked Ratio"
                    value={3.78}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <div className="tw-mt-5">
        <p className="tw-text-lg tw-font-medium tw-mb-5">Earning List</p>
        <Form
          size="small"
          autoComplete="off"
          layout="vertical"
          onValuesChange={(values) =>{}}
        >
          <div className="tw-flex tw-justify-between tw-items-center">
            <div className="tw-flex tw-gap-5">
              <div className="tw-w-28">
                <Form.Item label="Earnings" name="earning">
                  <Select
                    placeholder="Earnings"
                    className="tw-w-full"
                    options={highLowOptions}
                  />
                </Form.Item>
              </div>
              <div className="tw-w-28">
                <Form.Item label="Bookings" name="booking">
                  <Select
                    placeholder="Bookings"
                    className="tw-w-full"
                    options={highLowOptions}
                  />
                </Form.Item>
              </div>
            </div>

            <div className="tw-flex tw-gap-5">
              <p className="tw-text-secondary-color">Sort by:</p>
              <div className="tw-w-28">
                <Form.Item>
                  <Select
                    className="tw-w-full"
                    options={[{ value: "month", label: "Month" }]}
                    value="month"
                  />
                </Form.Item>
              </div>
              <div className="tw-w-28">
                <Form.Item>
                  <Select
                    className="tw-w-full"
                    options={[{ value: "janApr", label: "Jul - Apr" }]}
                    value="janApr"
                  />
                </Form.Item>
              </div>
            </div>
          </div>
        </Form>
      </div>
      <Row>
        <Col span={24} className="tw-shadow-card tw-p-5 tw-rounded-md tw-mb-5">
          <Row gutter={20}>
            <Col span={4}>
              <span className="tw-font-medium">DATE</span>
            </Col>
            <Col span={12}>
              <span className="tw-font-medium">PACKAGE</span>
            </Col>
            <Col span={4}>
              <span className="tw-font-medium">NO. OF BOOKINGS</span>
            </Col>
            <Col span={4}>
              <span className="tw-font-medium">EARNINGS</span>
            </Col>
          </Row>
        </Col>

        {EARNING.map((d) => (
          <Col
            key={uniqueId()}
            span={24}
            className="tw-shadow-card tw-p-5 tw-rounded-md tw-mb-5"
          >
            <Row gutter={20}>
              <Col span={4} className="tw-flex tw-items-center">
                <span>{d.date}</span>
              </Col>
              <Col span={12}>
                <div className="tw-flex tw-gap-3">
                  <div className="tw-w-12">
                    <img src={d.package.image} alt="details card" />
                  </div>
                  <div>
                    <Tooltip title={d.package.title}>
                      <h5 className="tw-font-medium tw-mb-1 tw-text-ellipsis">
                        {d.package.title}
                      </h5>
                    </Tooltip>
                    <p className="tw-text-xs tw-text-secondary-color tw-font-medium">
                      {d.package.description}
                    </p>
                  </div>
                </div>
              </Col>
              <Col span={4} className="tw-flex tw-items-center">
                <span>{d.numberOfBooking}</span>
              </Col>
              <Col span={4} className="tw-flex tw-items-center">
                <span>{indCurrency(d.earning)}</span>
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default EarningTab;
