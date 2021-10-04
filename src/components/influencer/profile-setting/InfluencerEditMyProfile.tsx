import { Upload } from "antd";
import { useState } from "react";
import profile from "../../../assets/png/influencer/user/user1.png";

const InfluencerEditMyProfile = () => {
  const [profilePic, setProfilePic] = useState(profile);
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
    <div>
      <p className="tw-text-2xl tw-font-medium tw-mb-10">Edit My Profile</p>
      <div className="tw-flex tw-gap-5 tw-items-center">
        <div className="tw-w-20 tw-h-20 tw-rounded-full">
          <img src={`${profilePic}`} alt="profile" />
        </div>
        <div>
          <p className="tw-text-secondary-color tw-text-lg">Ben Bekham</p>
          <Upload
            name="panCardPhoto"
            beforeUpload={() => false}
            listType="picture"
            onChange={normFile}
          >
            Click to upload
          </Upload>
        </div>
      </div>
    </div>
  );
};

export default InfluencerEditMyProfile;
