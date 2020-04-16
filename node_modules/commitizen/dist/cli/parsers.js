"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gitCz = exports.commitizen = void 0;

var commitizen = _interopRequireWildcard(require("./parsers/commitizen"));

exports.commitizen = commitizen;

var gitCz = _interopRequireWildcard(require("./parsers/git-cz"));

exports.gitCz = gitCz;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }