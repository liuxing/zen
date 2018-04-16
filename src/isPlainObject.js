import type from './type'

/**
 * Checks if `value` is a plain object
 *
 * @param {any} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
 */
function isPlainObject (value) {
  if (!value && type(value !== 'object')) {
    return false
  }
  if (Object.getPrototypeOf(value) === null) {
    return true
  }
  const proto = Object.getPrototypeOf(value)
  if (proto === null) {
    return true
  }
  var Ctor = Object.prototype.hasOwnProperty.call(proto, 'constructor') && proto.constructor
  return (typeof Ctor === 'function' &&
    Ctor instanceof Ctor && Function.prototype.toString.call(Ctor) === Function.prototype.toString.call(Object))
}

export default isPlainObject
