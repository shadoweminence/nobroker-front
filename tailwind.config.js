/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#3f51b5",
        dark_blue: "#283593",
        red: "#e3324a",
        green: "#007a6f",
        gray: "#787676",
        lightPink: "#f4f4f4",
      },
    },
  },
  plugins: [],
};
