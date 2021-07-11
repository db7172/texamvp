import React from "react";
import Slider from "react-slick";
import { BLOGS } from "../../../constant/dummyData";
import { defaultSettings } from "../../../utils/utils";
import BlogCard from "../../card/blog-card/BlogCard";
import Title from "../title/Title";

const BlogCarousel = () => {
  const settings = {
    ...defaultSettings,
    slidesToShow: 3,
  };
  return (
    <div>
      <Title title="Binge worthy blogs by members" />
      <div className="tw-mt-16">
        <Slider {...settings}>
          {BLOGS.map((d, i) => (
            <BlogCard {...d} key={i} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BlogCarousel;
