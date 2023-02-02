module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: ["@typescript-eslint/eslint-plugin"],
  extends: ["plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  ignorePatterns: [".eslintrc.js"],
  rules: {
    quotes: ["error", "double"],
    "max-len": ["error", { code: 120, ignoreUrls: true }],
    "no-inline-comments": "error",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
  },
};
