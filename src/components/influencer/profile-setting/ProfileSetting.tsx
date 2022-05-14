import { EditOutlined } from "@ant-design/icons";
import { Button, Divider, Form, Input, Modal, Select } from "antd";
import { useEffect, useState } from "react";
import firebase from "../../../firebase";

const userDetails = {
  mobileNo: "+91-1234567890",
  landlineNo: "7752768858",
  address:
    "Ganga Nagar, Maharaja Coloby, JP Road, Agra, Uttar Pradesh 282001, India",
};

const bankData = {
  bankName: "Enter your bank name",
  bankAccountNO: 123456789010,
  ifscCode: "Enter your ifsc code",
};

const ProfileSetting = () => {
  const [userForm] = Form.useForm();
  const [bankForm] = Form.useForm();
  const [gstForm] = Form.useForm();

  const [userData, setUserData] = useState(userDetails);
  const [details, setDetails] = useState([]) as any;
  const [bankDetails, setBankDetails] = useState(bankData);
  const [gstDetail, setGstDetail] = useState(2745638964522);

  const [showUserModal, setShowUserModal] = useState(false);
  const [showBankModal, setShowBankModal] = useState(false);
  const [showGstModal, setShowGstModal] = useState(false);

  const handleUserModalCancel = () => {
    setShowUserModal(false);
  };

  const handleShowUserModal = () => {
    setShowUserModal(true);
  };

  const handleShowBankModal = () => {
    setShowBankModal(true);
  };

  const handleBankModalCancel = () => {
    setShowBankModal(false);
  };

  const handleShowGstDetailModal = () => {
    setShowGstModal(true);
  };

  const handleGstDetailModalCancel = () => {
    setShowGstModal(false);
  };

  const handleUserDetailsFormSubmit = (value: any) => {
    console.log(value);
    const changedData = {
      mobileNo: `+${value.prefix}${value.mobileNo}`,
      landlineNo: value.landlineNo,
      address: value.address,
    };
    setUserData(changedData);
    console.log(changedData.landlineNo);
    let user = firebase.auth().currentUser;
    if (user) {
      firebase.firestore().collection("venders").doc(user.uid).set(
        {
          landlineNo: value.landlineNo,
          address: value.address,
        },
        { merge: true }
      );
    }
    handleUserModalCancel();
    userForm.resetFields();
    window.location.reload();
  };

  const handleBankDetailsFormSubmit = (value: any) => {
    console.log(value);
    let user = firebase.auth().currentUser;
    if (user) {
      firebase.firestore().collection("venders").doc(user.uid).set(
        {
          accountName: value.bankName,
          accountNumber: value.bankAccountNO,
          ifscCode: value.ifscCode,
        },
        { merge: true }
      );
    }
    setBankDetails(value);
    handleBankModalCancel();
    window.location.reload();
  };

  const handleGstDetailFormSubmit = (value: any) => {
    console.log(value);
    let user = firebase.auth().currentUser;
    if (user) {
      firebase.firestore().collection("venders").doc(user.uid).set(
        {
          gstNumber: value.gstNo,
        },
        { merge: true }
      );
    }
    setGstDetail(value.gstNo);
    handleGstDetailModalCancel();
    window.location.reload();
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        firebase
          .firestore()
          .collection("venders")
          .doc(user.uid)
          .get()
          .then((doc) => {
            if (doc.exists) {
              setDetails(doc.data());
            }
          });
      }
    });
  }, []);

  console.log(details);

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

  return (
    <div>
      <p className="tw-text-2xl tw-font-medium">Profile Settings</p>
      <Divider className="tw-mb-10" />
      <div className="tw-flex tw-justify-between tw-w-full tw-mb-5">
        <p className="tw-w-4/12 tw-text-base tw-font-medium">Mobile Number</p>
        <div className="tw-w-8/12 tw-flex tw-justify-between">
          <p className="tw-w-10/12 tw-text-secondary-color tw-text-base">
            {details.number}
          </p>
          {/* <Button
            className="tw-w-2/12 tw-m-0 tw-text-secondary-color "
            type="text"
            icon={<EditOutlined />}
            size="small"
            onClick={handleShowUserModal}
          /> */}
        </div>
      </div>
      <div className="tw-flex tw-justify-between tw-w-full tw-mb-5">
        <p className="tw-w-4/12 tw-text-base tw-font-medium">Landline Number</p>
        <div className="tw-w-8/12 tw-flex tw-justify-between">
          <p className="tw-w-10/12 tw-text-secondary-color tw-text-base">
            {details.landlineNo
              ? details.landlineNo
              : "Update your landline number"}
          </p>
          <Button
            className="tw-w-2/12 tw-m-0 tw-text-secondary-color "
            type="text"
            icon={<EditOutlined />}
            size="small"
            onClick={handleShowUserModal}
          />
        </div>
      </div>
      <div className="tw-flex tw-justify-between tw-w-full tw-mb-5">
        <p className="tw-w-4/12 tw-text-base tw-font-medium">Address</p>
        <div className="tw-w-8/12 tw-flex tw-justify-between">
          <p className="tw-w-10/12 tw-text-secondary-color tw-text-base">
            {details.address ? details.address : "Update your address"}
          </p>
          <Button
            className="tw-w-2/12 tw-m-0 tw-text-secondary-color "
            type="text"
            icon={<EditOutlined />}
            size="small"
            onClick={handleShowUserModal}
          />
        </div>
      </div>

      <p className="tw-text-2xl tw-font-medium tw-mt-10">Bank Infomation</p>
      <Divider className="tw-mb-10" />

      <div className="tw-flex tw-justify-between tw-w-full tw-mb-5">
        <p className="tw-w-4/12 tw-text-base tw-font-medium">Bank Name</p>
        <div className="tw-w-8/12 tw-flex tw-justify-between">
          <p className="tw-w-10/12 tw-text-secondary-color tw-text-base">
            {details.accountName}
          </p>
          <Button
            className="tw-w-2/12 tw-m-0 tw-text-secondary-color "
            type="text"
            icon={<EditOutlined />}
            size="small"
            onClick={handleShowBankModal}
          />
        </div>
      </div>

      <div className="tw-flex tw-justify-between tw-w-full tw-mb-5">
        <p className="tw-w-4/12 tw-text-base tw-font-medium">
          Bank Account Number
        </p>
        <div className="tw-w-8/12 tw-flex tw-justify-between">
          <p className="tw-w-10/12 tw-text-secondary-color tw-text-base">
            {details.accountNumber}
          </p>
          <Button
            className="tw-w-2/12 tw-m-0 tw-text-secondary-color "
            type="text"
            icon={<EditOutlined />}
            size="small"
            onClick={handleShowBankModal}
          />
        </div>
      </div>

      <div className="tw-flex tw-justify-between tw-w-full tw-mb-5">
        <p className="tw-w-4/12 tw-text-base tw-font-medium">IFSC code</p>
        <div className="tw-w-8/12 tw-flex tw-justify-between">
          <p className="tw-w-10/12 tw-text-secondary-color tw-text-base">
            {details.ifscCode}
          </p>
          <Button
            className="tw-w-2/12 tw-m-0 tw-text-secondary-color "
            type="text"
            icon={<EditOutlined />}
            size="small"
            onClick={handleShowBankModal}
          />
        </div>
      </div>

      <p className="tw-text-2xl tw-font-medium tw-mt-10">GST Infomation</p>
      <Divider className="tw-mb-10" />

      <div className="tw-flex tw-justify-between tw-w-full tw-mb-5">
        <p className="tw-w-4/12 tw-text-base tw-font-medium">GST Number</p>
        <div className="tw-w-8/12 tw-flex tw-justify-between">
          <p className="tw-w-10/12 tw-text-secondary-color tw-text-base">
            {details.gstNumber}
          </p>
          <Button
            className="tw-w-2/12 tw-m-0 tw-text-secondary-color "
            type="text"
            icon={<EditOutlined />}
            size="small"
            onClick={handleShowGstDetailModal}
          />
        </div>
      </div>

      <Modal
        visible={showUserModal}
        footer={null}
        onCancel={handleUserModalCancel}
      >
        <Form
          form={userForm}
          name="userDetails"
          initialValues={
            details.number
              ? {
                  ...details,
                  mobileNo: details.number?.slice(3, details.number.length),
                  prefix: details.number?.slice(1, 3),
                }
              : { prefix: userData.mobileNo.slice(3) }
          }
          size="large"
          layout="vertical"
          onFinish={handleUserDetailsFormSubmit}
        >
          <Form.Item
            label="Mobile Number"
            className="tw-rounded-lg"
            name="mobileNo"
            rules={[
              { required: true, message: "Please input your number!" },
              {
                max: 10,
                min: 10,
                message: "The input is not valid mobile number!",
              },
            ]}
          >
            <Input
              disabled
              addonBefore={prefixSelector}
              className="tw-rounded-lg"
              type="tel"
              pattern="[0-9]*"
              placeholder="Enter Your Phone Number"
            />
          </Form.Item>

          <Form.Item
            label="Landline Number"
            className="tw-rounded-lg"
            name="landlineNo"
            rules={[
              {
                max: 10,
                min: 10,
                message: "The input is not valid number!",
              },
            ]}
          >
            <Input
              className="tw-rounded-lg"
              type="tel"
              pattern="[0-9]*"
              placeholder="Enter Your Landline Number"
            />
          </Form.Item>

          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true, message: "Please input address!" }]}
          >
            <Input.TextArea
              rows={3}
              placeholder="Enter Your Address."
              className="tw-rounded-lg"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="default"
              className="tw-w-full tw-texa-button"
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        visible={showBankModal}
        footer={null}
        onCancel={handleBankModalCancel}
      >
        <Form
          form={bankForm}
          name="bankDetails"
          initialValues={
            details
              ? {
                  bankName: details.accountName,
                  bankAccountNO: details.accountNumber,
                  ifscCode: details.ifscCode,
                }
              : bankData
          }
          size="large"
          layout="vertical"
          onFinish={handleBankDetailsFormSubmit}
        >
          <Form.Item
            label="Bank Name"
            className="tw-rounded-lg"
            name="bankName"
            rules={[{ required: true, message: "Please Enter Bank Name!" }]}
          >
            <Input
              className="tw-rounded-lg"
              placeholder="Enter Your Bank Name."
            />
          </Form.Item>

          <Form.Item
            label="Bank Account Number"
            className="tw-rounded-lg"
            name="bankAccountNO"
            rules={[
              { required: true, message: "Please Eenter Account Number!" },
            ]}
          >
            <Input
              className="tw-rounded-lg"
              type="tel"
              pattern="[0-9]*"
              placeholder="Enter Your Bank Account Number"
            />
          </Form.Item>

          <Form.Item
            label="IFSC code"
            className="tw-rounded-lg"
            name="ifscCode"
            rules={[{ required: true, message: "Please Enter IFSC Code!" }]}
          >
            <Input
              className="tw-rounded-lg"
              placeholder="Enter Your Bank IFSC Code"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="default"
              className="tw-w-full tw-texa-button"
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        visible={showGstModal}
        footer={null}
        onCancel={handleGstDetailModalCancel}
      >
        <Form
          form={gstForm}
          name="gstDetails"
          initialValues={
            details ? { gstNo: details.gstNumber } : { gstNo: gstDetail }
          }
          size="large"
          layout="vertical"
          onFinish={handleGstDetailFormSubmit}
        >
          <Form.Item
            label="GST Number"
            className="tw-rounded-lg"
            name="gstNo"
            rules={[{ required: true, message: "Please Enter GST Number!" }]}
          >
            <Input
              className="tw-rounded-lg"
              type="tel"
              pattern="[0-9]*"
              placeholder="Enter Your GST Account Number"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="default"
              className="tw-w-full tw-texa-button"
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ProfileSetting;
