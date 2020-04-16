"use strict";

var cov_1ay4fgfkgb = function () {
  var path = "/home/travis/build/commitizen/cz-cli/src/configLoader/findup.js";
  var hash = "ce6c9abea21cfa20eb8e2216f6356b94004ae2d4";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/travis/build/commitizen/cz-cli/src/configLoader/findup.js",
    statementMap: {
      "0": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 14,
          column: 37
        }
      },
      "1": {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 15,
          column: 25
        }
      },
      "2": {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 16,
          column: 44
        }
      },
      "3": {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 33,
          column: 39
        }
      },
      "4": {
        start: {
          line: 19,
          column: 8
        },
        end: {
          line: 25,
          column: 14
        }
      },
      "5": {
        start: {
          line: 20,
          column: 29
        },
        end: {
          line: 20,
          column: 59
        }
      },
      "6": {
        start: {
          line: 22,
          column: 12
        },
        end: {
          line: 24,
          column: 13
        }
      },
      "7": {
        start: {
          line: 23,
          column: 16
        },
        end: {
          line: 23,
          column: 62
        }
      },
      "8": {
        start: {
          line: 27,
          column: 8
        },
        end: {
          line: 29,
          column: 9
        }
      },
      "9": {
        start: {
          line: 28,
          column: 12
        },
        end: {
          line: 28,
          column: 48
        }
      },
      "10": {
        start: {
          line: 31,
          column: 8
        },
        end: {
          line: 31,
          column: 31
        }
      },
      "11": {
        start: {
          line: 32,
          column: 8
        },
        end: {
          line: 32,
          column: 54
        }
      }
    },
    fnMap: {
      "0": {
        name: "findup",
        decl: {
          start: {
            line: 8,
            column: 9
          },
          end: {
            line: 8,
            column: 15
          }
        },
        loc: {
          start: {
            line: 8,
            column: 40
          },
          end: {
            line: 34,
            column: 1
          }
        },
        line: 8
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 19,
            column: 31
          },
          end: {
            line: 19,
            column: 32
          }
        },
        loc: {
          start: {
            line: 19,
            column: 50
          },
          end: {
            line: 25,
            column: 9
          }
        },
        line: 19
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 22,
            column: 12
          },
          end: {
            line: 24,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 22,
            column: 12
          },
          end: {
            line: 24,
            column: 13
          }
        }, {
          start: {
            line: 22,
            column: 12
          },
          end: {
            line: 24,
            column: 13
          }
        }],
        line: 22
      },
      "1": {
        loc: {
          start: {
            line: 27,
            column: 8
          },
          end: {
            line: 29,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 27,
            column: 8
          },
          end: {
            line: 29,
            column: 9
          }
        }, {
          start: {
            line: 27,
            column: 8
          },
          end: {
            line: 29,
            column: 9
          }
        }],
        line: 27
      }
    },
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
      "9": 0,
      "10": 0,
      "11": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "ce6c9abea21cfa20eb8e2216f6356b94004ae2d4"
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
exports.default = void 0;

var _path = _interopRequireDefault(require("path"));

var _glob = _interopRequireDefault(require("glob"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = findup; // Before, "findup-sync" package was used,
// but it does not provide filter callback

exports.default = _default;

function findup(patterns, options, fn) {
  cov_1ay4fgfkgb.f[0]++;

  /* jshint -W083 */
  var lastpath;
  var file;
  cov_1ay4fgfkgb.s[0]++;
  options = Object.create(options);
  cov_1ay4fgfkgb.s[1]++;
  options.maxDepth = 1;
  cov_1ay4fgfkgb.s[2]++;
  options.cwd = _path.default.resolve(options.cwd);
  cov_1ay4fgfkgb.s[3]++;

  do {
    cov_1ay4fgfkgb.s[4]++;
    file = patterns.filter(function (pattern) {
      cov_1ay4fgfkgb.f[1]++;
      var configPath = (cov_1ay4fgfkgb.s[5]++, _glob.default.sync(pattern, options)[0]);
      cov_1ay4fgfkgb.s[6]++;

      if (configPath) {
        cov_1ay4fgfkgb.b[0][0]++;
        cov_1ay4fgfkgb.s[7]++;
        return fn(_path.default.join(options.cwd, configPath));
      } else {
        cov_1ay4fgfkgb.b[0][1]++;
      }
    })[0];
    cov_1ay4fgfkgb.s[8]++;

    if (file) {
      cov_1ay4fgfkgb.b[1][0]++;
      cov_1ay4fgfkgb.s[9]++;
      return _path.default.join(options.cwd, file);
    } else {
      cov_1ay4fgfkgb.b[1][1]++;
    }

    cov_1ay4fgfkgb.s[10]++;
    lastpath = options.cwd;
    cov_1ay4fgfkgb.s[11]++;
    options.cwd = _path.default.resolve(options.cwd, '..');
  } while (options.cwd !== lastpath);
}