/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        animation: {
          'spin-burst': 'burst 3s linear infinite',
        },
        burst: {
          '0%, 100%': { transform: 'rotate(180deg)' }
        }
      },
      backgroundImage: {
        burst: "url('/src/assets/burst.svg')",
      },
      scale: {
        30: "0.3",
      },
      blur: {
        xs: "2px",
      },
      brightness: {
        300: '300'
      },
      colors: {
        main: "#00052E",
        blue1: "#445EF1",
        blue2: "#0FC9F2",
      },
      backgroundSize: {
        "50%": "100%",
      },
    },
  },
  plugins: [],
};
