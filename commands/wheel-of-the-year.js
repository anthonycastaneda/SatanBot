const {
  MessageActionRow,
  MessageSelectMenu,
  MessageEmbed,
} = require("discord.js");

const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("wheel")
    .setDescription("Info about the Wheel of the Year"),
  async execute(interaction) {
    await interaction.deferReply();
    const wheelEmbed = new MessageEmbed()
      .setColor("0xd22b2b")
      .setTitle("Wheel of the Year")
      .setDescription("wiki article")
      .setURL("https://en.wikipedia.org/wiki/Wheel_of_the_Year/")
      .setImage("https://anthonycastaneda.com/img/wheel.png");
    const row = new MessageActionRow().addComponents(
      new MessageSelectMenu()
        .setCustomId("Sabbat")
        .setPlaceholder("Sabbat")
        .addOptions([
          {
            label: "Yule",
            value: "Yule",
            description: "December 20-23",
            emoji: {
              id: null,
              name: "❄",
            },
            default: false,
          },
          {
            label: "Imbolc",
            value: "Imbolc",
            description: "February 1-2",
            emoji: {
              id: null,
              name: "🔥",
            },
            default: false,
          },
          {
            label: "Ostara",
            value: "Ostara",
            description: "March 19-23",
            emoji: {
              id: null,
              name: "🐰",
            },
            default: false,
          },
          {
            label: "Beltane",
            value: "Beltane",
            description: "April 30 - May 1",
            emoji: {
              id: null,
              name: "🌸",
            },
            default: false,
          },
          {
            label: "Litha",
            value: "Litha",
            description: "June 20-21",
            emoji: {
              id: null,
              name: "🌞",
            },
            default: false,
          },
          {
            label: "Lughnasadh",
            value: "Lughnasadh",
            description: "August 1",
            emoji: {
              id: null,
              name: "🍞",
            },
            default: false,
          },
          {
            label: "Mabon",
            value: "Mabon",
            description: "September 21",
            emoji: {
              id: null,
              name: "🍎",
            },
            default: false,
          },
          {
            label: "Samhain",
            value: "Samhain",
            description: "November 1",
            emoji: {
              id: null,
              name: "🎃",
            },
            default: false,
          },
        ])
    );
    return interaction.editReply({ embeds: [wheelEmbed], components: [row] });
  },
};
