const database = {}

const crypto = require('crypto');

function generateShortCode(url) {
    return crypto.createHash('md5').update(url).digest('hex').slice(0, 6);
}
function validateUrl(url) {
    try {
        new URL(url);
        return true;
    }
    catch {
        return false;
    }
}

function createShortUrl(url) {
    if (!validateUrl(url)) {
        throw new Error('Invalid URL');
    }
    const shortCode = generateShortCode(url);
    database[shortCode] = url;
    return shortCode;

}
module.exports = {
    validateUrl,
    createShortUrl
}