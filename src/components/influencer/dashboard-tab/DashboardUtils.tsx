import { AdditionalInfoType } from "Models";

export const addtionalInfomation = (obj: AdditionalInfoType) => {
  return (
    <div className="tw-p-2 tw-w-36">
      {Object.entries(obj).map(([key, value]) => (
        <div className="tw-flex tw-justify-between">
          <span>{key}</span>
          <span>{value}</span>
        </div>
      ))}
    </div>
  );
};
