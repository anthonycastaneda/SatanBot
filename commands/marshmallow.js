const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("marshmallow")
    .setDescription("🏳️‍🌈 Gets Marshmallow 🏳️‍⚧️"),
  async execute(interaction) {
    await interaction.deferReply();
    const url = "https://bobsburgers-api.herokuapp.com/characters/293";
    await fetch(url)
      .then((result) => result.json())
      .then((output) => {
        const outputJson = output;
        const firstEp = outputJson.firstEpisode;
        {
          const marshmallowEmbed = new MessageEmbed()
            .setColor("0xd22b2b")
            .setTitle("Marshmallow")
            .setURL("https://bobs-burgers.fandom.com/wiki/Marshmallow")
            .setThumbnail(
              "https://satanbot.anthonycastaneda.com/static/marshmallow.jpeg"
            )
            .setImage(
              "https://bobsburgers-api.herokuapp.com/images/characters/293.jpg"
            )
            .setDescription(`**First Episode**: ${firstEp}`);
          setFooter({
            text: "Oh, hey Marshmallow",
          });
          return interaction.editReply({ embeds: [marshmallowEmbed] });
        }
      });
  },
};
