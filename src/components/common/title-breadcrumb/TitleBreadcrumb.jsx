import { Link } from "react-router-dom";

const TitleBreadcrumb = ({ titleLinks, className = "" }) => {
  return (
    <nav className={className}>
      <ol className="list-reset tw-py-2 tw-rounded tw-flex tw-items-center">
        {titleLinks.map((link, index) => (
          <li key={index}>
            {index < titleLinks.length - 1 ? (
              <span className="tw-flex tw-items-center">
                <Link className="link-title tw-font-medium" to={link.url}>
                  {link.name}
                </Link>
                <span className="link-title tw-px-2 tw-cursor-default">
                  <span
                    className="iconify"
                    data-icon="akar-icons:chevron-right"
                    data-inline="false"
                  />
                </span>
              </span>
            ) : link.url ? (
              <Link className="link-title tw-font-medium" to={link.url}>
                {link.name}
              </Link>
            ) : (
              <span className="link-title tw-pt-0.5 tw-font-medium tw-cursor-text">
                {link.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default TitleBreadcrumb;
