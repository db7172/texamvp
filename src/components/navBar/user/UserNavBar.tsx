import { BellOutlined } from "@ant-design/icons";
import { Badge, Popover } from "antd";
import { Link } from "react-router-dom";

const UserNavBar = () => {
  return (
    <div className="tw-bg-white tw-shadow-nav-bar tw-flex tw-justify-between tw-items-center tw-py-4 tw-text-primary-color tw-px-7">
      <div>
        <Link to="/">
          <h1 className="tw-font-bold tw-text-4xl">Texa Trove</h1>
        </Link>
      </div>
      <div className="tw-pr-10">
        <Badge dot={true}>
          <Popover
            content="notification"
            title={() => (
              <p className="tw-text-lg tw-font-medium tw-p-2">Notifiacations</p>
            )}
            trigger="click"
          >
            <BellOutlined className="tw-text-lg tw-text-secondary-color" />
          </Popover>
        </Badge>
      </div>
    </div>
  );
};

export default UserNavBar;
