import { Rate } from "antd";
import { capitalize } from "lodash";
import Tags from "../Tags/Tags";

type Props = {
  title: string;
  duration?: string;
  ratting: number;
  review: string;
};

const tags = ["india", "bali", "mumbai", "paro", "bhutan"];

const MoreDetailsPageHeader = ({ title, duration, ratting, review }: Props) => {
  return (
    <>
      <div className="tw-flex tw-justify-between tw-items-center tw-gap-4">
        <h1 className="tw-section-title tw-flex tw-items-center">
          {title}{" "}
          {duration && (
            <span className="tw-text-base tw-align-bottom tw-ml-2">
              ({duration})
            </span>
          )}
        </h1>

        <div className="tw-flex tw-items-center tw-flex-shrink-0">
          <Rate
            disabled
            defaultValue={ratting || 5}
            style={{ fontSize: "14px" }}
          />
          <p className="tw-text-xs tw-text-secondary-color tw-ml-3">
            (<span>{capitalize(`Based on ${review}`)}</span>)
          </p>
        </div>
      </div>
      <div className="tw-mt-3">
        {tags.map((t, i) => (
          <Tags className="tw-mr-6" tag={t} key={i} />
        ))}
      </div>
    </>
  );
};

export default MoreDetailsPageHeader;
