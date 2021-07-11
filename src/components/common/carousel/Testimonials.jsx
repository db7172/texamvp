import React from "react";
import Slider from "react-slick";
import { defaultSettings } from "../../../utils/utils";
import person from "../../../assets/png/person.png";
import { TESTIMONIALS } from "../../../constant/dummyData";
import TestimonialCard from "../../card/testimonial-card/TestimonialCard";

const Testimonials = () => {
  const settings = {
    ...defaultSettings,
    responsive: [],
  };
  return (
    <Slider {...settings}>
      {TESTIMONIALS.map((d, i) => (
        <TestimonialCard {...d} image={person} key={i} />
      ))}
    </Slider>
  );
};

export default Testimonials;
