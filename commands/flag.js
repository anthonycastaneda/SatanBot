const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('flag')
		.setDescription('Getchu a Flag 🏴‍☠️'),
	async execute(interaction) {
		await interaction.deferReply();
		const codes = await fetch('https://flagcdn.com/en/codes.json').then(response => response.json())
        const keys = Object.keys(codes);
        const prop = keys[Math.floor(Math.random() * keys.length)];
        console.log(prop);
           /* {
				{const flagEmbed = new MessageEmbed()
					.setColor('0xd22b2b')
					.setTitle('Flags of the World 🌎')
					.setImage(`${dogImageResponse}`)
					.setDescription('');
				return interaction.editReply({ embeds: [dogEmbed] });
				}
			},*/
			
	},
 };




// https://flagcdn.com/h120/