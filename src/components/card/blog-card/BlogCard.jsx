import React from "react";
import Tags from "../../Tags/Tags";

const BlogCard = ({ imgUrl, title, tags }) => {
  return (
    <div className="tw-mx-2 tw-my-4 tw-bg-white tw-shadow-card tw-rounded-lg tw-p-3">
      <div>
        <img className="tw-rounded-lg" src={imgUrl} alt={title} />
      </div>
      <div className="tw-mt-5 tw-text-secondary-color tw-h-24 tw-flex tw-flex-col tw-justify-between">
        <h4 className="tw-font-medium tw-text-lg tw-mb-2 tw-text-primary-color">
          {title}
        </h4>
        <div>
          {tags.map((t, i) => (
            <Tags className="tw-mr-2" tag={t} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
