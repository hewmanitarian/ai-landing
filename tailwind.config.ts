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
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: '#FF007F', // Dark, vibrant pink
          light: '#FF66A1',   // Light variant
          dark: '#CC0066',    // Dark variant
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
