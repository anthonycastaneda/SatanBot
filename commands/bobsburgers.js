const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("burger-of-the-day")
    .setDescription("Gets a Random Burger of the Day"),
  async execute(interaction) {
    await interaction.deferReply();
    function randomIntFromInterval(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    const rndInt = randomIntFromInterval(1, 162);
    const url = `https://bobsburgers-api.herokuapp.com/burgerOfTheDay/${rndInt}`;
    console.log(url);
    await fetch(url)
      .then((result) => result.json())
      .then((output) => {
        const outputJson = output;
        const burger = outputJson.name;
        {
          const burgerEmbed = new MessageEmbed()
            .setColor("0xd22b2b")
            .setTitle("**Burger of the Day**")
            .setURL("https://thebobsburgerexperiment.com")
            .setImage(
              "https://satanbot.anthonycastaneda.com/static/OGNM-Burger.png")
            .setDescription(`**${burger}**`);

          return interaction.editReply({ embeds: [burgerEmbed] });
        }
      });
  },
};
