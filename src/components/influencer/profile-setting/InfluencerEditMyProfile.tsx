import {
  EditOutlined,
  PlusCircleOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import {
  Button,
  Checkbox,
  Col,
  DatePicker,
  Form,
  Input,
  Modal,
  Row,
  Upload,
} from "antd";
import { useEffect, useState } from "react";
import profile from "../../../assets/png/influencer/user/user1.png";
import certificate from "../../../assets/png/influencer/certificate.png";
import { uniqueId } from "lodash";
import { normFile } from "../../../pages/influencer/form/formUtils";
import moment from "moment";
import firebase from "../../../firebase";
import { useHistory } from "react-router-dom";

type CertificateType = {
  id: number;
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
    id: 1,
    image: certificate,
    name: "Hicking Certificate",
    issuer: "ITB Berlin",
    isExpires: false,
    issueMonth: "Feb",
    issueYear: "2021",
    credentialId: "3KPP40EBB30",
  },
  {
    id: 2,
    image: certificate,
    name: "Test Certificate",
    issuer: "Test Berlin",
    isExpires: true,
    issueMonth: "Mar",
    issueYear: "2021",
    expMonth: "Jun",
    expYear: "2022",
    credentialId: "3KPP50EBB80",
  },
];

const InfluencerEditMyProfile = () => {
  const [certificateForm] = Form.useForm();
  const [profilePic, setProfilePic] = useState(profile);
  const [profileImg, setProfileImg] = useState([]) as any;
  const [userDetails, setUserDetails] = useState(mockUserDetails);
  const [userData, setUserData] = useState([]) as any;
  const [userCertificate, setUserCertificate] =
    useState<CertificateType[]>(mockCertificates);
  const [isModalUserDetailsVisible, setIsModalUserDetailsVisible] =
    useState(false);
  const [isCertificateModalVisible, setIsCertificateModalVisible] =
    useState(false);
  const [activeCertificate, setActiveCertificate] = useState<CertificateType>();
  const [isExpire, setIsExpire] = useState(
    activeCertificate?.isExpires || false
  );
  const history = useHistory();

  const handleUserDetailsModalCancel = () => {
    setProfilePic(profile);
    setIsModalUserDetailsVisible(false);
  };

  const showUserDetailsModal = () => {
    setIsModalUserDetailsVisible(true);
  };

  const handleUserDetailsFormSubmit = async (value: any) => {
    setUserDetails(value);
    const user = await firebase.auth().currentUser;
    if (user) {
      let downloadLink = user.photoURL;
      if (profileImg.file) {
        let storageRef = firebase.storage().ref(`venders/${user.uid}/profile`);
        await storageRef.put(profileImg.file);
        downloadLink = await storageRef.getDownloadURL();
        await user.updateProfile({
          photoURL: downloadLink,
        });
      }
      await firebase
        .firestore()
        .collection("venders")
        .doc(user.uid)
        .set(
          {
            name: value.name,
            email: value.email,
            about: value.about,
            profileUrl: downloadLink,
          },
          { merge: true }
        )
        .then(() => {
          console.log("document written");
        })
        .catch((err) => {
          console.log(err);
        });
      if (value.email !== user.email) {
        await user
          .updateEmail(value.email)
          .then(() => {
            setIsModalUserDetailsVisible(false);
            window.location.reload();
          })
          .catch((err) => {
            console.log("Login again to change email .");
          });
      }
      setIsModalUserDetailsVisible(false);
      window.location.reload();
    }
  };

  const handleEditCertificate = (value?: CertificateType) => {
    if (value) {
      certificateForm.setFieldsValue({
        name: value.name,
        issuer: value.issuer,
        credentialId: value.credentialId,
        issueDate: moment(`${value.issueYear}/${value.issueMonth}`, "MMM-YYYY"),
        expDate: value.isExpires
          ? moment(`${value.expYear}/${value.expMonth}`, "MMM-YYYY")
          : null,
      });
      setActiveCertificate(value);
      setIsExpire(value.isExpires);
    }
    setTimeout(() => {
      setIsCertificateModalVisible(true);
    }, 100);
  };

  const handleCertificateModalCancel = () => {
    setIsCertificateModalVisible(false);
    setActiveCertificate(undefined);
    certificateForm.resetFields();
  };

  const handleCertificateFormSubmit = (value: any) => {
    const newCertificate: CertificateType = {
      id: userCertificate.length + 1,
      image: activeCertificate
        ? activeCertificate.image
        : value.photo[0].thumbUrl,
      name: value.name,
      issuer: value.issuer,
      isExpires: isExpire,
      issueMonth: moment(value.issueDate).format("MMM"),
      issueYear: moment(value.issueDate).format("YYYY"),
      credentialId: value.credentialId,
    };

    console.log({ value, newCertificate });

    if (isExpire) {
      newCertificate["expMonth"] = moment(value.expDate).format("MMM");
      newCertificate["expYear"] = moment(value.expDate).format("YYYY");
    }
    if (activeCertificate) {
      setUserCertificate(
        userCertificate.map((d) => {
          if (d.id === activeCertificate.id) {
            return newCertificate;
          } else {
            return d;
          }
        })
      );
    } else {
      setUserCertificate([...userCertificate, newCertificate]);
    }

    handleCertificateModalCancel();
  };

  const handleUserProfileUpload = (e: any) => {
    console.log("Upload event:", e);
    setProfileImg(e);
    if (Array.isArray(e)) {
      return e;
    }
    setTimeout(() => {
      // setProfileImg(e?.FileList[0]);
      setProfilePic(e?.fileList[0].thumbUrl || profile);
    }, 1000);
    return e && e.fileList;
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
            setUserData(doc.data());
          });
      } else {
        history.push("/influencer");
      }
    });
  }, []);

  if (userData) {
    return (
      <>
        <div>
          <p className="tw-text-2xl tw-font-medium tw-mb-10">Edit My Profile</p>
          <div className="tw-flex tw-gap-5 tw-items-center tw-mb-10">
            <div
              className="tw-w-20 tw-h-20 tw-rounded-full"
              style={{ overflow: "hidden" }}
            >
              <img
                className="tw-w-20 tw-h-20 tw-rounded-full"
                src={`${
                  userData.profileUrl
                    ? userData.profileUrl
                    : "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png"
                }`}
                alt="profile"
              />
            </div>
            <div>
              <p className="tw-text-secondary-color tw-text-lg">
                {userData.name}
              </p>

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
                {userData.companyName}
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
                {userData.email}
              </p>
              {/* <Button
                className="tw-w-2/12 tw-m-0 tw-text-secondary-color "
                type="text"
                icon={<EditOutlined />}
                size="small"
                onClick={showUserDetailsModal}
              /> */}
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
              {userData.about
                ? userData.about
                : "Write something about yourself."}
            </p>
          </div>
          <Modal
            visible={isModalUserDetailsVisible}
            footer={null}
            onCancel={handleUserDetailsModalCancel}
          >
            <div className="tw-flex tw-gap-5 tw-items-center tw-mb-5">
              <div
                className="tw-w-20 tw-h-20 tw-rounded-full"
                style={{ overflow: "hidden" }}
              >
                <img
                  src={`${
                    userData.profileUrl
                      ? userData.profileUrl
                      : "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png"
                  }`}
                  alt="profile"
                />
              </div>
              <div>
                <p className="tw-text-secondary-color tw-text-lg">
                  {userData.name}
                </p>
                <Upload
                  name="panCardPhoto"
                  beforeUpload={() => false}
                  listType="picture"
                  maxCount={1}
                  onChange={handleUserProfileUpload}
                >
                  <span className="tw-underline tw-text-blue-500">
                    Click to upload
                  </span>
                </Upload>
              </div>
            </div>
            <Form
              name="userDetails"
              initialValues={userData}
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
                  disabled
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
              onClick={() => setIsCertificateModalVisible(true)}
            />
          </div>
          <Row gutter={[20, 30]} className="tw-mt-5">
            {userCertificate.map((d) => (
              <Col span={24} key={uniqueId()}>
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

                      <p className="tw-mb-1">
                        <span>{`Issued ${d.issueMonth} ${d.issueYear} - `}</span>
                        <span>
                          {d.isExpires
                            ? `${d.expMonth} ${d.expYear}`
                            : "No Expiration Date"}
                        </span>
                      </p>

                      <p className="tw-text-secondary-color">{`Credential ID - ${d.credentialId}`}</p>
                    </div>
                    <Button
                      className="tw-w-2/12 tw-m-0 tw-text-secondary-color "
                      type="text"
                      icon={<EditOutlined />}
                      size="small"
                      onClick={() => handleEditCertificate(d)}
                    />
                  </Col>
                </Row>
              </Col>
            ))}
            <Modal
              title="Add Certificates"
              className="no-padding-modal"
              style={{ top: 80 }}
              visible={isCertificateModalVisible}
              footer={null}
              onCancel={handleCertificateModalCancel}
            >
              <div
                style={{ height: 550 }}
                className="tw-overflow-y-auto tw-py-3 tw-px-7"
              >
                {activeCertificate && (
                  <div className="tw-flex tw-gap-5 tw-items-center tw-mb-5">
                    <div className="tw-w-20 tw-h-20">
                      <img src={`${activeCertificate.image}`} alt="profile" />
                    </div>

                    <div>
                      <p className="tw-text-secondary-color tw-text-lg">
                        Certificate
                      </p>
                      <Upload
                        name="panCardPhoto"
                        beforeUpload={() => false}
                        listType="picture"
                        maxCount={1}
                        onChange={handleUserProfileUpload}
                      >
                        <span className="tw-underline tw-text-blue-500">
                          Click to upload
                        </span>
                      </Upload>
                    </div>
                  </div>
                )}

                <Form
                  form={certificateForm}
                  name="certificateForm"
                  size="large"
                  layout="vertical"
                  onFinish={handleCertificateFormSubmit}
                >
                  {!activeCertificate && (
                    <Form.Item
                      name="photo"
                      className="tw-mb-0"
                      label="Upload Certificate"
                      valuePropName="fileList"
                      getValueFromEvent={normFile}
                      rules={[
                        {
                          required: true,
                          message: "Please upload certificate!",
                        },
                      ]}
                    >
                      <Upload
                        name="photo"
                        beforeUpload={() => false}
                        maxCount={1}
                        multiple
                        listType="picture"
                      >
                        <Button
                          type="default"
                          className="tw-bg-gray-background tw-rounded-lg tw-m-0 hover:tw-bg-gray-background"
                          icon={<UploadOutlined />}
                        >
                          Click to upload
                        </Button>
                      </Upload>
                    </Form.Item>
                  )}

                  <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: "Please input certificate name!",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Enter Name of the Certificate"
                      className="tw-rounded-lg"
                    />
                  </Form.Item>

                  <Form.Item
                    label="Issuing Organization"
                    name="issuer"
                    rules={[
                      {
                        required: true,
                        message: "Please input issuing organization name!",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Enter issuign Orgamization Name"
                      className="tw-rounded-lg"
                    />
                  </Form.Item>

                  <Form.Item name="isExpires" noStyle>
                    <Checkbox
                      checked={!isExpire}
                      onChange={(value) => setIsExpire(!value.target.checked)}
                    >
                      This Cerrificate does not expire
                    </Checkbox>
                  </Form.Item>

                  <Row gutter={20} className="tw-mt-3">
                    <Col span={12}>
                      <Form.Item
                        name="issueDate"
                        label="Issue month and year"
                        rules={[
                          {
                            type: "object",
                            required: true,
                            message: "Please select issue time!",
                          },
                        ]}
                      >
                        <DatePicker
                          picker="month"
                          className="tw-w-full tw-rounded-lg"
                          placeholder="Select issue time!"
                        />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        name="expDate"
                        label="Expire month and year"
                        rules={[
                          {
                            type: "object",
                            required: isExpire,
                            message: "Please select Expire time!",
                          },
                        ]}
                      >
                        <DatePicker
                          picker="month"
                          className="tw-w-full tw-rounded-lg"
                          placeholder="Select Expire time!"
                          disabled={!isExpire}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Form.Item
                    label="Credential ID"
                    name="credentialId"
                    rules={[
                      {
                        required: true,
                        message: "Please input credential id!",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Enter Credential ID"
                      className="tw-rounded-lg"
                    />
                  </Form.Item>
                  <Form.Item>
                    <Button
                      type="default"
                      className="tw-w-full tw-mt-0 tw-texa-button"
                      htmlType="submit"
                    >
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </Modal>
          </Row>
        </div>
      </>
    );
  } else {
    return <div style={{ width: "100%", textAlign: "center" }}>Loading...</div>;
  }
};

export default InfluencerEditMyProfile;
