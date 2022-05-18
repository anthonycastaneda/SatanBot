/* eslint-disable comma-dangle */
/* eslint-disable quotes */
const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("satan")
        .setDescription("Summon Satan"),
    async execute(interaction) {
        await interaction.deferReply();
        const embedSatan = new MessageEmbed()
            .setColor("#d10404")
            .setTitle("The Satanic Temple ~~(𖤐)~~")
            .setURL("https://thesatanictemple.com")
            .setImage("https://docs.anthonycastaneda.com/img/baph-poster.png")
            .setAuthor(
                "Helel ben Shachar",
                "https://cdn.shopify.com/s/files/1/0428/0465/t/58/assets/satan-logo-red.png",
                "https://ordained.satanicministry.com"
            )
            .setDescription(
                "Information about TSTs active campaigns can be found [here](https://thesatanictemple.com/pages/campaigns). ```The Mission Of The Satanic Temple Is To Encourage Benevolence And Empathy, Reject Tyrannical Authority, Advocate Practical Common Sense, Oppose Injustice, And Undertake Noble Pursuits```"
            )
            .setThumbnail("https://docs.anthonycastaneda.com/img/binarysatan.png")
            .addFields(
                {
                    name: "♀️",
                    value:
                        "Consistent with our tenets that call for bodily autonomy and acting in accordance with best scientific evidence, The Satanic Temple religiously objects to many of the restrictions that states have enacted that interfere with abortion access as well as other related issues that affect members religious rights",
                    inline: false,
                },
                {
                    name: "🚩",
                    value:
                        "Protect Mental Health, Particularly In The Area Of So-Called “Repressed Memories.”",
                    inline: false,
                },
                {
                    name: "🏫",
                    value:
                        "The Protect Children Project Addresses Abuses That Take Place In Public Schools That Are Perpetrated By School Officials And Are Deemed Legal.",
                    inline: false,
                },
                { name: "🚫", value: "No Gods, No Masters", inline: true },
                { name: "🤘", value: "Faithless and Proud", inline: true }
            )

            .setFooter(
                "H̷̨̨̪͙̳̳̲̬͓͗̔̊͠Ā̵͚̎͋̚İ̴̠̠̟̃̅̏̌̇͝͝L̶̡̛͎̠̬̹̼̟͉͈̋͑͂̐̃͘̚ ̶̛̣̟͗̕͝͝S̶̳̺̖̯̤̼͚͍̆͒͛̄̽̚͝Ạ̵̭̣̟̬̹̉̉͋͊̄͑͝T̴̡̜̫̹̠̋̇̚ͅĄ̴̅̅̈̾N̶͔̆͌̀̾͌",
                "https://st.depositphotos.com/1062321/4991/v/950/depositphotos_49917567-stock-illustration-pentagram-icon.jpg"
            );

        return interaction.editReply({ embeds: [embedSatan] });
    },
};
