import { Button, Modal } from "antd";
import { uniqueId } from "lodash";
import { useState } from "react";
import lamp from "../../../assets/svg/lamp.svg";

type DataProps = {
  title: string;
  description: string[];
};

export const RightSidePenal = ({ title, description }: DataProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <div className="tw-w-80 popover-right">
      <div className="popover-right-inner">
        <div className="lamp-icon-container">
          <img src={lamp} alt="lamp" />
        </div>
        <h4 className="tw-text-lg tw-font-medium tw-mb-3">{title}</h4>

        <ol className="tw-list-inside tw-list-decimal tw-text-secondary-color">
          {description.slice(0, 4).map((d) => (
            <li key={uniqueId()}>{d}</li>
          ))}
        </ol>
        <Button type="link" onClick={() => setIsModalVisible(true)}>
          <span className="tw-text-blue-500 tw-underline tw-font-normal">
            learn more
          </span>
        </Button>
      </div>
      <Modal
        title={title}
        visible={isModalVisible}
        footer={null}
        onCancel={() => setIsModalVisible(false)}
      >
        <ol className="tw-list-inside tw-list-decimal tw-text-secondary-color">
          {description.map((d) => (
            <li key={uniqueId()}>{d}</li>
          ))}
        </ol>
      </Modal>
    </div>
  );
};
