/* eslint-disable space-before-function-paren */
/* eslint-disable comma-dangle */
/* eslint-disable no-var */
/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

var date = (new Date()).toISOString().split('T')[0];
var axios = require('axios');
var data = JSON.stringify({
    "format": "png",
    "style": {
        "moonStyle": "default",
        "backgroundStyle": "solid",
        "backgroundColor": "black",
        "headingColor": "white",
        "textColor": "white"
    },
    "observer": {
        "latitude": 30.7235263,
        "longitude": -95.550777,
        "date": `${date}`
    },
    "view": {
        "type": "landscape-simple",
        "orientation": "north-up"
    }
});

var config = {
    method: 'post',
    url: 'https://api.astronomyapi.com/api/v2/studio/moon-phase',
    headers: {
        'Authorization': 'Basic NzBkODEyMGQtMjk3YS00YzZiLTg0ZDctNmUwOGUxYmMwZTQxOmU3NWM0NzNlZTgyODgyMzU3ZmNmNzFkOGEyYTdjYjRiZTVhYWRiNjRlMzZlMWI0ZjA5NzZjYTBmNWVjYWFjOGRiZWU5MWEyODUwNTBmMDZkZDgyMTJlZWFmZjNlMmU2ZWVhOGU3MTcwODU0Y2Y0MDg5OWRhYmRlMTAzMTE3MjllNGFlMWZjZTRlOGU3OWM5ZDRhNGQyZDZlMjI5OGUwNWM0ZmYyN2UzMDNjOGYyZWZkNTE4OTIzMjMzMjdlMDY2OTdhNzcwNzY1NmE3ZTgwMmVmZDBmNzAxYWE2MGI3M2Ez',
        'Content-Type': 'application/json'
    },
    data: data
};

module.exports = {
	data: new SlashCommandBuilder()
		.setName('moon')
		.setDescription('Get Huntsville Moony Phase'),
	async execute(interaction) {
        await interaction.deferReply();
             axios(config)
            .then((response) => {
                const moonUrl = response.data.data;
                console.log(moonUrl);
                if (moonUrl.imageUrl) {
                    const moonEmbed = new MessageEmbed()
                        .setColor('#F0386B')
                        .setTitle('Mooooony')
                        .setImage(moonUrl.imageUrl);
                    return interaction.editReply({ embeds: [moonEmbed] });
                }
            })
            .catch(function (error) {
                console.log(error);
            }
        );
	}
};
