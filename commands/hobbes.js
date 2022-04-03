const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const fetch = require('node-fetch');
const { cheerio } = require("cheerio");

module.exports = {
	data: new SlashCommandBuilder()
	.setName('hobbes')
	.setDescription('Get a Calvin and Hobbes Comic'),
	async execute(interaction) {
    await interaction.deferReply();{
    
    var dateUrl = new Date().toLocaleDateString('en-ZA')
    let url =  ('http://www.gocomics.com/calvinandhobbes/' + dateUrl + "/")
    console.log(url);
    //load the page
    await fetch(url).then(res => res.text())
    .then(text => console.log(text));
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
