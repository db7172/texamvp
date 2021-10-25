import { EditOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Modal, Row, Upload } from "antd";
import { useState } from "react";
import profile from "../../../assets/png/influencer/user/user1.png";
import certificate from "../../../assets/png/influencer/certificate.png";

type CertificateType = {
  image: string;
  name: string;
  issuer: string;
  isExpires: boolean;
  issueMonth: string;
  issueYear: string;
  expMonth?: string;
  expYear?: string;
  credentialId: string;
};

const mockUserDetails = {
  name: "Travel Monk",
  email: "travelm23@gmail.com",
  about:
    "Vel maecenas sagittis, aliquet nisi magna facilisis massa rhoncus sagittis. Sem fringilla erat massa nascetur facilisis nec viverra consequat. Vel enim iaculis porttitor bibendum suspendisse purus tellus feugiat. Consequat metus arcu commodo eleifend auctor volutpat odio. Rutrum est cursus et, amet. Eget sit interdum in at cum proin luctus.",
};

const mockCertificates: CertificateType[] = [
  {
    image: certificate,
    name: "Hicking Certificate",
    issuer: "ITB Berlin",
    isExpires: false,
    issueMonth: "Feb",
    issueYear: "2021",
    credentialId: "3KPP40EBB30",
  },
];

const InfluencerEditMyProfile = () => {
  const [profilePic, setProfilePic] = useState(profile);
  const [userDetails, setUserDetails] = useState(mockUserDetails);
  const [userCertificate, setUserCertificate] =
    useState<CertificateType[]>(mockCertificates);

  const [isModalUserDetailsVisible, setIsModalUserDetailsVisible] =
    useState(false);

  const handleUserDetailsModalCancel = () => {
    setProfilePic(profile);
    setIsModalUserDetailsVisible(false);
  };

  const showUserDetailsModal = () => {
    setIsModalUserDetailsVisible(true);
  };

  const handleUserDetailsFormSubmit = (value: any) => {
    setUserDetails(value);
    setIsModalUserDetailsVisible(false);
  };

  const normFile = (e: any) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    setTimeout(() => {
      setProfilePic(e?.fileList[0]?.thumbUrl || profile);
    }, 1000);
    return e && e.fileList;
  };
  return (
    <>
      <div>
        <p className="tw-text-2xl tw-font-medium tw-mb-10">Edit My Profile</p>
        <div className="tw-flex tw-gap-5 tw-items-center tw-mb-10">
          <div className="tw-w-20 tw-h-20 tw-rounded-full">
            <img src={`${profilePic}`} alt="profile" />
          </div>
          <div>
            <p className="tw-text-secondary-color tw-text-lg">Ben Bekham</p>

            <span
              className="tw-underline tw-text-blue-500 tw-cursor-pointer"
              onClick={showUserDetailsModal}
            >
              Click to upload
            </span>
          </div>
        </div>
        <div className="tw-flex tw-justify-between tw-w-full tw-mb-5">
          <p className="tw-w-4/12 tw-text-base tw-font-medium">Name</p>
          <div className="tw-w-8/12 tw-flex tw-justify-between">
            <p className="tw-w-10/12 tw-text-secondary-color tw-text-base">
              {userDetails.name}
            </p>
            <Button
              className="tw-w-2/12 tw-m-0 tw-text-secondary-color "
              type="text"
              icon={<EditOutlined />}
              size="small"
              onClick={showUserDetailsModal}
            />
          </div>
        </div>
        <div className="tw-flex tw-justify-between tw-w-full tw-mb-5">
          <p className="tw-w-4/12 tw-text-base tw-font-medium">Email</p>
          <div className="tw-w-8/12 tw-flex tw-justify-between">
            <p className="tw-w-10/12 tw-text-secondary-color tw-text-base">
              {userDetails.email}
            </p>
            <Button
              className="tw-w-2/12 tw-m-0 tw-text-secondary-color "
              type="text"
              icon={<EditOutlined />}
              size="small"
              onClick={showUserDetailsModal}
            />
          </div>
        </div>
        <div>
          <div className="tw-flex tw-justify-between tw-mb-3">
            <p className="tw-text-base tw-font-medium">About</p>
            <Button
              className="tw-w-2/12 tw-m-0 tw-text-secondary-color "
              type="text"
              icon={<EditOutlined />}
              size="small"
              onClick={showUserDetailsModal}
            />
          </div>
          <p className="tw-text-secondary-color tw-text-base">
            {userDetails.about}
          </p>
        </div>
        <Modal
          visible={isModalUserDetailsVisible}
          footer={null}
          onCancel={handleUserDetailsModalCancel}
        >
          <div className="tw-flex tw-gap-5 tw-items-center tw-mb-5">
            <div className="tw-w-20 tw-h-20 tw-rounded-full">
              <img src={`${profilePic}`} alt="profile" />
            </div>
            <div>
              <p className="tw-text-secondary-color tw-text-lg">Ben Bekham</p>
              <Upload
                name="panCardPhoto"
                beforeUpload={() => false}
                listType="picture"
                maxCount={1}
                onChange={normFile}
              >
                <span className="tw-underline tw-text-blue-500">
                  Click to upload
                </span>
              </Upload>
            </div>
          </div>
          <Form
            name="userDetails"
            initialValues={userDetails}
            size="large"
            layout="vertical"
            onFinish={handleUserDetailsFormSubmit}
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[
                { required: true, message: "Please input your full name!" },
              ]}
            >
              <Input
                placeholder="Enter Your Full Name"
                className="tw-rounded-lg"
              />
            </Form.Item>

            <Form.Item
              name="email"
              label="Email"
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
                className="tw-rounded-lg"
                placeholder="Enter Your E-mail id"
              />
            </Form.Item>

            <Form.Item
              label="About"
              name="about"
              rules={[
                { required: true, message: "Please input about your self!" },
              ]}
            >
              <Input.TextArea
                rows={5}
                placeholder="Enter About Your Self"
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
      </div>
      <div className="tw-mt-10">
        <div className="tw-flex tw-justify-between tw-mb-3">
          <p className="tw-text-base tw-font-medium">Cerificates</p>
          <Button
            className="tw-w-2/12 tw-m-0 tw-text-secondary-color "
            type="text"
            icon={<PlusCircleOutlined />}
            size="small"
            onClick={showUserDetailsModal}
          />
        </div>
        <Row gutter={[20, 20]}>
          {userCertificate.map((d) => (
            <Col span={24}>
              <Row gutter={20}>
                <Col span={4}>
                  <img src={`${d.image}`} alt={d.name} />
                </Col>
                <Col span={20} className="tw-flex tw-justify-between">
                  <div>
                    <p className="tw-text-xl tw-font-medium tw-mb-1">
                      {d.name}
                    </p>
                    <p className="tw-mb-1">{d.issuer}</p>
                    <p className="tw-mb-1">{`Issued ${d.issueMonth} ${
                      d.issueYear
                    } - ${
                      d.isExpires ? (
                        <span>{`${d.expMonth} ${d.expYear}`}</span>
                      ) : (
                        " No Expiration Date"
                      )
                    }`}</p>
                    <p className="tw-text-secondary-color">{`Credential ID - ${d.credentialId}`}</p>
                  </div>
                  <Button
                    className="tw-w-2/12 tw-m-0 tw-text-secondary-color "
                    type="text"
                    icon={<EditOutlined />}
                    size="small"
                    // onClick={showUserDetailsModal}
                  />
                </Col>
              </Row>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default InfluencerEditMyProfile;
