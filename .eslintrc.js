module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
    requireConfigFile: false,
  },
  plugins: ["prettier"],
  extends: ["react-app", "eslint:recommended", "plugin:prettier/recommended"],
};
