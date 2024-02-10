/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "background-image": "url('/assets/background-image.jpg')",
      },
      colors: {
        "regal-blue": "#243C5A",
        "pokemon-red": "#DC0A2D",
        "pokemon-border-red": "#99061F",
      },
      height: {
        "156": "600px",
        "130": "446px",
        "140": "480px"
      },
      width: {
        "128": "500px",
        "100": "411.5px",
        "40": "40px",
        "80": "150px"
      },
      spacing: {
        "150px": "150px",
        "70.5px": "70.5px"
      },
      margin: {
        
      },
      rotate: {
        "21.4": "21.4deg"
      }
    },
  },
  plugins: [],
};
