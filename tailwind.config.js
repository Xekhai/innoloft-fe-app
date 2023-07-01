/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
      '300': '300px',
    },
    colors: {
      gray: {
        200: '#E5E7EB',
        800: '#6B7280',
      },
      'coolGray-50': '#F9FAFB',
    }
  },
  },
  plugins: [],
}