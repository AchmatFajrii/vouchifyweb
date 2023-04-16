/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html, js}'],
  theme: {
    extend: {
      colors: {
      'primary' : '#270F59',
      'secondary' : '#6732D9',
      'third' : '#854AD9',
      'fourth' : '#ED85FF',
      'fifth' : '#4BE2F2',
      'footer' : '#150930'
    },
      lineHeight: {
        '90' : '90px'
      }},
  },
  plugins: [],
}

