/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,jsx,tsx}", // Ensure all file types used in the project are scanned
  ],
  theme: {
    extend: {
      screens: {
        // Customize breakpoints if needed
        'xs': '475px', // Extra small devices
      },
    },
  },
  plugins: [],
};
