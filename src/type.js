/**
 * Returns a string indicating the type of the `obj`
 *
 * @param {any} obj The value to query.
 * @returns {string} Returns the type of the `obj`
 */
function type (obj) {
  const class2type = {}
  const types = ['Boolean', 'String', 'Number', 'Array', 'Object', 'Function', 'Date', 'RegExp', 'Error', 'Null', 'Undefined', 'Arguments', 'Symbol', 'Map', 'WeakMap', 'Set', 'WeakSet']
  types.map((name) => {
    class2type['[object ' + name + ']'] = name.toLowerCase()
  })
  return typeof obj === 'object' || typeof obj === 'function'
    ? class2type[Object.prototype.toString.call(obj)] || 'object'
    : typeof obj
}

export default type
