module.exports = {
  plugins: ['@ianvs/prettier-plugin-sort-imports'],

  arrowParens: 'always',
  bracketSpacing: true,
  bracketSameLine: false,
  jsxSingleQuote: true,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'none',
  printWidth: 120,

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
    '^shared/?',
    '',
    '^(containers|reducers|actions)(/|$)', // for projects with redux
    '^(api|context|hooks|constants|utils|components|pages|i18n|apps)([/].+(?<![.]s?css)$|$)', // other absolute src/ imports, except for css files
    '^[./].*(?<![.]s?css)$', // relative imports except for css files
    '',
    '^classnames$',
    '^(api|context|hooks|constants|utils|components|pages|i18n|apps)[/].+[.]s?css$', // absolute style imports
    '[.]s?css$'
  ]
}
