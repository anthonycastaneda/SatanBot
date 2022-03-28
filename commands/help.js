const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Open a ticket for Tech Help."),
  async execute(interaction) {
    return interaction.reply(
      `Hey there, ${interaction.user.username}.  If you need tech help, or need to speak to an admin,  please see the <#957910711282053181> channel.`
    );
  },
};
