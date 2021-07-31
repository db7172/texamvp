import { Col, Row } from "antd";
import React from "react";
import ViewAllCard from "../card/view-all-card/ViewAllCard";

const ViewAll = ({ cards, path }) => {
  return (
    <Row gutter={[{ lg: 40, md: 20, sm: 10, xs: 0 }, 40]} justify="center" wrap>
      {cards.map((d, i) => (
        <Col key={i} xs={24} sm={12} md={12} lg={6}>
          <ViewAllCard {...d} path={path} />
        </Col>
      ))}
    </Row>
  );
};

export default ViewAll;
