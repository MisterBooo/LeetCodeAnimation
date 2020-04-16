"use strict";

var cov_1pcjxy17rs = function () {
  var path = "/home/travis/build/commitizen/cz-cli/src/git/log.js";
  var hash = "a2f2b5ee5865d599f5247bc5491d4c7f473032c3";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/travis/build/commitizen/cz-cli/src/git/log.js",
    statementMap: {
      "0": {
        start: {
          line: 9,
          column: 2
        },
        end: {
          line: 17,
          column: 5
        }
      },
      "1": {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 15,
          column: 5
        }
      },
      "2": {
        start: {
          line: 14,
          column: 6
        },
        end: {
          line: 14,
          column: 18
        }
      },
      "3": {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 16,
          column: 17
        }
      }
    },
    fnMap: {
      "0": {
        name: "log",
        decl: {
          start: {
            line: 8,
            column: 9
          },
          end: {
            line: 8,
            column: 12
          }
        },
        loc: {
          start: {
            line: 8,
            column: 30
          },
          end: {
            line: 18,
            column: 1
          }
        },
        line: 8
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 12,
            column: 5
          },
          end: {
            line: 12,
            column: 6
          }
        },
        loc: {
          start: {
            line: 12,
            column: 38
          },
          end: {
            line: 17,
            column: 3
          }
        },
        line: 12
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 13,
            column: 4
          },
          end: {
            line: 15,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 13,
            column: 4
          },
          end: {
            line: 15,
            column: 5
          }
        }, {
          start: {
            line: 13,
            column: 4
          },
          end: {
            line: 15,
            column: 5
          }
        }],
        line: 13
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "a2f2b5ee5865d599f5247bc5491d4c7f473032c3"
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
exports.log = log;

var _child_process = require("child_process");

/**
 * Asynchronously gets the git log output
 */
function log(repoPath, done) {
  cov_1pcjxy17rs.f[0]++;
  cov_1pcjxy17rs.s[0]++;
  (0, _child_process.exec)('git log', {
    maxBuffer: Infinity,
    cwd: repoPath
  }, function (error, stdout, stderr) {
    cov_1pcjxy17rs.f[1]++;
    cov_1pcjxy17rs.s[1]++;

    if (error) {
      cov_1pcjxy17rs.b[0][0]++;
      cov_1pcjxy17rs.s[2]++;
      throw error;
    } else {
      cov_1pcjxy17rs.b[0][1]++;
    }

    cov_1pcjxy17rs.s[3]++;
    done(stdout);
  });
}