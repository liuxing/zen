import range from '../src/range'

test('range(0) should return an empty array', () => {
  expect(range(0)).toEqual([])
})

test('range(end) should return an array containing 0 to `end` [0, end)', () => {
  expect(range(5)).toEqual([0, 1, 2, 3, 4])
})

test('range(start, end) should return an array containing `start` to `end` [start, end)', () => {
  expect(range(2, 6)).toEqual([2, 3, 4, 5])
})

test('range(start, end, step) should return an array of elements: `start` + `i` * `step`', () => {
  expect(range(0, 10, 2)).toEqual([0, 2, 4, 6, 8])
})
