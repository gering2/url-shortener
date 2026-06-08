const {validateUrl} = require('../src/shortener');

test('validates a correct URL', () => {
    expect(validateUrl('https://www.example.com')).toBe(true);
})


test('invalidates an incorrect URL', () => {
    expect(validateUrl('not a url')).toBe(false);
})