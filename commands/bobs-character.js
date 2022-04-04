const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("bobs-burgers-character")
    .setDescription("Gets a Random Bob's Burgers Character"),
  async execute(interaction) {
    await interaction.deferReply();
    function randomIntFromInterval(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    const rndInt = randomIntFromInterval(1, 501);
    const url = `https://bobsburgers-api.herokuapp.com/characters/${rndInt}`;
    await fetch(url)
      .then((result) => result.json())
      .then((output) => {
        const outputJson = output;
        const name = outputJson.name;
        const age = outputJson.age;
        const occupation = outputJson.occupation;
        const firstEp = outputJson.firstEpisode;
        const voice = outputJson.voicedBy;
        const id = outputJson.id
        {
          const characterEmbed = new MessageEmbed()
            .setColor("0xd22b2b")
            .setTitle(`**${name}**`)
            .setURL("https://bobs-burgers.fandom.com/wiki/")
            .setImage(
              `https://bobsburgers-api.herokuapp.com/images/characters/${id}.jpg`
            )
            .setDescription(`**${name}**\n
            **Occupation**: ${occupation}\n
            **Age**: ${age}\n
            **First Episode**: ${firstEp}\n
            **Voiced by**: ${voice}
            `);
          return interaction.editReply({ embeds: [characterEmbed] });
        }
      });
  },
};
