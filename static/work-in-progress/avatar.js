/* This is importing the `SlashCommandBuilder` from the `@discordjs/builders` package. */
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageAttachment } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
		.setName('pride-avatar')
		.setDescription('Get a Pride border on your avatar.'),
    async execute(interaction) {


		return interaction.reply(`Your avatar: ${interaction.user.displayAvatarURL({ dynamic: true })}`);
	},
};

let link = `https://some-random-api.ml/canvas/lgbt?avatar=${message.author.avatarURL(
  { format: "png" })}`;
//Make sure the link ends with either .png or .jpg

//create a message attachment with the name of the file with discord.js built in attachment class.
let attachment = new MessageAttachment(link, "triggered.gif");
message.channel.send(attachment); //send the attachment

// -------- Sending the image inside an embed --------
const attachment = new MessageAttachment(link, "triggered.gif");
const embed = new MessageEmbed()
  .setTitle(`Image Generated`)
  .attachFiles(attachment)
  .setImage("attachment://triggered.gif");
message.channel.send(embed);