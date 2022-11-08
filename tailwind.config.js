/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "header-background": "url('/src/images/header_background.jpg')",
      },
      fontFamily: {
        "poppins": ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
