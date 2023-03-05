/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '450': '450px',
      },
      margin: {
        '0.25': '1px'
      },
    },
  },
  plugins: [],
};
