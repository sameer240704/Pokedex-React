/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "background-image": "url('./assets/image/background-image.jpg')",
      },
      colors: {
        "regal-blue": "#243C5A",
        "pokemon-red": "#DC0A2D",
        "pokemon-border-red": "#99061F",
        "hinge-color": "#D40230"
      },
      height: {
        "600": "600px",
        "521": "521px",
        "446": "446px",
        "480": "480px",
        "370": "370px",
        "100": "100px",
        "70": "70px",
        "40": "40px",
        "5": "5px"
      },
      width: {
        "500": "500px",
        "411.5": "411.5px",
        "300": "300px",
        "250": "250px",
        "110": "110px",
        "100": "100px",
        "70": "70px",
        "50": "50px",
        "20": "20px"
      },
      spacing: {
        "550px": "550px",
        "384px": "384px",
        "300px": "300px",
        "150px": "150px",
        "70.5px": "70.5px"
      },
      margin: {
        
      },
      rotate: {
        "21.4": "21.4deg"
      },
      borderWidth: {
        "5": "5px"
      },
      keyframes: {
        colorBlue: {
          '0%, 100%': {backgroundColor: "#2b6fff"},
          '10%, 90%': {backgroundColor: "#1963ff"},
          '20%, 80%': {backgroundColor: "#0052ff"},
          '30%, 70%': {backgroundColor: "#0048e0"},
          '40%, 60%': {backgroundColor: "#003dbd"},
          '50%': {backgroundColor: "#0037ab"}
        },
        colorRed: {
          '0%, 100%': {backgroundColor: "#ff3333"},
          '10%, 90%': {backgroundColor: "#ff1c1c"},
          '20%, 80%': {backgroundColor: "#ff0000"},
          '30%, 70%': {backgroundColor: "#e30000"},
          '40%, 60%': {backgroundColor: "#c90000"},
          '50%': {backgroundColor: "#b80000"}
        },
        colorYellow: {
          '0%, 100%': {backgroundColor: "#ffd324"},
          '10%, 90%': {backgroundColor: "#ffd014"},
          '20%, 80%': {backgroundColor: "#ffcc00"},
          '30%, 70%': {backgroundColor: "#e6b800"},
          '40%, 60%': {backgroundColor: "#d1a700"},
          '50%': {backgroundColor: "#bf9900"}
        },
        colorGreen: {
          '0%, 100%': {backgroundColor: "#21ff73"},
          '10%, 90%': {backgroundColor: "#14ff6b"},
          '20%, 80%': {backgroundColor: "#03ff60"},
          '30%, 70%': {backgroundColor: "#00e856"},
          '40%, 60%': {backgroundColor: "#00d64f"},
          '50%': {backgroundColor: "#00c448"}
        }
      },
      animation: {
        colorBlue: "colorBlue 1s ease-in-out infinite",
        colorRed: "colorRed 1s ease-in-out infinite",
        colorYellow: "colorYellow 1s ease-in-out infinite",
        colorGreen: "colorGreen 1s ease-in-out infinite",
      }
    },
  },
  plugins: [],
};
