"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parse = parse;
const reShortMessage = /^-([a-zA-Z]*)m(.*)$/;
const reLongMessage = /^--message(=.*)?$/;
/**
 * Strip message declaration from git arguments
 */

function parse(rawGitArgs) {
  let result = [];
  let skipNext = false;

  for (const arg of rawGitArgs) {
    let match;

    if (skipNext) {
      skipNext = false;
      continue;
    }

    match = reShortMessage.exec(arg);

    if (match) {
      if (match[1]) {
        result.push(`-${match[1]}`);
      }

      if (!match[2]) {
        skipNext = true;
      }

      continue;
    }

    match = reLongMessage.exec(arg);

    if (match) {
      if (!match[1]) {
        skipNext = true;
      }

      continue;
    }

    result.push(arg);
  }

  return result;
}