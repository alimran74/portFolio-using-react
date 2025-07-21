export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        glitch: 'glitch 2s infinite',
        'spin-slow': 'spin 15s linear infinite',
        rocketUp: 'rocketUp 2s ease-out forwards',
      },
      keyframes: {
        glitch: {
          '0%': { textShadow: '2px 0 red, -2px 0 cyan' },
          '20%': { textShadow: '-2px 0 red, 2px 0 cyan' },
          '40%': { textShadow: '2px 0 red, -2px 0 cyan' },
          '60%': { textShadow: '-2px 0 red, 2px 0 cyan' },
          '80%': { textShadow: '2px 0 red, -2px 0 cyan' },
          '100%': { textShadow: '0 0 transparent, 0 0 transparent' },
        },
        rocketUp: {
          '0%': { transform: 'translate(-50%, 0)' },
          '100%': { transform: 'translate(-50%, -120vh)' },
        },
      },
    },
  },
  plugins: [],
};
