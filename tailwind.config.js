/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/components/footer.{js,ts,tsx}",
    "./src/components/Cards.jsx",
    "./src/components/Faqs.jsx",
    "./src/components/Highlight.jsx",
    "./src/components/LoginSignup.jsx",
    "./src/components/Modal.jsx",
    "./src/components/postProperty.jsx",
    "./src/components/QuickChat.jsx",
    "./src/components/Search.jsx",
    "./src/components/Testimonials.jsx",
    "./src/layout/*.{js,ts,tsx}",
    "./src/pages/*.{js,ts,tsx}",
    "./src/routes/*.{js,ts,tsx}",
  ],
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
