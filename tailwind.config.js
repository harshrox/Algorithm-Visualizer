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
            transform: "scale(0.3)",
            backgroundColor: "#2d033bbf", // Dark Purple
            borderRadius: "100%"
          },
          "50%": {
            backgroundColor: "#3e065fbf" // Deep Purple
          },
          "75%": {
            transform: "scale(1.2)",
            backgroundColor: "#5a189abf" // Vibrant Purple
          },
          "100%": {
            transform: "scale(1)",
            backgroundColor: "#7b2cbf" // Light Purple
          }
        },
        path: {
          "0%": {
            transform: "scale(0.3)",
            backgroundColor: "#1b1b2fbf", // Dark Blue-Black
            borderRadius: "100%"
          },
          "50%": {
            backgroundColor: "#10002bbf" // Deep Blackish Purple
          },
          "75%": {
            transform: "scale(1.2)",
            backgroundColor: "#3c096cbf" // Intense Dark Purple
          },
          "90%": {
            transform: "scale(0.8)",
            backgroundColor: "#5a189abf" // Brighter Purple
          },
          "100%": {
            transform: "scale(1)"
          }
        },
        wall: {
          "0%": {
            transform: "scale(0.7)",
            backgroundColor: "#d8bfd8" // Soft Muted Purple
          },
          "100%": {
            transform: "scale(1)",
            backgroundColor: "#3c096cbf" // Rich Deep Purple
          }
        }
      },
      animation: {
        traversed: "traversed 0.5s cubic-bezier(0, 0, 0.2, 1)",
        path: "path 1.5s cubic-bezier(0, 0, 0.2, 1)",
        wall: "wall 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
      }
    },
  },
  plugins: [],
}

