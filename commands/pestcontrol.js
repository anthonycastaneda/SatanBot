const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("pest-control")
    .setDescription("Gets a Random Pest Control Truck"),
  async execute(interaction) {
    await interaction.deferReply();
    function randomIntFromInterval(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    const rndInt = randomIntFromInterval(1, 225);
    const url = `https://bobsburgers-api.herokuapp.com/pestControlTruck/${rndInt}`;
    await fetch(url)
      .then((result) => result.json())
      .then((output) => {
        const outputJson = output;
        const image = outputJson.image;
        {
          const truckEmbed = new MessageEmbed()
            .setColor("0xd22b2b")
            .setTitle(`**Pest Control Truck of the Day**`)
            .setURL("https://bobs-burgers.fandom.com/wiki/Pest_Control_Truck")
            .setImage(
              `https://bobsburgers-api.herokuapp.com/images/pestControlTruck/${rndInt}.jpg`
            );
          return interaction.editReply({ embeds: [truckEmbed] });
        }
      });
  },
};
