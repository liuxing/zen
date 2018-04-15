/**
 * Generate a random string.
 *
 * @param {number} [length=16] The string length.
 * @param {string} [charset='alphanumeric'] The string charset
 * @returns {string} Returns the random string.
 */
function randomString (length = 16, charset = 'alphanumeric') {
  const numbers = '0123456789'
  const charsLower = 'abcdefghijklmnopqrstuvwxyz'
  const charsUpper = charsLower.toUpperCase()
  const hexChars = 'abcdef'
  const charsets = {
    hex: numbers + hexChars,
    numeric: numbers,
    alphabetic: charsLower,
    alphanumeric: numbers + charsLower + charsUpper
  }

  charset = charsets[charset] ? charsets[charset] : charset
  const result = []
  while (length--) {
    result.push(charset[Math.floor(Math.random() * charset.length)])
  }
  return result.join('')
}

export default randomString
