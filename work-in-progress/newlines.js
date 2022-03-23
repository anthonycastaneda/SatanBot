const fs = require('fs');
console.log('start');
fs.readFileSync('/Users/anthonycastaneda/SatanBot/work-in-progress/quotes.txt').toString().split('\n').forEach(function(line, index, arr) {
	if (index === arr.length - 1 && line === '') { return; }
	console.log(index + ' ' + line);
});
console.log('end');