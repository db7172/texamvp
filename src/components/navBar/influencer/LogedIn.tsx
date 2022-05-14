import { BellOutlined, DownOutlined, RightOutlined } from "@ant-design/icons";
import { Avatar, Badge, Divider, Popover } from "antd";
import edit from "../../../assets/svg/edit_icon.svg";
import setting from "../../../assets/svg/settings.svg";
import lock from "../../../assets/svg/lock_open.svg";
import exit from "../../../assets/svg/exit.svg";
import trip from "../../../assets/png/influencer/details_activity.png";
import { uniqueId } from "lodash";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import firebase from "../../../firebase";
import { AuthContext } from "../../../Auth";
import MenuItem from "../../common/MenuItem/MenuItem";
import NotificationOption from "../../common/Notification/Notification";

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
  const [userData, setUserData] = useState([]) as any;

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        firebase
          .firestore()
          .collection("venders")
          .doc(user.uid)
          .get()
          .then((doc) => {
            let data = [] as any;
            if (doc.exists) {
              setUserData({ id: doc.id, data: doc.data() });
              if (data.aadharCard) {
                setCurrentUser(user);
              }
            } else {
              console.log("does'nt existss");
            }
          });
      } else {
        window.location.href = "/influencer";
      }
    });
  }, []);

  console.log(currentUser);
  console.log(userData);

  const signOut = () => {
    firebase.auth().signOut();
  };

  const menu = (
    <div style={{ width: "300px" }} className="tw-p-3">
      <Link to="/influencer/profile">
        <div className="tw-flex tw-justify-between tw-items-center tw-cursor-pointer">
          <div className="tw-flex tw-gap-3">
            <Avatar
              src={`${
                currentUser
                  ? currentUser.photoURL
                    ? currentUser.photoURL
                    : "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png"
                  : "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png"
              }`}
              className="tw-mr-2"
            />
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
          <MenuItem icon={edit} title="Edit My Account" />
        </Link>
      </div>
      <Divider className="tw-my-3" />
      <div>
        <Link to={{ pathname: "/influencer/settings", state: 2 }}>
          <MenuItem icon={setting} title="Profile Settings" />
        </Link>
      </div>
      <Divider className="tw-my-3" />
      <div>
        <Link to={{ pathname: "/influencer/settings", state: 3 }}>
          <MenuItem icon={lock} title="Update Password" />
        </Link>
      </div>
      <Divider className="tw-my-3" />
      <div>
        <Link to={{ pathname: "/influencer/settings", state: 4 }}>
          <MenuItem icon={setting} title="Documents" />
        </Link>
      </div>
      <Divider className="tw-my-3" />
      <div onClick={signOut}>
        <MenuItem icon={exit} title="Log Out" />
      </div>
    </div>
  );

  const notification = (
    <div style={{ margin: "-12px -16px", width: "370px" }}>
      {notificationData.map((d) => (
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
          <Avatar
            src={`${
              currentUser
                ? currentUser.photoURL
                  ? currentUser.photoURL
                  : "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png"
                : "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png"
            }`}
            className="tw-mr-2"
          />
          <DownOutlined className="tw-text-xs tw-text-secondary-color" />
        </div>
      </Popover>
    </div>
  );
};

export default LogedIn;
