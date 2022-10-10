/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      'blue-main': 'hsla(230, 34%, 46%, 1)',
      'blue-text': 'hsla(231, 42%, 28%, 1)',
      'background-main': 'hsla(220, 43%, 97%, 1)',
      'selected': 'hsla(230, 61%, 90%, 1)',
      'correct': 'hsla(133, 46%, 71%, 1)',
      'wrong': 'hsla(360, 81%, 85%, 1)',
    }
  },
  plugins: [],
};
