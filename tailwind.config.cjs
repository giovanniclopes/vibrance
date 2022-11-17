/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      backgroundImage: {
        firstSection:'url(/src/assets/first-section.png)',
      },
      fontFamily: {
        sans: 'Poppins, sans-serif'
      },
      colors: {
        green: {
          300: '#00B37E',
          500: '#00875F',
          600: '#263238',
          700: '#015F43',
 
        },
        blue: {
          500: '#81D8F7',
        },
        orange: {
          500: '#FBA94C',
        },
        red: {
          500: '#F75A68',
        },
        magenta: {
          400: '#D12468',
          500: '#98499A',
          600: '#855286',
          700: '#5A2B5B',
          800: '#432371',
          900: '#3A1B3B',

        },
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          400: '#323238',
          500: '#29292E',
          600: '#191D23',
          700: '#121214',
          800: '#09090A'
        }
      },
    },
  },
  plugins: [],
}