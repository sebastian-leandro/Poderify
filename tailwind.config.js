/** @type {import('tailwindcss').Config} */
module.exports = {
  type: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './modules/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens : {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        tertiary: "#151030",
        violet : '#1b1622',
      },
      backgroundImage : theme => ({
        'body-gradient' : 'linear-gradient(to bottom, #060c24, #090909);',
      }),
    },
  },
  plugins: [],
}
