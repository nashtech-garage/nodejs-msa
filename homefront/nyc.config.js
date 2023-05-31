module.exports = {
  exclude: [".next", "babel.config.js"],
  reporter: ["html", "text", "lcov"],
  "watermarks": {
    "lines": [80, 95],
    "functions": [80, 95],
    "branches": [80, 95],
    "statements": [80, 95]
  },
  "check-coverage": true
};