/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: '375px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',
        '2xl': '1920px',
      },
      container: {
        center: true,
        screens: {
          sm: '343px',
          md: '688px',
          lg: '988px',
          xl: '1280px',
          '2xl': '1520px',
        },
      },
    },
  },
  plugins: [],
}

