/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0d0d0d", // Dark background
        secondary: "#1a1a1a", // Slightly lighter for sections
        accent: "#ccff00", // High contrast neon yellow (like lusion/zentry)
        text: "#f0f0f0",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Or 'Outfit', 'Space Grotesk'
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
}
