/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        Science: "#14F60F",
        Geography: "#45A5FF",
        Sports: "#FF9A35",
        Entertainment: "#EF1DEF",
        History: "#FDF328",
        Primary: "#5132D9",
        Secondary: "#8153D4",
        Tables: "#FFEBEB",
        Wrong: "#FF5454",
        WrongLight: "#FFA9A9",
        Correct: "#7CFF67",
        CorrectLight: "#BAFFAF",
        Dark: "#080D0D",
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}