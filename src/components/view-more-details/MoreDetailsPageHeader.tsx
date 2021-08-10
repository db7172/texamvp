import { StarFilled } from "@ant-design/icons";
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
      <div className="tw-flex tw-items-center tw-gap-4">
        <div className="tw-flex tw-items-center">
          <h1 className="tw-section-title">
            {title}{" "}
            {duration && (
              <span className="tw-text-base tw-align-bottom">({duration})</span>
            )}
          </h1>
        </div>
        <div className="tw-flex tw-items-center tw-flex-shrink-0">
          {Array(ratting)
            .fill(null)
            .map((_, i) => (
              <StarFilled style={{ fontSize: "12px", color: "#F9C005" }} />
            ))}
          <p className="tw-text-xs tw-text-secondary-color tw-ml-1">
            (<span>{review}</span>)
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
