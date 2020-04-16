"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _child_process = _interopRequireDefault(require("child_process"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = git; // We don't have a config, so either we use raw args to try to commit
// or if debug is enabled then we do a strict check for a config file.

exports.default = _default;

function git(rawGitArgs, environment) {
  if (environment.debug === true) {
    console.error('COMMITIZEN DEBUG: No git-cz friendly config was detected. I looked for .czrc, .cz.json, or czConfig in package.json.');
  } else {
    var vanillaGitArgs = ["commit"].concat(rawGitArgs);

    var child = _child_process.default.spawn('git', vanillaGitArgs, {
      stdio: 'inherit'
    });

    child.on('error', function (e, code) {
      console.error(e);
      throw e;
    });
  }
}