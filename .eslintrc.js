module.exports = {
  extends: ['airbnb-base', 'prettier', 'plugin:react/recommended'],
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  rules: {
    'no-console': 0,
    'import/prefer-default-export': 0,
    'react/jsx-uses-react': 'error',
    'react/react-in-jsx-scope': 'off',
  },
  globals: {
    JSX: true,
  },
};
