/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ef233c',    // Custom primary color
        secondary: '#071F25',  // Custom secondary color
        accent: '#0A1C15',     // Custom accent color
        boxcol:  'rgb(30,30,30)',
        light:'#e5e5e5',
        textColor:'#E6FBF3',
        buttonCol:'#0A2B3A',
        buttonCol2:'#8EECC6',
        background:'#03110C'
      },
      keyframes: {
        pulse: {
          '0%, 100%': { transform: 'rgba(35,35,35,0)' },
          '50%': { transform: 'rgba(35,35,35,0.1)' },
        }
      }
    },
    
  },
  plugins: [],
}

