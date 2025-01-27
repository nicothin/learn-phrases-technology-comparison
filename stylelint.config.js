/** @type {import('stylelint').Config} */
export default {
  extends: 'stylelint-config-standard',
  rules: {
    'selector-class-pattern': [
      '^[a-z]([-]?[a-z0-9]+)*(__[a-z0-9]([-]?[a-z0-9]+)*)?(--[a-z0-9]([-]?[a-z0-9]+)*)?$',
      {
        resolveNestedSelectors: true,
        message: function expected(selectorValue) {
          return `Expected class selector "${selectorValue}" to match BEM CSS pattern https://en.bem.info/methodology/css. Selector validation tool: https://regexr.com/3apms`;
        },
      },
    ],
    'alpha-value-notation': null,
    'color-function-notation': null,
    'color-hex-length': null,
    'comment-empty-line-before': [
      'always',
      {
        ignore: ['stylelint-commands', 'after-comment'],
      },
    ],
    'custom-property-empty-line-before': null,
    'font-family-name-quotes': 'always-unless-keyword',
    'declaration-block-no-redundant-longhand-properties': null,
  },
  ignoreFiles: ['dist/**/*', 'node_modules/**/*'],
  overrides: [
    {
      files: ['**/*.svelte'],
      customSyntax: 'postcss-html',
    },
  ],
};
