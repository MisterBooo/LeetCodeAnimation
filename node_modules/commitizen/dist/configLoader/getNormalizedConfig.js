"use strict";

var cov_163hsz6de = function () {
  var path = "/home/travis/build/commitizen/cz-cli/src/configLoader/getNormalizedConfig.js";
  var hash = "b5cc48d90f0f7346dcf9aa20c44722c91cbdc976";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/travis/build/commitizen/cz-cli/src/configLoader/getNormalizedConfig.js",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 2
        },
        end: {
          line: 26,
          column: 3
        }
      },
      "1": {
        start: {
          line: 12,
          column: 4
        },
        end: {
          line: 22,
          column: 5
        }
      },
      "2": {
        start: {
          line: 13,
          column: 6
        },
        end: {
          line: 13,
          column: 39
        }
      },
      "3": {
        start: {
          line: 14,
          column: 11
        },
        end: {
          line: 22,
          column: 5
        }
      },
      "4": {
        start: {
          line: 17,
          column: 6
        },
        end: {
          line: 20,
          column: 7
        }
      },
      "5": {
        start: {
          line: 19,
          column: 8
        },
        end: {
          line: 19,
          column: 341
        }
      },
      "6": {
        start: {
          line: 21,
          column: 6
        },
        end: {
          line: 21,
          column: 30
        }
      },
      "7": {
        start: {
          line: 25,
          column: 4
        },
        end: {
          line: 25,
          column: 19
        }
      }
    },
    fnMap: {
      "0": {
        name: "getNormalizedConfig",
        decl: {
          start: {
            line: 5,
            column: 9
          },
          end: {
            line: 5,
            column: 28
          }
        },
        loc: {
          start: {
            line: 5,
            column: 47
          },
          end: {
            line: 28,
            column: 1
          }
        },
        line: 5
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 7,
            column: 2
          },
          end: {
            line: 26,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 7,
            column: 2
          },
          end: {
            line: 26,
            column: 3
          }
        }, {
          start: {
            line: 7,
            column: 2
          },
          end: {
            line: 26,
            column: 3
          }
        }],
        line: 7
      },
      "1": {
        loc: {
          start: {
            line: 7,
            column: 6
          },
          end: {
            line: 7,
            column: 44
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 7,
            column: 6
          },
          end: {
            line: 7,
            column: 13
          }
        }, {
          start: {
            line: 7,
            column: 18
          },
          end: {
            line: 7,
            column: 43
          }
        }],
        line: 7
      },
      "2": {
        loc: {
          start: {
            line: 12,
            column: 4
          },
          end: {
            line: 22,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 12,
            column: 4
          },
          end: {
            line: 22,
            column: 5
          }
        }, {
          start: {
            line: 12,
            column: 4
          },
          end: {
            line: 22,
            column: 5
          }
        }],
        line: 12
      },
      "3": {
        loc: {
          start: {
            line: 12,
            column: 8
          },
          end: {
            line: 12,
            column: 51
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 12,
            column: 8
          },
          end: {
            line: 12,
            column: 22
          }
        }, {
          start: {
            line: 12,
            column: 26
          },
          end: {
            line: 12,
            column: 51
          }
        }],
        line: 12
      },
      "4": {
        loc: {
          start: {
            line: 14,
            column: 11
          },
          end: {
            line: 22,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 14,
            column: 11
          },
          end: {
            line: 22,
            column: 5
          }
        }, {
          start: {
            line: 14,
            column: 11
          },
          end: {
            line: 22,
            column: 5
          }
        }],
        line: 14
      },
      "5": {
        loc: {
          start: {
            line: 17,
            column: 6
          },
          end: {
            line: 20,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 17,
            column: 6
          },
          end: {
            line: 20,
            column: 7
          }
        }, {
          start: {
            line: 17,
            column: 6
          },
          end: {
            line: 20,
            column: 7
          }
        }],
        line: 17
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
      "7": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "b5cc48d90f0f7346dcf9aa20c44722c91cbdc976"
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
var _default = getNormalizedConfig; // Given a config and content, plucks the actual
// settings that we're interested in

exports.default = _default;

function getNormalizedConfig(config, content) {
  cov_163hsz6de.f[0]++;
  cov_163hsz6de.s[0]++;

  if ((cov_163hsz6de.b[1][0]++, content) && (cov_163hsz6de.b[1][1]++, config === 'package.json')) {
    cov_163hsz6de.b[0][0]++;
    cov_163hsz6de.s[1]++;

    // PACKAGE.JSON
    // Use the npm config key, be good citizens
    if ((cov_163hsz6de.b[3][0]++, content.config) && (cov_163hsz6de.b[3][1]++, content.config.commitizen)) {
      cov_163hsz6de.b[2][0]++;
      cov_163hsz6de.s[2]++;
      return content.config.commitizen;
    } else {
      cov_163hsz6de.b[2][1]++;
      cov_163hsz6de.s[3]++;

      if (content.czConfig) {
        cov_163hsz6de.b[4][0]++;
        cov_163hsz6de.s[4]++;

        // Old method, will be deprecated in 3.0.0
        // Suppress during test
        if (typeof global.it !== 'function') {
          cov_163hsz6de.b[5][0]++;
          cov_163hsz6de.s[5]++;
          console.error("\n********\nWARNING: This repository's package.json is using czConfig. czConfig will be deprecated in Commitizen 3. \nPlease use this instead:\n{\n  \"config\": {\n    \"commitizen\": {\n      \"path\": \"./path/to/adapter\"\n    }\n  }\n}\nFor more information, see: http://commitizen.github.io/cz-cli/\n********\n");
        } else {
          cov_163hsz6de.b[5][1]++;
        }

        cov_163hsz6de.s[6]++;
        return content.czConfig;
      } else {
        cov_163hsz6de.b[4][1]++;
      }
    }
  } else {
    cov_163hsz6de.b[0][1]++;
    cov_163hsz6de.s[7]++;
    // .cz.json or .czrc
    return content;
  }
}