/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        flecheGaucheDroite:{
          "0%": {transform:"translateX(0)"},
          "100%":{transform:"translateX(20px)"},
        },
          scrollX: {
              '0%': { transform: 'translateX(0) translateZ(0)' },
              '100%': { transform: 'translateX(-50%) translateZ(0)' },
          },
      },
      animation:{
        flecheGaucheDroite: "flecheGaucheDroite 1s infinite linear",
          scrollX: 'scrollX 4s linear infinite',
      },

    },
  },
  plugins: [],
}

