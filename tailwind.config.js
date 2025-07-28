/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        // Animações existentes
        'bounce': 'bounce 1s infinite',
        'pulse-soft': 'pulseSoft 3s infinite ease-in-out',
        
        // Novas animações para a Aurora
        'aurora-shift': 'auroraShift 15s ease-in-out infinite alternate',
        'aurora-pulse': 'auroraPulse 10s ease-in-out infinite',
        'aurora-shift-reverse': 'auroraShiftReverse 20s ease-in-out infinite alternate',
        'aurora-pulse-slow': 'auroraPulse 15s ease-in-out infinite',
      },
      keyframes: {
        // Keyframes existentes
        bounce: {
          '0%, 100%': { transform: 'translateY(-25%)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
          '50%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' }
        },
        pulseSoft: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.85 }
        },
        
        // Novos keyframes para a Aurora
        auroraShift: {
          '0%': { transform: 'translateX(-15%) rotate(-12deg)' },
          '100%': { transform: 'translateX(5%) rotate(-8deg)' }
        },
        auroraShiftReverse: {
          '0%': { transform: 'translateX(5%) rotate(6deg)' },
          '100%': { transform: 'translateX(-10%) rotate(12deg)' }
        },
        auroraPulse: {
          '0%, 100%': { opacity: 0.2 },
          '50%': { opacity: 0.3 }
        }
      },
      // Outras configurações existentes
    },
  },
  plugins: [],
}