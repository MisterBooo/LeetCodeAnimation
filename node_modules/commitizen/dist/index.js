"use strict";

var cov_xhq5bzbsy = function () {
  var path = "/home/travis/build/commitizen/cz-cli/src/index.js";
  var hash = "de9384b8be06a959156af3fb18997c6ed8feb51b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/travis/build/commitizen/cz-cli/src/index.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 17
        },
        end: {
          line: 1,
          column: 40
        }
      },
      "1": {
        start: {
          line: 2,
          column: 0
        },
        end: {
          line: 2,
          column: 28
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "de9384b8be06a959156af3fb18997c6ed8feb51b"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

var commitizen = (cov_xhq5bzbsy.s[0]++, require('./commitizen'));
cov_xhq5bzbsy.s[1]++;
module.exports = commitizen;