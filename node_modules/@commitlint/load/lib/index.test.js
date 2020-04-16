'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _test = require('@commitlint/test');

var _ava = require('ava');

var _ava2 = _interopRequireDefault(_ava);

var _execa = require('execa');

var _execa2 = _interopRequireDefault(_execa);

var _resolveFrom = require('resolve-from');

var _resolveFrom2 = _interopRequireDefault(_resolveFrom);

var _ = require('.');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const proxyquire = require('proxyquire').noCallThru().noPreserveCache();

(0, _ava2.default)('extends-empty should have no rules', t => new Promise(function ($return, $error) {
	var cwd, actual;
	return Promise.resolve(_test.git.bootstrap('fixtures/extends-empty')).then(function ($await_1) {
		try {
			cwd = $await_1;
			return Promise.resolve((0, _2.default)({}, { cwd })).then(function ($await_2) {
				try {
					actual = $await_2;

					t.deepEqual(actual.rules, {});
					return $return();
				} catch ($boundEx) {
					return $error($boundEx);
				}
			}.bind(this), $error);
		} catch ($boundEx) {
			return $error($boundEx);
		}
	}.bind(this), $error);
}.bind(this)));

(0, _ava2.default)('uses seed as configured', t => new Promise(function ($return, $error) {
	var cwd, actual;
	return Promise.resolve(_test.git.bootstrap('fixtures/extends-empty')).then(function ($await_3) {
		try {
			cwd = $await_3;
			return Promise.resolve((0, _2.default)({ rules: { foo: 'bar' } }, { cwd })).then(function ($await_4) {
				try {
					actual = $await_4;

					t.is(actual.rules.foo, 'bar');
					return $return();
				} catch ($boundEx) {
					return $error($boundEx);
				}
			}.bind(this), $error);
		} catch ($boundEx) {
			return $error($boundEx);
		}
	}.bind(this), $error);
}.bind(this)));

(0, _ava2.default)('rules should be loaded from relative config file', t => new Promise(function ($return, $error) {
	var file, cwd, actual;
	file = 'config/commitlint.config.js';
	return Promise.resolve(_test.git.bootstrap('fixtures/specify-config-file')).then(function ($await_5) {
		try {
			cwd = $await_5;
			return Promise.resolve((0, _2.default)({}, { cwd, file })).then(function ($await_6) {
				try {
					actual = $await_6;

					t.is(actual.rules.foo, 'bar');
					return $return();
				} catch ($boundEx) {
					return $error($boundEx);
				}
			}.bind(this), $error);
		} catch ($boundEx) {
			return $error($boundEx);
		}
	}.bind(this), $error);
}.bind(this)));

(0, _ava2.default)('rules should be loaded from absolute config file', t => new Promise(function ($return, $error) {
	var cwd, file, actual;
	return Promise.resolve(_test.git.bootstrap('fixtures/specify-config-file')).then(function ($await_7) {
		try {
			cwd = $await_7;
			file = _path2.default.join(cwd, 'config/commitlint.config.js');
			return Promise.resolve((0, _2.default)({}, { cwd: process.cwd(), file })).then(function ($await_8) {
				try {
					actual = $await_8;

					t.is(actual.rules.foo, 'bar');
					return $return();
				} catch ($boundEx) {
					return $error($boundEx);
				}
			}.bind(this), $error);
		} catch ($boundEx) {
			return $error($boundEx);
		}
	}.bind(this), $error);
}.bind(this)));

(0, _ava2.default)('plugins should be loaded from seed', t => new Promise(function ($return, $error) {
	var plugin, scopedPlugin, stubbedLoad, cwd, actual;
	plugin = { '@global': true };
	scopedPlugin = { '@global': true };
	stubbedLoad = proxyquire('.', {
		'commitlint-plugin-example': plugin,
		'@scope/commitlint-plugin-example': scopedPlugin
	});
	return Promise.resolve(_test.git.bootstrap('fixtures/extends-empty')).then(function ($await_9) {
		try {
			cwd = $await_9;
			return Promise.resolve(stubbedLoad({ plugins: ['example', '@scope/example'] }, { cwd })).then(function ($await_10) {
				try {
					actual = $await_10;

					t.deepEqual(actual.plugins, {
						example: plugin,
						'@scope/example': scopedPlugin
					});
					return $return();
				} catch ($boundEx) {
					return $error($boundEx);
				}
			}.bind(this), $error);
		} catch ($boundEx) {
			return $error($boundEx);
		}
	}.bind(this), $error);
}.bind(this)));

