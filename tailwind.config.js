module.exports = {
  purge: [
    './src/**/*.html',
     './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        comp: {
          css: "#35A8DB",
          javascript: "#FDD83E",
          html: "#F97C4D",
          git: "#F96A4C",
          sass: "#D071A1",
          react: "#4ADBFF",
          bootstrap: "#563D7C",
          tailwind: "06B6D4",

        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
