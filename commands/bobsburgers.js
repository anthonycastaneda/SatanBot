const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('burger-of-the-day')
		.setDescription('Gets a Random Burger of the Day'),
	async execute(interaction) {
		await interaction.deferReply();
        function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)}
        const rndInt = randomIntFromInterval(1, 162)
        const url = `https://bobsburgers-api.herokuapp.com/burgerOfTheDay/${rndInt}`;
		await fetch(url)
        .then((result) => result.json())
        .then((output) => {
         const outputJson = (output)
         const burger = outputJson.burgers[0]
         const epTitle = outputJson.episodeName
         {const burgerEmbed = new MessageEmbed()
            .setColor("0xd22b2b")
            .setTitle(`**Episode**: ${epTitle}`)
            .setURL("https://bobs-burgers.fandom.com/wiki/Burger_of_the_Day")
            .setImage(
              "https://static.wikia.nocookie.net/bobsburgerpedia/images/4/47/Bobs-Burgers-Wiki-Animate-Burger_003.gif/revision/latest/scale-to-width-down/168?cb=20140116100604"
            )
            .setDescription(`**Burger of the Day**: ${burger}`)
			return interaction.editReply({ embeds: [burgerEmbed] });}})
        	
        }
	}




