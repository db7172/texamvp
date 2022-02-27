import { Button, Col, Row } from "antd";
import classNames from "classnames";
import { useState } from "react";
import { mockVendorList } from "./vendor.mock";
import VendorActivity from "./VendorActivity";
import VendorApproval from "./VendorApproval";
import VendorList from "./VendorList";

type ButtonType = "vendorList" | "vendorActivity" | "vendorApproval";

const Vendor = () => {
  const [activeButton, setActiveButton] = useState<ButtonType>("vendorList");
  return (
    <Row gutter={[0, 0]}>
      <Col span={24}>
        <Row gutter={0} className="tw-items-center tw-mt-5">
          <Col span={24} className="tw-bg-white tw-shadow-card">
            <div className="tw-py-5 tw-px-10 tw-flex tw-gap-10">
              <Button
                type="default"
                className={classNames(
                  "tw-m-0 border-visible",
                  activeButton === "vendorList"
                    ? "tw-border-texa-active"
                    : "tw-border-texa-normal"
                )}
                onClick={() => setActiveButton("vendorList")}
              >
                Vendor List
              </Button>
              <Button
                type="default"
                className={classNames(
                  "tw-m-0 border-visible",
                  activeButton === "vendorActivity"
                    ? "tw-border-texa-active"
                    : "tw-border-texa-normal"
                )}
                onClick={() => setActiveButton("vendorActivity")}
              >
                Vendor Activity
              </Button>
              <Button
                type="default"
                className={classNames(
                  "tw-m-0 border-visible",
                  activeButton === "vendorApproval"
                    ? "tw-border-texa-active"
                    : "tw-border-texa-normal"
                )}
                onClick={() => setActiveButton("vendorApproval")}
              >
                Vendor Approval
              </Button>
            </div>
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <div className="page-layout">
          <div className="home-cover">
            {activeButton === "vendorList" && (
              <VendorList listData={mockVendorList} />
            )}
            {activeButton === "vendorActivity" && <VendorActivity />}
            {activeButton === "vendorApproval" && <VendorApproval />}
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Vendor;
