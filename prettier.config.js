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
    '', // to add a gap at the top after top-of-file-comments (automatically removed when appropriate)
    '^react(.*)',
    '',
    '<THIRD_PARTY_MODULES>',
    '',
    '^@(?!fullfabric).+',
    '^@fullfabric/(.*)$',
    '',
    '^(.+/)*spec', // spec files
    '',
    '^(api|context|hooks|constants|utils|components|pages|shared|apps)/?', // src/ imports
    '^[./].*(?<![.]s?css)$', // every other local import except for css files
    '',
    '^classnames$',
    '[.]s?css$',
    ''
  ]
}
