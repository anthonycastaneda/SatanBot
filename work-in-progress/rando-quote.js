const fetch = require('node-fetch');

async function getQuoteRandom() {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    return (`${data.content} - ${data.author}`);
}
getQuoteRandom().then(console.log());