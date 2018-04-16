import isElement from '../src/isElement'

test('should return `true` for elements', () => {
  expect(isElement(document.createElement('div'))).toBeTruthy()
})

test('should return  `false` for elements', () => {
  expect(isElement('<div></div>')).toBeFalsy()
})
