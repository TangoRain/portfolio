/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
    // fontFamily:"Ubuntu", 
    extend: {
      
      colors:{
         primary:{
          black:"#000000",
          Neutral:"#404040",
          white:"#FFFFFF",
         }, 
         zinc:{
           100:"#f4f4f5",
           200:"#e4e4e7",
           300:"#d4d4d8",
           500:"#71717a",
           800:"#27272a",
         }, 
         error:"#ef4444"
      },
      textColor:{
        primary:{
          black:"#000000",
          Neutral:"#404040",
          white:"#FFFFFF",
         }, 
         zinc:{
           100:"#f4f4f5",
           200:"#e4e4e7",
           300:"#d4d4d8",
           500:"#71717a",
           800:"#27272a",
         }, 
         error:"#ef4444"      }
    },
  },
  plugins: [],
}

