/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero': "url('../src/Components/Images/bg.jpg')",
        
         'shoe':"url('../src/Components/Images/shoe.jpg')",
         'flag':"url('../src/Components/Images/flag.jpg')",

      },
     
    
    },
  },
  plugins: [],
}