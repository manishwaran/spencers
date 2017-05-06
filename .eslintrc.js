module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "plugins": [
      "babel"
  ],
  "env": {
    "mocha": true,
  },
  "globals": {
    "document": true,
    "window": true,
    "$": true,
    "Event": true,
    "browser": true,
    "history": true,
  },
  "rules": {
    "react/prefer-stateless-function": 0,
    "class-methods-use-this": 0,
    "import/prefer-default-export": 0,
    "padded-blocks": [
      "error", { "classes": "always" }
    ],
    "max-lines": [
      "error", { "max": 75, "skipBlankLines": false, "skipComments": false }
    ]
  }
};
