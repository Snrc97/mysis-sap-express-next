/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', // Include all files in the pages folder
    './components/**/*.{js,ts,jsx,tsx}', // Include all files in the components folder
    './app/**/*.{js,ts,jsx,tsx}',

  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