(0, _ava2.default)('plugins should be loaded from config', t => new Promise(function ($return, $error) {
	var plugin, scopedPlugin, stubbedLoad, cwd, actual;
	plugin = { '@global': true };
	scopedPlugin = { '@global': true };
	stubbedLoad = proxyquire('.', {
		'commitlint-plugin-example': plugin,
		'@scope/commitlint-plugin-example': scopedPlugin
	});
	return Promise.resolve(_test.git.bootstrap('fixtures/extends-plugins')).then(function ($await_11) {
		try {
			cwd = $await_11;
			return Promise.resolve(stubbedLoad({}, { cwd })).then(function ($await_12) {
				try {
					actual = $await_12;

					t.deepEqual(actual.plugins, {
						example: plugin,
						'@scope/example': scopedPlugin
					});
					return $return();
				} catch ($boundEx) {
					return $error($boundEx);
				}
			}.bind(this), $error);
		} catch ($boundEx) {
			return $error($boundEx);
		}
	}.bind(this), $error);
}.bind(this)));

(0, _ava2.default)('uses seed with parserPreset', t => new Promise(function ($return, $error) {
	var cwd, _ref, actual;

	return Promise.resolve(_test.git.bootstrap('fixtures/parser-preset')).then(function ($await_13) {
		try {
			cwd = $await_13;
			return Promise.resolve((0, _2.default)({
				parserPreset: './conventional-changelog-custom'
			}, { cwd })).then(function ($await_14) {
				try {
					_ref = $await_14;
					actual = _ref.parserPreset;

					t.is(actual.name, './conventional-changelog-custom');
					t.deepEqual(actual.parserOpts, {
						headerPattern: /^(\w*)(?:\((.*)\))?-(.*)$/
					});
					return $return();
				} catch ($boundEx) {
					return $error($boundEx);
				}
			}.bind(this), $error);
		} catch ($boundEx) {
			return $error($boundEx);
		}
	}.bind(this), $error);
}.bind(this)));

(0, _ava2.default)('invalid extend should throw', t => new Promise(function ($return, $error) {
	var cwd;
	return Promise.resolve(_test.git.bootstrap('fixtures/extends-invalid')).then(function ($await_15) {
		try {
			cwd = $await_15;
			return Promise.resolve(t.throws((0, _2.default)({}, { cwd }))).then(function ($await_16) {
				try {
					return $return();
				} catch ($boundEx) {
					return $error($boundEx);
				}
			}.bind(this), $error);
		} catch ($boundEx) {
			return $error($boundEx);
		}
	}.bind(this), $error);
}.bind(this)));

(0, _ava2.default)('empty file should have no rules', t => new Promise(function ($return, $error) {
	var cwd, actual;
	return Promise.resolve(_test.git.bootstrap('fixtures/empty-object-file')).then(function ($await_17) {
		try {
			cwd = $await_17;
			return Promise.resolve((0, _2.default)({}, { cwd })).then(function ($await_18) {
				try {
					actual = $await_18;

					t.deepEqual(actual.rules, {});
					return $return();
				} catch ($boundEx) {
					return $error($boundEx);
				}
			}.bind(this), $error);
		} catch ($boundEx) {
			return $error($boundEx);
		}
	}.bind(this), $error);
}.bind(this)));

(0, _ava2.default)('empty file should extend nothing', t => new Promise(function ($return, $error) {
	var cwd, actual;
	return Promise.resolve(_test.git.bootstrap('fixtures/empty-file')).then(function ($await_19) {
		try {
			cwd = $await_19;
			return Promise.resolve((0, _2.default)({}, { cwd })).then(function ($await_20) {
				try {
					actual = $await_20;

					t.deepEqual(actual.extends, []);
					return $return();
				} catch ($boundEx) {
					return $error($boundEx);
				}
			}.bind(this), $error);
		} catch ($boundEx) {
			return $error($boundEx);
		}
	}.bind(this), $error);
}.bind(this)));

