import leftArrow from "../../../assets/svg/leftArrow.svg";
import {
  Progress,
  Form,
  Input,
  Select,
  Row,
  Col,
  DatePicker,
  Button,
  Upload,
  Modal,
} from "antd";
import { useContext, useEffect, useState } from "react";
import moment from "moment";
import { UploadOutlined } from "@ant-design/icons";
import process_completed from "../../../assets/png/influencer/process-completed.png";
import { Link } from "react-router-dom";
import firebase from "../../../firebase";
import { AuthContext } from "../../../Auth";
import { Country, State, City } from "country-state-city";

const db = firebase.firestore();

const TOTAL_STEP = 2;

type ProfileDataFormType = {
  activity: string;
  city: string;
  state: string;
  companyName: string;
  country: string;
  facebookLink: string;
  instaLink: string;
  linkedinLink: string;
  operatingSince: string;
};

const ActivityProfile = () => {
  const [step, setStep] = useState(1);
  const [profileData, setProfileData] = useState<ProfileDataFormType>();
  const [kycData, setKycData] = useState<any>();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const updateProfileFormData = (value: ProfileDataFormType) => {
    setProfileData(value);
  };

  const updateKycData = (value: any) => {
    setKycData(value);
  };

  return (
    <div className="activity-profile">
      <div className="tw-mb-7">
        <p className="tw-flex tw-gap-4">
          {step !== 1 && (
            <img
              src={leftArrow}
              className="tw-cursor-pointer"
              onClick={() => setStep(step - 1)}
              alt="left arrow"
            />
          )}
          <span>
            <span className="tw-font-medium">Step {step}</span> of {TOTAL_STEP}
          </span>
        </p>
        <Progress
          percent={(step / TOTAL_STEP) * 100}
          size="small"
          showInfo={false}
        />
      </div>

      <div className="tw-text-center tw-mb-20">
        <h4 className="tw-text-2xl tw-font-medium tw-mb-3">Activity Profile</h4>
        <p className="tw-text-secondary-color tw-font-lato">
          In fames morbi dictumst faucibus. Enim in aenean tincidunt dolor at id
          risus non. Vel aliquet sapien, ornare nec in turpis a proin.
        </p>
      </div>

      <div>
        {step === 1 && (
          <ActivityInformation
            nextStep={nextStep}
            updateFormData={updateProfileFormData}
            formData={profileData}
          />
        )}
        {step === 2 && (
          <ActivityKYC
            kycData={kycData}
            updateKycData={updateKycData}
            showModal={showModal}
          />
        )}

        <Modal
          width={420}
          visible={isModalVisible}
          footer={null}
          onCancel={handleCancel}
          closable={false}
        >
          <div className="tw-p-5 tw-flex tw-flex-col tw-items-center">
            <h4 className="tw-text-xl tw-font-medium tw-max-w-xs tw-text-center tw-mb-5">
              Your Registration Has Been Successfully Done
            </h4>
            <div className="tw-mb-5">
              <img src={process_completed} alt="Process completed" />
            </div>
            <h4 className="tw-text-xl tw-font-medium tw-max-w-xs tw-text-center tw-mb-5">
              Our Representative Will Get Back to you With in 24 hr
            </h4>
            <Link to="/influencer/application" className="tw-w-full">
              <Button type="default" className="tw-w-full tw-texa-button">
                View more
              </Button>
            </Link>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default ActivityProfile;

type Information = {
  formData?: ProfileDataFormType;
  updateFormData: (value: ProfileDataFormType) => void;
  nextStep: () => void;
};

function ActivityInformation({
  formData,
  nextStep,
  updateFormData,
}: Information) {
  const { currentUser } = useContext(AuthContext);
  const [allCountries, setAllCountries] = useState([]) as any;
  const [allStates, setAllStates] = useState([]) as any;
  const [allCities, setAllCities] = useState([]) as any;
  const [countryId, setCountryId] = useState("");
  const [stateId, setStateId] = useState("");

  const handleFormSubmit = (value: any) => {
    const updatedValue: ProfileDataFormType = {
      ...value,
      operatingSince: parseFloat(value.operatingSince.format("YYYY")),
    };
    updateFormData(updatedValue);
    db.collection("venders")
      .doc(currentUser.uid)
      .set(updatedValue, { merge: true });
    nextStep();
  };
  const fetchCountries = async () => {
    await setAllCountries(Country.getAllCountries());
  };
  const fetchStates = async (countryId: string) => {
    await setAllStates(State.getStatesOfCountry(countryId));
  };

  useEffect(() => {
    const fetchCities = async (stateId: string, counterId: string) => {
        await setAllCities(City.getCitiesOfState(countryId, stateId));
    };
    fetchCountries();
    if (countryId.length > 0) {
      fetchStates(countryId);
    }
    if (stateId.length > 0) {
      fetchCities(stateId, countryId);
    }
  }, [countryId, stateId]);

  function handleSelectCountry(e: any) {
    setCountryId(e);
  }
  function handleSelectState(e: any) {
    setStateId(e);
  }

  return (
    <>
      <h1 className="tw-font-medium tw-text-lg tw-mb-5">
        Activity Information
      </h1>
      <Form
        name="information"
        layout="vertical"
        size="large"
        initialValues={
          formData
            ? {
                ...formData,
                operatingSince: moment(formData.operatingSince, "YYYY"),
              }
            : undefined
        }
        onFinish={handleFormSubmit}
        scrollToFirstError
      >
        <Form.Item label="Enter Your company Name" name="companyName">
          <Input
            placeholder="Enter Your company Name"
            className="tw-rounded-lg"
          />
        </Form.Item>

        <Form.Item
          label="Activites Which You Are Operating"
          name="activity"
          rules={[{ required: true, message: "Please input your activity!" }]}
        >
          <Input
            placeholder="Activites Which You Are Operating"
            className="tw-rounded-lg"
          />
        </Form.Item>

        <Row gutter={20}>
          <Col span={8}>
            <Form.Item
              label="Country"
              name="country"
              rules={[{ required: true, message: "Please select country!" }]}
            >
              <Select
                placeholder="Select Country"
                className="tw-rounded-lg"
                allowClear
                onChange={(e) => {
                  handleSelectCountry(e);
                }}
              >
                {allCountries?.map((country: any) => {
                  return (
                    <Select.Option value={country.isoCode}>
                      {country.name}
                    </Select.Option>
                  );
                })}
                {/* <Select.Option value="india">India</Select.Option>
                <Select.Option value="usa">USA</Select.Option>
                <Select.Option value="dubai">Dubai</Select.Option> */}
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="State"
              name="state"
              rules={[{ required: true, message: "Please select state!" }]}
            >
              <Select
                className="tw-rounded-lg"
                placeholder="Select state"
                allowClear
                onChange={(e) => {
                  handleSelectState(e);
                }}
              >
                {allStates?.map((state: any) => {
                  return (
                    <Select.Option value={state.isoCode}>
                      {state.name}
                    </Select.Option>
                  );
                })}
                {/* <Select.Option value="maharashtra">Maharashtra</Select.Option>
                <Select.Option value="gujrat">Gujrat</Select.Option>
                <Select.Option value="delhi">Delhi</Select.Option> */}
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="City"
              name="city"
              rules={[{ required: true, message: "Please select city!" }]}
            >
              <Select
                className="tw-rounded-lg"
                placeholder="Select city"
                allowClear
              >
                {allCities?.map((city: any) => {
                  return (
                    <Select.Option value={city.name}>{city.name}</Select.Option>
                  );
                })}
                {/* <Select.Option value="mumbai">Mumbai</Select.Option>
                <Select.Option value="thane">Thane</Select.Option>
                <Select.Option value="mul">Mul</Select.Option> */}
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Form.Item label="Instagram Link" name="instaLink">
          <Input
            placeholder="Enter Your Instagram Link"
            className="tw-rounded-lg"
          />
        </Form.Item>

        <Form.Item label="Facebook Link" name="facebookLink">
          <Input
            placeholder="Enter Your Facebook Link"
            className="tw-rounded-lg"
          />
        </Form.Item>

        <Form.Item label="Linkedin Link" name="linkedinLink">
          <Input
            placeholder="Enter Your Linkedin Link"
            className="tw-rounded-lg"
          />
        </Form.Item>

        <Form.Item
          label="Operating Since"
          name="operatingSince"
          rules={[{ required: true, message: "Please select year!" }]}
        >
          <DatePicker
            className="tw-rounded-lg tw-w-full"
            placeholder="Select Operating Since Year"
            picker="year"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="default"
            className="tw-w-full tw-texa-button"
            htmlType="submit"
          >
            Proceed Next
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

type Kyc = {
  kycData: any;
  updateKycData: (value: any) => void;
  showModal: () => void;
};

function ActivityKYC({ kycData, updateKycData, showModal }: Kyc) {
  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };
  const { currentUser } = useContext(AuthContext);

  const handleFormSubmit = async (value: any) => {
    let adhaarLink = [];
    adhaarLink = await Promise.all(
      value.aadharCardPhoto.map(async (image: any, i: Number) => {
        let storageRef = firebase
          .storage()
          .ref(`venders/${currentUser.uid}/adhaar/${i}`);
        await storageRef.put(image.originFileObj);
        let downloadLink = await storageRef.getDownloadURL();
        return downloadLink;
      })
    );
    let cancelLink = [];
    cancelLink = await Promise.all(
      value.cancelCheck.map(async (image: any, i: Number) => {
        let storageRef = firebase
          .storage()
          .ref(`venders/${currentUser.uid}/cancelCheck/${i}`);
        await storageRef.put(image.originFileObj);
        let downloadLink = await storageRef.getDownloadURL();
        return downloadLink;
      })
    );
    let certificationLink = [];
    certificationLink = await Promise.all(
      value.certification.map(async (image: any, i: Number) => {
        let storageRef = firebase
          .storage()
          .ref(`venders/${currentUser.uid}/certifications/${i}`);
        await storageRef.put(image.originFileObj);
        let downloadLink = await storageRef.getDownloadURL();
        return downloadLink;
      })
    );
    let panLink = [];
    panLink = await Promise.all(
      value.panCardPhoto.map(async (image: any, i: Number) => {
        let storageRef = firebase
          .storage()
          .ref(`venders/${currentUser.uid}/pancard/${i}`);
        await storageRef.put(image.originFileObj);
        let downloadLink = await storageRef.getDownloadURL();
        return downloadLink;
      })
    );

    await db.collection("venders").doc(currentUser.uid).set(
      {
        aadharCard: value.aadhaarCard,
        aadharCardPhoto: adhaarLink,
        accountName: value.accountName,
        accountNumber: value.accountNumber,
        cancelCheck: cancelLink,
        certifications: certificationLink,
        gstNumber: value.gstNumber,
        ifscCode: value.ifscCode,
        panCard: value.panCard,
        panCardPhoto: panLink,
        address: "Update your address",
        landline: "Update your landline",
      },
      { merge: true }
    );
    updateKycData(value);
    showModal();
  };

  return (
    <>
      <h1 className="tw-font-medium tw-text-lg tw-mb-5">KYC</h1>
      <Form
        name="kyc"
        layout="vertical"
        size="large"
        initialValues={kycData || undefined}
        onValuesChange={(value) => updateKycData({ ...kycData, ...value })}
        onFinish={handleFormSubmit}
        scrollToFirstError
      >
        <Form.Item
          label="Pan Card"
          name="panCard"
          rules={[{ required: true, message: "Please input your pan card!" }]}
        >
          <Input
            placeholder="Enter Your Pan Card Number"
            className="tw-rounded-lg"
            maxLength={10}
          />
        </Form.Item>

        <Form.Item
          name="panCardPhoto"
          label="Upload Photo of Pan Card (Front & Back)"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          rules={[{ required: true, message: "Please upload your pan card!" }]}
        >
          <Upload
            name="panCardPhoto"
            beforeUpload={() => false}
            maxCount={2}
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

        {/* aadhar card */}
        <Form.Item
          label="Aadhaar Card"
          name="aadhaarCard"
          rules={[
            { required: true, message: "Please input aadhar card!" },
            { len: 16, message: "Aadhar should have 16 digit number!" },
          ]}
        >
          <Input
            type="tel"
            pattern="[0-9]*"
            placeholder="Enter Your Pan Card Number"
            className="tw-rounded-lg"
          />
        </Form.Item>

        <Form.Item
          name="aadharCardPhoto"
          label="Upload Photo of Aadhar Card (Front & Back)"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          rules={[
            { required: true, message: "Please upload your aadhar card!" },
          ]}
        >
          <Upload
            name="aadharCardPhoto"
            beforeUpload={() => false}
            maxCount={2}
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
        <Form.Item>
          <h4 className="tw-text-base tw-font-medium">Bank Details</h4>
        </Form.Item>

        <Form.Item
          label="Account Name"
          name="accountName"
          rules={[{ required: true, message: "Please input account name!" }]}
        >
          <Input
            placeholder="Enter Your Account Name"
            className="tw-rounded-lg"
          />
        </Form.Item>

        <Form.Item
          label="Account Number"
          name="accountNumber"
          rules={[{ required: true, message: "Please input account number!" }]}
        >
          <Input
            type="tel"
            pattern="[0-9]*"
            placeholder="Enter Your Account Number"
            className="tw-rounded-lg"
          />
        </Form.Item>

        <Form.Item
          label="IFSC Code"
          name="ifscCode"
          rules={[{ required: true, message: "Please input IFSC Code!" }]}
        >
          <Input placeholder="Enter Your IFSC Code" className="tw-rounded-lg" />
        </Form.Item>

        <Form.Item
          name="cancelCheck"
          label="Cancel Check"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          rules={[
            { required: true, message: "Please upload your cancel check!" },
          ]}
        >
          <Upload
            name="cancelCheck"
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

        <Form.Item label="GST Number " name="gstNumber">
          <Input
            placeholder="Enter Your GST Number "
            className="tw-rounded-lg"
          />
        </Form.Item>

        <Form.Item
          name="certification"
          label="Any Certification Of"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          rules={[
            { required: true, message: "Please upload your certification!" },
          ]}
        >
          <Upload
            name="certification"
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
    </>
  );
}
