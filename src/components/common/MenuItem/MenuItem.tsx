type MenuProps = {
  icon: string;
  title: string;
};

const MenuItem = ({ icon, title }: MenuProps) => {
  return (
    <div className="tw-flex tw-items-center tw-gap-5 tw-cursor-pointer">
      <div className="tw-bg-gray-background tw-p-1.5 tw-rounded-md">
        <img src={icon} alt="icon" />
      </div>
      <div>
        <p className="tw-text-base tw-text-primary-color">{title}</p>
      </div>
    </div>
  );
};

export default MenuItem;
