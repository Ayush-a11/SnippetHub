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
        secondary: '#6574cd',  // Custom secondary color
        accent: 'rgb(15,15,15)',     // Custom accent color
        boxcol:  'rgb(30,30,30)',
        light:'#e5e5e5',
        textColor:'rgb(158,203,255)'
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

