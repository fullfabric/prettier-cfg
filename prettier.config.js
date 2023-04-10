module.exports = {
  arrowParens: 'always',
  bracketSpacing: true,
  bracketSameLine: false,
  jsxSingleQuote: true,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'none',

  // @ianvs/prettier-plugin-sort-imports
  importOrder: [
    '^react(.*)',
    '',
    '<THIRD_PARTY_MODULES>',
    '',
    '^@(?!fullfabric).+',
    '^@fullfabric/(.*)$',
    '',
    '^spec/',
    '',
    '^(api|context|hooks|constants|utils)/?',
    '^(components|pages)/?',
    '^[./].*(?<![.]s?css)$',
    '',
    '^classnames&',
    '[.]s?css$'
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderMergeDuplicateImports: true
}
