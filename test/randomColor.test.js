import randomColor from '../src/randomColor'

test('randomColor() should generate a hex color', () => {
  for (let i = 0; i < 100; i++) {
    expect(randomColor()).toMatch(/^#[a-fA-F0-9]{6}$/)
  }
})
