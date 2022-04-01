const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const YAML = require('json-to-pretty-yaml');
const axios = require('axios');
const data = '';
const config = {
	method: 'get',
	url: 'https://api.ebird.org/v2/data/obs/US-TX-471/recent?maxResults=1',
	headers: {
		'detail': 'simple',
		'x-ebirdapitoken': 'lgdq3n89jv3v',
	},
	data: data,
};

module.exports = {
	data: new SlashCommandBuilder()
		.setName('newbird')
		.setDescription('Get Latest Walker County Bird Observation'),
	async execute(interaction) {
		await interaction.deferReply();
		axios(config)
			.then((response) => {
				const birdJson = response.data;
                // console.log(birdJson[0].comName);
				const birdString = JSON.stringify(birdJson[0].comName,birdJson[0].sciName,birdJson[0].locName)
				console.log(birdString);
				{const birdEmbed = new MessageEmbed()
					.setColor('0xd22b2b')
					.setTitle('The Most Recent Walker County Bird')
					.setDescription(birdString);
				return interaction.editReply({ embeds: [birdEmbed] });
				}

			})
			.catch((error) => {
				console.log(error);
			},
			);

	},
};