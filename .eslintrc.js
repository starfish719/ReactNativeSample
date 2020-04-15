module.exports = {
  "env": {
    "es6": true,
    "node": true,
    "jest": true,
  },
  "parser": "babel-eslint",
  "plugins": [
    "react",
    "prettier",
  ],
  "parserOptions": {
    "version": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
    },
  },
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  "rules": {
    "no-console": 0,
    "prettier/prettier": "error",
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/indent": 0,
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [".ts", ".tsx", ".js", ".jsx"]
      }
    ],
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        "multiline": {
          "delimiter": "none",
          "requireLast": false
        },
        "singleline": {
          "delimiter": "semi",
          "requireLast": false
        }
      }
    ],
    "react/prop-types": 0,
    "@typescript-eslint/no-use-before-define": 0,
    "@typescript-eslint/camelcase": 0,
    "@typescript-eslint/no-unused-vars": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-empty-function": 0
  },
}
