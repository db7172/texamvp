import React from "react";
import Tags from "../../Tags/Tags";

const BlogCard = ({ imgUrl, title, tags }) => {
  return (
    <div className="card-wrapper">
      <div className="card-container">
        <div>
          <img className="tw-rounded-lg" src={imgUrl} alt={title} />
        </div>
        <div className="tw-mt-5 tw-text-secondary-color tw-h-28 tw-flex tw-flex-col tw-justify-between">
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
    </div>
  );
};

export default BlogCard;
