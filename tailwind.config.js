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
        "auto-fill": "repeat(auto-fill, minmax(300px, 1fr))",
      },
      colors: {
        "tmdb-primary-color": "#0d253f",
        "tmdb-secondary-color": "#01b4e4",
        "tmdb-tetriary-color": "#90cea1",
      },
      keyframes: {
        "background-fade": {
          "0%": { opacity: 0 },
          "5%": { opacity: 1 },
          "93%": { opacity: 1 },
          "97%": { opacity: 0 },
        },
      },
      animation: {
        "background-animation": "background-fade 11s linear",
      },
    },
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
    },
  },
  plugins: [],
};
