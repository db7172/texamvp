import { Col, Row } from "antd";

type Props = {
  title: string;
  description: string;
  img: string;
};

const ChooseUsBox = ({ title, description, img }: Props) => {
  return (
    <Row gutter={3} className="tw-p-7 tw-shadow-card tw-rounded-xl">
      <Col span={6}>
        <div className="tw-w-72">
          <img src={img} alt="" />
        </div>
      </Col>
      <Col span={18}>
        <h1 className="tw-text-xl tw-font-medium">{title}</h1>
        <p className="tw-text-sm tw-text-secondary-color tw-font-normal tw-py-3">
          {description}
        </p>
      </Col>
    </Row>
  );
};

export default ChooseUsBox;
