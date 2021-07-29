import { Carousel } from "antd";
import React from "react";
import { BLOGS } from "../../../constant/dummyData";
import { defaultSettings } from "../../../utils/utils";
import BlogCard from "../../card/blog-card/BlogCard";
import Title from "../title/Title";

const BlogCarousel = ({ title }) => {
  const settings = {
    ...defaultSettings,
    slidesToShow: 3,
  };
  return (
    <div>
      <Title title={title} />
      <div className="tw-mt-5">
        <Carousel autoplay {...settings}>
          {BLOGS.map((d, i) => (
            <BlogCard {...d} key={i} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default BlogCarousel;
