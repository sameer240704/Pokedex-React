/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "background-image": "url('/assets/background-image.jpg')",
      },
      colors: {
        "regal-blue": "#243c5a",
      },
      height: {
        "156": "600px",
      },
      width: {
        "128": "500px",
      },
    },
  },
  plugins: [],
};
