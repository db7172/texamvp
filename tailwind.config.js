const defaultTheme = require("tailwindcss/defaultTheme");

const primaryBackground = "#FCFCFC";
const gray = "#F5F5F5";
const primaryText = "#0E0E0E";
const yellow = "#FFEE58";
const darkYellow = "#FFC107";
const secondaryText = "#939393";
const green = "#00B112";
const lightGreen = "#29DF0B";
const lightGray = "#C4C4C4";

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  prefix: "tw-",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      boxShadow: {
        "nav-bar": "0px 2px 2px rgba(0, 0, 0, 0.04)",
        tab: "0px 4px 30px rgba(230, 230, 230, 0.3), 4px 0px 30px rgba(229, 229, 229, 0.3)",
        card: "4px 4px 30px rgba(196, 196, 196, 0.3)",
        "icon-card": "4px 4px 25px rgba(196, 196, 196, 0.25)",
      },
      backgroundColor: {
        "primary-color": primaryBackground,
        "secondary-color": yellow,
        "green-background": green,
        "gray-background": gray,
        "lightGreen-background": lightGreen,
        "darkYellow-background": darkYellow,
      },
      borderColor: {
        "primary-yellow": yellow,
        "gray-color": lightGray,
      },
      textColor: {
        "primary-color": primaryText,
        "secondary-color": secondaryText,
        "yellow-color": yellow,
      },
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
        lato: ["Lato", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        h1: "2.5rem",
        h2: "2rem",
        h3: "1.75rem",
        h4: "1.5rem",
        h5: "1.25rem",
        h6: "1rem",
        body: "14px",
      },
      minHeight: {
        32: "8rem",
        624: "39rem",
      },
      padding: {
        "5px": "5px",
      },
      zIndex: {
        9999: 9999,
      },
    },
  },
  variants: {
    extend: {
      borderStyle: ["hover"],
      borderWidth: ["hover"],
      display: ["group-hover"],
    },
  },
  plugins: [],
};
