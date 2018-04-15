import randomString from '../src/randomString'

test('randomString() defaults to 16 characters in length', () => {
  expect(randomString().length).toBe(16)
})

test('randomString(length) should to `length` characters in length', () => {
  const cases = [100, 5, 13, 1000]
  cases.forEach(num => {
    expect(randomString(num).length).toBe(num)
  })
})

test('randomString(16, "numeric") should return a numeric string of 6 characters in length', () => {
  expect(randomString(6, 'numeric')).not.toMatch(/\D/)
})

test('randomString(16, "alphabetic") should return a alphabetic string of 32 characters in length', () => {
  expect(randomString(32, 'alphabetic')).not.toMatch(/\d/)
})

test('randomString(16, "hex") should return a hex string of 15 characters in length', () => {
  expect(randomString(15, 'hex')).not.toMatch(/[^0-9a-f]/)
})
