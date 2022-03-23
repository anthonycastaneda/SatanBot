const { SlashCommandBuilder } = require('@discordjs/builders');
const fetch = require('node-fetch');
const url = 'https://uselessfacts.jsph.pl/random.json?language=en';
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fact')
		.setDescription('Get a random fact'),
	async execute(interaction) {
		await interaction.deferReply();
		await fetch(url)
			.then(response => response.json())
			.then(data => {
				const factEmbed = new MessageEmbed()
					.setColor('0xd22b2b')
					.setTitle('Rando-Facto')
					.setDescription(data.text);
				return interaction.editReply({ embeds: [factEmbed] });
			});

	},
};