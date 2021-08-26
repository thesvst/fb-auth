const path = require('path');

const extend = [
  'airbnb',
  'airbnb/hooks',
];

const settings = {
  'import/resolver': {
    node: {
      extensions: [
        '.js',
        '.jsx',
        '.scss',
      ],
      paths: [
        path.resolve(__dirname, './src'),
      ],
      alias: {
        map: [
          ['components', `${__dirname}/components`],
          ['containers', `${__dirname}/containers`],
          ['pages', `${__dirname}/pages`],
          ['consts', `${__dirname}/consts`],
          ['styles', `${__dirname}/styles`],
          ['utils', `${__dirname}/utils`],
          ['store', `${__dirname}/store`],
        ],
        extensions: [
          '.js',
          '.jsx',
          '.scss',
        ],
      },
    },
  },
};

const rules = {
  'arrow-body-style': 'off',
  'import/prefer-default-export': 'off',
  'import/no-extraneous-dependencies': 'off',
  'react-hooks/exhaustive-deps': 'off',
  'react/jsx-props-no-spreading': 'off',
  'react/destructuring-assignment': 'off',
  'jsx-a11y/click-events-have-key-events': 'off',
  'jsx-a11y/no-static-element-interactions': 'off',
  'react/prop-types': 'off',
  'react/button-has-type': 'off',
};

module.exports = {
  rules,
  settings,
  extends: extend,
  globals: {
    window: true,
    sessionStorage: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    babelOptions: {
      configFile: path.resolve(__dirname, './.babelrc'),
    },
  },
};
