import { Col, Row } from "antd";
import classNames from "classnames";

type Props = {
  header: string;
  content: string[];
  className?: string;
};

const InformationSection = ({ header, content, className }: Props) => {
  return (
    <Row gutter={[0, 15]} className="tw-px-6 tw-pb-6">
      <Col span={24}>
        <h4
          className={classNames(
            className ? className : "tw-text-base tw-font-medium"
          )}
        >
          {header}
        </h4>
      </Col>
      <Col span={24}>
        <ul className="tw-list-disc tw-list-outside">
          {/* {content.map((s, i) => ( */}
          <li className="tw-text-secondary-color tw-text-xs">{content}</li>
          {/* ))} */}
        </ul>
      </Col>
    </Row>
  );
};

export default InformationSection;
