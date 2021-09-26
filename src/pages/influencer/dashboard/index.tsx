import { Button, Col, Row } from "antd";
import classNames from "classnames";
import { useState } from "react";
import Container from "../../../components/common/container/Container";
import CompletedTab from "../../../components/influencer/dashboard-tab/CompletedTab";
import EarningTab from "../../../components/influencer/dashboard-tab/EarningTab";
import DetailsTab from "../../../components/influencer/dashboard-tab/DetailsTab";
import LaunchTab from "../../../components/influencer/dashboard-tab/LaunchTab";
import { SIDEBAR_OPTION } from "./data";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(SIDEBAR_OPTION[0].id);

  return (
    <Container>
      <Row gutter={40} className="tw-mt-10">
        <Col span={5}>
          <Row
            gutter={[20, 15]}
            className="tw-shadow-card tw-py-7 tw-px-5 tw-bg-white tw-rounded-xl"
          >
            {SIDEBAR_OPTION.map(({ id, icon, name, iconActive }, i) => (
              <Col span={24} key={i}>
                <Button
                  type="default"
                  className={classNames(
                    "hover:tw-bg-gray-background tw-w-full tw-flex tw-py-3 tw-px-4 tw-mt-0 tw-shadow-none",
                    activeTab === id
                      ? "tw-bg-gray-background focus:tw-bg-gray-background"
                      : "focus:tw-bg-primary-color"
                  )}
                  onClick={() => setActiveTab(id)}
                >
                  <div className="tw-w-1/4 tw-min-w-0">
                    <img
                      src={activeTab === id ? iconActive : icon}
                      alt="icon"
                      className="tw-w-6 tw-m-auto"
                    />
                  </div>
                  <div
                    className={classNames(
                      "tw-w-3/4 tw-text-left tw-pl-2 tw-leading-7 "
                    )}
                  >
                    <span
                      className={classNames(
                        activeTab === id
                          ? "tw-text-primary-color"
                          : "tw-text-secondary-color"
                      )}
                    >
                      {name}
                    </span>
                  </div>
                </Button>
              </Col>
            ))}
          </Row>
        </Col>
        <Col span={19}>
          {activeTab === 1 && <LaunchTab />}
          {activeTab === 2 && <DetailsTab />}
          {activeTab === 3 && <CompletedTab />}
          {activeTab === 4 && <EarningTab />}
          {activeTab === 5 && <h1>Statements</h1>}
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