(0, _ava2.default)('respects cwd option', t => new Promise(function ($return, $error) {
	var cwd, actual;
	return Promise.resolve(_test.git.bootstrap('fixtures/recursive-extends/first-extended')).then(function ($await_21) {
		try {
			cwd = $await_21;
			return Promise.resolve((0, _2.default)({}, { cwd })).then(function ($await_22) {
				try {
					actual = $await_22;

					t.deepEqual(actual, {
						formatter: '@commitlint/format',
						extends: ['./second-extended'],
						plugins: {},
						rules: {
							one: 1,
							two: 2
						}
					});
					return $return();
				} catch ($boundEx) {
					return $error($boundEx);
				}
			}.bind(this), $error);
		} catch ($boundEx) {
			return $error($boundEx);
		}
	}.bind(this), $error);
}.bind(this)));

(0, _ava2.default)('recursive extends', t => new Promise(function ($return, $error) {
	var cwd, actual;
	return Promise.resolve(_test.git.bootstrap('fixtures/recursive-extends')).then(function ($await_23) {
		try {
			cwd = $await_23;
			return Promise.resolve((0, _2.default)({}, { cwd })).then(function ($await_24) {
				try {
					actual = $await_24;

					t.deepEqual(actual, {
						formatter: '@commitlint/format',
						extends: ['./first-extended'],
						plugins: {},
						rules: {
							zero: 0,
							one: 1,
							two: 2
						}
					});
					return $return();
				} catch ($boundEx) {
					return $error($boundEx);
				}
			}.bind(this), $error);
		} catch ($boundEx) {
			return $error($boundEx);
		}
	}.bind(this), $error);
}.bind(this)));

(0, _ava2.default)('recursive extends with json file', t => new Promise(function ($return, $error) {
	var cwd, actual;
	return Promise.resolve(_test.git.bootstrap('fixtures/recursive-extends-json')).then(function ($await_25) {
		try {
			cwd = $await_25;
			return Promise.resolve((0, _2.default)({}, { cwd })).then(function ($await_26) {
				try {
					actual = $await_26;


					t.deepEqual(actual, {
						formatter: '@commitlint/format',
						extends: ['./first-extended'],
						plugins: {},
						rules: {
							zero: 0,
							one: 1,
							two: 2
						}
					});
					return $return();
				} catch ($boundEx) {
					return $error($boundEx);
				}
			}.bind(this), $error);
		} catch ($boundEx) {
			return $error($boundEx);
		}
	}.bind(this), $error);
}.bind(this)));

(0, _ava2.default)('recursive extends with yaml file', t => new Promise(function ($return, $error) {
	var cwd, actual;
	return Promise.resolve(_test.git.bootstrap('fixtures/recursive-extends-yaml')).then(function ($await_27) {
		try {
			cwd = $await_27;
			return Promise.resolve((0, _2.default)({}, { cwd })).then(function ($await_28) {
				try {
					actual = $await_28;


					t.deepEqual(actual, {
						formatter: '@commitlint/format',
						extends: ['./first-extended'],
						plugins: {},
						rules: {
							zero: 0,
							one: 1,
							two: 2
						}
					});
					return $return();
				} catch ($boundEx) {
					return $error($boundEx);
				}
			}.bind(this), $error);
		} catch ($boundEx) {
			return $error($boundEx);
		}
	}.bind(this), $error);
}.bind(this)));

(0, _ava2.default)('recursive extends with js file', t => new Promise(function ($return, $error) {
	var cwd, actual;
	return Promise.resolve(_test.git.bootstrap('fixtures/recursive-extends-js')).then(function ($await_29) {
		try {
			cwd = $await_29;
			return Promise.resolve((0, _2.default)({}, { cwd })).then(function ($await_30) {
				try {
					actual = $await_30;


					t.deepEqual(actual, {
						formatter: '@commitlint/format',
						extends: ['./first-extended'],
						plugins: {},
						rules: {
							zero: 0,
							one: 1,
							two: 2
						}
					});
					return $return();
				} catch ($boundEx) {
					return $error($boundEx);
				}
			}.bind(this), $error);
		} catch ($boundEx) {
			return $error($boundEx);
		}
	}.bind(this), $error);
}.bind(this)));

(0, _ava2.default)('recursive extends with package.json file', t => new Promise(function ($return, $error) {
	var cwd, actual;
	return Promise.resolve(_test.git.bootstrap('fixtures/recursive-extends-package')).then(function ($await_31) {
		try {
			cwd = $await_31;
			return Promise.resolve((0, _2.default)({}, { cwd })).then(function ($await_32) {
				try {
					actual = $await_32;


					t.deepEqual(actual, {
						formatter: '@commitlint/format',
						extends: ['./first-extended'],
						plugins: {},
						rules: {
							zero: 0,
							one: 1,
							two: 2
						}
					});
					return $return();
				} catch ($boundEx) {
					return $error($boundEx);
				}
			}.bind(this), $error);
		} catch ($boundEx) {
			return $error($boundEx);
		}
	}.bind(this), $error);
}.bind(this)));

