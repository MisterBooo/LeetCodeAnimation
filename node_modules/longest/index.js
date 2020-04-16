/*!
 * longest <https://github.com/jonschlinkert/longest>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

module.exports = function(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('expected an array');
  }

  var len = arr.length;
  if (len === 0) {
    return undefined;
  }

  var val = arr[0];
  if (typeof val === 'number') {
    val = String(val);
  }

  var longest = val.length;
  var idx = 0;

  while (++idx < len) {
    var ele = arr[idx];
    if (ele == null) {
      continue;
    }

    if (typeof ele === 'number') {
      ele = String(ele);
    }

    var elen = ele.length;
    if (typeof elen !== 'number') {
      continue;
    }

    if (elen > longest) {
      longest = elen;
      val = ele;
    }
  }
  return val;
};
