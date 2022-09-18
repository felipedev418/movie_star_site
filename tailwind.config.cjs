/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "movie-list": "repeat(auto-fill, minmax(220px, 1fr))",
      },
    },
    colors: {
      "primary-color": "#0f171e",
      "secondary-color": "#1a242f",
      "font-primary": "#FFFFFF",
      "font-seconday": "#79b8f3",
    },
  },
  plugins: [],
};
