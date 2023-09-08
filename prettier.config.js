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
    '^@fullfabric/(.*)$',
    '',
    '^spec/',
    '',
    '^(api|context|hooks|constants|utils|components|pages|shared|apps)/?', // src/ imports
    '^[./].*(?<![.]s?css)$', // every other local import except for css files
    '',
    '^classnames$',
    '[.]s?css$'
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderMergeDuplicateImports: true
}
