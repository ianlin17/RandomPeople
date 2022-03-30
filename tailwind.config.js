module.exports = {
  separator:  '_',
  content: [
  "./index.html",
  "./src/*/.{vue,js,ts,jsx,tsx,pug}",
  ],
  theme: {
  extend: {},
  },
  plugins: [],
  purge: [ './src/**/*.html', './src/**/*.vue', './src/**/*.js', ],
}