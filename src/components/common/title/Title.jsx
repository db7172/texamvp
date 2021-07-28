import React from "react";
import { Link } from "react-router-dom";

const Title = ({ title, path, description }) => {
  return (
    <>
      <div className="tw-flex tw-justify-between">
        <h3 className="tw-section-title">{title}</h3>
        <Link
          to={path}
          className="tw-text-blue-500 tw-underline tw-text-lg tw-font-bold"
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
