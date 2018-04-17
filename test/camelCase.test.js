import camelCase from '../src/camelCase'

test('should return a camel case', () => {
  const cases = [
    'Foo Bar',
    '--foo-bar--',
    '__FOO_BAR__'
  ]
  cases.forEach(item => {
    expect(camelCase(item)).toMatch('fooBar')
  })
})
