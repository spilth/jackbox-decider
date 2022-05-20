module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
    requireConfigFile: false,
  },
  rules: {
    camelcase: [2, { properties: "always" }],
  },
  plugins: ["prettier"],
  extends: ["react-app", "eslint:recommended", "plugin:prettier/recommended"],
};
