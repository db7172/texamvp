import { Button, Col, Form, Input, List, Modal, Row } from "antd";
import React, { useEffect, useState } from "react";
import { paginationSetting } from "../constant/common.cont";
// import panCardImg from "../../assets/png/influencer/panMock.png";
// import aadharCardImg from "../../assets/png/influencer/aadharMock.png";
import { onKeyDownEvent } from "../../pages/influencer/form/formUtils";
import firebase from "../../firebase";

// const DUMMY_USER = {
//   name: "Person Name",
//   number: "+911234567890",
//   email: "person.name@gmail.com",
//   activityInfo: {
//     companyName: "Dummy company",
//     type: "activity",
//     country: "India",
//     state: "Maharashtra",
//     city: "Mumbai",
//     operationSince: 1999,
//   },
//   kyc: {
//     pan: "ABCD123C",
//     panPhoto: [panCardImg, panCardImg],
//     aadhar: "1234-5678-9101-1112",
//     aadharPhoto: [aadharCardImg, aadharCardImg],
//   },
//   bankDetails: {
//     acName: "Person Name",
//     number: 12345678900987,
//     ifscCode: "CITI00001",
//     cancelCheck:
//       "https://qph.fs.quoracdn.net/main-qimg-ff42a46cc4109fe3f20258b176828485-lq",
//   },
// };

