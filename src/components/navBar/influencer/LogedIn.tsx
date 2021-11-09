import { BellOutlined, DownOutlined, RightOutlined } from "@ant-design/icons";
import { Avatar, Badge, Col, Divider, Popover, Row } from "antd";
import edit from "../../../assets/svg/edit_icon.svg";
import setting from "../../../assets/svg/settings.svg";
import lock from "../../../assets/svg/lock_open.svg";
import exit from "../../../assets/svg/exit.svg";
import trip from "../../../assets/png/influencer/details_activity.png";
import { uniqueId } from "lodash";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import firebase from "../../../firebase";
import { AuthContext } from "../../../Auth";
import { useHistory } from "react-router-dom";

const avatarImg =
  "https://imgr.search.brave.com/JuLSZUsD98Tow_UcPp9WhSQGohn_xuKhVDZRvE9AEi4/fit/1000/1080/ce/1/aHR0cHM6Ly9jZG4y/LnZlY3RvcnN0b2Nr/LmNvbS9pLzEwMDB4/MTAwMC80OS84Ni9t/YW4tY2hhcmFjdGVy/LWZhY2UtYXZhdGFy/LWluLWdsYXNzZXMt/dmVjdG9yLTE3MDc0/OTg2LmpwZw";

const notificationData = [
  {
    profile: avatarImg,
    title: "Robert Fox and 22 others",
    description: "Exciting Hampta Pass Trek trip",
    time: "1d",
    tripPic: trip,
    action: "Booked",
  },
  {
    profile: avatarImg,
    title: "Gursimran Singh",
    description: "Exciting Hampta Pass Trek trip",
    time: "3d",
    tripPic: trip,
    action: "Cancelled",
  },
  {
    profile: avatarImg,
    title: "Wade Warren",
    description: "Open mic ft. Hyderabad Comedy Scene",
    time: "7d",
    tripPic: trip,
    action: "Reviewed",
  },
];

const LogedIn = () => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        window.location.href = "/influencer";
      }
    });
  }, []);

  const signOut = () => {
    firebase.auth().signOut();
  };

  const menu = (
    <div style={{ width: "300px" }} className="tw-p-3">
      <Link to="/influencer/profile">
        <div className="tw-flex tw-justify-between tw-items-center tw-cursor-pointer">
          <div className="tw-flex tw-gap-3">
            <Avatar src={avatarImg} className="tw-mr-2" />
            <div>
              <p className="tw-text-base tw-font-medium tw-text-primary-color">
                {currentUser ? currentUser.displayName : "Profile Name"}
              </p>
              <p className="tw-text-xs tw-text-secondary-color">
                79 Trip Conducted
              </p>
            </div>
          </div>
          <RightOutlined className="tw-text-primary-color" />
        </div>
      </Link>
      <Divider className="tw-my-3" />
      <div>
        <Link to={{ pathname: "/influencer/settings", state: 1 }}>
          <Menu icon={edit} title="Edit My Account" />
        </Link>
      </div>
      <Divider className="tw-my-3" />
      <div>
        <Link to={{ pathname: "/influencer/settings", state: 2 }}>
          <Menu icon={setting} title="Profile Settings" />
        </Link>
      </div>
      <Divider className="tw-my-3" />
      <div>
        <Link to={{ pathname: "/influencer/settings", state: 3 }}>
          <Menu icon={lock} title="Update Password" />
        </Link>
      </div>
      <Divider className="tw-my-3" />
      <div onClick={signOut}>
        <Menu icon={exit} title="Log Out" />
      </div>
    </div>
  );

  const notification = (
    <div style={{ margin: "-12px -16px", width: "370px" }}>
      {notificationData.map((d, i) => (
        <div
          key={uniqueId()}
          className="tw-bg-lite-yellow-touch tw-p-3 tw-border-b-2"
        >
          <NotificationOption
            action={d.action}
            description={d.description}
            time={d.time}
            title={d.title}
            profile={d.profile}
            tripPic={d.tripPic}
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className="tw-flex tw-items-center tw-gap-10">
      <Badge dot={true}>
        <Popover
          content={notification}
          title={() => (
            <p className="tw-text-lg tw-font-medium tw-p-2">Notifiacations</p>
          )}
          trigger="click"
        >
          <BellOutlined className="tw-text-lg tw-text-secondary-color" />
        </Popover>
      </Badge>
      <Popover className="tw-cursor-pointer" content={menu} trigger="click">
        <div>
          <Avatar src={avatarImg} className="tw-mr-2" />
          <DownOutlined className="tw-text-xs tw-text-secondary-color" />
        </div>
      </Popover>
    </div>
  );
};

export default LogedIn;

type MenuProps = {
  icon: string;
  title: string;
};
const Menu = ({ icon, title }: MenuProps) => {
  return (
    <div className="tw-flex tw-items-center tw-gap-5 tw-cursor-pointer">
      <div className="tw-bg-gray-background tw-p-1.5 tw-rounded-md">
        <img src={icon} alt="icon" />
      </div>
      <div>
        <p className="tw-text-base tw-text-primary-color">{title}</p>
      </div>
    </div>
  );
};

type NotificationProps = {
  profile: string;
  title: string;
  description: string;
  action: string;
  time: string;
  tripPic: string;
};

const NotificationOption = ({
  profile,
  tripPic,
  time,
  title,
  description,
  action,
}: NotificationProps) => {
  return (
    <Row gutter={20} className="tw-items-center">
      <Col span={4}>
        <div className="tw-flex-center">
          <Avatar src={profile} />
        </div>
      </Col>
      <Col span={15}>
        <div className="tw-flex tw-justify-between tw-items-center tw-gap-2">
          <p className="tw-font-medium">{title}</p>
          <p className="tw-text-xs tw-text-secondary-color">{time}</p>
        </div>
        <div>
          <p className="tw-text-xs tw-text-secondary-color">
            <span className="tw-font-medium">{action}</span>{" "}
            <span>{description}</span>
          </p>
        </div>
      </Col>
      <Col span={5}>
        <div className="tw-flex-center">
          <img src={tripPic} alt="trip" />
        </div>
      </Col>
    </Row>
  );
};
