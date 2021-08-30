import { Col, Row } from "antd";
import LaunchCard from "./cards/LaunchCard";
import ActivityTrip from "../../../assets/svg/influencer/ActivityTrip.svg";
import calander from "../../../assets/svg/influencer/calendar.svg";

const CARD = [
  {
    title: "Activity / Trip",
    description:
      "Lorem ipsum dolor sit amet, consecteturonsectetur adipiscing elit. Elit varius sed facilis",
    icon: ActivityTrip,
    buttonText: "Create Activity +",
  },
  {
    title: "Event",
    description:
      "Lorem ipsum dolor sit amet, consecteturonsectetur adipiscing elit. Elit varius sed facilis",
    icon: calander,
    buttonText: "Create Event +",
  },
  {
    title: "Retreat",
    description:
      "Lorem ipsum dolor sit amet, consecteturonsectetur adipiscing elit. Elit varius sed facilis",
    icon: calander,
    buttonText: "Create Retreat +",
  },
];

const LaunchTab = () => {
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
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default LaunchTab;
