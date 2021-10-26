import { Button, Rate } from "antd";
import { uniqueId } from "lodash";
import { ReviewData } from "../../influencer/dashboard-tab/completed-tab-component/CompletedTabComponent";

type Props = {
  d: ReviewData;
  ViewAll?: boolean;
  textForViewAll?: string;
  handleViewAllClick?: () => void;
};

const UserReview = ({
  d,
  ViewAll = false,
  handleViewAllClick,
  textForViewAll = "View All",
}: Props) => {
  return (
    <div>
      <div className="tw-flex tw-items-center tw-gap-3 tw-mb-5">
        <div className="tw-rounded-full tw-w-5 tw-h-5">
          <img className="tw-w-full" src={d.profilePic} alt="profilePic" />
        </div>
        <p className="tw-font-medium tw-text-base">{d.name}</p>
        {ViewAll && (
          <p
            className="tw-text-xs tw-text-blue-500 tw-underline tw-cursor-pointer"
            onClick={handleViewAllClick}
          >
            {textForViewAll}
          </p>
        )}
      </div>
      <div className="tw-flex tw-items-center tw-gap-3 tw-mb-5">
        <Rate disabled defaultValue={d.ratting} />
        <div className="tw-flex tw-gap-3">
          {d.tags.map((t) => (
            <p
              key={uniqueId()}
              className="tw-bg-gray-background tw-text-xs tw-rounded-md tw-font-medium tw-py-2 tw-px-3"
            >
              {t}
            </p>
          ))}
        </div>
      </div>

      <div>
        <h3 className="tw-text-base tw-font-medium tw-mb-2">{d.title}</h3>
        <p className="tw-text-secondary-color tw-font-lato">
          {d.comment.initialComment}
        </p>

        <Button type="default" className="tw-texa-button">
          Reply
        </Button>
      </div>
    </div>
  );
};

export default UserReview;
