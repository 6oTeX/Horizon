/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.ts",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {},
    fontFamily: {
      abc: ["Jura", "sans-serif"],
      second: ["Roboto", "sans-serif"],
    },
    colors: {
      primary: "#90a9df",
      secondary: "#7684b4",
      third: "#d2d9ef",
      fourth: "#201e1e",
      fifth: "#e8eaf6",
      transparent: "transparent",
      transparentBlack: "rgba(0, 0, 0, 0)",
      black: "#000",
      white: "#fff",
      buttonBlue: "#3554d1",
      orange: "#c28e40",
      warning: "#ff0000",
    },
  },
  plugins: [],
};
