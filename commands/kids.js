const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
var axios = require("axios");

var config = {
  method: "get",
  url: "https://meme-api.herokuapp.com/gimme/childrenfallingover",
  headers: {},
};
module.exports = {
  data: new SlashCommandBuilder()
    .setName("kid")
    .setDescription("Kids Falling Over"),
  async execute(interaction) {
    await interaction.deferReply();
    axios(config).then((response) => {
      response.data;
      {
        const kidEmbed = new MessageEmbed()
          .setColor("0xd22b2b")
          .setTitle(response.data.title)
          .setImage(response.data.url)
          .setDescription(" ");
        return interaction.editReply({ embeds: [kidEmbed] });
      }
    });
  },
};