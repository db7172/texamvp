import { Col, Row } from "antd";
import React from "react";

type Props = {
  imgUrl: string;
  title?: string;
  children: React.ReactNode;
};

const PageCardContainer = ({ children, imgUrl, title }: Props) => {
  return (
    <Row className="tw-bg-white tw-shadow-card tw-border tw-border-light-white tw-rounded-lg tw-p-7 tw-mb-10">
      <Col span={12} className="tw-flex tw-justify-center tw-items-center">
        <img
          src={imgUrl}
          alt=""
          className="tw-w-full tw-h-full tw-rounded-md tw-object-cover"
        />
      </Col>
      <Col span={12} className="tw-pl-7">
        {title ? (
          <h3 className="tw-font-medium tw-tracking-1 tw-text-lg tw-text-primary-color">
            {title}
          </h3>
        ) : null}
        {children}
      </Col>
    </Row>
  );
};

export default PageCardContainer;
