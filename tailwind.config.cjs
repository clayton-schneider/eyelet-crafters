/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

const FONT_FAMILY_BASE = [
  "system-ui",
  "-apple-system",
  "BlinkMacSystemFont",
  "Segoe UI",
  "Roboto",
  "Oxygen",
  "Ubuntu",
  "Cantarell",
  "Open Sans",
  "Helvetica Neue",
  "sans-serif",
];

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    fontFamily: {
      sans: ["Poppins", ...FONT_FAMILY_BASE],
      headline: ["Lato", ...FONT_FAMILY_BASE],
    },
    extend: {
      maxWidth: {
        "8xl": "1550px",
      },
      colors: {
        primary: "#283891",
        primLight: "#354AC0",
        cta: "#fcd40c",
        green: "#D4F0D4",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
