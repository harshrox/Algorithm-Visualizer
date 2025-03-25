import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        traversed: {
          "0%": {
            transform: "scale(0.4)",
            backgroundColor: "#2a0a4a",  
            boxShadow: "0 0 3px #2a0a4a"
          },
          "30%": {
            transform: "scale(1.1)",
            backgroundColor: "#3f0e63", 
            boxShadow: "0 0 8px #3f0e63"
          },
          "60%": {
            transform: "scale(0.9)",
            backgroundColor: "#571089",  
            boxShadow: "0 0 6px #571089"
          },
          "100%": {
            transform: "scale(1)",
            backgroundColor: "#7d1ebf",  
            boxShadow: "0 0 5px #7d1ebf"
          }
        },
        path: {
          "0%": {
            transform: "scale(0.5)",
            backgroundColor: "#1d0b34",  
            opacity: "0.7",
            boxShadow: "0 0 3px #1d0b34"
          },
          "40%": {
            transform: "scale(1.2)",
            backgroundColor: "#2f0f4d",  
            opacity: "0.85",
            boxShadow: "0 0 10px #2f0f4d"
          },
          "70%": {
            transform: "scale(0.9)",
            backgroundColor: "#49107a",  
            opacity: "1",
            boxShadow: "0 0 7px #49107a"
          },
          "100%": {
            transform: "scale(1)",
            backgroundColor: "#6425a7",  
            boxShadow: "0 0 5px #6425a7"
          }
        },
        wall: {
          "0%": {
            transform: "scale(0.6)",
            backgroundColor: "#2c0e50", 
            opacity: "0.6",
            boxShadow: "0 0 3px #2c0e50"
          },
          "50%": {
            transform: "scale(1.1)",
            opacity: "0.85",
            boxShadow: "0 0 6px #3a1070"
          },
          "100%": {
            transform: "scale(1)",
            backgroundColor: "#4b148a",  
            opacity: "1",
            boxShadow: "0 0 8px #4b148a"
          }
        }
      },
      animation: {
        traversed: "traversed 0.6s ease-in-out",
        path: "path 1.4s ease-in-out",
        wall: "wall 0.5s ease-in-out"
      }
    },
  },
  plugins: [],
}
