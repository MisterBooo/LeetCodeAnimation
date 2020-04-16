> Load shared commitlint configuration

# @commitlint/load

## Getting started

```shell
npm install --save-dev @commitlint/load
```

## Example 

```js
const load = require('@commitlint/load');

load({extends: ['./package']})
.then(config => console.log(config));
// => { extends: ['./package', './package-b'], rules: {} }
```

Consult [docs/api](https://conventional-changelog.github.io/commitlint/#/reference-api) for comprehensive documentation.
