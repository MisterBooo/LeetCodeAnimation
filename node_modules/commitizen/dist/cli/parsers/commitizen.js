"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parse = parse;

var _minimist = _interopRequireDefault(require("minimist"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Takes args, parses with minimist and some ugly vudoo, returns output
 *
 * TODO: Aww shit this is ugly. Rewrite with mega leet tests plz, kthnx.
 */
function parse(rawGitArgs) {
  var args = (0, _minimist.default)(rawGitArgs, {
    boolean: true
  });
  return args;
}