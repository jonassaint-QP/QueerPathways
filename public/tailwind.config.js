/** @type {import('tailwindcss').Config} */  
export default {  
  content: [  
    "./index.html",  
    "./src/**/*.{js,ts,jsx,tsx}",  
  ],  
  theme: {  
    extend: {  
      colors: {  
        "brand-green": "#0F1A13", // Midnight Moss  
        "brand-gold": "#C5A059",  // Antique Gold  
      },  
      fontFamily: {  
        serif: ["Playfair Display", "serif"],  
        sans: ["Inter", "sans-serif"],  
      },  
    },  
  },  
  plugins: [],  
}  
