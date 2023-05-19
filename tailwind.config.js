/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        custom: '0 0 35px rgba(255, 255, 255, 0.3)',
      },
      backgroundImage: {
        hero: "url('/src/assets/hero.jpg')",
      },
      spacing: {
        '10%': '10%',
        '20%': '20%',
        '30%': '30%',
        '40%': '40%',
        '50%': '50%',
        '60%': '60%',
        '70%': '70%',
        '80%': '80%',
        '90%': '90%',
        '10vh': '10vh',
        '20vh': '20vh',
        '30vh': '30vh',
        '40vh': '40vh',
        '50vh': '50vh',
        '60vh': '60vh',
        '70vh': '70vh',
        '80vh': '80vh',
        '90vh': '90vh',

        inherit: 'inherit',
      },

      colors: {
        secondary: '#a1a1a1',
        glass: 'rgba(255,255,255,255,  0.4)',
      },
      fontWeight: {
        bold: '650',
      },
      fontSize: {},
    },
  },
  plugins: [],
};
