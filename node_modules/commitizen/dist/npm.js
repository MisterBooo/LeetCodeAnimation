// this file left blank until npm init is implemented
"use strict";

var cov_178kuy9ip = function () {
  var path = "/home/travis/build/commitizen/cz-cli/src/npm.js";
  var hash = "bd1b4e9fdc894ac590ec57daa6833d10968fbc27";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/travis/build/commitizen/cz-cli/src/npm.js",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "bd1b4e9fdc894ac590ec57daa6833d10968fbc27"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();