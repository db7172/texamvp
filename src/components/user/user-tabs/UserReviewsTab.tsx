import { Button, Col, Row } from "antd";
import classNames from "classnames";
import { useState } from "react";

const UserReviewsTab = () => {
  const [activeButton, setActiveButton] = useState(1);

  return (
    <div>
      <Row gutter={20} className="tw-items-center">
        <Col span={24} className="tw-bg-white tw-rounded-md tw-shadow-card">
          <div className="tw-py-5 tw-px-5 tw-flex tw-gap-5">
            <Button
              type="default"
              className={classNames(
                "tw-m-0 border-visible",
                activeButton === 1
                  ? "tw-border-texa-active"
                  : "tw-border-texa-normal"
              )}
              onClick={() => setActiveButton(1)}
            >
              Review Your Product
            </Button>
            <Button
              type="default"
              className={classNames(
                "tw-m-0 border-visible",
                activeButton === 2
                  ? "tw-border-texa-active"
                  : "tw-border-texa-normal"
              )}
              onClick={() => setActiveButton(2)}
            >
              Your Review
            </Button>
          </div>
        </Col>
      </Row>

      <div className="tw-mt-5">
        {activeButton === 1 && "Review Your Product"}
        {activeButton === 2 && "Your Review"}
      </div>
    </div>
  );
};

export default UserReviewsTab;
