import location from "../../assets/svg/logistics.svg";
import ViewMoreSectionTitleWithImg from "./ViewMoreSectionTitleWithImg";
import img from "../../assets/png/profile.png";
import { Col, Row } from "antd";

const mockData = [
  {
    img: img,
    name: "Kevin Debryune",
    description:
      "Pulvinar tincidunt id tellus, proin consectetur sapien nec. Tempus vitae donec phasellus urna. Ipsum elementum faucibus et ac urna. Porttitor suspendisse nisl nisl eget in tristique orci posuere. Sed felis in duis magna ut. Ornare quis duis accumsan non ut. Massa consectetur ut duis id tempor, semper. Vulputate adipiscing fermentum bibendum facilisis ac, neque. Amet nisl, quis semper massa quis lectus et tristique. Pulvinar nulla eget quis consequat elit vulputate facilisis nunc egestas",
  },
  {
    img: img,
    name: "Kevin Debryune",
    description:
      "Pulvinar tincidunt id tellus, proin consectetur sapien nec. Tempus vitae donec phasellus urna. Ipsum elementum faucibus et ac urna. Porttitor suspendisse nisl nisl eget in tristique orci posuere. Sed felis in duis magna ut. Ornare quis duis accumsan non ut. Massa consectetur ut duis id tempor, semper. Vulputate adipiscing fermentum bibendum facilisis ac, neque. Amet nisl, quis semper massa quis lectus et tristique. Pulvinar nulla eget quis consequat elit vulputate facilisis nunc egestas",
  },
];

const ViewMoreRetreatInstructor = () => {
  return (
    <section>
      <ViewMoreSectionTitleWithImg image={location} header="Instructor" />
      <div className="tw-mt-5">
        {mockData.map((d, i) => (
          <Row gutter={10} key={i} className="tw-mb-5">
            <Col span={3}>
              <img className="tw-rounded-full" src={d.img} alt="dp" />
            </Col>
            <Col span={21}>
              <p className="tw-text-base tw-font-medium tw-mb-1">{d.name}</p>
              <p className="tw-text-secondary-color">{d.description}</p>
            </Col>
          </Row>
        ))}
      </div>
    </section>
  );
};

export default ViewMoreRetreatInstructor;
