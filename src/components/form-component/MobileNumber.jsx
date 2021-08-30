const MobileNumber = ({ name, value, onChange, disabled }) => {
  const handleChange = (e) => {
    let value = e.target.value;
    value = value.replace(/[^0-9]/g, "").replace(/(\..*?)\..*/g, "$1");
    onChange(value);
  };

  return (
    <div className="tw-relative tw-form-input tw-p-0.5 tw-rounded-lg">
      <span className="tw-absolute tw-left-4 tw-text-base tw-top-1/4 tw-border-r-2 tw-pr-2 tw-border-gray-color">
        + 91
      </span>
      <input
        className="tw-pl-16 tw-py-2 tw-w-full tw-text-base focus:tw-outline-none"
        type="tel"
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        maxLength={10}
        placeholder="Enter the Number"
        disabled={disabled}
      />
    </div>
  );
};

export default MobileNumber;
