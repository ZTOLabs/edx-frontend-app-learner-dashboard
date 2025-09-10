const { createConfig } = require('@openedx/frontend-build');
const path = require('path');

const config = createConfig('eslint', {
  rules: {
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/no-self-import': 'off',
    'import/no-import-module-exports': 'off',
    'spaced-comment': ['error', 'always', { 'block': { 'exceptions': ['*'] } }],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
  },
  ignorePatterns: ['src/shared/Components/ui/**/*'],
});

config.settings = {
  "import/resolver": {
    typescript: {
      alwaysTryTypes: true,
      project: "./tsconfig.json"
    },
    webpack: {
      config: path.resolve(__dirname, 'webpack.dev.config.js'),
    },
    node: {
      paths: ["src", "node_modules"],
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
  },
};

module.exports = config;
