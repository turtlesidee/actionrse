module.exports = {
  content: ["src/{pages,domain,infrastructure}/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neutral: {
          100: "#FEFEFE",
          200: "#F7F7FB",
          300: "#EFF0F6",
          400: "#D9DBE9",
          500: "#A0A3BD",
          600: "#6F6C90",
          700: "#514F6E",
          800: "#170F49",
        },
        primary: {
          text: "#A4CB97",
          "main": "#D3E7CD"
        },
        error: {
          main: "#FFE9E9",
          text: "#D88E8E"
        }
      },
      spacing: {
        "72": "72px",
      },
      fontSize: {
        "18": "18px",
        "38": "38px",
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@headlessui/tailwindcss')
  ],
}
