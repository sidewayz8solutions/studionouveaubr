/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'studio': {
          black: '#0B0B0C',
          white: '#F7F7F7',
          cream: '#F4F2EE',
          gold: '#D4A24F',
          gray: '#B8B8B8',
          ink: '#0a0a0c',
          charcoal: '#141416',
          graphite: '#1e1e22',
          ivory: '#f3f0ea',
          linen: '#ddd8ce',
          'gold-light': '#d4b87a',
          'gold-dim': '#8a7348',
          pearl: '#f5f2ec',
          stone: '#9a9590',
          mist: '#6b6864',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-scale": {
          from: { opacity: "0", transform: "scale(0.96)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out forwards",
        "fade-in-scale": "fade-in-scale 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
