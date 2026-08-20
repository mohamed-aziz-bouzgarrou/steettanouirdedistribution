/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f5f7ff",
          100: "#ebf0ff",
          200: "#cfe0ff",
          300: "#b3d0ff",
          400: "#7fb0ff",
          500: "#4c90ff",
          600: "#3577e6",
          700: "#285bb4",
          800: "#1b3f82",
          900: "#0d234f",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
