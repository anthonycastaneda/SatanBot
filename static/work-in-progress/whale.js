const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");


module.exports = {
  data: new SlashCommandBuilder()
    .setName("whale")
    .setDescription("🐳 Getchu a random whale fact 🐳"),
  async execute(interaction) {
    await interaction.deferReply();
    const url = "https://some-random-api.ml/facts/whale";
    await fetch(url)
      .then((result) => result.json())
      .then((output) => {
        const outputJson = output;
        const whale = outputJson.fact;
        {
          const whaleEmbed = new MessageEmbed()
            .setColor("0xd22b2b")
            .setTitle("**WHALE FACT**")
            .setImage(
              "https://satanbot.anthonycastaneda.com/static/OGNM-Burger.png"
            )
            .setDescription(`**${whale}**`);

          return interaction.editReply({ embeds: [whaleEmbed] });
        }
      });
  },
};
