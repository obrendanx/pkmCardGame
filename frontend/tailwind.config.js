/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        height: {
            '10p': '10%',
            '20p': '20%',
            '30p': '30%',
            '40p': '40%',
            '50p': '50%',
            '60p': '60%',
            '70p': '70%',
            '80p': '80%',
            '90p': '90%',
            '100p': '100%',
          },
          inset: {
            '10p': '10%',
            '20p': '20%',
            '30p': '30%',
            '40p': '40%',
            '50p': '50%',
            '60p': '60%',
            '70p': '70%',
            '80p': '80%',
            '90p': '90%',
          },
          keyframes: {
            run: {
              '0%': { left: '-7.5%' },
              '7.5%': { left: '7.5%' },
              '15%': { left: '15%' },
              '22.5%': { left: '22.5%' },
              '30%': { left: '30%' },
              '37.5%': { left: '37.5%' },
              '45%': { left: '45%' },
              '52.5%': { left: '52.5%' },
              '60%': { left: '60%' },
              '67.5%': { left: '67.5%' },
              '75%': { left: '75%' },
              '82.5%': { left: '82.5%' },
              '90%': { left: '90%' },
              '100%': { left: '97.5%' },
            },
          },
          animation: {
            run: 'run 5s ease infinite',
          },
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
          spacing: {
            '98': '5%',
          },
          margin: {
            '7p': '7.5%',
            '30p': '30%',
          }
      },
    },
    plugins: [],
  }
