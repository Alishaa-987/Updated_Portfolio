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
        brand: {
          purple: '#a855f7',
          cyan: '#06b6d4',
          'purple-dim': '#7c3aed',
          'cyan-dim': '#0891b2',
        },
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #a855f7 0%, #06b6d4 100%)',
        'gradient-brand-r': 'linear-gradient(135deg, #06b6d4 0%, #a855f7 100%)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
};
