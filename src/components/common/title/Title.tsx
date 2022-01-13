import classNames from "classnames";
import { capitalize } from "lodash";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  path: string;
  hideViewAll?: boolean;
  description?: string;
  className?: string;
};

const Title = ({
  title,
  hideViewAll = false,
  path = "#",
  description,
  className,
}: Props) => {
  return (
    <>
      <div className="tw-flex tw-justify-between">
        <h3 className={classNames("tw-section-title", className)}>
          {capitalize(title)}
        </h3>
        {!hideViewAll && (
          <Link
            to={path}
            className="tw-section-description tw-text-blue-500 tw-underline hover:tw-underline"
          >
            View All
          </Link>
        )}
      </div>
      {Boolean(description) && (
        <p className="tw-section-description tw-mt-2">{description}</p>
      )}
    </>
  );
};

export default Title;
