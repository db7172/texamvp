import { capitalize } from "lodash";
import { Link } from "react-router-dom";

const Title = ({ title, path, description }) => {
  return (
    <>
      <div className="tw-flex tw-justify-between">
        <h3 className="tw-section-title">{capitalize(title)}</h3>
        <Link
          to={path}
          className="tw-section-description tw-text-blue-500 tw-underline"
        >
          View All
        </Link>
      </div>
      {Boolean(description) && (
        <p className="tw-section-description tw-mt-2">{description}</p>
      )}
    </>
  );
};

export default Title;
