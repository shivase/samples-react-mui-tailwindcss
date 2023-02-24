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
        montserrat: ['Montserrat'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  purge: false,
  important: true,
};
