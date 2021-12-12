import { ArrowLeftOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import { useState } from "react";
import UserCard from "../card/UserCard";
import CancelledTour from "./tour-tabs/CancelledTour";
import CompletedTour from "./tour-tabs/CompletedTour";
import UpcomingTour from "./tour-tabs/UpcomingTour";
import { MY_TRIP_CARD } from "./userTabsConstants";

const getTitle = (value: string, count: number) => {
  let title = "";
  switch (value) {
    case "upcoming-tour":
      title = `Upcoming Tour (${count})`;
      break;

    case "cancelled-tour":
      title = `Cancelled Tour (${count})`;
      break;

    case "completed-tour":
      title = `Completed Tour (${count})`;
      break;

    default:
      break;
  }

  return title;
};

const UserMyTrip = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [activeTitle, setActiveTitle] = useState("");
  const [activeTab, setActiveTab] = useState<string | undefined>();

  const toggleHeader = (value: boolean) => {
    setShowHeader(value);
  };

  const handleActiveTab = (tab: string) => {
    setActiveTab(tab);
    setActiveTitle(getTitle(tab, 10));
    setIsEdit(true);
  };

  const handleActiveTabCancel = () => {
    setIsEdit(false);
    setActiveTab(undefined);
  };

  return (
    <div>
      {showHeader && (
        <div className="tw-flex tw-justify-between tw-items-center">
          <p className="tw-font-bold tw-text-3xl tw-mb-5">
            {isEdit ? activeTitle : "Tour Overview"}
          </p>
          {isEdit && (
            <ArrowLeftOutlined
              onClick={handleActiveTabCancel}
              className="tw-text-secondary-color tw-text-xl tw-cursor-pointer"
            />
          )}
        </div>
      )}
      <Row gutter={25}>
        {!isEdit ? (
          <Col span={24}>
            <Row gutter={[20, 30]}>
              <Col span={12}>
                <UserCard
                  title={MY_TRIP_CARD.upcomingTour.title}
                  description={MY_TRIP_CARD.upcomingTour.description}
                  icon={MY_TRIP_CARD.upcomingTour.icon}
                  handleCardClick={() =>
                    handleActiveTab(MY_TRIP_CARD.upcomingTour.key)
                  }
                />
              </Col>
              <Col span={12}>
                <UserCard
                  title={MY_TRIP_CARD.cancelledTour.title}
                  description={MY_TRIP_CARD.cancelledTour.description}
                  icon={MY_TRIP_CARD.cancelledTour.icon}
                  handleCardClick={() =>
                    handleActiveTab(MY_TRIP_CARD.cancelledTour.key)
                  }
                />
              </Col>
              <Col span={12}>
                <UserCard
                  title={MY_TRIP_CARD.completedTour.title}
                  description={MY_TRIP_CARD.completedTour.description}
                  icon={MY_TRIP_CARD.completedTour.icon}
                  handleCardClick={() =>
                    handleActiveTab(MY_TRIP_CARD.completedTour.key)
                  }
                />
              </Col>
            </Row>
          </Col>
        ) : (
          <Col span={24}>
            {activeTab === "upcoming-tour" && (
              <UpcomingTour
                handleParentHeader={toggleHeader}
                isParentHeaderVisible={showHeader}
              />
            )}
            {activeTab === "cancelled-tour" && (
              <CancelledTour
                handleParentHeader={toggleHeader}
                isParentHeaderVisible={showHeader}
              />
            )}
            {activeTab === "completed-tour" && (
              <CompletedTour
                handleParentHeader={toggleHeader}
                isParentHeaderVisible={showHeader}
              />
            )}
          </Col>
        )}
      </Row>
    </div>
  );
};

export default UserMyTrip;
