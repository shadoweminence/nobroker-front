/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        blue: "#3f51b5",
        dark_blue: "#283593",
        red: "#e3324a",
      },
    },
  },
  plugins: [],
};
