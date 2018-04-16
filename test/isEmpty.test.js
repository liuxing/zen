import isEmpty from '../src/isEmpty'

test('should return `true` for elements', () => {
  expect(isEmpty({})).toBeTruthy()
  expect(isEmpty([])).toBeTruthy()
})

test('should return `false` for elements', () => {
  expect(isEmpty([1, 3])).toBeFalsy()
  expect(isEmpty({ 'a': 0 })).toBeFalsy()
})
