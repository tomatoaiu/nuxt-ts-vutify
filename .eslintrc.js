module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': [2, "always"],
    'array-bracket-spacing': [2, "never"],
    'brace-style': 2,
    'comma-spacing': [2, {"before": false, "after": true}],
    'space-before-function-paren': [2, "always"],
    'semi': ["error", "always", {"omitLastInOneLineBlock": false}]
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
};
