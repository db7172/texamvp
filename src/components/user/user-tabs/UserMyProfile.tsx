import { ArrowLeftOutlined, UploadOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Row,
  Select,
  Upload,
} from "antd";
import { uniqueId } from "lodash";
import { useEffect, useState } from "react";
import userIcon from "../../../assets/png/userIcon.png";
import profile from "../../../assets/png/influencer/user/user1.png";
import { formatMomentDate } from "../../../utils/utils";
import UserCard from "../card/UserCard";
import firebase from "../../../firebase";

const OPTIONS = ["Option 1", "Option 2", "Option 3"];

const UserMyProfile = () => {
  const [profilePic, setProfilePic] = useState(profile);
  const [data, setData] = useState([]) as any;
  const [user, setUser] = useState([]) as any;
  const [profileImg, setProfileImg] = useState([]) as any;

  const handleUserProfileUpload = (e: any) => {
    console.log("Upload event:", e);
    setProfileImg(e);
    if (Array.isArray(e)) {
      return e;
    }
    setTimeout(() => {
      setProfilePic(e?.fileList[0]?.thumbUrl || profile);
    }, 1000);
    return e && e.fileList;
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        firebase
          .firestore()
          .collection("users")
          .doc(user.uid)
          .get()
          .then((doc) => {
            setData(doc.data());
          });
      }
    });
  }, []);

  console.log(user);

  const handleSubmit = async (value: any) => {
    let downloadLink = user.photoURL;
    if (profileImg.file) {
      let storageRef = firebase.storage().ref(`users/${user.uid}/profile`);
      await storageRef.put(profileImg.file);
      downloadLink = await storageRef.getDownloadURL();
    }
    const backendvalue = {
      ...value,
      dateOfBirth: formatMomentDate(value.dateOfBirth),
      profileUrl: downloadLink,
    };

    if (value.dateOfAnniversary) {
      backendvalue["dateOfAnniversary"] = formatMomentDate(
        value.dateOfAnniversary
      );
    }

    await firebase
      .firestore()
      .collection("users")
      .doc(user.uid)
      .set(backendvalue, { merge: true });
    setIsEdit(false);
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
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div>
      <div className="tw-flex tw-justify-between tw-items-center">
        <p className="tw-font-bold tw-text-3xl tw-mb-5">
          {isEdit ? "Basic Profile Info" : "Account Details"}
        </p>
        {isEdit && (
          <ArrowLeftOutlined
            onClick={() => setIsEdit(false)}
            className="tw-text-secondary-color tw-text-xl tw-cursor-pointer"
          />
        )}
      </div>
      {isEdit ? (
        <div className="tw-shadow-card tw-bg-white tw-p-5 tw-rounded-lg">
          <div className="tw-flex tw-gap-5 tw-justify-center tw-items-center tw-w-full tw-mb-5">
            <div
              className="tw-w-20 tw-h-20 tw-rounded-full"
              style={{ overflow: "hidden" }}
            >
              <img
                src={`${
                  data
                    ? data.profileUrl
                      ? data.profileUrl
                      : "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png"
                    : "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png"
                }`}
                alt="profile"
              />
            </div>
            <div>
              <Upload
                name="panCardPhoto"
                beforeUpload={() => false}
                listType="picture"
                maxCount={1}
                onChange={handleUserProfileUpload}
              >
                <Button
                  type="default"
                  className="tw-bg-gray-background tw-rounded-lg hover:tw-bg-gray-background"
                  icon={<UploadOutlined />}
                >
                  Click to upload
                </Button>
              </Upload>
            </div>
          </div>
          <Form
            name="userForm"
            initialValues={
              data && user
                ? {
                    prefix: "91",
                    firstName: data.name.split(" ")[0],
                    lastName: data.name.split(" ")[1],
                    email: data.email,
                    number: parseInt(user.phoneNumber.slice(3, 13)),
                    country: data.country,
                    state: data.state,
                    gender: data.gender,
                    dateOfBirth: data.dob,
                    dateOfAnniversary: data.doa,
                  }
                : { prefix: "91" }
            }
            className="tw-w-9/12 tw-mx-auto"
            size="large"
            layout="vertical"
            onFinish={handleSubmit}
            // onFinishFailed={onFinishFailed}
          >
            <Row gutter={25}>
              <Col span={12}>
                <Form.Item
                  label="First Name"
                  name="firstName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your first name!",
                    },
                  ]}
                >
                  <Input
                    placeholder="Enter your first name"
                    className="tw-rounded-lg"
                    defaultValue={data.firstName}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Last Name"
                  name="lastName"
                  rules={[
                    { required: true, message: "Please input your last name!" },
                  ]}
                >
                  <Input
                    placeholder="Enter your last name"
                    className="tw-rounded-lg"
                    defaultValue={data.lastName}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={25}>
              <Col span={12}>
                <Form.Item
                  label="E-mail ID"
                  name="email"
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
                  <Input className="tw-rounded-lg" defaultValue={data.email} />
                </Form.Item>
              </Col>
              <Col span={12}>
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
                    type="number"
                    defaultValue={user.phoneNumber.slice(3)}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={25}>
              <Col span={12}>
                <Form.Item
                  label="Country"
                  name="country"
                  rules={[
                    { required: true, message: "Please select your country!" },
                  ]}
                >
                  <Select
                    placeholder={data.country}
                    defaultValue={data.country}
                  >
                    {/* add loop/map for dynamic data from back end */}

                    {OPTIONS.map((option) => (
                      <Select.Option key={uniqueId()} value={option}>
                        {option}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="State"
                  name="state"
                  rules={[
                    { required: true, message: "Please select your state!" },
                  ]}
                >
                  <Select placeholder={data.state}>
                    {/* add loop/map for dynamic data from back end */}

                    {OPTIONS.map((option) => (
                      <Select.Option key={uniqueId()} value={option}>
                        {option}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={25}>
              <Col span={8}>
                <Form.Item
                  label="Gender"
                  name="gender"
                  rules={[
                    { required: true, message: "Please select your gender!" },
                  ]}
                >
                  <Select placeholder={data.gender}>
                    {/* add loop/map for dynamic data from back end */}
                    <Select.Option key={uniqueId()} value={"Male"}>
                      Male
                    </Select.Option>
                    <Select.Option key={uniqueId()} value={"Male"}>
                      Female
                    </Select.Option>
                    <Select.Option key={uniqueId()} value={"Male"}>
                      Other
                    </Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Date of Birth"
                  name="dateOfBirth"
                  rules={[
                    {
                      required: true,
                      message: "Please select your date of birth!",
                    },
                  ]}
                >
                  <DatePicker
                    placeholder={data.dateOfBirth}
                    className="tw-rounded-lg"
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Date of Anniversary" name="dateOfAnniversary">
                  <DatePicker
                    placeholder={data.dateOfAnniversary}
                    className="tw-rounded-lg"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={25}>
              <Col span={12}>
                <Form.Item>
                  <Button
                    type="default"
                    className="tw-w-full tw-texa-button"
                    htmlType="submit"
                  >
                    Submit
                  </Button>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item>
                  <Button
                    type="default"
                    className="tw-w-full border-btn tw-rounded-lg"
                    onClick={() => setIsEdit(false)}
                  >
                    Cancel
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
      ) : (
        <UserCard
          handleCardClick={() => setIsEdit(true)}
          icon={userIcon}
          title="User Profile"
          description="Basic info, for a faster booking experience and travel"
        />
      )}
    </div>
  );
};

export default UserMyProfile;
