/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#08091a',
          surface: '#0f1129',
          card: '#161936',
          border: '#252952',
          cyan: '#00f3ff',
          purple: '#9d4edd',
          pink: '#ff007f',
          emerald: '#00ff88',
          gold: '#ffd700',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Syne', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-pulse': 'glow 3s infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'spin-slow': 'spin 20s linear infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
        'matrix-rain': 'matrix 10s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 15px rgba(0, 243, 255, 0.3), 0 0 30px rgba(157, 78, 221, 0.2)' },
          '100%': { boxShadow: '0 0 30px rgba(0, 243, 255, 0.7), 0 0 60px rgba(255, 0, 127, 0.5)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(2deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-cyber': 'linear-gradient(135deg, #00f3ff 0%, #9d4edd 50%, #ff007f 100%)',
        'gradient-glass': 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
      }
    },
  },
  plugins: [],
}
