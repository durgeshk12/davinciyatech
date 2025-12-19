/**
 * Global Theme Configuration
 * 
 * This file centralizes all theme settings (colors, fonts) for easy management.
 * 
 * To update colors:
 * 1. Change the color values below
 * 2. Update the corresponding values in tailwind.config.js
 * 
 * To update fonts:
 * 1. Change the font name below
 * 2. Update the font in index.html (Google Fonts link)
 * 3. Update the font in tailwind.config.js
 * 4. Update the font in src/index.css
 * 
 * Usage in components:
 * import theme from '../config/theme';
 * const color = theme.colors.primary.teal;
 */

export const theme = {
  colors: {
    primary: {
      teal: '#14B8A6',
      orange: '#FF8C42',
    },
    text: {
      primary: '#111827', // gray-900
      secondary: '#4B5563', // gray-600
      light: '#9CA3AF', // gray-400
    },
    background: {
      white: '#FFFFFF',
      gray: '#F9FAFB',
    },
  },
  fonts: {
    primary: 'Montserrat',
    fallback: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  },
};

export default theme;
