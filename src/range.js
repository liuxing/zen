/**
 * Creates an integer Array containing an arithmetic progression.
 *
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @param {number} [step=1] The value to increment or decrement by.
 * @returns {array} Returns the range of numbers.
 */
function range (start, end, step) {
  let index = 0
  if (end === undefined) {
    end = start
    start = 0
  }
  step = step === undefined ? (start < end ? 1 : -1) : step
  let length = Math.max(Math.ceil((end - start) / step), 0)
  const result = new Array(length)

  while (length--) {
    result[index++] = start
    start += step
  }
  return result
}

export default range