(0, _ava2.default)('parser preset overwrites completely instead of merging', t => new Promise(function ($return, $error) {
	var cwd, actual;
	return Promise.resolve(_test.git.bootstrap('fixtures/parser-preset-override')).then(function ($await_33) {
		try {
			cwd = $await_33;
			return Promise.resolve((0, _2.default)({}, { cwd })).then(function ($await_34) {
				try {
					actual = $await_34;

					t.is(actual.parserPreset.name, './custom');
					t.deepEqual(actual.parserPreset.parserOpts, {
						headerPattern: /.*/
					});
					return $return();
				} catch ($boundEx) {
					return $error($boundEx);
				}
			}.bind(this), $error);
		} catch ($boundEx) {
			return $error($boundEx);
		}
	}.bind(this), $error);
}.bind(this)));

(0, _ava2.default)('recursive extends with parserPreset', t => new Promise(function ($return, $error) {
	var cwd, actual;
	return Promise.resolve(_test.git.bootstrap('fixtures/recursive-parser-preset')).then(function ($await_35) {
		try {
			cwd = $await_35;
			return Promise.resolve((0, _2.default)({}, { cwd })).then(function ($await_36) {
				try {
					actual = $await_36;

					t.is(actual.parserPreset.name, './conventional-changelog-custom');
					t.is(typeof actual.parserPreset.parserOpts, 'object');
					t.deepEqual(actual.parserPreset.parserOpts.headerPattern, /^(\w*)(?:\((.*)\))?-(.*)$/);
					return $return();
				} catch ($boundEx) {
					return $error($boundEx);
				}
			}.bind(this), $error);
		} catch ($boundEx) {
			return $error($boundEx);
		}
	}.bind(this), $error);
}.bind(this)));

(0, _ava2.default)('ignores unknow keys', t => new Promise(function ($return, $error) {
	var cwd, actual;
	return Promise.resolve(_test.git.bootstrap('fixtures/trash-file')).then(function ($await_37) {
		try {
			cwd = $await_37;
			return Promise.resolve((0, _2.default)({}, { cwd })).then(function ($await_38) {
				try {
					actual = $await_38;


					t.deepEqual(actual, {
						formatter: '@commitlint/format',
						extends: [],
						plugins: {},
						rules: {
							foo: 'bar',
							baz: 'bar'
						}
					});
					return $return();
				} catch ($boundEx) {
					return $error($boundEx);
				}
			}.bind(this), $error);
		} catch ($boundEx) {
			return $error($boundEx);
		}
	}.bind(this), $error);
}.bind(this)));

(0, _ava2.default)('ignores unknow keys recursively', t => new Promise(function ($return, $error) {
	var cwd, actual;
	return Promise.resolve(_test.git.bootstrap('fixtures/trash-extend')).then(function ($await_39) {
		try {
			cwd = $await_39;
			return Promise.resolve((0, _2.default)({}, { cwd })).then(function ($await_40) {
				try {
					actual = $await_40;


					t.deepEqual(actual, {
						formatter: '@commitlint/format',
						extends: ['./one'],
						plugins: {},
						rules: {
							zero: 0,
							one: 1
						}
					});
					return $return();
				} catch ($boundEx) {
					return $error($boundEx);
				}
			}.bind(this), $error);
		} catch ($boundEx) {
			return $error($boundEx);
		}
	}.bind(this), $error);
}.bind(this)));

(0, _ava2.default)('find up from given cwd', t => new Promise(function ($return, $error) {
	var outer, cwd, actual;
	return Promise.resolve(_test.fix.bootstrap('fixtures/outer-scope')).then(function ($await_41) {
		try {
			outer = $await_41;
			return Promise.resolve(_test.git.init(_path2.default.join(outer, 'inner-scope'))).then(function ($await_42) {
				try {
					cwd = _path2.default.join(outer, 'inner-scope', 'child-scope');
					return Promise.resolve((0, _2.default)({}, { cwd })).then(function ($await_43) {
						try {
							actual = $await_43;


							t.deepEqual(actual, {
								formatter: '@commitlint/format',
								extends: [],
								plugins: {},
								rules: {
									child: true,
									inner: false,
									outer: false
								}
							});
							return $return();
						} catch ($boundEx) {
							return $error($boundEx);
						}
					}.bind(this), $error);
				} catch ($boundEx) {
					return $error($boundEx);
				}
			}.bind(this), $error);
		} catch ($boundEx) {
			return $error($boundEx);
		}
	}.bind(this), $error);
}.bind(this)));

