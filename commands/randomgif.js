const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
var axios = require("axios");

var config = {
  method: "get",
  url: "https://meme-api.herokuapp.com/gimme/gifs",
  headers: {},
};
module.exports = {
  data: new SlashCommandBuilder()
    .setName("random-gifs")
    .setDescription("Random Gifs"),
  async execute(interaction) {
    await interaction.deferReply();
    axios(config).then((response) => {
      response.data;
      {
        const funnyEmbed = new MessageEmbed()
          .setColor("0xd22b2b")
          .setTitle(response.data.title)
          .setImage(response.data.url)
          .setDescription(" ");
        return interaction.editReply({ embeds: [funnyEmbed] });
      }
    });
  },
};
