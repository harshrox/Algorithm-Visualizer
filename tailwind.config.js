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
            backgroundColor: "#2d033bbf",
            boxShadow: "0 0 2px #2d033b"
          },
          "30%": {
            transform: "scale(1.1)",
            backgroundColor: "#3e065fbf",
            boxShadow: "0 0 8px #3e065f"
          },
          "60%": {
            transform: "scale(0.9)",
            backgroundColor: "#5a189abf",
            boxShadow: "0 0 6px #5a189a"
          },
          "100%": {
            transform: "scale(1)",
            backgroundColor: "#7b2cbf",
            boxShadow: "0 0 4px #7b2cbf"
          }
        },
        path: {
          "0%": {
            transform: "scale(0.5)",
            backgroundColor: "#1b1b2fbf",
            opacity: "0.6",
            boxShadow: "0 0 2px #1b1b2f"
          },
          "40%": {
            transform: "scale(1.2)",
            backgroundColor: "#10002bbf",
            opacity: "0.8",
            boxShadow: "0 0 10px #10002b"
          },
          "70%": {
            transform: "scale(0.9)",
            backgroundColor: "#3c096cbf",
            opacity: "1",
            boxShadow: "0 0 6px #3c096c"
          },
          "100%": {
            transform: "scale(1)",
            backgroundColor: "#5a189abf",
            boxShadow: "0 0 4px #5a189a"
          }
        },
        wall: {
          "0%": {
            transform: "scale(0.6)",
            backgroundColor: "#d8bfd8",
            opacity: "0.5",
            boxShadow: "0 0 2px #d8bfd8"
          },
          "50%": {
            transform: "scale(1.1)",
            opacity: "0.8",
            boxShadow: "0 0 6px #d8bfd8"
          },
          "100%": {
            transform: "scale(1)",
            backgroundColor: "#3c096cbf",
            opacity: "1",
            boxShadow: "0 0 8px #3c096c"
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
