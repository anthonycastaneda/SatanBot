const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const fs = require('fs');
const data = fs.readFileSync('static/quotes.txt', 'utf8');
const readMe = data.split(/\r?\n/);
const lineCount = readMe.length;
const randomLineNumber = Math.floor(Math.random() * lineCount);
const randomLine = readMe[randomLineNumber];
console.log(randomLine);


module.exports = {
	data: new SlashCommandBuilder()
		.setName('quote')
		.setDescription('Get a quote Satan likes!'),
	async execute(interaction) {
		const quoteEmbed = new MessageEmbed()
			.setColor('0xd22b2b')
			.setTitle('Quotes')
			.setImage('static/baphy.jpeg')
			.setDescription(randomLine);
		return interaction.reply({ embeds: [quoteEmbed] });
	},
};