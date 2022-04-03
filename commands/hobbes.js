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
    
    var d = new Date(date);
    date = [
    d.getFullYear(),
    ('0' + (d.getMonth() + 1)).slice(-2),
    ('0' + d.getDate()).slice(-2)
    ].join('/');
    let url =  ('http://www.gocomics.com/calvinandhobbes/' + date + "/")
    console.log(url);
    //load the page
    await fetch(url).then(response => response.json());
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
