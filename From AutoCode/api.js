const fetch = require('node-fetch');

const url = 'https://uselessfacts.jsph.pl/random.json?language=en';

const fact = fetch(url)
	.then(
		(response) => {

			// Examine the text in the response
			response.json().then(function(data) {
				const factAPI = data.text;
				
			});
		},
	)
	.catch(function(err) {
		console.log('Fetch Error :-S', err);
	});
