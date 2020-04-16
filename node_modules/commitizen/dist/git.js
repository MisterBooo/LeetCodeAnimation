"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "addPath", {
  enumerable: true,
  get: function () {
    return _add.addPath;
  }
});
Object.defineProperty(exports, "addFile", {
  enumerable: true,
  get: function () {
    return _add.addFile;
  }
});
Object.defineProperty(exports, "commit", {
  enumerable: true,
  get: function () {
    return _commit.commit;
  }
});
Object.defineProperty(exports, "init", {
  enumerable: true,
  get: function () {
    return _init.init;
  }
});
Object.defineProperty(exports, "log", {
  enumerable: true,
  get: function () {
    return _log.log;
  }
});
Object.defineProperty(exports, "whatChanged", {
  enumerable: true,
  get: function () {
    return _whatChanged.whatChanged;
  }
});

var _add = require("./git/add");

var _commit = require("./git/commit");

var _init = require("./git/init");

var _log = require("./git/log");

var _whatChanged = require("./git/whatChanged");