const {validateUrl, createShortUrl } = require('../src/shortener');

const EXAMPLE_URL = 'https://www.example.com';
test('validates a correct URL', () => {
    expect(validateUrl(EXAMPLE_URL)).toBe(true);
})


test('invalidates an incorrect URL', () => {
    expect(validateUrl('not a url')).toBe(false);
})

test('same URL produces the same short code', () => {
    const url = EXAMPLE_URL;
    const shortCode1 = createShortUrl(url);
    const shortCode2 = createShortUrl(url);
    expect(shortCode1).toBe(shortCode2);
})

test('different URLs produce different short codes', () => {
    const url = EXAMPLE_URL;    
    const url2 = 'https://www.google.com';
    const shortCode1 = createShortUrl(url);
    const shortCode2 = createShortUrl(url2);
    expect(shortCode1).not.toBe(shortCode2);
})