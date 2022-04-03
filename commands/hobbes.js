const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const fetch = require('node-fetch');
const { cheerio } = require("cheerio");
const date = new Date();

module.exports = {
	data: new SlashCommandBuilder()
	.setName('hobbes')
	.setDescription('Get a Calvin and Hobbes Comic'),
	async execute(interaction) {
    await interaction.deferReply();{
    
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    //load the page
    await fetch(
    {
      uri:
        "http://www.gocomics.com/calvinandhobbes/" +
        year +
        "/" +
        month +
        "/" +
        day +
        "/",
    },).then(response => response.json());
    function parseHtml(_error, _response, body) {
      let $ = cheerio.load(body);
      //get the picture
      let pictureUrl = $('.item-comic-image img').attr('src');
      console.log(pictureUrl);
        }
    
          /*{const hobbesEmbed = new MessageEmbed()
          .setColor("0xd22b2b")
          .setTitle("Hobbes")
          .setImage(`${pictureUrl}`);
		  return interaction.editReply({ embeds: [hobbesEmbed] });
		  }*/
    }
}
}
