const { SlashCommandBuilder } = require("@discordjs/builders");
const fetch = require("node-fetch");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("biryani")
    .setDescription("Biryani as a Service"),
  async execute(interaction) {
    const { image } = await fetch("https://biriyani.anoram.com/get").then(
      (response) => response.json()
    );
    interaction.reply({ files: [image] });
  },
};
