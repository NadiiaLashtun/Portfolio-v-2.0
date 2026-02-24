/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-color': '#EFEEEC',
        'brand-color': '#E2A567', //orange
        'brand-dark-color': '#3D3D92', //blue
        'brand-lite-color': '#efd6c166', //light orange
        'secondary-color': '#ECDFD2',
        'text-color': '#100E0C', //black
        'text-white-color': '#ffffff59', //light white
      },

      backgroundImage: {
        'arrow-gradient': 'linear-gradient(180deg, transparent, #E2A567)',
      },

      dropShadow: {
        black: '0 4px 2px rgba(0, 0, 0, 0.25)',
        white: [
          '0 0 6px rgba(255, 255, 255, 1)',
          '0 0 20px rgba(255, 255, 255, 1)',
          '0 0 40px rgba(255, 255, 255, 1)',
        ],
      },

      fontFamily: {
        Montserrat: [
          'Montserrat',
          'ui-sans-serif',
          'system-ui',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],

        'Montserrat-Alternates': [
          'MontserratAlternates',
          'ui-sans-serif',
          'system-ui',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],

        'Amsterdam-four': [
          'Amsterdam-four',
          'Cambria',
          'Georgia',
          'Times New Roman',
          'serif',
        ],
      },

      animation: {
        'animate-bounce': 'bounce 1s 5',
      },

      // keyframes: {
      //   slide: {
      //     '0%': { transform: 'translateY(-100%)' },
      //     '100%': { transform: 'translateY(100%)' },
      //   },
      // },

      // animation: {
      //   slide: 'slide 1.5s linear infinite',
      // },

      keyframes: {
        bounce: {
          '0%, 100%': {
            transform: 'translateX(0)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateX(25%)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
    },
  },
  plugins: [],
};
