import { EditOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useState } from "react";

const userDetails = {
  mobileNo: "+91-1234567890",
  landlineNo: "07752768858",
  address:
    "Ganga Nagar, Maharaja Coloby, JP Road, Agra, Uttar Pradesh 282001, India",
};

const ProfileSetting = () => {
  const [data, setData] = useState(userDetails);
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
            // onClick={showUserDetailsModal}
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
            // onClick={showUserDetailsModal}
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
            // onClick={showUserDetailsModal}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileSetting;
