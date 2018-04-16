/**
 * Checks if `value` is likely a DOM element.
 *
 * @param {any} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
 */
function isElement (value) {
  return value && value.nodeType === 1
}

export default isElement
