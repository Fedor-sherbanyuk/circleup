module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',

  // extends:[ 'airbnb - base',
  //   'prettier'],
  // overrides: [
  // ],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'prettier/prettier': 'error',
  },
};
