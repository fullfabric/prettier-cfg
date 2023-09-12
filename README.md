# prettier-cfg

This package contains the default prettier config for all FullFabric packages.

## Usage

First, install the package:

`$ npm add --dev @fullfabric/prettier-cfg`

**To use the config as-is:** in your project's `package.json`, add a `prettier` line pointing to this package:

```json
{
  "prettier": "@fullfabric/prettier-cfg"
}
```

**To extend the config:** use a JS config file (e.g.: `prettier.config.js`) and import the package:

```js
module.exports = {
  ...require('@fullfabric/prettier-cfg'),
  semi: true
}
```

## Editing and publishing

Just make your changes, update the package version, and `npm publish`.
