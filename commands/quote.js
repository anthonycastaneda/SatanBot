/* This is importing the `SlashCommandBuilder` from the `@discordjs/builders` package. */
const { SlashCommandBuilder } = require('@discordjs/builders');
/* This is importing the `MessageEmbed` from the `discord.js` package. */
const { MessageEmbed } = require('discord.js');
/* This is importing the `fs` package from the Node.js standard library. */
const fs = require('fs');
/* This is reading the file `static/quotes.txt` and storing the contents in the variable `data`. */
const data = fs.readFileSync('static/quotes.txt', 'utf8');
/* This is splitting the data into an array of lines. */
const readMe = data.split(/\r?\n/);
/* This is creating a variable called `lineCount` and setting it to the length of the array `readMe`. */
const lineCount = readMe.length;
/* This is creating a random number between 0 and the length of the array `readMe`. */
const randomLineNumber = Math.floor(Math.random() * lineCount);
/* This is creating a variable called `randomLine` and setting it to the value of the array `readMe` at
the index `randomLineNumber`. */
const randomLine = readMe[randomLineNumber];
console.log(randomLine);


module.exports = {
	/* This is creating a new SlashCommandBuilder object and setting it to the variable `data`. */
    data: new SlashCommandBuilder()
        .setName('quote')
		.setDescription('Get a quote Satan likes!'),
	/* This is a function that is being called when the command is executed. */
    async execute(interaction) /* This is creating a new MessageEmbed object and setting it to the
    variable `quoteEmbed`. */
    {
		const quoteEmbed = new MessageEmbed()
			.setColor('0xd22b2b')
			.setTitle('Satan Approved Quotes')
			.setImage('https://static01.nyt.com/images/2018/11/10/autossell/10-SATANICTEMPLE/09-SATANICTEMPLE-superJumbo.jpg')
			.setDescription(randomLine);
		/* This is sending the message to the channel where the command was executed. */
        return interaction.reply({ embeds: [quoteEmbed] });
	},
};