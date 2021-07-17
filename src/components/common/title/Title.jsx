import React from "react";
import { Link } from "react-router-dom";

const Title = ({ title, path }) => {
  return (
    <div className="tw-flex tw-justify-between">
      <h3 className="md:tw-text-4xl tw-text-2xl tw-font-medium">{title}</h3>
      <Link
        to={path}
        className="tw-text-blue-500 tw-underline md:tw-text-xl tw-text-base"
      >
        View All
      </Link>
    </div>
  );
};

export default Title;
