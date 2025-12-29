// Global Theme Configuration
// To update colors and fonts, edit: src/config/theme.js
// Then update the values below to match

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // Include dynamic content classes
    "./src/pages/DynamicPage.jsx",
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
  // Safelist to ensure dynamic content classes are included
  safelist: [
    // Common Tailwind classes used in dynamic content
    'bg-gradient-to-b',
    'bg-gradient-to-r',
    'from-gray-50',
    'to-white',
    'from-blue-900',
    'via-blue-800',
    'to-blue-900',
    'max-w-8xl',
    'py-16',
    'md:py-24',
    'px-4',
    'md:px-10',
    'grid',
    'grid-cols-1',
    'md:grid-cols-2',
    'lg:grid-cols-2',
    'gap-12',
    'text-4xl',
    'md:text-5xl',
    'lg:text-6xl',
    'font-bold',
    'text-gray-900',
    'text-white',
    'bg-blue-600',
    'hover:bg-blue-700',
    'rounded-lg',
    'px-8',
    'py-4',
    // Add pattern matching for dynamic classes
    {
      pattern: /^(bg|text|border|p|m|w|h|max-w|min-w|gap|grid-cols|flex|items|justify|rounded|shadow|hover|focus|transition|duration|ease|opacity|z|relative|absolute|inset|overflow|object|aspect|animate|backdrop|backdrop-blur|from|via|to)-.+/,
    },
  ],
}