(0, _ava2.default)('find up config from outside current git repo', t => new Promise(function ($return, $error) {
	var outer, cwd, actual;
	return Promise.resolve(_test.fix.bootstrap('fixtures/outer-scope')).then(function ($await_44) {
		try {
			outer = $await_44;
			return Promise.resolve(_test.git.init(_path2.default.join(outer, 'inner-scope'))).then(function ($await_45) {
				try {
					cwd = $await_45;
					return Promise.resolve((0, _2.default)({}, { cwd })).then(function ($await_46) {
						try {
							actual = $await_46;


							t.deepEqual(actual, {
								formatter: '@commitlint/format',
								extends: [],
								plugins: {},
								rules: {
									child: false,
									inner: false,
									outer: true
								}
							});
							return $return();
						} catch ($boundEx) {
							return $error($boundEx);
						}
					}.bind(this), $error);
				} catch ($boundEx) {
					return $error($boundEx);
				}
			}.bind(this), $error);
		} catch ($boundEx) {
			return $error($boundEx);
		}
	}.bind(this), $error);
}.bind(this)));

(0, _ava2.default)('respects formatter option', t => new Promise(function ($return, $error) {
	var cwd, actual;
	return Promise.resolve(_test.git.bootstrap('fixtures/formatter')).then(function ($await_47) {
		try {
			cwd = $await_47;
			return Promise.resolve((0, _2.default)({}, { cwd })).then(function ($await_48) {
				try {
					actual = $await_48;


					t.deepEqual(actual, {
						formatter: 'commitlint-junit',
						extends: [],
						plugins: {},
						rules: {}
					});
					return $return();
				} catch ($boundEx) {
					return $error($boundEx);
				}
			}.bind(this), $error);
		} catch ($boundEx) {
			return $error($boundEx);
		}
	}.bind(this), $error);
}.bind(this)));

(0, _ava2.default)('resolves formatter relative from config directory', t => new Promise(function ($return, $error) {
	var cwd, actual;
	return Promise.resolve(_test.git.bootstrap('fixtures/formatter-local-module')).then(function ($await_49) {
		try {
			cwd = $await_49;
			return Promise.resolve((0, _2.default)({}, { cwd })).then(function ($await_50) {
				try {
					actual = $await_50;


					t.deepEqual(actual, {
						formatter: (0, _resolveFrom2.default)(cwd, './formatters/custom.js'),
						extends: [],
						plugins: {},
						rules: {}
					});
					return $return();
				} catch ($boundEx) {
					return $error($boundEx);
				}
			}.bind(this), $error);
		} catch ($boundEx) {
			return $error($boundEx);
		}
	}.bind(this), $error);
}.bind(this)));

(0, _ava2.default)('returns formatter name when unable to resolve from config directory', t => new Promise(function ($return, $error) {
	var cwd, actual;
	return Promise.resolve(_test.git.bootstrap('fixtures/formatter-local-module')).then(function ($await_51) {
		try {
			cwd = $await_51;
			return Promise.resolve((0, _2.default)({ formatter: './doesnt/exists.js' }, { cwd })).then(function ($await_52) {
				try {
					actual = $await_52;


					t.deepEqual(actual, {
						formatter: './doesnt/exists.js',
						extends: [],
						plugins: {},
						rules: {}
					});
					return $return();
				} catch ($boundEx) {
					return $error($boundEx);
				}
			}.bind(this), $error);
		} catch ($boundEx) {
			return $error($boundEx);
		}
	}.bind(this), $error);
}.bind(this)));

(0, _ava2.default)('does not mutate config module reference', t => new Promise(function ($return, $error) {
	var file, cwd, configPath, before, after;
	file = 'config/commitlint.config.js';
	return Promise.resolve(_test.git.bootstrap('fixtures/specify-config-file')).then(function ($await_53) {
		try {
			cwd = $await_53;
			configPath = _path2.default.join(cwd, file);
			before = JSON.stringify(require(configPath));
			return Promise.resolve((0, _2.default)({ arbitraryField: true }, { cwd, file })).then(function ($await_54) {
				try {
					after = JSON.stringify(require(configPath));


					t.is(before, after);
					return $return();
				} catch ($boundEx) {
					return $error($boundEx);
				}
			}.bind(this), $error);
		} catch ($boundEx) {
			return $error($boundEx);
		}
	}.bind(this), $error);
}.bind(this)));

