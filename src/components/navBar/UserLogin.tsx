import { DownOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { Avatar, Divider, Modal, Popover } from "antd";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import exit from "../../assets/svg/logoutUser.svg";
import bag from "../../assets/svg/smallBag.svg";
import user from "../../assets/svg/user.svg";
import MenuItem from "../common/MenuItem/MenuItem";
import firebase from "../../firebase";
import { useContext, useState } from "react";
import { AuthContext } from "../../Auth";

// const avatarImg =
//   "https://imgr.search.brave.com/JuLSZUsD98Tow_UcPp9WhSQGohn_xuKhVDZRvE9AEi4/fit/1000/1080/ce/1/aHR0cHM6Ly9jZG4y/LnZlY3RvcnN0b2Nr/LmNvbS9pLzEwMDB4/MTAwMC80OS84Ni9t/YW4tY2hhcmFjdGVy/LWZhY2UtYXZhdGFy/LWluLWdsYXNzZXMt/dmVjdG9yLTE3MDc0/OTg2LmpwZw";

const UserLogin = () => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const [userData, setUserData] = useState([]) as any;

  const { confirm } = Modal;

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
        firebase
          .firestore()
          .collection("users")
          .doc(user.uid)
          .get()
          .then((doc) => {
            if (doc.exists) {
              setUserData({ id: doc.id, data: doc.data() });
            }
          });
      }
    });
  }, [currentUser, setCurrentUser]);

//   function signOut() {
//     firebase.auth().signOut();
//     window.location.reload();
//   }

  function showConfirm() {
    confirm({
      title: "Are you sure?",
      icon: <ExclamationCircleOutlined />,
      okText: "Log Out",
      okType: "danger",
      cancelText: "Cancel",
      onOk() {
        firebase.auth().signOut();
        window.location.reload();
      },
      onCancel() {
      },
    });
  }

  const menu = (
    <div style={{ width: "250px" }} className="tw-p-3">
      <div>
        <Link to={{ pathname: "/user/dashboard" }}>
          <MenuItem icon={user} title="My Account" />
        </Link>
      </div>
      <Divider className="tw-my-3" />
      <div>
        <Link to={{ pathname: "/user/dashboard", state: 2 }}>
          <MenuItem icon={bag} title="My Trip" />
        </Link>
      </div>
      <Divider className="tw-my-3" />
      <div onClick={showConfirm}>
        <MenuItem icon={exit} title="Log Out" />
      </div>
    </div>
  );
  if (userData) {
    return (
      <div className="tw-flex tw-items-center">
        <Popover className="tw-cursor-pointer" content={menu} trigger="click">
          <div>
            <Avatar
              src={currentUser ? currentUser.photoURL : Avatar}
              className="tw-mr-2"
            />
            <span className="tw-mr-2">
              {currentUser ? currentUser.displayName : "User name"}
            </span>
            <DownOutlined className="tw-text-xs tw-text-secondary-color" />
          </div>
        </Popover>
      </div>
    );
  } else {
    return <h1>Loading</h1>;
  }
};

export default UserLogin;
