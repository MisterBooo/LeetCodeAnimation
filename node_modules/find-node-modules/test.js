'use strict';

var path = require('path');
var test = require('tape');
var findNodeModules = require('./');

test('find-node-modules', function (t) {
	t.plan(5);

	t.deepEquals(findNodeModules(), ['node_modules']);

	t.deepEquals(findNodeModules('test/b/c/d'), [
		'node_modules', '../node_modules', '../../../node_modules', '../../../../node_modules'
	]);

	t.deepEquals(findNodeModules('test/b/c/d/e/f'), [
		'node_modules', '../../node_modules', '../../../node_modules',
		'../../../../../node_modules', '../../../../../../node_modules'
	]);

	t.deepEquals(findNodeModules({ cwd: 'test/b/c/d' }), [
		'node_modules', '../node_modules', '../../../node_modules', '../../../../node_modules'
	]);

	var cwd = process.cwd();

	t.deepEquals(findNodeModules({ cwd: 'test/b/c/d', relative: false }), [
		path.join(cwd, 'test/b/c/d/node_modules'),
		path.join(cwd, 'test/b/c/node_modules'),
		path.join(cwd, 'test/node_modules'),
		path.join(cwd, 'node_modules')
	]);
});