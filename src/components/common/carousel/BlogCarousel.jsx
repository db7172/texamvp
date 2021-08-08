import { Carousel } from "antd";
import React from "react";
import { BLOGS } from "../../../constant/dummyData";
import { defaultSettings } from "../../../utils/utils";
import BlogCard from "../../card/blog-card/BlogCard";
import Title from "../title/Title";

const BlogCarousel = ({ title, description }) => {
  const settings = {
    ...defaultSettings,
    slidesToShow: 3,
  };
  return (
    <div>
      <Title title={title} description={description} />
      <div className="tw-mt-3 menual-carousal">
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
