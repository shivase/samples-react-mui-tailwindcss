/** @type {import('tailwindcss').Config} */

const plugins = [require('@tailwindcss/typography'), require('@tailwindcss/line-clamp')];
if (process.env.NODE_ENV !== 'production') plugins.push(require('tailwindcss-debug-screens'));

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  content: ['./src/index.html', './src/**/*.{html,js,jsx,ts,tsx}'],
  darkMode: 'class',
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Bai Jamjuree', 'sans-serif'],
        NotoSansJP: ['Noto Sans JP'],
        opensans: ['Open Sans', 'sans-serif'],
        montserrat: ['Montserrat'],
        alata: ['Alata'],
      },
      spacing: {
        180: '32rem',
      },
      letterSpacing: {
        widest: '.3em',
      },
      colors: {
        cyanLight: 'hsl(180, 66%, 69%)',
        darkViolet: 'hsl(257, 27%, 26%)',
        grayishViolet: 'hsl(257,7%,63%)',
        veryDarkViolet: 'hsl(260,8%,14%)',
        strongCyan: 'hsl(171, 66%, 44%)',
        lightBlue: 'hsl(233, 100%, 69%)',
        darkGrayishBlue: 'hsl(210, 10%, 33%)',
        grayishBlue: 'hsl(201, 11%, 66%)',
        grayishBlue2: 'hsl(229, 8%, 60%)',
        veryDarkBlue: 'hsl(255,11%,22%)',
        veryDarkBlue2: 'hsl(229,31%,21%)',
        darkBlue: 'hsl(217, 28%, 15%)',
        darkBlue1: 'hsl(218, 28%, 13%)',
        darkBlue2: 'hsl(216, 53%, 9%)',
        darkBlue3: 'hsl(219, 30%, 18%)',
        accentCyan: 'hsl(176, 68%, 64%)',
        accentBlue: 'hsl(198,60%, 50%)',
        lightRed: 'hsl(0,100%, 63%)',
        softBlue: 'hsl(231, 69%, 60%)',
        softRed: 'hsl(0,94%, 66%)',
      },
      keyframes: {
        bump: {
          '0%': { transform: 'scale(1)' },
          '10%': { transform: 'scale(0.9)' },
          '30%': { transform: 'scale(1.1)' },
          '50%': { transform: 'scale(1.15)' },
          '100%': { transform: 'scale(1)' },
        },
        'meals-appear': {
          from: { opacity: '0', transform: 'translateY(-3rem)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-down': {
          from: { opacity: '0', transform: 'translateY(-3rem)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        spinner: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
      },
      animation: {
        bump: 'bump 300ms ease-out',
        'meals-appear': 'meals-appear 1s ease-out forwards',
        'slide-down': 'slide-down 300ms ease-out forwards',
        spinner: 'spinner 1.2s linear infinite',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: plugins,
  purge: false,
  important: true,
};
