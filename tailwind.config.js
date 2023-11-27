/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      screens: {
        'mm': '1025px',
        'xs': '300px',
      },
    },
  },
  plugins: [],
};
