import type from '../src/type'

test('type(obj) should returns a string indicating the type of the `obj`', () => {
  const cases = {
    boolean: true,
    string: 'zen,js',
    number: 120,
    array: [1, 2, 3],
    object: { a: 1, b: 2 },
    function: function () { console.log('zen.js') },
    date: new Date(),
    regexp: /zen/,
    error: new Error('Whoops!'),
    null: null,
    undefined: undefined,
    arguments: arguments,
    symbol: Symbol('zen'),
    map: new Map(),
    weakmap: new WeakMap(),
    set: new Set(),
    weakset: new WeakSet()
  }
  for (let key in cases) {
    expect(type(cases[key])).toMatch(key)
  }
})
