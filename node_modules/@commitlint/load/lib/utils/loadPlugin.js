'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = loadPlugin;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _pluginNaming = require('./pluginNaming');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loadPlugin(plugins, pluginName, debug = false) {
	const longName = (0, _pluginNaming.normalizePackageName)(pluginName);
	const shortName = (0, _pluginNaming.getShorthandName)(longName);
	let plugin = null;

	if (pluginName.match(/\s+/u)) {
		const whitespaceError = new Error(`Whitespace found in plugin name '${pluginName}'`);

		whitespaceError.messageTemplate = 'whitespace-found';
		whitespaceError.messageData = {
			pluginName: longName
		};
		throw whitespaceError;
	}

	const pluginKey = longName === pluginName ? shortName : pluginName;

	if (!plugins[pluginKey]) {
		try {
			plugin = require(longName);
		} catch (pluginLoadErr) {
			try {
				// Check whether the plugin exists
				require.resolve(longName);
			} catch (missingPluginErr) {
				// If the plugin can't be resolved, display the missing plugin error (usually a config or install error)
				console.error(_chalk2.default.red(`Failed to load plugin ${longName}.`));
				missingPluginErr.message = `Failed to load plugin ${pluginName}: ${missingPluginErr.message}`;
				missingPluginErr.messageTemplate = 'plugin-missing';
				missingPluginErr.messageData = {
					pluginName: longName,
					commitlintPath: _path2.default.resolve(__dirname, '../..')
				};
				throw missingPluginErr;
			}

			// Otherwise, the plugin exists and is throwing on module load for some reason, so print the stack trace.
			throw pluginLoadErr;
		}

		// This step is costly, so skip if debug is disabled
		if (debug) {
			const resolvedPath = require.resolve(longName);

			let version = null;

			try {
				version = require(`${longName}/package.json`).version;
			} catch (e) {
				// Do nothing
			}

			const loadedPluginAndVersion = version ? `${longName}@${version}` : `${longName}, version unknown`;

			console.log(_chalk2.default.blue(`Loaded plugin ${pluginName} (${loadedPluginAndVersion}) (from ${resolvedPath})`));
		}

		plugins[pluginKey] = plugin;
	}
}
module.exports = exports.default;
//# sourceMappingURL=loadPlugin.js.map