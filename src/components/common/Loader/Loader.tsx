import classNames from "classnames";
import { FunctionComponent } from "react";
import "./loader.css";

type Props = {
  size?: "default" | "small";
  type?: "default" | "success" | "error" | "white";
  className?: string;
};

const Loader: FunctionComponent<Props> = ({
  size = "default",
  type = "default",
  className = "",
}: Props): JSX.Element => {
  let classes = "loader";
  switch (size) {
    case "small":
      classes += " loader-sm";

      break;
    default:
      break;
  }

  switch (type) {
    case "success":
      classes += " loader-success";

      break;
    case "error":
      classes += " loader-error";

      break;
    case "white":
      classes += " loader-white";

      break;
    default:
      break;
  }

  return (
    <div className={classNames(classes, className)} data-testid="loader" />
  );
};

export default Loader;
