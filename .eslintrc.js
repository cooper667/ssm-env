/*
    npm i --save-dev eslint eslint-config-airbnb-base eslint-plugin-import

    Based on: https://github.com/airbnb/javascript
*/

module.exports = {
  extends: "airbnb-base",
  plugins: ["import"],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "implicit-arrow-linebreak": ["off"],
    camelcase: ["off"],
    "object-curly-spacing": ["off"],
    "object-curly-newline": ["off"],
    "operator-linebreak": ["off"],
    // "no-param-reassign": ["off"],
    "no-underscore-dangle": 1,
    "arrow-parens": 0,
    "no-restricted-syntax": 0, // I like for...of
    "no-param-reassign": ["error", { props: false }],
    "no-unused-expressions": [
      2,
      {
        allowTernary: true,
      },
    ],
    "comma-dangle": 0,
    "no-await-in-loop": 0,
    "max-len": 1,
    "no-tabs": 1,
  },
};
