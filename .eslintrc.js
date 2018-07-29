'use strict';

module.exports = {
  root: true,
  extends: 'airbnb',
  parserOptions: { sourceType: 'script' },
  env: { es6: true },
  settings: {
    'import/resolver': { 'babel-module': {} },
  },
  overrides: [
    {
      files: ['src/**/*.js'],
      parser: 'babel-eslint',
      parserOptions: {
        sourceType: 'module',
      },
      env: {
        browser: true,
      },
      rules: {
        'import/prefer-default-export': 0,
      },
    },
  ],
};