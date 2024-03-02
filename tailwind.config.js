/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      dark: {
        100: '#1E1E1E',
        200: '#151515'
      },
      light: {
        100: '#F3F3F3',
        200: '#C2C2C2'
      },
      orange: '#FC6011',
      error: '#FF4141'
    },
    extend: {}
  },
  plugins: []
}
