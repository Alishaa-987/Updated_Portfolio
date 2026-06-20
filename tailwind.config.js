/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        charcoal: '#1C1C1C',
        'dark-gray': '#2A2A2A',
        'medium-gray': '#4A4A4A',
        sage: '#6B7065',
        'light-gray': '#D0D0D0',
      },
    },
  },
  plugins: [],
};
