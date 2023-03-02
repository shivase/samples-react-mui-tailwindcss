/** @type {import('tailwindcss').Config} */
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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
  purge: false,
  important: true,
};
