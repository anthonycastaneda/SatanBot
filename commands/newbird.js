const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const axios = require('axios');
const wtf = require('wtf_wikipedia');
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
                let birdName = String(birdJson[0].comName);
                let birdSci = String(birdJson[0].sciName);
                let birdLoc = String(birdJson[0].locName);
                let birdDate = String(birdJson[0].obsDt);
                // Image Portion
                let doc = await wtf.fetch(`${birdName}`)
                img = doc.images()[0].json()
                console.log(img);
                
                const birdEmbed = new MessageEmbed()
                        .setColor("0xd22b2b")
                        .setTitle("The Most Recent Walker County Bird")
                        .setDescription(
                          `**Common Name**:  ${birdName}\n**Scientific Name**:  ${birdSci}\n**Location**:  ${birdLoc}\n**Date**:  ${birdDate}`
                        )
                        //.setImage(`${mainImage}`);
                      return interaction.editReply({ embeds: [birdEmbed] });
                    
                  })
                  .catch((err) => {
                    console.log(err);
                  })
                  .catch((error) => {
                    console.log(error);
                  })
                },
            };
