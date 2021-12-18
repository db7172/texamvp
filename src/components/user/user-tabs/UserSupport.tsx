import whatsapp from "../../../assets/svg/user/whatsapp.svg";
import call from "../../../assets/svg/user/call.svg";
import email from "../../../assets/svg/user/email.svg";

// import support from "../../../assets/png/support.png";

const contactImg = [
  {
    img: whatsapp,
    link: "",
  },
  {
    img: call,
    link: "",
  },
  {
    img: email,
    link: "",
  },
];

const UserSupport = () => {
  return (
    <div className="tw-p-5">
      <div style={{ zIndex: 1 }} className="tw-bg-white tw-p-5 tw-relative">
        <p className="tw-text-center tw-mt-7 tw-mb-5 tw-text-2xl tw-font-medium">
          Stuck? Contact Us!
        </p>
        <p className="tw-text-center tw-text-secondary-color tw-mb-16 tw-w-3/4 tw-mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis
          enim, tristique amet justo, lectus in sed. Lorem ipsum dolor sit amet,
          consectetur adip
        </p>
        <div className="tw-flex tw-justify-evenly tw-mb-10">
          {contactImg.map((d, i) => (
            <div
              className="tw-h-32 tw-w-32 tw-shadow-card tw-rounded-lg tw-flex-center tw-cursor-pointer"
              key={i}
            >
              <img src={d.img} alt="support" />
            </div>
          ))}
        </div>
        {/* <div
          style={{ zIndex: -1 }}
          className="tw-absolute tw-bottom-24 tw-right-0 tw-opacity-70"
        >
          <img src={support} alt="support" />
        </div> */}
      </div>
    </div>
  );
};

export default UserSupport;
