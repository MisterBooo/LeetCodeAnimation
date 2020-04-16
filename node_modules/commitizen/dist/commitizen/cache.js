"use strict";

var cov_1n5kj1atco = function () {
  var path = "/home/travis/build/commitizen/cz-cli/src/commitizen/cache.js";
  var hash = "eaa1323be747e42b3e17d11202bfcb8d4966dc0d";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/travis/build/commitizen/cz-cli/src/commitizen/cache.js",
    statementMap: {
      "0": {
        start: {
          line: 14,
          column: 2
        },
        end: {
          line: 14,
          column: 56
        }
      },
      "1": {
        start: {
          line: 22,
          column: 2
        },
        end: {
          line: 26,
          column: 3
        }
      },
      "2": {
        start: {
          line: 23,
          column: 4
        },
        end: {
          line: 23,
          column: 45
        }
      },
      "3": {
        start: {
          line: 25,
          column: 4
        },
        end: {
          line: 25,
          column: 23
        }
      },
      "4": {
        start: {
          line: 27,
          column: 17
        },
        end: {
          line: 29,
          column: 4
        }
      },
      "5": {
        start: {
          line: 30,
          column: 2
        },
        end: {
          line: 30,
          column: 68
        }
      },
      "6": {
        start: {
          line: 31,
          column: 2
        },
        end: {
          line: 31,
          column: 18
        }
      },
      "7": {
        start: {
          line: 38,
          column: 2
        },
        end: {
          line: 43,
          column: 3
        }
      },
      "8": {
        start: {
          line: 39,
          column: 16
        },
        end: {
          line: 39,
          column: 40
        }
      },
      "9": {
        start: {
          line: 40,
          column: 4
        },
        end: {
          line: 40,
          column: 27
        }
      }
    },
    fnMap: {
      "0": {
        name: "readCacheSync",
        decl: {
          start: {
            line: 13,
            column: 9
          },
          end: {
            line: 13,
            column: 22
          }
        },
        loc: {
          start: {
            line: 13,
            column: 35
          },
          end: {
            line: 15,
            column: 1
          }
        },
        line: 13
      },
      "1": {
        name: "setCacheValueSync",
        decl: {
          start: {
            line: 20,
            column: 9
          },
          end: {
            line: 20,
            column: 26
          }
        },
        loc: {
          start: {
            line: 20,
            column: 51
          },
          end: {
            line: 32,
            column: 1
          }
        },
        line: 20
      },
      "2": {
        name: "getCacheValueSync",
        decl: {
          start: {
            line: 37,
            column: 9
          },
          end: {
            line: 37,
            column: 26
          }
        },
        loc: {
          start: {
            line: 37,
            column: 49
          },
          end: {
            line: 44,
            column: 1
          }
        },
        line: 37
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "eaa1323be747e42b3e17d11202bfcb8d4966dc0d"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCacheValueSync = getCacheValueSync;
exports.readCacheSync = readCacheSync;
exports.setCacheValueSync = setCacheValueSync;

var _fs = _interopRequireDefault(require("fs"));

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Reads the entire cache
 */
function readCacheSync(cachePath) {
  cov_1n5kj1atco.f[0]++;
  cov_1n5kj1atco.s[0]++;
  return JSON.parse(_fs.default.readFileSync(cachePath, 'utf8'));
}
/**
 * Sets a cache value and writes the file to disk
 */


function setCacheValueSync(cachePath, key, value) {
  cov_1n5kj1atco.f[1]++;
  var originalCache;
  cov_1n5kj1atco.s[1]++;

  try {
    cov_1n5kj1atco.s[2]++;
    originalCache = readCacheSync(cachePath);
  } catch (e) {
    cov_1n5kj1atco.s[3]++;
    originalCache = {};
  }

  var newCache = (cov_1n5kj1atco.s[4]++, _lodash.default.assign(originalCache, {
    [key]: value
  }));
  cov_1n5kj1atco.s[5]++;

  _fs.default.writeFileSync(cachePath, JSON.stringify(newCache, null, '  '));

  cov_1n5kj1atco.s[6]++;
  return newCache;
}
/**
 * Gets a single value from the cache given a key
 */


function getCacheValueSync(cachePath, repoPath) {
  cov_1n5kj1atco.f[2]++;
  cov_1n5kj1atco.s[7]++;

  try {
    let cache = (cov_1n5kj1atco.s[8]++, readCacheSync(cachePath));
    cov_1n5kj1atco.s[9]++;
    return cache[repoPath];
  } catch (e) {}
}