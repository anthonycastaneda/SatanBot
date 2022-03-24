/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
const { SlashCommandBuilder } = require('@discordjs/builders');
const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bird')
		.setDescription('Get local bird fact'),

	async execute(interaction) {
		const response = await interaction.deferReply(); fetch({
			url: 'https://api.ebird.org/v2/data/obs/geo/recent?lat=30.72&lng=-95.55',
			headers: {
				'x-ebirdapitoken': 'lgdq3n89jv3v' },
		}).then(response => response.json())
			.then(data => {
				const birdEmbed = new MessageEmbed()
					.setColor('0xd22b2b')
					.setTitle('Local Bird Fact')
					.setDescription(data);
				return interaction.editReply({ embeds: [birdEmbed] });
			});

	},
};