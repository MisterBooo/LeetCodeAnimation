"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "git", {
  enumerable: true,
  get: function () {
    return _git.default;
  }
});
Object.defineProperty(exports, "gitCz", {
  enumerable: true,
  get: function () {
    return _gitCz.default;
  }
});

var _git = _interopRequireDefault(require("./strategies/git"));

var _gitCz = _interopRequireDefault(require("./strategies/git-cz"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }