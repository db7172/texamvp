import { startCase } from "lodash";
import React from "react";
import { Link } from "react-router-dom";

const DUMMY_DESCRIPTION =
  "The human instinct to explore new places and things is always there. People travel for all sorts of reasons, be it to spend time with their loved ones or today North Andaman and Baratang Island are also popular with travelers. From pristine beaches to bewildering";

const PageHeader = ({ title, description, path }) => {
  return (
    <>
      <h1 className="tw-text-4xl tw-font-medium">{startCase(title)}</h1>
      <p className="tw-text-lg tw-tracking-wide tw-text-secondary-color tw-mt-5">
        {description || DUMMY_DESCRIPTION}
      </p>
      <p className="tw-text-right tw-text-lg tw-text-blue-500 tw-underline">
        <Link to={path || "#"}>Read More</Link>
      </p>
    </>
  );
};

export default PageHeader;
