import random from '../src/random'

test('random() should return `0` or `1` when no arguments are given', () => {
  const array = []
  for (let i = 0; i < 100; i++) {
    array.push(random())
  }
  const result = Array.from(new Set(array)).sort()
  expect(result).toEqual([0, 1])
})

test('random(min, max) should return an integer between `min` and `max`', () => {
  const cases = [
    [0, 100],
    [5, 10],
    [-5, 5],
    [10000, 100000]
  ]
  cases.forEach(item => {
    const _random = random(item[0], item[1])
    expect(_random).toBeGreaterThanOrEqual(item[0])
    expect(_random).toBeLessThanOrEqual(item[1])
  })
})

test('random(max) should return an integer between `0` and `max`', () => {
  const cases = [100, 5, 13, 1000]
  cases.forEach(num => {
    const _random = random(num)
    expect(_random).toBeGreaterThanOrEqual(0)
    expect(_random).toBeLessThanOrEqual(num)
  })
})

test('random(max, min) should return an integer between `min` and `max`', () => {
  const cases = [
    [100, 0],
    [10, 5],
    [5, -5],
    [100000, 10000]
  ]
  cases.forEach(item => {
    const _random = random(item[0], item[1])
    expect(_random).toBeGreaterThanOrEqual(item[1])
    expect(_random).toBeLessThanOrEqual(item[0])
  })
})
