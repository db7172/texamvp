import { Button } from "antd";

type Props = {
  title: string;
  description: string;
  icon: string;
  buttonText: string;
};

const LaunchCard = ({ title, description, icon, buttonText }: Props) => {
  return (
    <div className="tw-bg-white tw-shadow-card tw-py-7 tw-px-5 tw-rounded-lg">
      <div className="tw-w-20 tw-h-20 tw-m-auto tw-bg-gray-background tw-rounded-full tw-flex-center tw-mb-7">
        <img src={icon} alt="icon" className="tw-w-7" />
      </div>
      <div className="tw-mb-10">
        <h4 className="tw-font-semibold tw-text-lg tw-mb-3">{title}</h4>
        <p className="tw-text-secondary-color">{description}</p>
      </div>
      <Button
        type="default"
        className="tw-texa-button tw-w-full tw-text-base tw-font-medium"
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default LaunchCard;
