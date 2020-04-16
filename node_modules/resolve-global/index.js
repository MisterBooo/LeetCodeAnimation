'use strict';
const path = require('path');
const globalDirs = require('global-dirs');

const resolveGlobal = moduleId => {
	try {
		return require.resolve(path.join(globalDirs.yarn.packages, moduleId));
	} catch (_) {
		return require.resolve(path.join(globalDirs.npm.packages, moduleId));
	}
};

module.exports = resolveGlobal;

module.exports.silent = moduleId => {
	try {
		return resolveGlobal(moduleId);
	} catch (_) {
		return undefined;
	}
};
