// @ts-nocheck
const { SlashCommandBuilder } = require("@discordjs/builders");
const fetch = require("node-fetch");

module.exports = {
  data: new SlashCommandBuilder().setName("coffee").setDescription("Getchu a Coffee"),
  async execute(interaction) {
    const { file } = await fetch(
      "https://coffee.alexflipnote.dev/random.json"
    ).then((response) => response.json());
    interaction.reply({ files: [file] });
  },
};
