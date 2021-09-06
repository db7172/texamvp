import { Col, Divider, Row } from "antd";
import telephone from "../../../assets/svg/telephone_gray.svg";
import mail from "../../../assets/svg/mail.svg";
import whatsapp from "../../../assets/svg/whatsapp.svg";

const DATA = [
  {
    title: "/01 Create The Quote",
    description:
      "Placerat quisque mattis vitae felis risus, eu. Risus integer rhoncus, viverra urna mi tellus scelerisque. Dolor lobortis turpis sem at mi pharetra, dis non.",
  },
  {
    title: "/02 Send To Traveller",
    description:
      "Placerat quisque mattis vitae felis risus, eu. Risus integer rhoncus, viverra urna mi tellus scelerisque. Dolor lobortis turpis sem at mi pharetra, dis non.",
  },
  {
    title: "/03 Customize Quote",
    description:
      "Placerat quisque mattis vitae felis risus, eu. Risus integer rhoncus, viverra urna mi tellus scelerisque. Dolor lobortis turpis sem at mi pharetra, dis non.",
  },
  {
    title: "/04 Convert",
    description:
      "Placerat quisque mattis vitae felis risus, eu. Risus integer rhoncus, viverra urna mi tellus scelerisque. Dolor lobortis turpis sem at mi pharetra, dis non.",
  },
];

const FormLeftPenal = () => {
  return (
    <section>
      <div className="tw-shadow-card tw-p-5 tw-mb-10 tw-rounded-lg">
        <h4 className="tw-font-medium tw-text-base">How it works</h4>
        <Divider />
        <Row gutter={[10, 30]}>
          {DATA.map((d, i) => (
            <Col span={24} key={i}>
              <h3 className="tw-font-medium tw-mb-2">{d.title}</h3>
              <p className="tw-text-secondary-color">{d.description}</p>
            </Col>
          ))}
        </Row>
      </div>
      <div className="tw-shadow-card tw-p-5 tw-rounded-lg">
        <h4 className="tw-font-medium tw-text-base">Need Help ?</h4>
        <Divider />
        <div className="tw-flex tw-justify-between tw-gap-2">
          <p className="tw-font-medium">Contact Through Whatsapp !</p>
          <div>
            <img src={whatsapp} alt="whatsapp" />
          </div>
        </div>
        <Divider />
        <div className="tw-flex tw-justify-between tw-gap-2">
          <p className="tw-font-medium">Call us, and get instant solution</p>
          <div>
            <img src={telephone} alt="telephone" />
          </div>
        </div>
        <Divider />
        <div className="tw-flex tw-justify-between tw-gap-2">
          <p className="tw-font-medium">Mail us, your query will be solved</p>
          <div>
            <img src={mail} alt="mail" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormLeftPenal;
