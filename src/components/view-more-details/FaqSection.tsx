import { Col, Collapse, Row } from "antd";
import faqImg from "../../assets/png/faq.png";

const FAQ = [
  {
    q: "Are there bus routes to amsterdam from India?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    q: "What is the currency used in amsterdam?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    q: "What documents do Indians need to enter amsterdam?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    q: "Which airports have direct flights to amsterdam?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    q: "Which is the best time to visit amsterdam?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    q: "What should one wear in amsterdam?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    q: "Is July a good time to visit amsterdam?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
];

type Props = {
  imgPosition?: "right" | "left";
  imgUrl?: string;
};

const { Panel } = Collapse;

const FaqSection = ({ imgPosition = "right", imgUrl }: Props) => {
  return (
    <Row gutter={40}>
      <Col order={imgPosition === "right" ? 1 : 2} span={14}>
        <h4 className="tw-section-title tw-mb-5">FAQ’s of trekking</h4>
        <Collapse
          bordered={false}
          expandIconPosition="right"
          className="site-collapse-custom-collapse"
        >
          {FAQ.map((d, i) => (
            <Panel
              header={d.q}
              key={i}
              className="site-collapse-custom-panel tw-shadow-card"
            >
              <p>{d.a}</p>
            </Panel>
          ))}
        </Collapse>
      </Col>
      <Col
        span={10}
        order={imgPosition === "right" ? 2 : 1}
        className="tw-pt-20"
      >
        <img className="tw-w-full tw-h-auto" src={imgUrl || faqImg} alt="FAQ" />
      </Col>
    </Row>
  );
};

export default FaqSection;
