/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        layoutBlue: "#090b3d",
        greetBlue: "#00b7fa",
        reactBlue: "#00CCFF",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      spacing: {
        100: "32rem",
      },
    },
  },
  plugins: [],
};
