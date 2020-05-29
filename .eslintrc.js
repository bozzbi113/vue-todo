module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  plugins: ["prettier"],
  extends: [
    "plugin:vue/recommended",
    "eslint:recommended",
    "prettier",
    "prettier/vue"
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "prettier/prettier": ["error"],
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always",
          normal: "never",
          component: "any"
        }
      }
    ],
    "vue/attribute-hyphenation": [
      "error",
      "never",
      {
        ignore: []
      }
    ]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
