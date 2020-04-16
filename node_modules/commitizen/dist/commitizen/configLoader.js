"use strict";

var cov_udgjkeujl = function () {
  var path = "/home/travis/build/commitizen/cz-cli/src/commitizen/configLoader.js";
  var hash = "36788d360cc402c80406bfe7481fca6df3978a56";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/travis/build/commitizen/cz-cli/src/commitizen/configLoader.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 14
        },
        end: {
          line: 6,
          column: 51
        }
      },
      "1": {
        start: {
          line: 9,
          column: 2
        },
        end: {
          line: 9,
          column: 38
        }
      }
    },
    fnMap: {
      "0": {
        name: "load",
        decl: {
          start: {
            line: 8,
            column: 9
          },
          end: {
            line: 8,
            column: 13
          }
        },
        loc: {
          start: {
            line: 8,
            column: 28
          },
          end: {
            line: 10,
            column: 1
          }
        },
        line: 8
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "36788d360cc402c80406bfe7481fca6df3978a56"
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
exports.load = load;

var _configLoader = require("../configLoader");

// Configuration sources in priority order.
var configs = (cov_udgjkeujl.s[0]++, ['.czrc', '.cz.json', 'package.json']);

function load(config, cwd) {
  cov_udgjkeujl.f[0]++;
  cov_udgjkeujl.s[1]++;
  return (0, _configLoader.loader)(configs, config, cwd);
}