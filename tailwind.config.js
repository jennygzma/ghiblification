/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        ghibli: "url('/img/ghibli_background.jpg')",
      },
    },
  },
  plugins: [],
};
