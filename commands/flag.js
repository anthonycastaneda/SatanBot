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
        const entries = Object.entries(codes);
        const prop = entries[Math.floor(Math.random() * entries.length)];
        for (const [key, value] of Object.entries(prop)) {
        console.log(prop['0'],prop['1']);
        }
        
        {
		  {const flagEmbed = new MessageEmbed()
          .setColor("0xd22b2b")
          .setTitle("Flags of the World 🌎")
          .setImage(`https://flagcdn.com/h120/${prop['0']}.png`)
          .setDescription(`${prop['1']}`);
		  return interaction.editReply({ embeds: [flagEmbed] });
		  }
		}
			
	}
 }
