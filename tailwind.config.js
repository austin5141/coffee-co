/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        teko: ['Teko']
      },
      
      width: {
        '128': '32rem',
        '256': '64rem',
      },

      maxWidth: {
        '128': '32rem',
        '256': '64rem',
      },

      colors: {
        modalbg: 'rgba(0,0,0,0.4)'
      }
    },
  },
  plugins: [],
}

