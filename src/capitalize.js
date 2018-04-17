/**
 * Converts `string` to capitalize
 *
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the capitalized string.
 */
function capitalize (string) {
  if (string === undefined || string === '') {
    return ''
  }
  string = string.toLowerCase()
  const initial = string[0]
  return initial.toUpperCase() + string.substring(1)
}

export default capitalize
