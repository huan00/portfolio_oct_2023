/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'space-move': 'space-move 2s linear infinite',
        'fly-in': 'fly-in 500ms linear forwards',
        'fly-out': 'fly-out 1s linear forwards',
        plane: 'plane 1s linear forwards'
      },
      keyframes: {
        'space-move': {
          '0%, 100%': {
            transform: 'translateY(-2px)'
          },
          '50%': {
            transform: 'translateY(2px)'
          }
        },
        'fly-in': {
          '0%': {
            transform: 'translateX(-100%)'
          },
          '100%': {
            transform: 'translateX(0%)',
            opacity: '1'
          }
        },
        'fly-out': {
          '0%': {
            transform: 'translateY(0%)'
          },
          '100%': {
            transform: 'translateY(100%)',
            zIndex: '-10',
            opacity: '0',
            display: 'none'
          }
        },
        plane: {
          // '0%': {},
          // '15%': {
          //   transform: 'translate(200%, -50%) scale(.1, .1) rotate(25deg)'
          // },
          // '30%': {
          //   transform:
          //     'translate(200%, -50%) scale(.08, .08) skewY(30deg) rotate(-50deg)'
          // },
          // '45%': {
          //   transform:
          //     'translate(200%, -100%) scale(.08, .08) skewY(30deg) rotate(-70deg)'
          // },
          // '60%': {
          //   transform:
          //     'translate(140%, -120%) scale(.18, .18) rotate(-150deg) rotateY(45deg)'
          // },
          // '75%': {
          //   transform:
          //     'translate(-140%, 100%) scale(.28, .28) rotate(-150deg) rotateY(65deg)'
          // },
          '0%': {
            transform:
              'translate(-140%, 100%) scale(1, 1) rotate(0deg) rotateY(0)'
          },
          '100%': {
            transform: 'translate(0%, 0%) scale(1, 1) rotate(0deg) rotateY(0)'
          }
        }
      }
    }
  },
  plugins: []
}
