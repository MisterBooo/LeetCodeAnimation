declare namespace detectIndent {
	interface Indent {
		/**
		Type of indentation. Is `undefined` if no indentation is detected.
		*/
		type: 'tab' | 'space' | undefined;

		/**
		Amount of indentation, for example `2`.
		*/
		amount: number;

		/**
		Actual indentation.
		*/
		indent: string;
	}
}

/**
Detect the indentation of code.

@param string - A string of any kind of text.

@example
```
import * as fs from 'fs';
import detectIndent = require('detect-indent');

// {
//     "ilove": "pizza"
// }
const file = fs.readFileSync('foo.json', 'utf8');

// Tries to detect the indentation and falls back to a default if it can't
const indent = detectIndent(file).indent || '    ';

const json = JSON.parse(file);

json.ilove = 'unicorns';

fs.writeFileSync('foo.json', JSON.stringify(json, null, indent));
// {
//     "ilove": "unicorns"
// }
```
*/
declare function detectIndent(string: string): detectIndent.Indent;

export = detectIndent;
