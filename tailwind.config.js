/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors: {
        primary: '#ef233c',    // Custom primary color
        secondary: '#1A1716',  // Custom secondary color
        accent: '#181412',     // Custom accent color
        boxcol:  '#221D21',
        light:'#F4F1F0',
        textColor:'#EEEDEC',
        buttonCol:'#2A1C18',
        buttonCol2:'#C9AFA6',
        background:'#0F0C0B',
        hovCol:'#9A55F7'
      },
      keyframes: {
        pulse: {
          '0%, 100%': { transform: 'rgba(35,35,35,0)' },
          '50%': { transform: 'rgba(35,35,35,0.1)' },
        }
      },
      animation:{
        'spin-once':'spin 1.8s ease-in-out'
      }

    },
    
  },
  plugins: [],
}

