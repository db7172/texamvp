import { Button } from "antd";
import Paragraph from "antd/lib/typography/Paragraph";
import classNames from "classnames";
import { startCase } from "lodash";
import PropTypes from "prop-types";
import React from "react";

// const DUMMY_DESCRIPTION =
//   "The human instinct to explore new places and things is always there. People travel for all sorts of reasons, be it to spend time with their loved ones or today North Andaman and Baratang Island are also popular with travelers. From pristine beaches to bewildering Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team.";

type Props = {
  title: string;
  className?: string;
  desc?: string;
};

const PageHeader = ({ title, className, desc }: Props) => {
  const [ellipsis, setEllipsis] = React.useState(true);
  return (
    <>
      <h1
        className={classNames("tw-section-title", className ? className : "")}
      >
        {startCase(title)}
      </h1>
      <Paragraph
        className="tw-section-description tw-mt-3 tw-mb-0"
        ellipsis={ellipsis ? { rows: 2, expandable: true, symbol: " " } : false}
      >
        {desc}
      </Paragraph>
      <p className="tw-text-right">
        <Button
          className="tw-text-blue-500 tw-mt-0 tw-p-0 hover:tw-text-blue-500 focus:tw-text-blue-500"
          type="link"
          onClick={() => setEllipsis(!ellipsis)}
        >
          <span className="tw-underline">
            {ellipsis ? "Read More" : "Read Less"}
          </span>
        </Button>
      </p>
    </>
  );
};

PageHeader.propType = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  path: PropTypes.string,
};

export default PageHeader;
