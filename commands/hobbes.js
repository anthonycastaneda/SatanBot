const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const fetch  = require("node-fetch");


module.exports = {
	data: new SlashCommandBuilder()
	.setName('hobbes')
	.setDescription('Get Todays Calvin and Hobbes Comic'),
	async execute(interaction) {
    await interaction.deferReply();{
    var dateUrl = new Date().toLocaleDateString('en-ZA')
    let url =  ('http://www.gocomics.com/calvinandhobbes/' + dateUrl + "/")
    //load the page
    // @ts-ignore
    const page = await fetch(url)
    const body = await page.text()
    //console.log(body);
    const cheerio = require("cheerio");
    const $ = cheerio.load(body)
      //get the picture
    let pictureUrl = $('.item-comic-image img').attr('src');
    //console.log(pictureUrl);
          
    {const hobbesEmbed = new MessageEmbed()
    // @ts-ignore
    .setColor("0xd22b2b")
    .setTitle("Today's Calvin and Hobbes")
    .setImage(`${pictureUrl}`);
    return interaction.editReply({ embeds: [hobbesEmbed] });
	}
        
}
}
}
