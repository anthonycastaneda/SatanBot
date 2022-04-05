/* This is importing the `SlashCommandBuilder` and `MessageEmbed` from the `@discordjs/builders` and
`discord.js` modules respectively. */
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const axios = require('axios');

/* This is setting up the config for the axios request. */
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
	/* This is setting up the command to be executed. */
    data: new SlashCommandBuilder()
		.setName('bird')
		.setDescription('Get Latest Walker County Bird Observation'),
/* This is setting up the command to be executed. */
	async execute(interaction) {
		/* This is setting up the axios request. */
        await interaction.deferReply();
		axios(config)
			.then((response) => {
                 /* This is setting up the variables for the bird. */
                 const birdJson = response.data
                 let birdName = String(birdJson[0].comName)
                 let birdSci = String(birdJson[0].sciName)
                 let birdLoc = String(birdJson[0].locName)
                 let birdDate = String(birdJson[0].obsDt)
				 
                /* This is setting up the request to the Wikipedia API. */
                 const { XMLHttpRequest } = require ('w3c-xmlhttprequest');
                 var xhr = new XMLHttpRequest();
                 xhr.withCredentials = true;

              /* This is setting up the request to the Wikipedia API. */
                 xhr.open(
                   "GET",
                   `https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=pageimages&titles=${birdName}&redirects=1&formatversion=2&piprop=name%7Coriginal`
                 );
            /* This is setting the cookie for the request. */
                 xhr.setRequestHeader(
                   "Cookie",
                   "GeoIP=US:TX:Huntsville:30.65:-95.58:v4"
                 );

          /* This is sending the request to the API. */
                 xhr.send();
              /* This is setting up the event listener for the XMLHttpRequest. */
                 xhr.addEventListener("readystatechange", function () {
                   if (this.readyState === 4) {
                     const json = this.responseText;
                     const jsonParsed = JSON.parse(json);
                     const imgUrl = jsonParsed.query.pages[0].original.source;
                     console.log(imgUrl);

                    /* This is setting up the embed for the bird. */
                     const birdEmbed = new MessageEmbed()
                       .setColor("0xd22b2b")
                       .setTitle("The Most Recent Walker County Bird")
                       .setDescription(
                         `**Common Name**:  ${birdName}\n**Scientific Name**:  ${birdSci}\n**Location**:  ${birdLoc}\n**Date**:  ${birdDate}\n*reported on eBird.org*`
                       )
                       .setImage(`${imgUrl}`);
                     /* This is sending the embed to the channel. */
                     return interaction.editReply({ embeds: [birdEmbed] });
                   }
                 });
                },
               )
             },
            }
