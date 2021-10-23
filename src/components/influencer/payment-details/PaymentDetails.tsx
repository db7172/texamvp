import { InfoCircleFilled } from "@ant-design/icons";
import { Col, Row } from "antd";
import { uniqueId, upperCase } from "lodash";
import { indCurrency } from "../../../utils/utils";

type DeductionTableDataType = {
  key: string;
  particulars: string;
  applAmt?: number;
  deduction?: number;
  amount: number;
};

type Props = {
  tripId: number;
  customerDetails: { name: string; number: number; city: string };
};

const PaymentDetails = ({ tripId, customerDetails }: Props) => {
  const deductionTableData: DeductionTableDataType[] = [
    {
      key: uniqueId(),
      particulars: "TT Commission @ 8.2",
      applAmt: 64000,
      amount: 3494.8,
    },
    {
      key: uniqueId(),
      particulars: "Rewards redeemed",
      amount: -1000,
    },
    {
      key: uniqueId(),
      particulars: "TCS @1%",
      applAmt: 64000,
      amount: 914,
    },
    {
      key: uniqueId(),
      particulars: "TDS @1%",
      applAmt: 64000,
      amount: 0,
    },
    {
      key: uniqueId(),
      particulars: "GST @5%",
      applAmt: 64000,
      amount: 0,
    },
  ];

  const mockPaymentReceived = [
    {
      key: uniqueId(),
      date: "26’Feb, 2020",
      source: "Texatrove",
      amount: 40000,
    },
    {
      key: uniqueId(),
      date: "28’Feb, 2020",
      source: "Texatrove",
      amount: 20000,
    },
  ];

  return (
    <Row gutter={[20, 40]}>
      <Col span={24}>
        <p>
          <span className="tw-font-medium tw-mr-1">Trip ID :</span>{" "}
          <span>{tripId}</span>
        </p>
        <div className="tw-flex">
          <p className="tw-font-medium">Customer Details :</p>
          <div className="tw-ml-2">
            <p>{customerDetails.name}</p>
            <p>+91 {customerDetails.number}</p>
            <p>{customerDetails.city}</p>
          </div>
        </div>
      </Col>
      <Col span={24}>
        <Row gutter={80}>
          <Col span={6}>
            <p className="tw-text-lg tw-mb-5">
              {upperCase("Amount to Texatrove by this")} (
              <span className="tw-text-blue-500">{tripId}</span>) ID
            </p>
            <p className="tw-text-lg">{upperCase(`Traveller Net Payment`)}</p>
            <p className="tw-text-4xl tw-mb-10">{indCurrency(64000)}</p>
            <p className="tw-text-lg tw-mb-5">
              {upperCase(`Traveller Payment Log`)}
            </p>
            <div>
              <div className="tw-mb-2">
                <p className="tw-text-lg">{indCurrency(34000)}</p>
                <p className="tw-text-secondary-color">
                  Transfered to Texatrove -{" "}
                  <span className="tw-font-medium">Jan’24, 2020</span>
                </p>
              </div>
              <div className="tw-mb-2">
                <p className="tw-text-lg">{indCurrency(30000)}</p>
                <p className="tw-text-secondary-color">
                  Transfered to Texatrove -{" "}
                  <span className="tw-font-medium">Jan’28, 2020</span>
                </p>
              </div>
            </div>
          </Col>
          <Col span={9}>
            <p className="tw-text-lg tw-mb-5">
              {upperCase(`Tax deduction for texatrove`)}
            </p>
            <div
              style={{ background: "#FFFFCD" }}
              className="tw-flex tw-justify-between tw-w-full tw-p-5 tw-rounded-lg tw-font-medium tw-mb-10"
            >
              <p>Net Reviable After Deduction</p>
              <p>{indCurrency(64000)}</p>
            </div>

            <p className="tw-text-lg tw-mb-5">{upperCase(`Trip Deduction`)}</p>

            <Row
              gutter={20}
              className="tw-border-2 tw-rounded-lg tw-border-lite-gray tw-pb-3"
            >
              <Col span={24}>
                <Row
                  gutter={20}
                  className="tw-py-3 tw-border-b-2 tw-border-lite-gray"
                >
                  <Col span={11}>
                    <p className="tw-text-base tw-font-medium">Particulars</p>
                  </Col>
                  <Col span={7}>
                    <p className="tw-text-base tw-font-medium tw-text-center">
                      Appl. Amount
                    </p>
                  </Col>
                  <Col span={6}>
                    <p className="tw-text-base tw-font-medium tw-text-right">
                      Amount
                    </p>
                  </Col>
                </Row>
              </Col>
              {deductionTableData.map((d) => (
                <Col span={24} key={d.key}>
                  <Row gutter={20}>
                    <Col
                      span={11}
                      className="tw-border-r-2 tw-border-lite-gray tw-pt-3"
                    >
                      <p className="">{d.particulars}</p>
                    </Col>
                    <Col
                      span={7}
                      className="tw-border-r-2 tw-border-lite-gray tw-pt-3"
                    >
                      <p className="tw-text-center">
                        {d.applAmt ? d.applAmt : "-"}
                      </p>
                    </Col>
                    <Col span={6} className="tw-pt-3">
                      <p className="tw-text-right">{d.amount}</p>
                    </Col>
                  </Row>
                </Col>
              ))}
            </Row>
            <div className="tw-flex tw-justify-between tw-w-full tw-font-medium tw-p-3">
              <p>Total Deduction</p>
              <p>
                {indCurrency(
                  deductionTableData.reduce(
                    (total, curr) => total + curr.amount,
                    0
                  )
                )}
              </p>
            </div>
          </Col>
          <Col span={9}>
            <p className="tw-text-lg tw-mb-5">
              {upperCase(`Amount released by texatrove to vendor`)}
            </p>
            <p className="tw-text-lg tw-mb-3">
              {upperCase(`Payments Recieved`)}
            </p>
            <Row
              gutter={20}
              className="tw-border-2 tw-rounded-lg tw-border-lite-gray tw-pb-3"
            >
              <Col span={24}>
                <Row
                  gutter={20}
                  className="tw-py-3 tw-border-b-2 tw-border-lite-gray"
                >
                  <Col span={11}>
                    <p className="tw-text-base tw-font-medium">Date</p>
                  </Col>
                  <Col span={7}>
                    <p className="tw-text-base tw-font-medium tw-text-center">
                      Source
                    </p>
                  </Col>
                  <Col span={6}>
                    <p className="tw-text-base tw-font-medium tw-text-right">
                      Amount
                    </p>
                  </Col>
                </Row>
              </Col>
              {mockPaymentReceived.map((d) => (
                <Col span={24} key={d.key}>
                  <Row gutter={20}>
                    <Col
                      span={11}
                      className="tw-border-r-2 tw-border-lite-gray tw-pt-3"
                    >
                      <p className="">{d.date}</p>
                    </Col>
                    <Col
                      span={7}
                      className="tw-border-r-2 tw-border-lite-gray tw-pt-3"
                    >
                      <p className="tw-text-center">{d.source}</p>
                    </Col>
                    <Col span={6} className="tw-pt-3">
                      <p className="tw-text-right">{d.amount}</p>
                    </Col>
                  </Row>
                </Col>
              ))}
            </Row>
            <div className="tw-flex tw-justify-between tw-w-full tw-font-medium tw-p-3 tw-mb-5">
              <p>Total Deduction</p>
              <p>
                {indCurrency(
                  mockPaymentReceived.reduce(
                    (total, curr) => total + curr.amount,
                    0
                  )
                )}
              </p>
            </div>
            <p className="tw-text-lg tw-mb-3">
              {upperCase(`Payments on hold`)}
            </p>
            <p className="tw-text-2xl tw-mb-3">{indCurrency(20000)}</p>
            <div className="tw-flex">
              <InfoCircleFilled className="tw-text-secondary-color tw-mr-2" />
              <p className="tw-text-xs tw-text-secondary-color">
                This payment will be released within 3 working days
              </p>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default PaymentDetails;
