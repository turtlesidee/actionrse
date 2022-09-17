/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "apps/app/pages/**/*.{js,ts,jsx,tsx}",
    "apps/app/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-green': "#8AEA92",
        'green-sheen': "#80ADA0",
        'dark-liver': "#5F5566",
        'dark-purple': "#33202A",
        'dark-gray': "#626262",
        "light-gray": "#F2F2F2"
      },
      fontFamily: {
        'montserrat': ['Montserrat'],
        'inter': ['Inter']
      }
    },
  },
  plugins: [
    require('tailwindcss-animate')
  ],
}
