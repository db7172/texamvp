import { Carousel } from "antd";
import { TESTIMONIAL } from "./mockData";
import { defaultSettings } from "../../../utils/utils";
import TestimonialInfluencerCard from "./TestimonialInfluencerCard";
import Title from "../../common/title/Title";

const InfluencerTestimonials = () => {
  const settings = {
    ...defaultSettings,
    slidesToShow: 4,
  };

  return (
    <div>
      <Title
        title="Testomonials"
        path="#"
        className="tw-text-3xl tw-font-medium"
        hideViewAll
      />
      <div className="tw-mt-3 menual-carousal">
        <Carousel autoplay {...settings}>
          {TESTIMONIAL.map((d, i) => (
            <TestimonialInfluencerCard data={d} key={i} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default InfluencerTestimonials;
