import { useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";

function NavBarOption(props) {
  // const { path, data: pageInfo } = data;
  const { path } = props;
  const { data } = props;
  // const { title, options } = pageInfo;
  let { url } = useRouteMatch();

  const [viewAllPath, setViewAllPath] = useState("#");

  useEffect(() => {
    switch (path) {
      case "retreat":
        setViewAllPath("retreats");
        break;

      case "workcation":
        setViewAllPath("workcations");
        break;

      case "event":
        setViewAllPath("events");
        break;

      case "activity":
        setViewAllPath("activities");
        break;

      default:
        break;
    }
  }, [path]);

  const handleLinkClick = (label = "") => {
    console.log(`${url}${path}/${label}`);
    props.toggleNavBar();
  };

  return (
    <div className={`${props.isShow ? "tw-block" : "tw-hidden"} tw-py-6`}>
      <div>
        <h3 className="tw-text-lg tw-font-medium">
          {path.charAt(0).toUpperCase() + path.slice(1)}
        </h3>
      </div>
      <div className="tw-flex tw-mt-2">
        {/* {options.map((option, index) => (
          <ul key={index} className="tw-mr-12">
            {option.map((label, i) => (
              <li
                key={i}
                className="tw-p-1 tw-cursor-pointer"
                onClick={() => handleLinkClick(label)}
              >
                <Link to={`${url}${path}/${label}`}>{label}</Link>
              </li>
            ))}
            {options.length - 1 === index && (
              <li
                key={"viewAll"}
                className="tw-p-1 tw-cursor-pointer tw-text-blue-600 tw-underline"
                onClick={() => handleLinkClick()}
              >
                <Link to={`${url}${viewAllPath}`}>View All</Link>
              </li>
            )}
          </ul>
        ))} */}
        {/* {pageInfo.map((option, index) => ( */}
        <ul className="tw-mr-12">
          {data ? (
            <>
              {data.map((data, i) => (
                <li
                  key={i}
                  className="tw-p-1 tw-cursor-pointer"
                  onClick={() => handleLinkClick(data.id)}
                >
                  <Link to={`${url}${path}/${data.id}`}>{data.data.name}</Link>
                </li>
              ))}
              <li
                key={"viewAll"}
                className="tw-p-1 tw-cursor-pointer tw-text-blue-600 tw-underline"
                onClick={() => handleLinkClick()}
              >
                <Link to={`${url}${viewAllPath}`}>View All</Link>
              </li>
            </>
          ) : (
            <h3>Loading...</h3>
          )}
        </ul>
        {/* ))} */}
      </div>
    </div>
  );
}

export default NavBarOption;
