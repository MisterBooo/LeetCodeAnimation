'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _executeRule = require('@commitlint/execute-rule');

var _executeRule2 = _interopRequireDefault(_executeRule);

var _resolveExtends = require('@commitlint/resolve-extends');

var _resolveExtends2 = _interopRequireDefault(_resolveExtends);

var _cosmiconfig = require('cosmiconfig');

var _cosmiconfig2 = _interopRequireDefault(_cosmiconfig);

var _lodash = require('lodash');

var _resolveFrom = require('resolve-from');

var _resolveFrom2 = _interopRequireDefault(_resolveFrom);

var _loadPlugin = require('./utils/loadPlugin');

var _loadPlugin2 = _interopRequireDefault(_loadPlugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const w = (a, b) => Array.isArray(b) ? b : undefined;
const valid = input => (0, _lodash.pick)(input, 'extends', 'rules', 'plugins', 'parserPreset', 'formatter', 'ignores', 'defaultIgnores');

exports.default = (seed = {}, options = { cwd: process.cwd() }) => new Promise(function ($return, $error) {
	var loaded, base, config, opts, resolvedParserPreset, extended, preset, executed;
	return Promise.resolve(loadConfig(options.cwd, options.file)).then(function ($await_4) {
		try {
			loaded = $await_4;
			base = loaded.filepath ? _path2.default.dirname(loaded.filepath) : options.cwd;
			config = valid((0, _lodash.merge)({}, loaded.config, seed));
			opts = (0, _lodash.merge)({ extends: [], rules: {}, formatter: '@commitlint/format' }, (0, _lodash.pick)(config, 'extends', 'plugins', 'ignores', 'defaultIgnores'));


			// Resolve parserPreset key when overwritten by main config
			if (typeof config.parserPreset === 'string') {
				resolvedParserPreset = (0, _resolveFrom2.default)(base, config.parserPreset);


				config.parserPreset = {
					name: config.parserPreset,
					path: resolvedParserPreset,
					parserOpts: require(resolvedParserPreset)
				};
			}

			// Resolve extends key
			extended = (0, _resolveExtends2.default)(opts, {
				prefix: 'commitlint-config',
				cwd: base,
				parserPreset: config.parserPreset
			});
			preset = valid((0, _lodash.mergeWith)(extended, config, w));


			// Resolve parser-opts from preset
			if (typeof preset.parserPreset === 'object') {
				return Promise.resolve(loadParserOpts(preset.parserPreset.name, preset.parserPreset)).then(function ($await_5) {
					try {
						preset.parserPreset.parserOpts = $await_5;
						return $If_1.call(this);
					} catch ($boundEx) {
						return $error($boundEx);
					}
				}.bind(this), $error);
			}

			// Resolve config-relative formatter module

			function $If_1() {
				if (typeof config.formatter === 'string') {
					preset.formatter = _resolveFrom2.default.silent(base, config.formatter) || config.formatter;
				}

				// resolve plugins
				preset.plugins = {};
				if (config.plugins && config.plugins.length) {
					config.plugins.forEach(pluginKey => {
						(0, _loadPlugin2.default)(preset.plugins, pluginKey, process.env.DEBUG === 'true');
					});
				}

				// Execute rule config functions if needed
				return Promise.resolve(Promise.all(['rules'].map(key => [key, preset[key]]).map(item => new Promise(function ($return, $error) {
					var _item, key, value, executedValue;

					_item = (0, _slicedToArray3.default)(item, 2);
					key = _item[0], value = _item[1];
					return Promise.resolve(Promise.all((0, _lodash.toPairs)(value || {}).map(entry => (0, _executeRule2.default)(entry)))).then(function ($await_6) {
						try {
							executedValue = $await_6;

							return $return([key, executedValue.reduce((registry, item) => {
								var _item2 = (0, _slicedToArray3.default)(item, 2);

								const key = _item2[0],
								      value = _item2[1];

								registry[key] = value;
								return registry;
							}, {})]);
						} catch ($boundEx) {
							return $error($boundEx);
						}
					}.bind(this), $error);
				}.bind(this))))).then(function ($await_7) {
					try {
						executed = $await_7;


						// Merge executed config keys into preset
						return $return(executed.reduce((registry, item) => {
							var _item3 = (0, _slicedToArray3.default)(item, 2);

							const key = _item3[0],
							      value = _item3[1];

							registry[key] = value;
							return registry;
						}, preset));
					} catch ($boundEx) {
						return $error($boundEx);
					}
				}.bind(this), $error);
			}

			return $If_1.call(this);
		} catch ($boundEx) {
			return $error($boundEx);
		}
	}.bind(this), $error);
}.bind(this));

function loadConfig(cwd, configPath) {
	return new Promise(function ($return, $error) {
		var explorer, explicitPath, explore, searchPath, local;
		explorer = (0, _cosmiconfig2.default)('commitlint');
		explicitPath = configPath ? _path2.default.resolve(cwd, configPath) : undefined;
		explore = explicitPath ? explorer.load : explorer.search;
		searchPath = explicitPath ? explicitPath : cwd;
		return Promise.resolve(explore(searchPath)).then(function ($await_8) {
			try {
				local = $await_8;


				if (local) {
					return $return(local);
				}

				return $return({});
			} catch ($boundEx) {
				return $error($boundEx);
			}
		}.bind(this), $error);
	}.bind(this));
}

function loadParserOpts(parserName, pendingParser) {
	return new Promise(function ($return, $error) {
		var parser;
		return Promise.resolve(pendingParser).then(function ($await_9) {
			try {
				parser = $await_9;


				// Await parser opts if applicable
				if (typeof parser === 'object' && typeof parser.parserOpts === 'object' && typeof parser.parserOpts.then === 'function') {
					return Promise.resolve(parser.parserOpts).then(function ($await_10) {
						try {
							return $return($await_10.parserOpts);
						} catch ($boundEx) {
							return $error($boundEx);
						}
					}.bind(this), $error);
				}

				// Create parser opts from factory
				if (typeof parser === 'object' && typeof parser.parserOpts === 'function' && (0, _lodash.startsWith)(parserName, 'conventional-changelog-')) {
					return Promise.resolve(new Promise(resolve => {
						const result = parser.parserOpts((_, opts) => {
							resolve(opts.parserOpts);
						});

						// If result has data or a promise, the parser doesn't support factory-init
						// due to https://github.com/nodejs/promises-debugging/issues/16 it just quits, so let's use this fallback
						if (result) {
							Promise.resolve(result).then(opts => {
								resolve(opts.parserOpts);
							});
						}
					})).then($return, $error);
				}

				// Pull nested paserOpts, might happen if overwritten with a module in main config

				function $If_3() {
					if (typeof parser === 'object' && typeof parser.parserOpts === 'object' && typeof parser.parserOpts.parserOpts === 'object') {
						return $return(parser.parserOpts.parserOpts);
					}

					return $return(parser.parserOpts);
				}

				if (typeof parser === 'object' && typeof parser.parserOpts === 'object' && typeof parser.parserOpts.parserOpts === 'object') {
					return $return(parser.parserOpts.parserOpts);
				}return $return(parser.parserOpts);
			} catch ($boundEx) {
				return $error($boundEx);
			}
		}.bind(this), $error);
	}.bind(this));
}
module.exports = exports.default;
//# sourceMappingURL=index.js.map