/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1600px",
      },
      keyframes: {
        'glow': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(34,197,94,0.7), 0 0 0 0 rgba(59,130,246,0.7)' },
          '50%': { boxShadow: '0 0 24px 12px rgba(34,197,94,0.7), 0 0 48px 24px rgba(59,130,246,0.7)' },
        },
        'gradient-move': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        'glow-slow': 'glow 7s ease-in-out infinite',
        'gradient-move': 'gradient-move 4s ease-in-out infinite',
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
