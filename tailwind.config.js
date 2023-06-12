/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    fontFamily: {
      design: ["Tilt Prism", "cursive"],
      new: ["Jacques Francois Shadow"],
      normal: ["Molengo", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
};
