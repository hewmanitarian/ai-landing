import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['quicksand', 'sans-serif']
      },
      colors: {
        primary: {
          DEFAULT: '#9370DB', // Lavender
          light: '#E6E6FA',   // Light variant
          dark: '#7B68EE',    // Dark variant
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
