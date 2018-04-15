/**
 * Produces a random integer between the inclusive `lower` and `upper` bounds.
 *
 * @param {number} [lower=0] The lower bound.
 * @param {number} [upper=1] The upper bound.
 * @returns {number} Returns the random number.
 */
function random (lower, upper) {
  if (lower === undefined && upper === undefined) {
    lower = 0
    upper = 1
  }
  if (upper === undefined) {
    upper = lower
    lower = 0
  }
  if (lower > upper) {
    [upper, lower] = [lower, upper]
  }
  return lower + Math.floor(Math.random() * (upper - lower + 1))
}

export default random
