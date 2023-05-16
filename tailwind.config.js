/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",'./index.html',],
  theme: {
    colors: {
      // Using modern `hsl`
      White: 'hsl(0, 0%, 100%)', 
      Cyan: 'hsl(178, 100%, 50%)',
      SoftBlue: 'hsl(215, 51%, 70%)',
      DarkBlue: 'hsl(217, 54%, 11%)',
      CardBg : 'hsl(216, 50%, 16%)',
      BlueLine: 'hsl(215, 32%, 27%)',
    },
    fontFamily: {
      sans: ['Outfit', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}