import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      color:{
        secondery:"#DB4444",
      fontFamily:{
        Montserrat:['Montserrat']
      
        }
      
      },
    },
  },
  plugins: [],
} satisfies Config;
