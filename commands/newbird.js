const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
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
                let birdName = String(birdJson[0].comName);
                let birdSci = String(birdJson[0].sciName);
                let birdLoc = String(birdJson[0].locName);
                let birdDate = String(birdJson[0].obsDt)
                /*let imageSearch = {
                  method: "get",
                  url: `https://en.wikipedia.org/w/api.php?action=query&format=json&formatversion=2&prop=pageimages&piprop=original&titles=${birdName}`,
                  data: data
                };*/
                var url = "https://en.wikipedia.org/w/api.php";

                var params = {
                  action: "query",
                  prop: "pageimages",
                  titles: `${birdName}`,
                  format: "json",
                };

                url = url + "?origin=*";
                Object.keys(params).forEach(function (key) {
                  url += "&" + key + "=" + params[key];
                });

                fetch(url)
                  .then(function (response) {
                    console.log(response.query.pages[0].original.source);
                    return response.json();
                  })
                  .then(function (response) {
                    var pages = response.query.pages;
                    for (var page in pages) {
                      for (var img of pages[page]) {
                        //console.log(img.source);
                      }
                    }
                  })
                  .catch(function (error) {
                    console.log(error);
                  });



               /*axios(imageSearch).then((imageresponse) => {
                  let birdImage = imageresponse.data
                  let birdimgStr = String(birdImage);
                  //const page = json.query
                  // console.log(page.pages[0]);
                  //const obj = page;
                  console.log(birdimgStr);
                });*/
				{const birdEmbed = new MessageEmbed()
					.setColor('0xd22b2b')
					.setTitle('The Most Recent Walker County Bird')
					.setDescription(`**Common Name**:  ${birdName}\n**Scientific Name**:  ${birdSci}\n**Location**:  ${birdLoc}\n**Date**:  ${birdDate}`);
				return interaction.editReply({ embeds: [birdEmbed] });
				}

			})
			.catch((error) => {
				console.log(error);
			},
			);

	},
};