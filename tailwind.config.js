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
        90: "90%",
        10: "10%",
      },
      width: {
        70: "70%",
        45: "45%",
        30: "30%",
        85: "85%",
        10: "10%",
      },
      fontFamily: {
        gab: "Gabriola",
      },
    },
  },
  plugins: [],
};
