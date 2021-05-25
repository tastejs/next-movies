

/**
 * TODO: Warning: React version not specified in eslint-plugin-react settings. See https://github.com/yannickcr/eslint-plugin-react#configuration
 * TODO: update with the standard linting settings
 */
module.exports = {
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'env': {
    'es6': true
  },
  'extends': [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended'
  ],
  'rules': {
    'react/display-name': 0,
    'no-unused-vars': 'warn',
    'react/no-unknown-property': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0
  }
};
