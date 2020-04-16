"use strict";

var cov_2972gu8ttd = function () {
  var path = "/home/travis/build/commitizen/cz-cli/src/configLoader/loader.js";
  var hash = "666b77714f71f6dbe5310b913cdea790fc9c2e39";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/travis/build/commitizen/cz-cli/src/configLoader/loader.js",
    statementMap: {
      "0": {
        start: {
          line: 22,
          column: 20
        },
        end: {
          line: 22,
          column: 40
        }
      },
      "1": {
        start: {
          line: 25,
          column: 4
        },
        end: {
          line: 27,
          column: 5
        }
      },
      "2": {
        start: {
          line: 26,
          column: 8
        },
        end: {
          line: 26,
          column: 45
        }
      },
      "3": {
        start: {
          line: 29,
          column: 4
        },
        end: {
          line: 37,
          column: 6
        }
      },
      "4": {
        start: {
          line: 31,
          column: 12
        },
        end: {
          line: 33,
          column: 13
        }
      },
      "5": {
        start: {
          line: 35,
          column: 12
        },
        end: {
          line: 35,
          column: 24
        }
      },
      "6": {
        start: {
          line: 39,
          column: 4
        },
        end: {
          line: 41,
          column: 5
        }
      },
      "7": {
        start: {
          line: 40,
          column: 8
        },
        end: {
          line: 40,
          column: 23
        }
      },
      "8": {
        start: {
          line: 43,
          column: 4
        },
        end: {
          line: 59,
          column: 5
        }
      }
    },
    fnMap: {
      "0": {
        name: "loader",
        decl: {
          start: {
            line: 20,
            column: 9
          },
          end: {
            line: 20,
            column: 15
          }
        },
        loc: {
          start: {
            line: 20,
            column: 39
          },
          end: {
            line: 60,
            column: 1
          }
        },
        line: 20
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 30,
            column: 58
          },
          end: {
            line: 30,
            column: 59
          }
        },
        loc: {
          start: {
            line: 30,
            column: 80
          },
          end: {
            line: 36,
            column: 9
          }
        },
        line: 30
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 22,
            column: 20
          },
          end: {
            line: 22,
            column: 40
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 22,
            column: 20
          },
          end: {
            line: 22,
            column: 23
          }
        }, {
          start: {
            line: 22,
            column: 27
          },
          end: {
            line: 22,
            column: 40
          }
        }],
        line: 22
      },
      "1": {
        loc: {
          start: {
            line: 25,
            column: 4
          },
          end: {
            line: 27,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 25,
            column: 4
          },
          end: {
            line: 27,
            column: 5
          }
        }, {
          start: {
            line: 25,
            column: 4
          },
          end: {
            line: 27,
            column: 5
          }
        }],
        line: 25
      },
      "2": {
        loc: {
          start: {
            line: 31,
            column: 12
          },
          end: {
            line: 33,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 31,
            column: 12
          },
          end: {
            line: 33,
            column: 13
          }
        }, {
          start: {
            line: 31,
            column: 12
          },
          end: {
            line: 33,
            column: 13
          }
        }],
        line: 31
      },
      "3": {
        loc: {
          start: {
            line: 39,
            column: 4
          },
          end: {
            line: 41,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 39,
            column: 4
          },
          end: {
            line: 41,
            column: 5
          }
        }, {
          start: {
            line: 39,
            column: 4
          },
          end: {
            line: 41,
            column: 5
          }
        }],
        line: 39
      },
      "4": {
        loc: {
          start: {
            line: 43,
            column: 4
          },
          end: {
            line: 59,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 43,
            column: 4
          },
          end: {
            line: 59,
            column: 5
          }
        }],
        line: 43
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
      "8": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "666b77714f71f6dbe5310b913cdea790fc9c2e39"
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

var _configLoader = require("../configLoader");

var _util = require("../common/util.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = loader;
/**
 * Command line config helpers
 * Shamelessly ripped from with slight modifications:
 * https://github.com/jscs-dev/node-jscs/blob/master/lib/cli-config.js
 */

/**
 * Get content of the configuration file
 * @param {String} config - partial path to configuration file
 * @param {String} [cwd = process.cwd()] - directory path which will be joined with config argument
 * @return {Object|undefined}
 */

exports.default = _default;

function loader(configs, config, cwd) {
  cov_2972gu8ttd.f[0]++;
  var content;
  var directory = (cov_2972gu8ttd.s[0]++, (cov_2972gu8ttd.b[0][0]++, cwd) || (cov_2972gu8ttd.b[0][1]++, process.cwd())); // If config option is given, attempt to load it

  cov_2972gu8ttd.s[1]++;

  if (config) {
    cov_2972gu8ttd.b[1][0]++;
    cov_2972gu8ttd.s[2]++;
    return (0, _configLoader.getContent)(config, directory);
  } else {
    cov_2972gu8ttd.b[1][1]++;
  }

  cov_2972gu8ttd.s[3]++;
  content = (0, _configLoader.getContent)((0, _configLoader.findup)(configs, {
    nocase: true,
    cwd: directory
  }, function (configPath) {
    cov_2972gu8ttd.f[1]++;
    cov_2972gu8ttd.s[4]++;

    if (_path.default.basename(configPath) === 'package.json') {// return !!this.getContent(configPath);

      cov_2972gu8ttd.b[2][0]++;
    } else {
      cov_2972gu8ttd.b[2][1]++;
    }

    cov_2972gu8ttd.s[5]++;
    return true;
  }));
  cov_2972gu8ttd.s[6]++;

  if (content) {
    cov_2972gu8ttd.b[3][0]++;
    cov_2972gu8ttd.s[7]++;
    return content;
  } else {
    cov_2972gu8ttd.b[3][1]++;
  }
  /* istanbul ignore if */


  cov_2972gu8ttd.s[8]++;

  if (!(0, _util.isInTest)()) {
    // Try to load standard configs from home dir
    var directoryArr = [process.env.USERPROFILE, process.env.HOMEPATH, process.env.HOME];

    for (var i = 0, dirLen = directoryArr.length; i < dirLen; i++) {
      if (!directoryArr[i]) {
        continue;
      }

      for (var j = 0, len = configs.length; j < len; j++) {
        content = (0, _configLoader.getContent)(configs[j], directoryArr[i]);

        if (content) {
          return content;
        }
      }
    }
  } else {
    cov_2972gu8ttd.b[4][0]++;
  }
}