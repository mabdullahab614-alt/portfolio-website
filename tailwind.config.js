/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#00d9ff',
        'neon-purple': '#9d4edd',
        'neon-pink': '#ff006e',
        'dark-bg': '#0a0e27',
        'dark-secondary': '#1a1f3a',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { textShadow: '0 0 5px #00d9ff, 0 0 10px #00d9ff' },
          '50%': { textShadow: '0 0 20px #00d9ff, 0 0 30px #00d9ff' },
        },
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 0 0 rgba(0, 217, 255, 0.7)' 
          },
          '50%': { 
            boxShadow: '0 0 0 10px rgba(0, 217, 255, 0)' 
          },
        },
      },
    },
  },
  plugins: [],
}
