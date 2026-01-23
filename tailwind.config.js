/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        peach: '#F5B895',
        softorange: '#F08A5D',
        lightbeige: '#FCECC9',
        neutralgray: '#EDEDED'
      },
      borderRadius: {
        'xl': '1rem',
      },
    },
  },
  plugins: [],
}
