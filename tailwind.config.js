// Global Theme Configuration
// To update colors and fonts, edit: src/config/theme.js
// Then update the values below to match

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Update in src/config/theme.js
        'numero-teal': '#14B8A6',
        'numero-orange': '#FF8C42',
        // Text Colors - Update in src/config/theme.js
        'text-primary': '#111827', // gray-900
        'text-secondary': '#4B5563', // gray-600
        'text-light': '#9CA3AF', // gray-400
        // Background Colors - Update in src/config/theme.js
        'bg-primary': '#FFFFFF',
        'bg-secondary': '#F9FAFB',
      },
      fontFamily: {
        sans: ['Montserrat', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '88rem', // 1408px
      },
    },
  },
  plugins: [],
}
