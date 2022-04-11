module.exports = {
  env: {
    browser: true, // window等对象可以使用
    commonjs: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest'
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/prop-types': 0,
    'space-before-function-paren': 0,
    'no-unneeded-ternary': 'error',
    'no-nested-ternary': 'error',
    'multiline-ternary': ['error', 'always-multiline']
  }
}
