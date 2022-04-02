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
		.setName('bird')
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
				 //Image Search
                 const { XMLHttpRequest } = require ('w3c-xmlhttprequest');
                 var xhr = new XMLHttpRequest();
                 xhr.withCredentials = true;

                 xhr.open(
                   "GET",
                   `https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=pageimages&titles=${birdName}&redirects=1&formatversion=2&piprop=name%7Coriginal`
                 );
                 xhr.setRequestHeader(
                   "Cookie",
                   "GeoIP=US:TX:Huntsville:30.65:-95.58:v4"
                 );

                 xhr.send();
                 xhr.addEventListener("readystatechange", function () {
                   if (this.readyState === 4) {
                     const json = this.responseText;
                     const jsonParsed = JSON.parse(json);
                     const imgUrl = jsonParsed.query.pages[0].original.source;
                     console.log(imgUrl);

                     const birdEmbed = new MessageEmbed()
                       .setColor("0xd22b2b")
                       .setTitle("The Most Recent Walker County Bird")
                       .setDescription(
                         `**Common Name**:  ${birdName}\n**Scientific Name**:  ${birdSci}\n**Location**:  ${birdLoc}\n**Date**:  ${birdDate}\n*reported on eBird.org*`
                       )
                       .setImage(`${imgUrl}`);
                     return interaction.editReply({ embeds: [birdEmbed] });
                   }
                 });
                },
               )
             },
            }
