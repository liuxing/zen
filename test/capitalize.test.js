import capitalize from '../src/capitalize'

test('should capitalize the first character of a string', () => {
  const cases = [
    'ZEN',
    'zen',
    'ZeN'
  ]
  cases.forEach(item => {
    expect(capitalize(item)).toMatch('Zen')
  })
})
