/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  content: ['./src/index.html', './src/**/*.{html,js,jsx,ts,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Bai Jamjuree', 'sans-serif'],
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
        veryDarkBlue: 'hsl(255,11%,22%)',
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
