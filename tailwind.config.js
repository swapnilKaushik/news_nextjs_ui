/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xxxs: "320px",
      xxs: "375px",
      xs: "425px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      ui: "1380px",
      xxl: "1440px",
      "2xl": "1536px",
      "2xxl": "1680px",
      "3xl": "1920px",
      "max-2xl": { max: "1536px" },
      "max-ui": { max: "1380px" },
      "max-xl": { max: "1280px" },
      "max-lg": { max: "1024px" },
      "max-md": { max: "768px" },
      "max-sm": { max: "640px" },
      "max-xs": { max: "425px" },
      "max-xxs": { max: "375px" },
      "max-xxxs": { max: "320px" },
      "max-custom1": { raw: "(max-height: 600px),(max-width:768px)" },
      custom1: { raw: "(min-height: 600px) and (min-width:768px)" },
      custom2: { raw: "(min-height: 1024px) and (min-width:768px)" },
      custom3: { raw: "(min-height: 1024px) and (min-width:1024px)" },
    },
    colors: {
      primary: "#1A1A1A",
      secondary: "#000000",
      tertiary: "#FF5E15",
      "primary-color": "#1A1A1A",
      "secondary-color": "#000000",
      "tertiary-color": "#FF5E15",
      "primary-bg-color": "#1A1A1A",
      "secondary-bg-color": "#000000",
      "tertiary-bg-color": "#FF5E15",
      "primary-text-color": "#FFFFFF",
    },
    extend: {},
  },
  plugins: [],
};
