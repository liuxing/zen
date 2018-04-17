/**
 * Converts `string` to camel case
 *
 * @param {string} string The string to convert.
 * @returns {string} Returns the camel cased string.
 */
function camelCase (string) {
  if (string === undefined || string === '') {
    return ''
  }
  const strArr = string.toLowerCase().split(/-|_|\s/)
  console.log(strArr)
  for (let i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].substring(1)
  }
  const _str = strArr.join('')
  return _str[0].toLowerCase() + _str.substring(1)
}

export default camelCase
