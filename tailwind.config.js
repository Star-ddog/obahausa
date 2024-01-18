/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{js,css}",
    "./views/**/*.ejs",
    "./node_modules/tw-elements/dist/js/**/*.js",],
    theme: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
  
  extend: {
     colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',

        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        yellowColor: '#FFA100',
        brightRedLight: '#FFA100',
        greenColor: '#475C6F'
      },
  },
},
  darkMode: "class",
  plugins: [require("tw-elements/dist/plugin.cjs")],
};