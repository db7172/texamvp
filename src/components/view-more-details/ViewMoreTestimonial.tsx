import { Carousel, Rate } from "antd";
import profilePic from "../../assets/png/profile.png";

const mockTestimonial = [
  {
    img: profilePic,
    name: "Darshan Bhatt",
    ratting: 5,
    review:
      "Enim sit accumsan, in sit justo. Porttitor fermentum ultrices at platea. Tempor, vestibulum tellus varius orci viverra.",
  },
  {
    img: profilePic,
    name: "Lorem Ipsum",
    ratting: 4,
    review:
      "Enim sit accumsan, in sit justo. Porttitor fermentum ultrices at platea. Tempor, vestibulum tellus varius orci viverra.",
  },
];

const ViewMoreTestimonial = () => {
  return (
    <section>
      <Carousel autoplay dots={false}>
        {mockTestimonial.map((d, i) => (
          <div key={i}>
            <div className="tw-flex tw-justify-center">
              <img className="tw-rounded-full" src={d.img} alt="profile-pic" />
            </div>
            <h4 className="tw-font-semibold tw-text-center tw-mt-4">
              {d.name}
            </h4>
            <div className="tw-flex tw-justify-center">
              <Rate
                className="tw-text-base"
                disabled
                defaultValue={d.ratting}
              />
            </div>
            <p className="tw-text-center tw-text-secondary-color tw-mt-5">
              {d.review}
            </p>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default ViewMoreTestimonial;
