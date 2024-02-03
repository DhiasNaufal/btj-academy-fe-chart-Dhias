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
      colors: {
        primaryColor: {
          DEFAULT: "#6B6DFF",
          500: "#9899FF",
        },
        baseColor: {
          DEFAULT: "",
          grey: "#ECEFF6",
          blue: "#F4F8FB",
        },
      },
    },
  },
  plugins: [],
};
