declare const resolveGlobal: {
	/**
	Resolve the path of a globally installed module.

	@param moduleId - What you would use in `require()`.
	@returns The resolved path. Throws if the module can't be found.

	@example
	```
	// $ npm install --global cat-names
	import resolveGlobal = require('resolve-global');

	console.log(resolveGlobal('cat-names'));
	//=> '/usr/local/lib/node_modules/cat-names'
	```
	*/
	(moduleId: string): string;

	/**
	Resolve the path of a globally installed module.

	@param moduleId - What you would use in `require()`.
	@returns The resolved path. Returns `undefined` instead of throwing if the module can't be found.
	*/
	silent(moduleId: string): string | undefined;
};

export = resolveGlobal;