const VendorApproval = () => {
  const [data, setData] = useState<any[]>();
  const [activeData, setActiveData] = useState<any>();
  const [isModalActive, setIsModalActive] = useState(false);
  const [isRejected, setIsRejected] = useState(false);

  useEffect(() => {
    // const dummyData: any[] = Array(20)
    //   .fill(null)
    //   .map(() => DUMMY_USER as any);
    // setData(dummyData);
    firebase
      .firestore()
      .collection("venders")
      .get()
      .then((querySnap) => {
        setData(
          querySnap.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
  }, []);

  const handleClick = (id: any) => {
    let active = data?.filter((data) => data.id === id);
    if (active) {
      setActiveData(active[0]);
      setIsModalActive(true);
    }
  };

  const handleModalCancel = () => {
    setIsModalActive(false);
    setActiveData(undefined);
  };

  const handleApprove = () => {
    handleModalCancel();
  };

  const handleRejectionConfirmation = (value: any) => {
    setIsRejected(false);
    handleModalCancel();
  };

  const showUserInfo = (info: { key: string; value: string }[]) => {
    return info.map((d) => (
      <Col span={12}>
        <div className="tw-flex tw-gap-2">
          <p>{d.key}</p>
          <p className="tw-text-secondary-color">{d.value}</p>
        </div>
      </Col>
    ));
  };

  return (
    <>
      <List
        itemLayout="vertical"
        size="large"
        pagination={paginationSetting}
        header={
          <Row gutter={20} className="tw-px-6">
            <Col span={7}>Name</Col>
            <Col span={6}>Number</Col>
            <Col span={7}>Email</Col>
            <Col span={4}>Action</Col>
          </Row>
        }
        dataSource={data}
        renderItem={(item) => (
          <List.Item key={item.title}>
            <Row gutter={20}>
              <Col span={7} className="tw-items-center tw-flex">
                {item?.data.name}
              </Col>
              <Col span={6} className="tw-items-center tw-flex">
                {item?.data.number}
              </Col>
              <Col span={7} className="tw-items-center tw-flex">
                {item?.data.email}
              </Col>
              <Col span={4} className="tw-items-center tw-flex">
                <Button
                  type="default"
                  className="tw-texa-button tw-m-0"
                  onClick={() => {
                    handleClick(item.id);
                  }}
                >
                  View Detail
                </Button>
              </Col>
            </Row>
          </List.Item>
        )}
      />

      <Modal
        title="Vender details"
        width={650}
        visible={isModalActive}
        onCancel={handleModalCancel}
        footer={null}
        className="tw-top-5 no-padding-modal"
      >
        <div
          style={{ height: 700 }}
          className="tw-overflow-y-auto tw-py-3 tw-px-7"
        >
          {activeData && (
            <>
              <p className="tw-text-2xl tw-font-medium ">Personal Details</p>
              <Row gutter={[10, 10]} className="tw-mt-5">
                {showUserInfo([
                  {
                    key: "Name",
                    value: activeData.data.name,
                  },
                  {
                    key: "Mobile",
                    value: activeData.data.number,
                  },
                  {
                    key: "Email",
                    value: activeData.data.email,
                  },
                  {
                    key: "Company Name",
                    value: activeData.data.companyName,
                  },
                  {
                    key: "Service Type",
                    value: activeData.data.activity,
                  },
                  {
                    key: "Country",
                    value: activeData.data.country,
                  },
                  {
                    key: "State",
                    value: activeData.data.state,
                  },
                  {
                    key: "City",
                    value: activeData.data.city,
                  },
                  {
                    key: "Operating Since",
                    value: activeData.data.operationSince,
                  },
                ])}
              </Row>
              <p className="tw-text-2xl tw-font-medium tw-mt-10">
                KYC Information
              </p>
              <Row gutter={[10, 10]} className="tw-mt-5">
                <Col span={24}>
                  <div className="tw-flex tw-gap-2">
                    <p>Pan number: </p>
                    <p className="tw-text-secondary-color">
                      {activeData.data.panCard}
                    </p>
                  </div>
                </Col>

                {activeData.data.panCardPhoto?.map((d: any, i: number) => (
                  <Col span={12} key={i}>
                    <img className="tw-w-60" src={d} alt="img" />
                  </Col>
                ))}
              </Row>
              <Row gutter={[10, 10]} className="tw-mt-3">
                <Col span={24}>
                  <div className="tw-flex tw-gap-2">
                    <p>Aadhar number: </p>
                    <p className="tw-text-secondary-color">
                      {activeData.data.aadharCard}
                    </p>
                  </div>
                </Col>

                {activeData.data.aadharCardPhoto?.map((d: any, i: number) => (
                  <Col span={12} key={i}>
                    <img className="tw-w-60" src={d} alt="img" />
                  </Col>
                ))}
              </Row>

              <p className="tw-text-2xl tw-font-medium tw-mt-10">
                Bank Details
              </p>

              <Row gutter={[10, 10]} className="tw-mt-5">
                {showUserInfo([
                  {
                    key: "Bank Name:",
                    value: activeData.data.accountName,
                  },
                  {
                    key: "Account Number:",
                    value: activeData.data.accountNumber,
                  },
                  {
                    key: "IFSC Code:",
                    value: activeData.data.ifscCode,
                  },
                ])}
                <Col span={24}>
                  <img
                    className="tw-w-80"
                    src={activeData.data.cancelCheck[0]}
                    alt="img"
                  />
                </Col>

                <Col span={24}>
                  <div className="tw-flex tw-gap-5 tw-mt-10">
                    <div className="tw-w-6/12">
                      <Button
                        className="tw-w-full border-btn tw-rounded-lg tw-m-0"
                        onClick={() => {
                          setIsRejected(true);
                        }}
                      >
                        Reject
                      </Button>
                    </div>

                    <div className="tw-w-6/12">
                      <Button
                        type="default"
                        className="tw-texa-button tw-w-full tw-m-0"
                        onClick={handleApprove}
                      >
                        Approve
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </>
          )}
        </div>

        {isRejected && (
          <Modal
            title="Rejection reason"
            visible={isRejected}
            footer={null}
            onCancel={() => setIsRejected(false)}
          >
            <Form
              name="rejectionForm"
              onKeyDown={onKeyDownEvent}
              onFinish={handleRejectionConfirmation}
              layout="vertical"
              autoComplete="off"
            >
              <Form.Item
                name="reason"
                label="Reason"
                className="tw-mb-5"
                rules={[
                  {
                    required: true,
                    message: "Please enter rejection reason!",
                  },
                ]}
              >
                <Input.TextArea
                  rows={6}
                  className="tw-rounded-md"
                  placeholder="Rejection Reason"
                />
              </Form.Item>

              <div className="tw-flex tw-gap-5">
                <div className="tw-w-6/12">
                  <Button
                    className="tw-w-full border-btn tw-rounded-lg tw-m-0"
                    onClick={() => {
                      setIsRejected(false);
                    }}
                  >
                    Cancel
                  </Button>
                </div>

                <div className="tw-w-6/12">
                  <Button
                    type="default"
                    htmlType="submit"
                    className="tw-texa-button tw-w-full tw-m-0"
                  >
                    Reject
                  </Button>
                </div>
              </div>
            </Form>
          </Modal>
        )}
      </Modal>
    </>
  );
};

export default VendorApproval;
