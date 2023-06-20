/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        fondoCopas: "url(/public/images/1.jpg)",
        icon: "url(/public/images/logo.png)",
        cart: "url(/public/images/cart.png)",
      },
      height: {
        v100: "100vh",
        v60: "60vh",
        50: "50vh",
        70: "70vh",
        90: "90%",
        10: "10%",
      },
      width: {
        50: "50%",
        70: "70%",
        45: "45%",
        30: "30%",
        85: "85%",
        10: "10%",
      },
      fontFamily: {
        gab: "Gabriola",
      },
      colors: {
        superclaro: "#FDE8B8",
        claro: "#C1BBAB",
        oscuro: "#a98c74",
        superoscuro: "#280000",
      },
      borderWidth: {
        1: "0.5px",
      },
    },
  },
  plugins: [],
};
