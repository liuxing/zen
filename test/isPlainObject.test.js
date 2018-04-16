import isPlainObject from '../src/isPlainObject'

class Foo {
  constructor (a) {
    this.a = 1
  }
}

test('should return `true` for elements', () => {
  expect(isPlainObject({})).toBeTruthy()
  expect(isPlainObject(Object())).toBeTruthy()
})

test('should return `false` for elements', () => {
  expect(isPlainObject(new Foo(1))).toBeFalsy()
  expect(isPlainObject([1, 2, 3])).toBeFalsy()
})
