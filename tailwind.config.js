/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#050b16',
        navy: '#081426',
        panel: '#0c1c31',
        cyan: '#36e6ff',
        mint: '#69f0c2',
        danger: '#ff627d',
        warning: '#ffbd59',
        muted: '#89a0b8',
      },
      fontFamily: {
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 32px rgba(54,230,255,.14)',
        panel: '0 20px 80px rgba(0,0,0,.25)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(.4,0,.6,1) infinite',
        float: 'float 6s ease-in-out infinite',
        dash: 'dash 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        dash: { to: { strokeDashoffset: -40 } },
      },
    },
  },
  plugins: [],
}
