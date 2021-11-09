import { Button, Col, Row } from "antd";
import classNames from "classnames";
import { useState } from "react";
import Container from "../../../components/common/container/Container";
import InfluencerEditMyProfile from "../../../components/influencer/profile-setting/InfluencerEditMyProfile";
import ProfileSetting from "../../../components/influencer/profile-setting/ProfileSetting";
import { EDIT_PROFILE_OPTION } from "./data";

const InfluencerProfileSetting = () => {
  const [activeTab, setActiveTab] = useState(EDIT_PROFILE_OPTION[0].id);
  return (
    <Container>
      <Row gutter={40} className="tw-mt-10">
        <Col span={6}>
          <div className="card-container">
            <p className="tw-text-2xl tw-font-medium tw-mb-5">Settings</p>
            <Row gutter={[0, 10]}>
              {EDIT_PROFILE_OPTION.map((d) => (
                <Col span={24} key={d.id}>
                  <Button
                    className="tw-pl-0 tw-mt-0"
                    onClick={() => setActiveTab(d.id)}
                  >
                    <Row gutter={20} className="tw-items-center">
                      <Col span={6}>
                        <div className="tw-bg-gray-background tw-p-1.5 tw-rounded-md tw-w-7 tw-h-7">
                          <img
                            src={activeTab === d.id ? d.iconActive : d.icon}
                            alt="icon"
                          />
                        </div>
                      </Col>
                      <Col span={18}>
                        <p
                          className={classNames(
                            activeTab === d.id
                              ? "tw-text-primary-color"
                              : "tw-text-secondary-color"
                          )}
                        >
                          {d.name}
                        </p>
                      </Col>
                    </Row>
                  </Button>
                </Col>
              ))}
            </Row>
          </div>
        </Col>
        <Col span={18}>
          <div className="card-container">
            {activeTab === 1 && <InfluencerEditMyProfile />}
            {activeTab === 2 && <ProfileSetting />}
            {activeTab === 3 && <h1>Password</h1>}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default InfluencerProfileSetting;
