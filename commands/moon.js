const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const { moonAuth } = require("../config.json");

//let date = new Date().toISOString().split("T")[0];
var date = new Date(); // Create date
var timestamp = date.toLocaleString('sv-se', { timeZone: 'America/Chicago' }).replace(" ", "T").split(".")[0]; // Reformat the Locale timestamp ISO YYYY-MM-DDThh:mm:ss
var axios = require("axios");
var data = JSON.stringify({
    format: "png",
    style: {
        moonStyle: "default",
        backgroundStyle: "solid",
        backgroundColor: "black",
        headingColor: "white",
        textColor: "white",
    },
    observer: {
        latitude: 30.7235263,
        longitude: -95.550777,
        date: `${timestamp}`,
    },
    view: {
        type: "landscape-simple",
        orientation: "north-up",
    },
});

var config = {
    method: "post",
    url: "https://api.astronomyapi.com/api/v2/studio/moon-phase",
    headers: {
        Authorization: `${moonAuth}`,
        "Content-Type": "application/json",
    },
    data: data,
};

module.exports = {
    data: new SlashCommandBuilder()
        .setName("moon")
        .setDescription("Get Huntsville Moony Phase"),
    async execute(interaction) {
        await interaction.deferReply();
        axios(config)
            .then((response) => {
                const moonUrl = response.data.data;
                console.log(moonUrl);
                if (moonUrl.imageUrl) {
                    const moonEmbed = new MessageEmbed()
                        .setColor("#F0386B")
                        .setTitle("Mooooony")
                        .setImage(moonUrl.imageUrl);
                    return interaction.editReply({ embeds: [moonEmbed] });
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    },
};
