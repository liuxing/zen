/*!
* Zen.js 0.1.0
* (c) 2018 Liu Xing
* Released under the MIT License.
*/
/**
 * Produces a random integer between the inclusive `lower` and `upper` bounds.
 *
 * @param {number} [lower=0] The lower bound.
 * @param {number} [upper=1] The upper bound.
 * @returns {number} Returns the random number.
 */
function random(lower, upper) {
  if (lower === undefined && upper === undefined) {
    lower = 0;
    upper = 1;
  }
  if (upper === undefined) {
    upper = lower;
    lower = 0;
  }
  if (lower > upper) {
    var _ref = [lower, upper];
    upper = _ref[0];
    lower = _ref[1];
  }
  return lower + Math.floor(Math.random() * (upper - lower + 1));
}

/**
 * Creates an integer Array containing an arithmetic progression.
 *
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @param {number} [step=1] The value to increment or decrement by.
 * @returns {array} Returns the range of numbers.
 */
function range(start, end, step) {
  var index = 0;
  if (end === undefined) {
    end = start;
    start = 0;
  }
  step = step === undefined ? start < end ? 1 : -1 : step;
  var length = Math.max(Math.ceil((end - start) / step), 0);
  var result = new Array(length);

  while (length--) {
    result[index++] = start;
    start += step;
  }
  return result;
}

/**
 * Generate a random string.
 *
 * @param {number} [length=16] The string length.
 * @param {string} [charset='alphanumeric'] The string charset
 * @returns {string} Returns the random string.
 */
function randomString() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 16;
  var charset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'alphanumeric';

  var numbers = '0123456789';
  var charsLower = 'abcdefghijklmnopqrstuvwxyz';
  var charsUpper = charsLower.toUpperCase();
  var hexChars = 'abcdef';
  var charsets = {
    hex: numbers + hexChars,
    numeric: numbers,
    alphabetic: charsLower,
    alphanumeric: numbers + charsLower + charsUpper
  };

  charset = charsets[charset] ? charsets[charset] : charset;
  var result = [];
  while (length--) {
    result.push(charset[Math.floor(Math.random() * charset.length)]);
  }
  return result.join('');
}

/**
 * Produces a random hex color
 *
 * @returns {string} Returns the random hex color
 */
function randomColor() {
  var hex = Math.floor(Math.random() * 0xffffff).toString(16);
  while (hex.length < 6) {
    hex = '0' + hex;
  }
  return '#' + hex;
}

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Returns a string indicating the type of the `obj`
 *
 * @param {any} obj The value to query.
 * @returns {string} Returns the type of the `obj`
 */
function type(obj) {
  var class2type = {};
  var types = ['Boolean', 'String', 'Number', 'Array', 'Object', 'Function', 'Date', 'RegExp', 'Error', 'Null', 'Undefined', 'Arguments', 'Symbol', 'Map', 'WeakMap', 'Set', 'WeakSet'];
  types.map(function (name) {
    class2type['[object ' + name + ']'] = name.toLowerCase();
  });
  return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' || typeof obj === 'function' ? class2type[Object.prototype.toString.call(obj)] || 'object' : typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
}

/**
 * Checks if `value` is a plain object
 *
 * @param {any} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
 */
function isPlainObject(value) {
  if (!value && type(value !== 'object')) {
    return false;
  }
  if (Object.getPrototypeOf(value) === null) {
    return true;
  }
  var proto = Object.getPrototypeOf(value);
  if (proto === null) {
    return true;
  }
  var Ctor = Object.prototype.hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor === 'function' && Ctor instanceof Ctor && Function.prototype.toString.call(Ctor) === Function.prototype.toString.call(Object);
}

/**
 * Checks if `value` is likely a DOM element.
 *
 * @param {any} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
 */
function isElement(value) {
  return value && value.nodeType === 1;
}

/**
 * Checks if `value` is an empty.
 *
 * @param {any} value The value to check.
 * @returns {boolean} Returns `true` if `value` empty, else `false`.
 */
function isEmpty(value) {
  for (var key in value) {
    return false;
  }
  return true;
}

var index = {
  version: '0.1.0',
  random: random,
  range: range,
  randomColor: randomColor,
  randomString: randomString,
  type: type,
  isPlainObject: isPlainObject,
  isElement: isElement,
  isEmpty: isEmpty
};

export default index;
