/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./analysis.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // This enables class-based dark mode
  theme: {
    extend: {
      colors: {
        'brand-green': {
          light: '#6EE7B7', // A lighter, vibrant green for highlights
          DEFAULT: '#10B981', // The primary green
          dark: '#047857',    // The core dark green for backgrounds and text
        },
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6', // Light mode background
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151', // Dark mode sidebar active item
          800: '#1F2937', // Dark mode component background
          900: '#111827', // Dark mode main background
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // A clean, modern font
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}