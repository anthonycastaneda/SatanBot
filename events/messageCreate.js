const fs = require('fs');
const data = fs.readFileSync('static/quotes.txt', 'utf8');
const readMe = data.split(/\r?\n/);
const lineCount = readMe.length;
const randomLineNumber = Math.floor(Math.random() * lineCount);
const randomLine = readMe[randomLineNumber];


module.exports = {
	name: 'messageCreate',
	async run(message) {
		if (message.author.bot) {
			return;
		}
		else {
			(message.content.includes(new RegExp(/\bsatan\b|\bbaphomet\b|\bdevil\b|\bbeelzebub\b|\blucifer\b/gmi))); {
				message.channel.send('Ay yo! You said **my name** !',
					'',
					'You summoned me, what do you want? A quote?',
					'',
					`*${randomLine}*`,
				);
			}
		}
	} };