(0, _ava2.default)('resolves parser preset from conventional commits', t => new Promise(function ($return, $error) {
	var cwd, actual;
	return Promise.resolve(_test.npm.bootstrap('fixtures/parser-preset-conventionalcommits')).then(function ($await_55) {
		try {
			cwd = $await_55;
			return Promise.resolve((0, _2.default)({}, { cwd })).then(function ($await_56) {
				try {
					actual = $await_56;


					t.is(actual.parserPreset.name, 'conventional-changelog-conventionalcommits');
					t.is(typeof actual.parserPreset.parserOpts, 'object');
					t.deepEqual(actual.parserPreset.parserOpts.headerPattern, /^(\w*)(?:\((.*)\))?!?: (.*)$/);
					return $return();
				} catch ($boundEx) {
					return $error($boundEx);
				}
			}.bind(this), $error);
		} catch ($boundEx) {
			return $error($boundEx);
		}
	}.bind(this), $error);
}.bind(this)));

(0, _ava2.default)('resolves parser preset from conventional angular', t => new Promise(function ($return, $error) {
	var cwd, actual;
	return Promise.resolve(_test.npm.bootstrap('fixtures/parser-preset-angular')).then(function ($await_57) {
		try {
			cwd = $await_57;
			return Promise.resolve((0, _2.default)({}, { cwd })).then(function ($await_58) {
				try {
					actual = $await_58;


					t.is(actual.parserPreset.name, 'conventional-changelog-angular');
					t.is(typeof actual.parserPreset.parserOpts, 'object');
					t.deepEqual(actual.parserPreset.parserOpts.headerPattern, /^(\w*)(?:\((.*)\))?: (.*)$/);
					return $return();
				} catch ($boundEx) {
					return $error($boundEx);
				}
			}.bind(this), $error);
		} catch ($boundEx) {
			return $error($boundEx);
		}
	}.bind(this), $error);
}.bind(this)));

(0, _ava2.default)('recursive resolves parser preset from conventional atom', t => new Promise(function ($return, $error) {
	var cwd, actual;
	return Promise.resolve(_test.git.bootstrap('fixtures/recursive-parser-preset-conventional-atom')).then(function ($await_59) {
		try {
			cwd = $await_59;
			return Promise.resolve((0, _execa2.default)('npm', ['install'], {
				cwd: _path2.default.resolve(cwd, 'first-extended', 'second-extended')
			})).then(function ($await_60) {
				try {
					return Promise.resolve((0, _2.default)({}, { cwd })).then(function ($await_61) {
						try {
							actual = $await_61;


							t.is(actual.parserPreset.name, 'conventional-changelog-atom');
							t.is(typeof actual.parserPreset.parserOpts, 'object');
							t.deepEqual(actual.parserPreset.parserOpts.headerPattern, /^(:.*?:) (.*)$/);
							return $return();
						} catch ($boundEx) {
							return $error($boundEx);
						}
					}.bind(this), $error);
				} catch ($boundEx) {
					return $error($boundEx);
				}
			}.bind(this), $error);
		} catch ($boundEx) {
			return $error($boundEx);
		}
	}.bind(this), $error);
}.bind(this)));

(0, _ava2.default)('resolves parser preset from conventional commits without factory support', t => new Promise(function ($return, $error) {
	var cwd, actual;
	return Promise.resolve(_test.npm.bootstrap('fixtures/parser-preset-conventional-without-factory')).then(function ($await_62) {
		try {
			cwd = $await_62;
			return Promise.resolve((0, _2.default)({}, { cwd })).then(function ($await_63) {
				try {
					actual = $await_63;


					t.is(actual.parserPreset.name, 'conventional-changelog-conventionalcommits');
					t.is(typeof actual.parserPreset.parserOpts, 'object');
					t.deepEqual(actual.parserPreset.parserOpts.headerPattern, /^(\w*)(?:\((.*)\))?!?: (.*)$/);
					return $return();
				} catch ($boundEx) {
					return $error($boundEx);
				}
			}.bind(this), $error);
		} catch ($boundEx) {
			return $error($boundEx);
		}
	}.bind(this), $error);
}.bind(this)));
//# sourceMappingURL=index.test.js.map