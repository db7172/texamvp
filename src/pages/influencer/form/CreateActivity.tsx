import lamp from "../../../assets/svg/lamp.svg";
import video from "../../../assets/png/influencer/video.png";

const CreateActivity = ({ title }: { title: string }) => {
  return (
    <div className="tw-w-80 popover-right">
      <div className="popover-right-inner">
        <div className="lamp-icon-container">
          <img src={lamp} alt="lamp" />
        </div>
        <h4 className="tw-text-lg tw-font-medium tw-mb-3">{title}</h4>
        <div className="tw-mb-4">
          <img src={video} alt="video" />
        </div>
        <p className="tw-text-secondary-color">
          Nunc molestie auctor eget vulputate venenatis, etiam ac orci. Tortor
          quam dolor amet sed urna lorem. Semper interdum odio tempus sit ac
          ornare tortor maecenas elementum. Mauris senectus etiam facilisi
          consequat sed mauris, enim.
        </p>
      </div>
    </div>
  );
};

export default CreateActivity;
