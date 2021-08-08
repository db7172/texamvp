type Props = {
  path: string;
  name: string;
  description: string;
  imgClassName?: string;
};

const IconCard = ({ path, name, description, imgClassName }: Props) => {
  return (
    <div className="tw-shadow-md tw-rounded-xl md:tw-h-36 md:tw-w-36 tw-h-32 tw-w-32 tw-flex tw-justify-evenly tw-items-center tw-flex-col tw-bg-white">
      <div className={imgClassName}>
        <img className="tw-w-full tw-h-auto" src={path} alt={name} />
      </div>
      <div className="tw-flex tw-items-center tw-justify-center tw-flex-col">
        <h5 className="tw-mb-1 tw-text-base tw-text-center tw-font-medium">
          {name}
        </h5>
        {Boolean(description) && (
          <p className="tw-font-lato tw-text-secondary-color">{description}</p>
        )}
      </div>
    </div>
  );
};

export default IconCard;
