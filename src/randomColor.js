/**
 * Produces a random hex color
 *
 * @returns {string} Returns the random hex color
 */
function randomColor () {
  let hex = Math.floor(Math.random() * 0xffffff).toString(16)
  while (hex.length < 6) {
    hex = '0' + hex
  }
  return '#' + hex
}

export default randomColor
