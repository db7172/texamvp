import React from "react";
import { defaultSettings } from "../../../utils/utils";
import person from "../../../assets/png/person.png";
import { TESTIMONIALS } from "../../../constant/dummyData";
import TestimonialCard from "../../card/testimonial-card/TestimonialCard";
import { Carousel } from "antd";

const Testimonials = () => {
  const settings = {
    ...defaultSettings,
    responsive: [],
  };
  return (
    <Carousel className="menual-carousal" autoplay {...settings}>
      {TESTIMONIALS.map((d, i) => (
        <TestimonialCard {...d} image={person} key={i} />
      ))}
    </Carousel>
  );
};

export default Testimonials;
