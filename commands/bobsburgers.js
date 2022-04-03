const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('burger-of-the-day')
		.setDescription('Gets a Random Burger of the Day'),
	async execute(interaction) {
		await interaction.deferReply();
        function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
        }
        const rndInt = randomIntFromInterval(1, 162)
        console.log(rndInt)
        const url = `https://bobsburgers-api.herokuapp.com/burgerOfTheDay/${rndInt}`;
		await fetch(url)
			    .then(result => result.json())
                .then((output) => {
                console.log('Output: ', output);
                }).catch(err => console.error(err))
				/*{const burgerEmbed = new MessageEmbed()
					.setColor('0xd22b2b')
					.setTitle('You are a Good Boy')
					.setImage(`${dogImageResponse}`)
					.setDescription('Yes you are!');
				return interaction.editReply({ embeds: [burgerEmbed] });
				}*/
			},
			
	};




