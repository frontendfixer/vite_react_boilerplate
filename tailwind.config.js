/** @type {import('tailwindcss').Config} */

// import colors from 'tailwindcss/colors';

export default {
  content: ['./src/components/**/*.jsx', './src/pages/**/*.jsx', './src/**/*.jsx', './src/index.html'],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Inter, system-ui, Avenir, Helvetica, Arial, sans-serif'],
      serif: [],
      mono: [],
    },
    colors: {
      current: 'currentColor',
      white: {
        30: 'hsl(0 0% 90%)',
        50: 'hsl(0 0% 96%)',
        DEFAULT: 'hsl(0 0% 90%)',
      },
      neutral: {
        30: 'hsl(240, 61%, 60%)',
        50: 'hsl(240, 100%, 70%)',
        70: 'hsl(240, 100%, 80%)',
        DEFAULT: 'hsl(240, 100%, 70%)',
      },
      black: 'hsl(0 5% 10%)',
    },
    // spacing: {
    //   1: '8px',
    //   2: '12px',
    //   3: '16px',
    //   4: '24px',
    //   5: '32px',
    //   6: '48px',
    // },
    extend: {
      colors: {
        red: 'hsl(0, 100%, 66%)',
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
    },
    plugins: [],
  },
};
