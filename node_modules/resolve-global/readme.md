# resolve-global [![Build Status](https://travis-ci.org/sindresorhus/resolve-global.svg?branch=master)](https://travis-ci.org/sindresorhus/resolve-global)

> Resolve the path of a globally installed module


## Install

```
$ npm install resolve-global
```


## Usage

```
$ npm install --global cat-names
```

```js
const resolveGlobal = require('resolve-global');

console.log(resolveGlobal('cat-names'));
//=> '/usr/local/lib/node_modules/cat-names'
```


## API

### resolveGlobal(moduleId)

Throws if the module can't be found.

### resolveGlobal.silent(moduleId)

Returns `undefined` instead of throwing if the module can't be found.

#### moduleId

Type: `string`

What you would use in `require()`.


## Related

- [import-global](https://github.com/sindresorhus/import-global) - Import a globally installed module
- [resolve-from](https://github.com/sindresorhus/resolve-from) - Resolve the path of a module from a given path
- [import-from](https://github.com/sindresorhus/import-from) - Import a module from a given path
- [is-installed-globally](https://github.com/sindresorhus/is-installed-globally) - Check if your package was installed globally
- [global-dirs](https://github.com/sindresorhus/global-dirs) - Get the directory of globally installed packages and binaries


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
