type Props = {
  handleCardClick: () => void;
  icon: string;
  title: string;
  description: string;
};

const UserCard = ({ handleCardClick, icon, title, description }: Props) => {
  return (
    <div
      className="tw-w-96 tw-p-5 tw-cursor-pointer tw-shadow-card tw-rounded-lg"
      onClick={handleCardClick}
    >
      <div>
        <div className="tw-h-16 tw-w-16 tw-mx-auto tw-rounded-full tw-flex-center tw-bg-gray-background">
          <img src={icon} alt="user icon" />
        </div>
      </div>
      <p className="tw-text-xl tw-text-center tw-mt-3">{title}</p>
      <p className="tw-text-secondary-color tw-mt-2 tw-w-52 tw-mx-auto tw-text-center">
        {description}
      </p>
    </div>
  );
};

export default UserCard;
