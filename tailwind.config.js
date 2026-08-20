/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gov: {
          navy: '#060d1b',
  dark: '#0b1426',
  surface: '#111e38',
  card: '#162544',
  border: '#203358',
  subtle: '#334b77',
  text: '#f1f5f9',
  muted: '#94a3b8',
        },
        brand: {
          blue: '#163A63',
          royal: '#1D4ED8',
          light: '#2563EB',
          cyan: '#0F766E',
          gold: '#B7791F',
          goldLight: '#D69E2E',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 4px 14px -6px rgba(15, 118, 110, 0.25)',
        'glow-gold': '0 4px 14px -6px rgba(183, 121, 31, 0.20)',
        'glow-red': '0 4px 14px -6px rgba(185, 28, 28, 0.18)',
        'glow-green': '0 4px 14px -6px rgba(21, 128, 61, 0.18)',
          'elevated': '0 8px 24px -12px rgba(15, 23, 42, 0.18)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'wave': 'wave 1.5s ease-in-out infinite alternate',
      },
      keyframes: {
        wave: {
          '0%': { height: '8px' },
          '100%': { height: '36px' },
        }
      }
    },
  },
  plugins: [],
}
