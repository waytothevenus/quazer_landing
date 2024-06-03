/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "surface-primary": "#101414",
        "border-primary": "#212a2b",
        "text-tertiary": "#a8b6b8",
        "primary-strong": "#1a74e2",
        "text-primary": "#f9fafb",
        "surface-tertiary": "#354346",
        "text-secondary": "#dfe6e7",
        dimgray: "#5c696b",
        cornflowerblue: "#409cff",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        zekton: "Zekton",
      },
      borderRadius: {
        "13xl": "32px",
        sm: "14px",
        "base-4": "15.4px",
        "81xl": "100px",
        "6xs-7": "6.7px",
        "radius-block-large": "32px",
        "radius-button": "12px",
        "radius-input": "14px",
      },
    },
    fontSize: {
      sm: "14px",
      mini: "15px",
      base: "16px",
      "lg-8": "18.8px",
      "4xl-8": "23.8px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
