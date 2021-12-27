import { Carousel, Rate } from "antd";
import profilePic from "../../assets/png/profile.png";
import { defaultSettings } from "../../utils/utils";

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
  {
    img: profilePic,
    name: "Lorem Ipsum",
    ratting: 4,
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

const ViewMoreTestimonial = ({
  slidesToShow = 1,
  arrows = false,
}: {
  slidesToShow?: number;
  arrows?: boolean;
}) => {
  const setting = {
    ...defaultSettings,
    arrows,
    slidesToShow,
  };
  return (
    <section>
      <Carousel autoplay {...setting}>
        {mockTestimonial.map((d, i) => (
          <div key={i} className="tw-p-2">
            <div className="tw-bg-white tw-p-3 tw-shadow-card tw-rounded-lg">
              <div className="tw-flex tw-justify-center">
                <img
                  className="tw-rounded-full"
                  src={d.img}
                  alt="profile-pic"
                />
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
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default ViewMoreTestimonial;
