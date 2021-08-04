import PropTypes from "prop-types";
import { getActivityPagePath } from "../../../constant/comman.const";
import { Link } from "react-router-dom";
import { lowerCase } from "lodash";

const IconCard = ({ path, name, number }) => {
  return (
    <Link to={getActivityPagePath(lowerCase(name))}>
      <div className="tw-shadow-md tw-rounded-xl md:tw-h-36 md:tw-w-36 tw-h-32 tw-w-32 tw-flex tw-justify-evenly tw-items-center tw-flex-col tw-bg-white">
        <div>
          <img className="tw-w-full tw-h-auto" src={path} alt={name} />
        </div>
        <div className="tw-flex tw-items-center tw-justify-center tw-flex-col">
          <h5 className="tw-mb-1 tw-text-base tw-text-center tw-font-medium">
            {name}
          </h5>
          <p className="tw-font-lato tw-text-secondary-color">
            {number} Activity
          </p>
        </div>
      </div>
    </Link>
  );
};

IconCard.propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};

export default IconCard;
