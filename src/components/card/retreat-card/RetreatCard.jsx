import { Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import time from "../../../assets/svg/time.svg";
import { getViewMoreDetailsForRetreatPath } from "../../../constant/comman.const";
import { indCurrency } from "../../../utils/utils";
import GreenBadge from "../../green-badge/GreenBadge";

const RetreatCard = (props) => {
  const { name, duration, type, price, imgUrl, language } = props;
  const routingDetails = {
    pathname: getViewMoreDetailsForRetreatPath(type, name),
    state: { name, duration, type, price, imgUrl, language },
  };
  return (
    <div className="tw-card-wrapper tw-zoom-effect">
      <div className="card-container">
        <div className="card_img_height">
          <img className="tw-rounded-md" src={imgUrl} alt={name} />
        </div>

        <div className="tw-mt-5 tw-text-secondary-color">
          <div>
            <Row className="tw-items-center">
              <Col span={19}>
                <h3 className="tw-font-medium tw-tracking-1 tw-text-base tw-text-primary-color tw-text-ellipsis">
                  {name}
                </h3>
              </Col>
              <Col span={5}>
                <GreenBadge ratting={4.4} className="tw-w-16" />
              </Col>
            </Row>
            <p className="tw-mt-2">
              Instructed in {language} | {type}
            </p>
            <p className="tw-flex tw-mt-2 tw-mb-4">
              <img src={time} alt="" />{" "}
              <span className="tw-ml-2">{duration}</span>
            </p>
          </div>
          <div className="tw-my-5 tw-border-y tw-py-2 tw-border-gray-200">
            <p className="tw-price tw-text-xl tw-flex tw-items-center">
              <span className="tw-text-secondary-color tw-font-normal tw-mr-2 tw-text-xs">
                Starting from
              </span>
              {indCurrency(price)}
              <span className="tw-text-secondary-color tw-font-normal tw-text-xs tw-ml-2">
                Onwards
              </span>
            </p>
          </div>
          <Link to={routingDetails}>
            <button className="tw-w-full tw-py-3 tw-bg-secondary-color tw-rounded-lg tw-text-primary-color tw-font-medium">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RetreatCard;
