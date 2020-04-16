<p align="center">
  <a href="http://gulpjs.com">
    <img height="257" width="114" src="https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png">
  </a>
</p>


# findup-sync

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Travis Build Status][travis-image]][travis-url] [![AppVeyor Build Status][appveyor-image]][appveyor-url] [![Coveralls Status][coveralls-image]][coveralls-url] [![Gitter chat][gitter-image]][gitter-url]

Find the first file matching a given pattern in the current directory or the nearest ancestor directory.

Matching is done with [micromatch][micromatch], please report any matching related issues on that repository.

## Usage

```js
var findup = require('findup-sync');
findup(patternOrPatterns [, micromatchOptions]);

// Start looking in the CWD.
var filepath1 = findup('{a,b}*.txt');

// Start looking somewhere else, and ignore case (probably a good idea).
var filepath2 = findup('{a,b}*.txt', {cwd: '/some/path', nocase: true});
```

## API

### `findup(patterns, [options])`

* `patterns` **{String|Array}**: Glob pattern(s) or file path(s) to match against.
* `options` **{Object}**: Options to pass to [micromatch]. Note that if you want to start in a different directory than the current working directory, specify a `cwd` property here.
* `returns` **{String}**: Returns the first matching file.

## License

MIT

[micromatch]: http://github.com/jonschlinkert/micromatch

[downloads-image]: http://img.shields.io/npm/dm/findup-sync.svg
[npm-url]: https://www.npmjs.com/package/findup-sync
[npm-image]: http://img.shields.io/npm/v/findup-sync.svg

[travis-url]: https://travis-ci.org/gulpjs/findup-sync
[travis-image]: http://img.shields.io/travis/gulpjs/findup-sync.svg?label=travis-ci

[appveyor-url]: https://ci.appveyor.com/project/gulpjs/findup-sync
[appveyor-image]: https://img.shields.io/appveyor/ci/gulpjs/findup-sync.svg?label=appveyor

[coveralls-url]: https://coveralls.io/r/gulpjs/findup-sync
[coveralls-image]: http://img.shields.io/coveralls/gulpjs/findup-sync/master.svg

[gitter-url]: https://gitter.im/gulpjs/gulp
[gitter-image]: https://badges.gitter.im/gulpjs/gulp.svg
