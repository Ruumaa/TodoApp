/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#07484B',
          secondary: '#4E878C',
          accent: '#65B891',
          neutral: '#93E5AB',
          'base-100': '#BFD9C4',
          info: '#587792',
          success: '#8ED081',
          warning: '#F4E04D',
          error: '#E83151',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
