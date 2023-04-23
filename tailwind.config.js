import bg from "../ECOshop/public/image/bg 2.png";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgLogin: "#3E18D9",
        purpleC: "#6F11E1",
        grayC: "#B7B7B7",
        button: "#6F11E1",
        table: "#E4E4E4",
        table2: "#F9F9F9",
        whiteC: "	rgb(0,0,0,0.5)",
        success: "#E8FFE4",
        greenC: "#1BAC03",
        blueC: "#6F11E1",
      },
      backgroundImage: {
        "hero-lg": "url('../ECOshop/public/image/bg 2.png')",
      },
    },
  },
  plugins: [],
};
