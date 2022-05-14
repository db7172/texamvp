import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Col, DatePicker, Form, Input, List, Modal, Row } from "antd";
import { debounce, isEmpty, uniqueId } from "lodash";
import moment from "moment";
import { useState } from "react";
import { onKeyDownEvent } from "../../pages/influencer/form/formUtils";
import { paginationSetting } from "../constant/common.cont";
import { mockEarning } from "./mockEarningData";

let addDepartureDateField: {
  (): void;
  (defaultValue?: any, insertIndex?: number | undefined): void;
};

const VendorEarnings = () => {
  const [form] = Form.useForm();
  const [activeData, setActiveData] = useState<any>();
  const [showModal, setShowModal] = useState(false);

  const handleViewMoreClick = (data: any) => {
    setActiveData(data);
    setShowModal(true);
  };

  const handleModalCancel = () => {
    setShowModal(false);
    setActiveData(undefined);
    form.resetFields();
  };

  const handleValueChange = () => {
    const {
      totalPayment,
      ttCommission,
      tcsInPer,
      tdsInPer,
      gstInPer,
      rewards,
      paymentHistory,
    } = form.getFieldsValue();
    const commission = (totalPayment * ttCommission) / 100;
    const tcs = (totalPayment * tcsInPer) / 100;
    const tds = (totalPayment * tdsInPer) / 100;
    const gst = (totalPayment * gstInPer) / 100;
    const totalPaidAmt = paymentHistory.reduce((pre: number, curr: any) => {
      return pre + +curr.amount;
    }, 0);
    const totalDeduction = +commission + +tcs + +tds + +gst + +rewards;
    const netPayment = +totalPayment - +totalDeduction;
    const unPaidAmt = +netPayment - +totalPaidAmt;

    form.setFieldsValue({
      ttCommissionInRs: commission,
      tcsInRs: tcs,
      tdsInRs: tds,
      gstInRs: gst,
      rewards,
      deduction: totalDeduction,
      netPayable: netPayment,
      totalDue: unPaidAmt,
      paidAmt: totalPaidAmt,
    });
  };

  const debounceChange = debounce(handleValueChange, 1000);

  const onSubmit = (value: any) => {
    console.log(value);
    handleModalCancel();
  };

  return (
    <div className="page-layout">
      <div className="home-cover">
        <List
          itemLayout="vertical"
          size="large"
          pagination={paginationSetting}
          header={
            <Row gutter={24} className="tw-px-6">
              <Col span={4}>Name</Col>
              <Col span={4}>Trip ID</Col>
              <Col span={4}>Total Payment</Col>
              <Col span={4}>Paid</Col>
              <Col span={4}>Unpaid</Col>
              <Col span={4}>Action</Col>
            </Row>
          }
          dataSource={mockEarning}
          renderItem={(item: any, i) => (
            <List.Item key={i}>
              <Row gutter={24}>
                <Col span={4} className="tw-items-center tw-flex">
                  {item.name}
                </Col>
                <Col span={4} className="tw-items-center tw-flex">
                  {item.id}
                </Col>
                <Col span={4} className="tw-items-center tw-flex">
                  {item.totalPayment}
                </Col>
                <Col span={4} className="tw-items-center tw-flex">
                  {item?.paid || 0}
                </Col>
                <Col span={4} className="tw-items-center tw-flex">
                  {item?.unpaid || 0}
                </Col>
                <Col span={4}>
                  <Button
                    className="tw-texa-button tw-m-0"
                    onClick={() => handleViewMoreClick(item)}
                  >
                    View more
                  </Button>
                </Col>
              </Row>
            </List.Item>
          )}
        />
        <Modal
          title="Earning statement"
          visible={showModal}
          width={650}
          footer={null}
          className="tw-top-5 no-padding-modal"
          onCancel={handleModalCancel}
        >
          {activeData && (
            <Form
              form={form}
              name="earningForm"
              onKeyDown={onKeyDownEvent}
              onFinish={onSubmit}
              initialValues={{
                totalPayment: activeData.totalPayment,
                ttCommission: activeData?.deductions?.ttCommission || 0,
                tcsInPer: activeData?.deductions?.tcs || 0,
                tdsInPer: activeData?.deductions?.tds || 0,
                gstInPer: activeData?.deductions?.gst || 0,
                rewards: activeData?.deductions?.rewards || 0,
                totalDue: activeData?.unpaid || 0,
                netPayable: activeData?.toalPayable || 0,
                deduction: activeData?.deduction || 0,
                paidAmt: activeData?.paid || 0,
                nextPaymentDate: !isEmpty(activeData?.nextPaymentDate)
                  ? moment(activeData?.nextPaymentDate, "DD/MM/YYYY")
                  : undefined,
                paymentHistory:
                  activeData?.paymentHistory &&
                  activeData?.paymentHistory?.length
                    ? activeData?.paymentHistory?.map((d: any) => ({
                        ...d,
                        date: moment(d.date, "DD/MM/YYYY"),
                      }))
                    : [],

                ttCommissionInRs:
                  (activeData?.totalPayment *
                    activeData?.deductions?.ttCommission) /
                  100,
                tcsInRs:
                  (activeData?.totalPayment * activeData?.deductions?.tcs) /
                  100,
                tdsInRs:
                  (activeData?.totalPayment * activeData?.deductions?.tds) /
                  100,
                gstInRs:
                  (activeData?.totalPayment * activeData?.deductions?.gst) /
                  100,
              }}
              layout="vertical"
              autoComplete="off"
            >
              <div
                style={{ height: 700 }}
                className="tw-overflow-y-auto tw-py-3 tw-px-7"
              >
                <Row gutter={[10, 10]}>
                  <Col span={24}>
                    <Form.Item label="Total Payment" name="totalPayment">
                      <Input
                        type="number"
                        className="tw-rounded-md"
                        placeholder="Total Payment"
                        onChange={handleValueChange}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <p className="tw-mb-5 tw-text-lg tw-font-medium">
                      Deductions
                    </p>
                    <Row gutter={10}>
                      <Col span={12}>
                        <Form.Item
                          label="Texatrove commission in %"
                          name="ttCommission"
                        >
                          <Input
                            type="number"
                            className="tw-rounded-md"
                            onChange={handleValueChange}
                            placeholder="Texatrove commission in %"
                          />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item
                          label="Texatrove commission in Rs."
                          name="ttCommissionInRs"
                        >
                          <Input
                            type="number"
                            disabled
                            className="tw-rounded-md"
                            placeholder="Texatrove commission in Rs."
                          />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item label="TCS in %" name="tcsInPer">
                          <Input
                            type="number"
                            className="tw-rounded-md"
                            onChange={handleValueChange}
                            placeholder="TCS in %"
                          />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item label="TCS in Rs." name="tcsInRs">
                          <Input
                            type="number"
                            disabled
                            className="tw-rounded-md"
                            placeholder="TCS in Rs."
                          />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item label="TDS in %" name="tdsInPer">
                          <Input
                            type="number"
                            className="tw-rounded-md"
                            onChange={handleValueChange}
                            placeholder="TDS in %"
                          />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item label="TDS in Rs." name="tdsInRs">
                          <Input
                            type="number"
                            disabled
                            className="tw-rounded-md"
                            placeholder="TDS in Rs."
                          />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item label="GST in %" name="gstInPer">
                          <Input
                            type="number"
                            className="tw-rounded-md"
                            onChange={handleValueChange}
                            placeholder="gst in %"
                          />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item label="GST in Rs." name="gstInRs">
                          <Input
                            type="number"
                            disabled
                            className="tw-rounded-md"
                            placeholder="GST in Rs."
                          />
                        </Form.Item>
                      </Col>
                      <Col span={24}>
                        <Form.Item label="Rewards" name="rewards">
                          <Input
                            type="number"
                            className="tw-rounded-md"
                            placeholder="Rewards"
                            onChange={handleValueChange}
                          />
                        </Form.Item>
                      </Col>
                      <Col span={24}>
                        <Form.Item label="Total Deduction" name="deduction">
                          <Input
                            disabled
                            type="number"
                            className="tw-rounded-md"
                            placeholder="Total Deduction"
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                  </Col>
                  <Col span={24}>
                    <Form.Item
                      label="Net Payable After Deduction"
                      name="netPayable"
                    >
                      <Input
                        disabled
                        type="number"
                        className="tw-rounded-md"
                        placeholder="Rewards"
                      />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item className="tw-mb-5">
                      <div className="tw-flex tw-justify-between">
                        <h3 className="tw-text-base tw-font-medium">
                          Payment History
                        </h3>
                        <p
                          className="tw-flex tw-items-center tw-gap-2 tw-cursor-pointer tw-text-blue-500 tw-text-base"
                          onClick={() => addDepartureDateField()}
                        >
                          <PlusOutlined />
                          <span>Add</span>
                        </p>
                      </div>
                    </Form.Item>
                    <Form.List name="paymentHistory">
                      {(fields, { add, remove }) => {
                        addDepartureDateField = add;
                        return (
                          <>
                            <div className="tw-flex tw-flex-wrap">
                              {fields.map((field) => (
                                <div
                                  className="tw-flex tw-items-center tw-gap-5 tw-mb-5"
                                  key={uniqueId("date")}
                                >
                                  <Form.Item
                                    {...field}
                                    label="Payment Date"
                                    key={uniqueId("date")}
                                    name={[field.name, "date"]}
                                    fieldKey={[field.fieldKey, "date"]}
                                    className="tw-w-11/12 tw-m-0"
                                  >
                                    <DatePicker
                                      className="tw-rounded-md tw-w-full"
                                      format="DD/MM/YYYY"
                                    />
                                  </Form.Item>
                                  <Form.Item
                                    {...field}
                                    label="Amount"
                                    key={uniqueId("amount")}
                                    name={[field.name, "amount"]}
                                    fieldKey={[field.fieldKey, "amount"]}
                                    className="tw-w-11/12 tw-m-0"
                                  >
                                    <Input
                                      className="tw-rounded-md tw-w-full"
                                      type="number"
                                      placeholder="Amount"
                                      onChange={debounceChange}
                                    />
                                  </Form.Item>
                                  <Form.Item
                                    {...field}
                                    label="Transection Id"
                                    key={uniqueId("transectionId")}
                                    name={[field.name, "transectionId"]}
                                    fieldKey={[field.fieldKey, "transectionId"]}
                                    className="tw-w-11/12 tw-m-0"
                                  >
                                    <Input
                                      className="tw-rounded-md tw-w-full"
                                      placeholder="Transection Id"
                                    />
                                  </Form.Item>

                                  <MinusCircleOutlined
                                    className="tw-text-lg tw-text-secondary-color"
                                    onClick={() => remove(field.name)}
                                  />
                                </div>
                              ))}
                            </div>
                          </>
                        );
                      }}
                    </Form.List>
                  </Col>
                  <Col span={24}>
                    <Row gutter={10}>
                      <Col span={12}>
                        <Form.Item
                          label="Next Payment Date"
                          name="nextPaymentDate"
                        >
                          <DatePicker
                            className="tw-rounded-md tw-w-full"
                            format="DD/MM/YYYY"
                          />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item label="Total Due" name="totalDue">
                          <Input
                            disabled
                            type="number"
                            className="tw-rounded-md"
                            placeholder="Total due amount"
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                  </Col>
                  <Col span={24}>
                    <div className="tw-flex tw-gap-5">
                      <div className="tw-w-6/12">
                        <Button
                          className="tw-w-full border-btn tw-rounded-lg tw-m-0"
                          onClick={handleModalCancel}
                        >
                          Cancel
                        </Button>
                      </div>

                      <div className="tw-w-6/12">
                        <Button
                          type="default"
                          className="tw-texa-button tw-w-full tw-m-0"
                          htmlType="submit"
                        >
                          Submit
                        </Button>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Form>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default VendorEarnings;
