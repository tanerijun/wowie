/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        128: "40rem",
      },
      minHeight: {
        128: "45rem",
      },
      gridTemplateColumns: {
        "auto-fill": "repeat(auto-fill, minmax(200px, 1fr))",
      },
    },
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
    },
  },
  plugins: [],
};
