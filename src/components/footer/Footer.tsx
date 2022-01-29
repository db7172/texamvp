import Container from "../common/container/Container";
import logo from "../../assets/svg/logo.svg";
import fb from "../../assets/svg/fb.svg";
import whatsapp from "../../assets/svg/whatsapp.svg";
import twitter from "../../assets/svg/twitter.svg";
import linkedin from "../../assets/svg/linkedin.svg";
import classNames from "classnames";
import { Link } from "react-router-dom";

type FooterDataOption = {
  option: string;
  path: string;
  extraInfo?: {
    info: string;
    type: "bedg" | "link";
  };
};

type FooterData = {
  title: string;
  options: FooterDataOption[];
};

const socials = [twitter, fb, whatsapp, linkedin];

const data: FooterData[] = [
  {
    title: "Company",
    options: [
      {
        option: "About us",
        path: "/landingpage/aboutus",
      },
      {
        option: "Careers",
        path: "#",
        extraInfo: {
          info: "We're hiring!",
          type: "bedg",
        },
      },
      {
        option: "Terms of Service",
        path: "/landingpage/terms",
      },
      {
        option: "Privacy Policy",
        path: "/landingpage/policy",
      },
      {
        option: "Site Map",
        path: "#",
      },
    ],
  },
  {
    title: "Product",
    options: [
      {
        option: "Activities",
        path: "/landingpage/activity",
      },
      {
        option: "Events",
        path: "/landingpage/event",
      },
      {
        option: "Workcation",
        path: "/landingpage/workcation",
      },
      {
        option: "Retreate",
        path: "/landingpage/retreat",
      },
      {
        option: "Travel Infulancer ?",
        path: "/influencer",
        extraInfo: {
          info: "Join Us",
          type: "link",
        },
      },
    ],
  },
];

const resources: FooterData = {
  title: "Resources",
  options: [
    {
      option: "Travel Guide",
      path: "#",
    },
    {
      option: "Reviwes",
      path: "/reviews",
    },
    {
      option: "Blog",
      path: "#",
    },
  ],
};

const contact = {
  title: "Contact",
  contactNo: "1800-1256-1200",
  email: "Info@texatrove.com",
};

const getFooterLinkSection = (d: FooterData) => {
  return (
    <div key={d.title}>
      <h4 className="tw-section-title tw-font-medium tw-mb-8">{d.title}</h4>
      <div className="tw-flex tw-flex-col tw-gap-4 tw-text-base tw-font-medium tw-text-secondary-color">
        {d.options.map((o, j) => (
          <div key={j}>
            <Link to={o.path}>
              <span>{o.option}</span>
              {o.extraInfo && (
                <span
                  className={classNames(
                    getClassName(o.extraInfo.type),
                    "tw-ml-2"
                  )}
                >
                  {o.extraInfo.info}
                </span>
              )}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const getClassName = (type: "bedg" | "link") => {
  return type === "link"
    ? "tw-text-blue-500  tw-underline"
    : "tw-bg-c4c4c4 tw-rounded-md tw-py-0.5 tw-px-2 tw-font-normal tw-text-xs tw-text-primary-color";
};

const Footer = () => {
  return (
    <Container>
      <section className="tw-pt-20 tw-pb-28 tw-border-b-2 tw-mt-20 tw-flex tw-gap-28">
        <div>
          <div className="tw-mb-8">
            <img src={logo} alt="logo" />
          </div>
          <p className="tw-w-80 tw-mb-10 tw-font-lato tw-leading-7 tw-text-secondary-color tw-text-base">
            Texatrove is a leading cloud-based development platform with
            millions of users worldwide. We make it easy for everyone to create
            a beautiful, professional web presence.
          </p>
          <div className="tw-flex tw-gap-5">
            {socials.map((d, i) => (
              <div
                key={i}
                className="tw-w-10 tw-h-10 tw-flex-center tw-bg-gray-background tw-rounded-full tw-p-1"
              >
                <img src={d} alt="socials" />
              </div>
            ))}
          </div>
        </div>
        <div className="tw-flex tw-justify-between tw-flex-1">
          {data.map((d) => getFooterLinkSection(d))}
          <div>
            {getFooterLinkSection(resources)}
            <div className="tw-mt-8">
              <h4 className="tw-section-title tw-font-medium tw-mb-6">
                {contact.title}
              </h4>
              <div className="tw-flex tw-flex-col tw-gap-4 tw-text-base tw-font-medium tw-text-secondary-color">
                <p>{contact.contactNo}</p>
                <p>
                  <a
                    className="hover:tw-text-blue-500"
                    href={`mailto:${contact.email}`}
                  >
                    {contact.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tw-py-7">
        <p className="tw-text-secondary-color tw-text-base tw-font-medium">
          © 2021 Texatrove Technologies Pvt. Ltd. All rights reserved.
        </p>
      </section>
    </Container>
  );
};

export default Footer;
