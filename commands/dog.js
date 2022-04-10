/* eslint-disable no-var */
const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
var axios = require("axios");

var config = {
  method: "get",
  url: "https://dog.ceo/api/breeds/image/random",
  headers: {},
};
module.exports = {
  data: new SlashCommandBuilder()
    .setName("dog")
    .setDescription("Gets a Good Boy"),
  async execute(interaction) {
    await interaction.deferReply();
    axios(config).then((response) => {
      const dogImageResponse = response.data.message;
      {
        const dogEmbed = new MessageEmbed()
          .setColor("0xd22b2b")
          .setTitle("You are a Good Boy")
          .setImage(`${dogImageResponse}`)
          .setDescription("Yes you are!");
        return interaction.editReply({ embeds: [dogEmbed] });
      }
    });
  },
};
