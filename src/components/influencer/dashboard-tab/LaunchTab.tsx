import { Col, Row } from "antd";
import LaunchCard from "./cards/LaunchCard";
import ActivityTrip from "../../../assets/svg/influencer/ActivityTrip.svg";
import calander from "../../../assets/svg/influencer/calendar.svg";
import Modal from "antd/lib/modal/Modal";
import { useState } from "react";
import { MODAL_ICON } from "./data";
import { Link } from "react-router-dom";
import { ACTIVITY, getActivityFormPath } from "../../../constant/comman.const";

export type CardType = {
  title: string;
  description: string;
  icon: string;
  buttonText: string;
  id: "activity" | "event" | "retreat";
};

const CARD: CardType[] = [
  {
    title: "Activity / Trip",
    description:
      "Lorem ipsum dolor sit amet, consecteturonsectetur adipiscing elit. Elit varius sed facilis",
    icon: ActivityTrip,
    buttonText: "Create Activity +",
    id: "activity",
  },
  {
    title: "Event",
    description:
      "Lorem ipsum dolor sit amet, consecteturonsectetur adipiscing elit. Elit varius sed facilis",
    icon: calander,
    buttonText: "Create Event +",
    id: "event",
  },
  {
    title: "Retreat",
    description:
      "Lorem ipsum dolor sit amet, consecteturonsectetur adipiscing elit. Elit varius sed facilis",
    icon: calander,
    buttonText: "Create Retreat +",
    id: "retreat",
  },
];

const LaunchTab = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activeId, setActiveId] = useState<string>();

  const getId = (id: "activity" | "event" | "retreat") => {
    setIsModalVisible(true);
    setActiveId(id);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="tw-text-center tw-mt-16">
      <h4 className="tw-text-2xl tw-font-medium tw-mb-4">
        What type of services you want to create ?
      </h4>
      <p className="tw-text-secondary-color tw-font-lato">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit varius sed
        facilisi quam interdum nisl, aliquam. Id <br /> eleifend odio etiam
        etiam massa purus molestie. Arcu aenean sed pretium integer.
      </p>
      <Row gutter={40} className="tw-mt-14">
        {CARD.map((d, i) => (
          <Col span={8} key={i}>
            <LaunchCard
              title={d.title}
              description={d.description}
              icon={d.icon}
              buttonText={d.buttonText}
              id={d.id}
              getId={getId}
            />
          </Col>
        ))}
      </Row>
      <Modal
        visible={isModalVisible}
        width={620}
        footer={null}
        onCancel={handleCancel}
      >
        {activeId === "activity" && <ActivityModalCard />}
        {activeId === "event" && <EventModalCard />}
        {activeId === "retreat" && <RetreatModalCard />}
      </Modal>
    </div>
  );
};

export default LaunchTab;

const CardWithIcon = ({
  icon,
  text,
  link,
}: {
  icon: string;
  text: string;
  link: string;
}) => {
  return (
    <Link
      to={link || "#"}
      style={{ width: "162px", height: "184px" }}
      className="tw-p-3 tw-border-2 tw-rounded-lg tw-flex tw-flex-col tw-items-center tw-justify-evenly"
    >
      <div className="">
        <img src={icon} className="tw-mx-auto" alt="icon" />
      </div>
      <h3 className="tw-text-lg tw-text-secondary-color tw-font-medium">
        {text}
      </h3>
    </Link>
  );
};

const ActivityModalCard = () => {
  return (
    <div className="tw-p-3">
      <div className="tw-flex tw-flex-col tw-items-center tw-mb-10">
        <h1 className="tw-text-center tw-text-2xl tw-font-medium tw-mb-3">
          What is your Activity Duration
        </h1>
        <p className="tw-text-center tw-max-w-md tw-text-secondary-color">
          Cras viverra suspendisse tortor purus blandit nulla. Cras at malesuada
          nunc congue risus sapien. Diam quis viverra duis dui tortor ac.
        </p>
      </div>
      <div className="tw-flex tw-justify-around">
        <CardWithIcon
          icon={MODAL_ICON.HOURLY_ACTIVITY}
          text="Hourly"
          link={getActivityFormPath(ACTIVITY.HOURLY)}
        />
        <CardWithIcon
          icon={MODAL_ICON.SINGLE_DAY_ACTIVITY}
          text="Single Day"
          link={getActivityFormPath(ACTIVITY.SINGLE_DAY)}
        />
        <CardWithIcon
          icon={MODAL_ICON.MULTY_DAY_ACTIVITY}
          text="Multi Day"
          link={getActivityFormPath(ACTIVITY.MULTY_DAY)}
        />
      </div>
    </div>
  );
};

const EventModalCard = () => {
  return (
    <div className="tw-p-3">
      <div className="tw-flex tw-flex-col tw-items-center tw-mb-10">
        <h1 className="tw-text-center tw-text-2xl tw-font-medium tw-mb-3">
          What is your Event Type
        </h1>
        <p className="tw-text-center tw-max-w-md tw-text-secondary-color">
          Cras viverra suspendisse tortor purus blandit nulla. Cras at malesuada
          nunc congue risus sapien. Diam quis viverra duis dui tortor ac.
        </p>
      </div>
      <div className="tw-flex tw-justify-around">
        <CardWithIcon icon={MODAL_ICON.OFFLINE_EVENT} text="Offline" link="#" />
        <CardWithIcon icon={MODAL_ICON.ONLINE_EVENT} text="Online" link="#" />
      </div>
    </div>
  );
};

const RetreatModalCard = () => {
  return (
    <div className="tw-p-3">
      <div className="tw-flex tw-flex-col tw-items-center tw-mb-10">
        <h1 className="tw-text-center tw-text-2xl tw-font-medium tw-mb-3">
          What is your Retreat Type
        </h1>
        <p className="tw-text-center tw-max-w-md tw-text-secondary-color">
          Cras viverra suspendisse tortor purus blandit nulla. Cras at malesuada
          nunc congue risus sapien. Diam quis viverra duis dui tortor ac.
        </p>
      </div>
      <div className="tw-flex tw-justify-around">
        <CardWithIcon icon={MODAL_ICON.WORKATION} text="Workation" link="#" />
        <CardWithIcon
          icon={MODAL_ICON.RETREAT}
          text="Retreat Session"
          link="#"
        />
      </div>
    </div>
  );
};
