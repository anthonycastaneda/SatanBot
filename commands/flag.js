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
        console.log(value[0],value[1]);
        }
        /*
        {
		  {const flagEmbed = new MessageEmbed()
          .setColor("0xd22b2b")
          .setTitle("Flags of the World 🌎")
          .setImage(`https://flagcdn.com/h120/${key}.png`)
          .setDescription(`${value}`);
		  return interaction.editReply({ embeds: [flagEmbed] });
		  }
		}*/
			
	}
 }