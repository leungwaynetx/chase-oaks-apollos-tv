const { peerDependencies } = require('./shared/package.json');

module.exports = {
  extends: [
    '@apollosproject/eslint-config/client',
    '@apollosproject/eslint-config/web',
  ],
  rules: {
    'import/no-unresolved': [
      'error',
      { ignore: Object.keys(peerDependencies) },
    ],
    'no-unused-vars': ['error', { argsIgnorePattern: 'props|payload|event' }],
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    react: {
      version: '17.0.1',
    },
  },
};
