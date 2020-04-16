'use strict';

var _ava = require('ava');

var _ava2 = _interopRequireDefault(_ava);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const proxyquire = require('proxyquire').noCallThru().noPreserveCache();

_ava2.default.beforeEach(t => {
	const plugins = {};
	const plugin = {};
	const scopedPlugin = {};
	const stubbedLoadPlugin = proxyquire('./loadPlugin', {
		'commitlint-plugin-example': plugin,
		'@scope/commitlint-plugin-example': scopedPlugin
	});
	t.context.data = {
		plugins,
		plugin,
		scopedPlugin,
		stubbedLoadPlugin
	};
});

(0, _ava2.default)('should load a plugin when referenced by short name', t => {
	var _t$context$data = t.context.data;
	const stubbedLoadPlugin = _t$context$data.stubbedLoadPlugin,
	      plugins = _t$context$data.plugins,
	      plugin = _t$context$data.plugin;

	stubbedLoadPlugin(plugins, 'example');
	t.is(plugins['example'], plugin);
});

(0, _ava2.default)('should load a plugin when referenced by long name', t => {
	var _t$context$data2 = t.context.data;
	const stubbedLoadPlugin = _t$context$data2.stubbedLoadPlugin,
	      plugins = _t$context$data2.plugins,
	      plugin = _t$context$data2.plugin;

	stubbedLoadPlugin(plugins, 'commitlint-plugin-example');
	t.is(plugins['example'], plugin);
});

(0, _ava2.default)('should throw an error when a plugin has whitespace', t => {
	var _t$context$data3 = t.context.data;
	const stubbedLoadPlugin = _t$context$data3.stubbedLoadPlugin,
	      plugins = _t$context$data3.plugins;

	t.throws(() => {
		stubbedLoadPlugin(plugins, 'whitespace ');
	}, /Whitespace found in plugin name 'whitespace '/u);
	t.throws(() => {
		stubbedLoadPlugin(plugins, 'whitespace\t');
	}, /Whitespace found in plugin name/u);
	t.throws(() => {
		stubbedLoadPlugin(plugins, 'whitespace\n');
	}, /Whitespace found in plugin name/u);
	t.throws(() => {
		stubbedLoadPlugin(plugins, 'whitespace\r');
	}, /Whitespace found in plugin name/u);
});

(0, _ava2.default)("should throw an error when a plugin doesn't exist", t => {
	var _t$context$data4 = t.context.data;
	const stubbedLoadPlugin = _t$context$data4.stubbedLoadPlugin,
	      plugins = _t$context$data4.plugins;

	t.throws(() => {
		stubbedLoadPlugin(plugins, 'nonexistentplugin');
	}, /Failed to load plugin/u);
});

(0, _ava2.default)('should load a scoped plugin when referenced by short name', t => {
	var _t$context$data5 = t.context.data;
	const stubbedLoadPlugin = _t$context$data5.stubbedLoadPlugin,
	      plugins = _t$context$data5.plugins,
	      scopedPlugin = _t$context$data5.scopedPlugin;

	stubbedLoadPlugin(plugins, '@scope/example');
	t.is(plugins['@scope/example'], scopedPlugin);
});

(0, _ava2.default)('should load a scoped plugin when referenced by long name', t => {
	var _t$context$data6 = t.context.data;
	const stubbedLoadPlugin = _t$context$data6.stubbedLoadPlugin,
	      plugins = _t$context$data6.plugins,
	      scopedPlugin = _t$context$data6.scopedPlugin;

	stubbedLoadPlugin(plugins, '@scope/commitlint-plugin-example');
	t.is(plugins['@scope/example'], scopedPlugin);
});

/* when referencing a scope plugin and omitting @scope/ */
(0, _ava2.default)("should load a scoped plugin when referenced by short name, but should not get the plugin if '@scope/' is omitted", t => {
	var _t$context$data7 = t.context.data;
	const stubbedLoadPlugin = _t$context$data7.stubbedLoadPlugin,
	      plugins = _t$context$data7.plugins;

	stubbedLoadPlugin(plugins, '@scope/example');
	t.is(plugins['example'], undefined);
});

(0, _ava2.default)("should load a scoped plugin when referenced by long name, but should not get the plugin if '@scope/' is omitted", t => {
	var _t$context$data8 = t.context.data;
	const stubbedLoadPlugin = _t$context$data8.stubbedLoadPlugin,
	      plugins = _t$context$data8.plugins;

	stubbedLoadPlugin(plugins, '@scope/commitlint-plugin-example');
	t.is(plugins['example'], undefined);
});
//# sourceMappingURL=loadPlugin.test.js.map