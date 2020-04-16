# find-node-modules

This is a little node module to find the path of every parent node_modules
directory. It's useful for things like Sass, where you can't specify the exact
path to individual modules (in which case [findup-sync] would be sufficient),
and you can't just give an array of parent node_modules which might exist,
because it will error if they don't.

In most cases you're trying to find node_modules directories, findup-sync
should be sufficient. This library is specifically for if you want an array
containing all the parent node_modules paths. If you loop through the output
of this library, you should be using findup-sync instead.

## Install

```
$ npm install --save find-node-modules
```

## Usage

```js
var findNodeModules = require('find-node-modules');

findNodeModules();
//=> ['node_modules', '../../node_modules']

findNodeModules({ cwd: './someDir' });
//=> ['../node_modules', '../../../node_modules']

findNodeModules('./someDir');
//=> ['../node_modules', '../../../node_modules']

findNodeModules({ cwd: './someDir', relative: false });
//=> ['/path/to/something/node_modules', '/path/node_modules']
```

## License

This is released under the MIT license.



[findup-sync]: https://www.npmjs.com/package/findup-sync