/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'luckiest-guy' : ['Luckiest Guy', 'cursive'],
        'bangers' : ['bangers', 'cursive']
      },
      textShadow: {
        white: '0 0 6px #FFF', 
        red : '0 0 10px #8B0000'
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ]
}