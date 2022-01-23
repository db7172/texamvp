import { Button, Form, Input, Modal, Select } from "antd";
import { useForm } from "antd/lib/form/Form";
import { useState } from "react";
import icon from "../../../assets/svg/telephone_gray.svg";
import firebase from "../../../firebase";

const RequestCallbackModal = ({
  handleSubmit,
}: {
  handleSubmit: (data: any) => void;
}) => {
  const [form] = useForm();
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

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

  const onSubmit = (value: any) => {
    handleSubmit(value);
    firebase
      .firestore()
      .collection("requests")
      .add(value)
      .then(() => {
        setShowConfirmationModal(true);
        form.resetFields();
      });
  };

  return (
    <div>
      <p className="tw-text-center tw-text-xl tw-font-medium tw-mt-5">
        Request for call back
      </p>
      <p className="tw-text-secondary-color tw-w-1/2 tw-mx-auto tw-text-center tw-mt-2 tw-mb-10">
        You can compare maximum of 3 quotes at a time
      </p>

      <Form
        name="requestCallbackForm"
        form={form}
        className="tw-w-5/6 tw-mx-auto"
        initialValues={{
          prefix: "91",
        }}
        size="large"
        layout="vertical"
        onFinish={onSubmit}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input placeholder="Enter Your Name" className="tw-rounded-lg" />
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
          <Input className="tw-rounded-lg" placeholder="Enter Your E-mail id" />
        </Form.Item>

        <Form.Item
          label="Phone Number"
          className="tw-rounded-lg"
          name="number"
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
            type="tel"
            pattern="[0-9]*"
            placeholder="Enter Your Phone Number"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="default"
            className="tw-w-full tw-texa-button"
            htmlType="submit"
          >
            Request to call back
          </Button>
        </Form.Item>
      </Form>
      <Modal
        visible={showConfirmationModal}
        footer={null}
        width={400}
        onCancel={() => setShowConfirmationModal(false)}
      >
        <div className="tw-mb-5">
          <div className="tw-h-16 tw-w-16 tw-mx-auto tw-rounded-full tw-flex-center tw-bg-gray-background">
            <img src={icon} alt="user icon" />
          </div>
        </div>
        <p className="tw-text-xl tw-font-medium tw-text-center">Thank You!</p>
        <p className="tw-w-4/6 tw-text-center tw-mx-auto tw-mt-3">
          Basic info, for a faster booking experience and travel
        </p>
      </Modal>
    </div>
  );
};

export default RequestCallbackModal;
