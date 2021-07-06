const defaultTheme = require("tailwindcss/defaultTheme");

const primaryBackground = "#FCFCFC";
const primaryText = "#0E0E0E";
const backgroundYellow = "#FFEE58";
const secondaryText = "#939393";

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  prefix: "tw-",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      // xxl: "1920px",
    },
    extend: {
      boxShadow: {
        "nav-bar": "0px 2px 2px rgba(0, 0, 0, 0.04)",
        tab: "0px 4px 30px rgba(230, 230, 230, 0.3), 4px 0px 30px rgba(229, 229, 229, 0.3);",
      },
      backgroundColor: {
        "primary-color": primaryBackground,
        "secondary-color": backgroundYellow,
      },
      borderColor: {},
      textColor: {
        "primary-color": primaryText,
        "secondary-color": secondaryText,
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
