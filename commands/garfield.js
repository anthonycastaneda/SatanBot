const { SlashCommandBuilder } = require("@discordjs/builders");
const randomFile = require("select-random-file");
const { MessageEmbed } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("garfield")
        .setDescription("Garfield Minus Garfield"),
    async execute(interaction) {
        await interaction.deferReply();
        {
            const dir = "./static/GnG";
            randomFile(dir, (err, file) => {
                console.log(`${file}`);

                const garfieldEmbed = new MessageEmbed()
                    .setColor("0xd22b2b")
                    .setTitle("Garfield Minus Garfield")
                    .setDescription(
                        "This is a journey deep into the mind of an isolated young everyman as he fights a losing battle against loneliness and depression in a quiet American suburb"
                    )
                    .setImage(`https://satanbot.anthonycastaneda.com/GnG/${file}`)
                    .setURL("https://garfieldminusgarfield.net");
                return interaction.editReply({ embeds: [garfieldEmbed] });
            });
        }
    },
};
