import { Progress } from "antd";

type Props = {
  title: string;
  actual: number;
  total: number;
};

const ProgressRatting = ({ title, actual, total }: Props) => {
  const percent = (actual / total) * 100;
  return (
    <div>
      <p className="tw-mb-1 tw-text-xs">{title}</p>
      <div className="tw-flex tw-gap-5 tw-items-center">
        <Progress
          percent={percent}
          size="small"
          showInfo={false}
          status="active"
        />
        <p>{total}</p>
      </div>
    </div>
  );
};

export default ProgressRatting;
