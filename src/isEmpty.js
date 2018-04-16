/**
 * Checks if `value` is an empty.
 *
 * @param {any} value The value to check.
 * @returns {boolean} Returns `true` if `value` empty, else `false`.
 */
function isEmpty (value) {
  for (let key in value) {
    return false
  }
  return true
}

export default isEmpty
