import { Button, Col, DatePicker, Form, Input, Row, Select } from "antd";
import veg from "../../assets/svg/veg.svg";
import nonveg from "../../assets/svg/non-veg.svg";
import { formatMomentDate } from "../../utils/utils";
import { isNil, omitBy } from "lodash";
import { useState } from "react";

type PassangerFormProps = {
  id: number;
  handleFormSubmit: (value: any, id: number) => void;
};

const title = [
  {
    label: "Mr.",
    value: "Mr.",
  },
  {
    label: "Ms.",
    value: "Ms.",
  },
];

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

const dietPreference = [
  {
    label: (
      <div className="tw-flex tw-gap-2">
        <img className="tw-w-4" src={veg} alt="veg" /> <span>Veg</span>
      </div>
    ),
    value: "veg",
  },
  {
    label: (
      <div className="tw-flex tw-gap-2">
        <img className="tw-w-4" src={nonveg} alt="nonveg" />{" "}
        <span>Non-Veg</span>
      </div>
    ),
    value: "non-veg",
  },
];

export const PassangerForm = ({ handleFormSubmit, id }: PassangerFormProps) => {
  const [isDisable, setIsDisable] = useState(false);

  const onFinish = (value: any) => {
    if (!isDisable) {
      const updatedValue = {
        ...value,
        dateOfBirth: formatMomentDate(value.dateOfBirth),
      };
      console.log(omitBy(updatedValue, isNil));
      handleFormSubmit(omitBy(updatedValue, isNil), id);
      setIsDisable(true);
    }
  };
  return (
    <div>
      <p className="tw-text-base tw-font-medium tw-mt-2">
        Please enter personal details
      </p>

      <Form
        name="passangerDetailsForm"
        className="tw-mt-5"
        onFinish={onFinish}
        layout="vertical"
        size="large"
        autoComplete="off"
      >
        <Row gutter={25}>
          <Col span={4}>
            <Form.Item
              label="Title"
              name="title"
              rules={[{ required: true, message: "Select Title!" }]}
            >
              <Select
                placeholder="Title"
                options={title}
                disabled={isDisable}
              />
            </Form.Item>
          </Col>
          <Col span={9}>
            <Form.Item
              label="First Name"
              name="firstName"
              rules={[
                { required: true, message: "Please input your first name!" },
              ]}
            >
              <Input
                className="tw-rounded-md"
                placeholder="First Name"
                disabled={isDisable}
              />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item
              label="Last Name"
              name="lastName"
              rules={[
                { required: true, message: "Please input your last name!" },
              ]}
            >
              <Input
                className="tw-rounded-md"
                placeholder="Last Name"
                disabled={isDisable}
              />
            </Form.Item>
          </Col>

          <Col span={13}>
            <Form.Item
              label="Date Of Birth "
              name="dateOfBirth"
              rules={[
                { required: true, message: "Please select date of birth!" },
              ]}
            >
              <DatePicker
                className="tw-rounded-md tw-w-2/3"
                placeholder="Birth Date"
                disabled={isDisable}
              />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item
              label="Diet Preference"
              name="dietPreference"
              rules={[{ required: true, message: "Select diet preference!" }]}
            >
              <Select
                placeholder="Diet Preference"
                options={dietPreference}
                disabled={isDisable}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <p className="tw-my-2">
              <span className="tw-text-base tw-font-medium tw-mr-2">
                IMPORTANT NOTE :-{" "}
              </span>
              <span className="tw-italic">
                Please ensure that the name of the passenger is same as the
                government issued ID
              </span>
            </p>
          </Col>

          <Col span={23}>
            <Form.Item
              label={
                <p className="tw-text-base tw-font-medium">Special request</p>
              }
              name="specialRequest"
            >
              <Input
                className="tw-rounded-md"
                placeholder="Enter your special request"
                disabled={isDisable}
              />
            </Form.Item>
          </Col>

          <Col span={23}>
            <div className="tw-flex tw-justify-end">
              {isDisable && (
                <Button
                  type="default"
                  className="border-btn tw-w-28 tw-rounded-lg tw-mr-5"
                  onClick={() => setIsDisable(false)}
                >
                  Edit
                </Button>
              )}
              <Button
                type="default"
                className="tw-texa-button tw-w-28"
                htmlType="submit"
              >
                Submit
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

type PassangerContactDetailsProps = {
  handleFormSubmit: (value: any) => void;
};

export const PassangerContactDetails = ({
  handleFormSubmit,
}: PassangerContactDetailsProps) => {
  const [isDisable, setIsDisable] = useState(false);
  const onFinish = (value: any) => {
    if (!isDisable) {
      const updatedValue = {
        ...value,
        dateOfBirth: formatMomentDate(value.dateOfBirth),
      };
      console.log(updatedValue);
      handleFormSubmit(omitBy(updatedValue, isNil));
      setIsDisable(true);
    }
  };
  return (
    <div>
      <Form
        name="passangerContactForm"
        className="tw-mt-5"
        onFinish={onFinish}
        initialValues={{
          prefix: "91",
        }}
        layout="vertical"
        size="large"
        autoComplete="off"
      >
        <Form.Item
          name="email"
          label="E-mail ID"
          extra={
            <p className="tw-mt-2 tw-text-secondary-color">
              Your ticket will be sent to this e-mail address
            </p>
          }
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
            className="tw-rounded-lg tw-w-3/4"
            placeholder="Enter Your E-mail id"
          />
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
            className="tw-rounded-lg tw-w-3/4"
            type="number"
            placeholder="Enter Your Phone Number"
          />
        </Form.Item>
        <div className="tw-flex tw-justify-end">
          {isDisable && (
            <Button
              type="default"
              className="border-btn tw-w-28 tw-rounded-lg tw-mr-5"
              onClick={() => setIsDisable(false)}
            >
              Edit
            </Button>
          )}
          <Button
            type="default"
            className="tw-texa-button tw-w-28"
            htmlType="submit"
          >
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};
