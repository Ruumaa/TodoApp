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
          neutral: '#4D936C',
          'base-100': '#BFD9C4',
          info: '#83A0AF',
          success: '#037971',
          warning: '#D99308',
          error: '#88292F',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
