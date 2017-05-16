module.exports = {
  "extends": "airbnb",
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
      "allowImportExportEverywhere": false,
      "codeFrame": false
  },
  "globals": {
    "document": true,
    "foo": true,
    "window": true
  }
};