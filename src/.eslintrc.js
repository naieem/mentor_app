module.exports = {
  parser: "babel-eslint",
  extends: [
    "standard",
    "prettier",
    "prettier/flowtype",
    "prettier/react",
    "prettier/standard"
  ],
  plugins: [
    "babel",
    "react",
    "react-native",
    "flowtype",
    "prettier",
    "standard"
  ],
  globals: {
    require: true
  },
  rules: {
    "no-console": 1,
    "no-underscore-dangle": 0,
    "no-param-reassign": 0,
    "react/jsx-filename-extension": 0,
    "react/prop-types": 0,
    "jsx-a11y/label-has-for": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "react/no-danger": 1,
    "react/jsx-indent-props": [2, 4],
    "global-require": 1,
    "react/no-multi-comp": 1,
    "max-len": [2, 150]
  },
  settings: {
    "import/resolver": {
      "babel-module": {}
    }
  }
};
