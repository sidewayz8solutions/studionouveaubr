/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'studio': {
          black: '#0B0B0C',
          cream: '#FAF7F2',
          blush: '#F0E4E0',
          sage: '#E2E8E0',
          lavender: '#E8E4F0',
          charcoal: '#3D3D3D',
          gold: '#C4A574',
          rose: '#C9A5A0',
          gray: '#9E9E9E',
          stone: '#8C8C8C',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['Inter', 'sans-serif'],
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
