/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './pages/*.html'],
  theme: {
    extend: {
      container:{
        padding:{
          'DEFAULT': '1.4rem',
        }
      },
      fontFamily: {
        'sans': "'Work Sans', sans-serif",
        'cascadia': '"CascadiaCode"',
      },
      colors:{
        'header':'#f9fafe',
        'do-blue-light': 'rgb(0, 105, 255)',
      },
    },
  },
  plugins: [],
}
