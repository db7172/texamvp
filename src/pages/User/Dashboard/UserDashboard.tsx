import { Avatar, Button, Col, Divider, Modal, Row } from "antd";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Container from "../../../components/common/container/Container";
import UserMyEnquiry from "../../../components/user/user-tabs/UserMyEnquiry";
import UserMyProfile from "../../../components/user/user-tabs/UserMyProfile";
import UserMyTrip from "../../../components/user/user-tabs/UserMyTrip";
import UserReviewsTab from "../../../components/user/user-tabs/UserReviewsTab";
import UserSupport from "../../../components/user/user-tabs/UserSupport";
import { USER_DASHBOAR_TABS } from "./userData";
import firebase from "../../../firebase";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const avatarImg =
  "https://imgr.search.brave.com/JuLSZUsD98Tow_UcPp9WhSQGohn_xuKhVDZRvE9AEi4/fit/1000/1080/ce/1/aHR0cHM6Ly9jZG4y/LnZlY3RvcnN0b2Nr/LmNvbS9pLzEwMDB4/MTAwMC80OS84Ni9t/YW4tY2hhcmFjdGVy/LWZhY2UtYXZhdGFy/LWluLWdsYXNzZXMt/dmVjdG9yLTE3MDc0/OTg2LmpwZw";

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState(1);

  const history = useHistory();
  const { confirm } = Modal;

  function handleLogout() {
    firebase.auth().signOut();
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        history.push("/");
      }
    });
  }, []);

  function showConfirm() {
    confirm({
      title: "Are you sure?",
      icon: <ExclamationCircleOutlined />,
      okText: "Log Out",
      okType: "danger",
      cancelText: "Cancel",
      onOk() {
        firebase.auth().signOut();
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  }

  return (
    <Container>
      <Row gutter={40} className="tw-mt-10">
        <Col span={6}>
          <Row
            gutter={[20, 15]}
            className="tw-shadow-card tw-py-7 tw-px-5 tw-bg-white tw-rounded-xl"
          >
            <Col span={24}>
              <div className="tw-flex tw-gap-4">
                <div>
                  <Avatar src={avatarImg} />
                </div>
                <div>
                  <p className="tw-text-base">User Name</p>
                  <p className="tw-text-xs tw-text-secondary-color">
                    user.name@gmail.com
                  </p>
                </div>
              </div>
              <Divider />
            </Col>
            {USER_DASHBOAR_TABS.mainTab.map((tab, i) => (
              <Col span={24} key={i}>
                <UserTab
                  activeId={activeTab}
                  handleActiveId={(id) => setActiveTab(id)}
                  {...tab}
                />
              </Col>
            ))}

            <Divider className="tw-m-0" />

            {USER_DASHBOAR_TABS.otherTab.map((tab, i) => (
              <Col span={24} key={i}>
                <UserTab
                  activeId={activeTab}
                  handleActiveId={(id) => setActiveTab(id)}
                  {...tab}
                />
              </Col>
            ))}
            <Divider className="tw-m-0" />
            <UserTab
              activeId={activeTab}
              handleActiveId={showConfirm}
              {...USER_DASHBOAR_TABS.logOut}
            />
          </Row>
        </Col>
        <Col span={18}>
          {activeTab === 1 && <UserMyProfile />}
          {activeTab === 2 && <UserMyTrip />}
          {activeTab === 3 && <UserMyEnquiry />}
          {activeTab === 4 && <UserReviewsTab />}
          {activeTab === 5 && <UserSupport />}
        </Col>
      </Row>
    </Container>
  );
};

export default UserDashboard;

type UserTabProps = {
  name: string;
  icon: string;
  iconActive: string;
  id: number;
  activeId: number;
  handleActiveId: (id: number) => void;
};

const UserTab = ({
  id,
  icon,
  name,
  iconActive,
  activeId,
  handleActiveId,
}: UserTabProps) => {
  return (
    <Button
      type="default"
      className={classNames(
        "hover:tw-bg-gray-background tw-w-full tw-flex tw-py-3 tw-px-4 tw-mt-0 tw-shadow-none",
        activeId === id
          ? "tw-bg-active-yellow focus:tw-bg-active-yellow"
          : "focus:tw-bg-primary-color"
      )}
      onClick={() => handleActiveId(id)}
    >
      <div className="tw-w-1/4 tw-min-w-0">
        <img
          src={activeId === id ? iconActive : icon}
          alt="icon"
          className="tw-w-6 tw-m-auto"
        />
      </div>
      <div
        className={classNames("tw-w-3/4 tw-text-left tw-pl-2 tw-leading-7 ")}
      >
        <span
          className={classNames(
            activeId === id
              ? "tw-text-primary-color"
              : "tw-text-secondary-color"
          )}
        >
          {name}
        </span>
      </div>
    </Button>
  );
};
