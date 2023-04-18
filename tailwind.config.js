import bg from "../ECOshop/public/image/bg 2.png";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgLogin: "#3E18D9",
        purpleC: "#6F11E1",
      },
      backgroundImage: {
        "hero-lg": "url('../ECOshop/public/image/bg 2.png')",
      },
    },
  },
  plugins: [],
};
