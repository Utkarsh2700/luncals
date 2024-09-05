/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        jakartaSans: ["Plus+Jakarta+Sans"],
      },
      dropShadow: {
        Card: "5.67px 5.67px 3.78px rgba(0, 0, 0, 0.40)",
        LeftButton: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        Button2: "9px 10px 7.1px #000000 0.40",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
        "5xl": [
          "(4px -5px 30px 5px #101213)",
          "(-5px -3px 30px -10px #96BEE7)",
        ],
      },
    },
  },
  plugins: [],
};
