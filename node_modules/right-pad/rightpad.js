// Coding standard for this project defined @ https://github.com/MatthewSH/standards/blob/master/JavaScript.md
'use strict';

exports = module.exports = function rightPad (_string, _length, _char) {
  if (typeof _string !== 'string') {
    throw new Error('The string parameter must be a string.');
  }
  if (_string.length < 1) {
    throw new Error('The string parameter must be 1 character or longer.');
  }
  if (typeof _length !== 'number') {
    throw new Error('The length parameter must be a number.');
  }
  if(typeof _char !== 'string' && _char) {
    throw new Error('The character parameter must be a string.');
  }

  var i = -1;
  _length = _length - _string.length;
  if (!_char && _char !== 0) {
    _char = ' ';
  }
  while (++i < _length) {
    _string += _char;
  }

  return _string;
}
