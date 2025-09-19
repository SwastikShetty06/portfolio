/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        indigo: '#3674B5',
        'sky-blue': '#578FCA',
        cream: '#F5F0CD',
        golden: '#FADA7A',
      },
    },
  },
  plugins: [],
}
