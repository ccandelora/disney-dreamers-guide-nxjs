/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "page-pattern":
          "url('http://www.localhost:3000/seamless-tiling-clouds-gffdcf08bf_1920.jpg')",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, config }) {
      addBase({
        h2: { fontSize: config("theme.fontSize.2xl") },
      });
    }),
  ],
};
