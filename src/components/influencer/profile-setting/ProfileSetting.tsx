import { EditOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal, Select } from "antd";
import { useState } from "react";

const userDetails = {
  mobileNo: "+91-1234567890",
  landlineNo: "7752768858",
  address:
    "Ganga Nagar, Maharaja Coloby, JP Road, Agra, Uttar Pradesh 282001, India",
  bankAccountNO: 123456789010,
};

const ProfileSetting = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(userDetails);
  const [showUserModal, setShowUserModal] = useState(false);

  const handleUserModalCancel = () => {
    setShowUserModal(false);
  };

  const handleShowModal = () => {
    setShowUserModal(true);
  };

  const handleUserDetailsFormSubmit = (value: any) => {
    console.log(value);
    const changedData = {
      mobileNo: `+${value.prefix}-${value.mobileNo}`,
      landlineNo: value.landlineNo,
      address: value.address,
      bankAccountNO: value.bankAccountNO,
    };
    setData(changedData);
    setShowUserModal(false);
    form.resetFields();
  };

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
      <p className="tw-text-2xl tw-font-medium tw-mb-10">Profile Settings</p>
      <div className="tw-flex tw-justify-between tw-w-full tw-mb-5">
        <p className="tw-w-4/12 tw-text-base tw-font-medium">Mobile Number</p>
        <div className="tw-w-8/12 tw-flex tw-justify-between">
          <p className="tw-w-10/12 tw-text-secondary-color tw-text-base">
            {data.mobileNo}
          </p>
          <Button
            className="tw-w-2/12 tw-m-0 tw-text-secondary-color "
            type="text"
            icon={<EditOutlined />}
            size="small"
            onClick={handleShowModal}
          />
        </div>
      </div>
      <div className="tw-flex tw-justify-between tw-w-full tw-mb-5">
        <p className="tw-w-4/12 tw-text-base tw-font-medium">Landline Number</p>
        <div className="tw-w-8/12 tw-flex tw-justify-between">
          <p className="tw-w-10/12 tw-text-secondary-color tw-text-base">
            {data.landlineNo}
          </p>
          <Button
            className="tw-w-2/12 tw-m-0 tw-text-secondary-color "
            type="text"
            icon={<EditOutlined />}
            size="small"
            onClick={handleShowModal}
          />
        </div>
      </div>
      <div className="tw-flex tw-justify-between tw-w-full tw-mb-5">
        <p className="tw-w-4/12 tw-text-base tw-font-medium">Address</p>
        <div className="tw-w-8/12 tw-flex tw-justify-between">
          <p className="tw-w-10/12 tw-text-secondary-color tw-text-base">
            {data.address}
          </p>
          <Button
            className="tw-w-2/12 tw-m-0 tw-text-secondary-color "
            type="text"
            icon={<EditOutlined />}
            size="small"
            onClick={handleShowModal}
          />
        </div>
      </div>
      <div className="tw-flex tw-justify-between tw-w-full tw-mb-5">
        <p className="tw-w-4/12 tw-text-base tw-font-medium">
          Bank Account Number
        </p>
        <div className="tw-w-8/12 tw-flex tw-justify-between">
          <p className="tw-w-10/12 tw-text-secondary-color tw-text-base">
            {data.bankAccountNO}
          </p>
          <Button
            className="tw-w-2/12 tw-m-0 tw-text-secondary-color "
            type="text"
            icon={<EditOutlined />}
            size="small"
            onClick={handleShowModal}
          />
        </div>
      </div>
      <Modal
        visible={showUserModal}
        footer={null}
        onCancel={handleUserModalCancel}
      >
        <Form
          form={form}
          name="userDetails"
          initialValues={{
            ...data,
            mobileNo: data.mobileNo.split("-")[1],
            prefix: data.mobileNo.slice(1, 3),
          }}
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
              addonBefore={prefixSelector}
              className="tw-rounded-lg"
              type="number"
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
              type="number"
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

          <Form.Item
            label="Bank Account Number"
            className="tw-rounded-lg"
            name="bankAccountNO"
            rules={[{ required: true, message: "Please Account Number!" }]}
          >
            <Input
              className="tw-rounded-lg"
              type="number"
              placeholder="Enter Your Bank Account Number"
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
