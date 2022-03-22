const { SlashCommandBuilder } = require('@discordjs/builders');
const fetch = require('node-fetch');
const url = 'https://uselessfacts.jsph.pl/random.json?language=en';

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fact')
		.setDescription('Get a random fact'),
	async execute(interaction) {
		await interaction.deferReply();
		await fetch(url)
			.then(response => response.json())
			.then(data => interaction.editReply(data.text));

	},
};