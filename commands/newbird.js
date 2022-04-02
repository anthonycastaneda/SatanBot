const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
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
                 const birdJson = response.data
                 let birdName = String(birdJson[0].comName)
                 let birdSci = String(birdJson[0].sciName)
                 let birdLoc = String(birdJson[0].locName)
                 let birdDate = String(birdJson[0].obsDt)
				 const wtf = require('wtf_wikipedia')
                 wtf.extend(require('wtf-plugin-api'))
                 wtf.extend(require('wtf-plugin-image'))
               
                 let doc = await wtf.fetch(`${birdName}`)
                 let img = doc.mainImage()
                 console.log(img)
                  .catch((err) => {
                    console.log(err)
                  })
                  .catch((error) => {
                    console.log(error)
                  });
                  const birdEmbed = new MessageEmbed()
                    .setColor("0xd22b2b")
                    .setTitle("The Most Recent Walker County Bird")
                    .setDescription(
                      `**Common Name**:  ${birdName}\n**Scientific Name**:  ${birdSci}\n**Location**:  ${birdLoc}\n**Date**:  ${birdDate}`
                    )
                    .setImage(`${img.src()}`);
                  return interaction.editReply({ embeds: [birdEmbed] });
                },
               )
             },
            }
