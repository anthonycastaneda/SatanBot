

// make API request
let result = await ({
  url: `https://api.ebird.org/v2/data/obs/geo/recent?lat=30.72&lng=-95.55`,
  headers: {
    'x-ebirdapitoken': `lgdq3n89jv3v`
  }
});
console.log(result);