'use strict';

var _test = require('@commitlint/test');

var _ava = require('ava');

var _ava2 = _interopRequireDefault(_ava);

var _ = require('.');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_ava2.default.serial('default cwd option to process.cwd()', t => new Promise(function ($return, $error) {
	var $Try_1_Finally = function ($Try_1_Exit) {
		return function ($Try_1_Value) {
			try {
				process.chdir(before);
				return $Try_1_Exit && $Try_1_Exit.call(this, $Try_1_Value);
			} catch ($boundEx) {
				return $error($boundEx);
			}
		}.bind(this);
	}.bind(this);

	var cwd, before, actual;
	return Promise.resolve(_test.fix.bootstrap('fixtures/basic')).then(function ($await_2) {
		try {
			cwd = $await_2;
			before = process.cwd();

			process.chdir(cwd);

			var $Try_1_Post = function () {
				try {
					return $return();
				} catch ($boundEx) {
					return $error($boundEx);
				}
			}.bind(this);var $Try_1_Catch = function (err) {
				try {
					throw err;
				} catch ($boundEx) {
					return $Try_1_Finally($error)($boundEx);
				}
			}.bind(this);try {
				return Promise.resolve((0, _2.default)()).then(function ($await_3) {
					try {
						actual = $await_3;

						t.true(actual.rules.basic);
						return $Try_1_Finally($Try_1_Post)();
					} catch ($boundEx) {
						return $Try_1_Catch($boundEx);
					}
				}.bind(this), $Try_1_Catch);
			} catch (err) {
				$Try_1_Catch(err)
			}
		} catch ($boundEx) {
			return $error($boundEx);
		}
	}.bind(this), $error);
}.bind(this)));
//# sourceMappingURL=index.serial-test.js.map