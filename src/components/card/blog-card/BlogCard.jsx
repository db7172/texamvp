import React from "react";
import Tags from "../../Tags/Tags";

const BlogCard = ({ imgUrl, title, tags }) => {
  return (
    <div className="tw-card-wrapper tw-zoom-effect">
      <div className="card-container">
        <div className="card_img_height">
          <img className="tw-rounded-lg" src={imgUrl} alt={title} />
        </div>
        <div className="tw-mt-2 tw-text-secondary-color tw-h-28 tw-flex tw-flex-col tw-justify-between">
          <h3 className="tw-font-medium tw-text-base tw-mt-2 tw-text-primary-color">
            {title}
          </h3>
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
