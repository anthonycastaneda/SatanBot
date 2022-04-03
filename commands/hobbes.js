const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const request = require("request");
const cheerio = require("cheerio");


module.exports = {
	data: new SlashCommandBuilder()
	.setName('hobbes')
	.setDescription('Get a Calvin and Hobbes Comic'),
	async execute(interaction) {
    await interaction.deferReply();
    function sendImage(date, id) {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    //load the page
    request(
    {
      uri:
        "http://www.gocomics.com/calvinandhobbes/" +
        year +
        "/" +
        month +
        "/" +
        day,
    },
    function (error, response, body) {
      let $ = cheerio.load(body);
      //get the picture
      let pictureUrl = $(".item-comic-image img").attr("src");
      console.log(pictureUrl);
      return pictureUrl
        }
    );
          /*{const hobbesEmbed = new MessageEmbed()
          .setColor("0xd22b2b")
          .setTitle("Hobbes")
          .setImage(`${pictureUrl}`);
		  return interaction.editReply({ embeds: [hobbesEmbed] });
		  }*/
    }
},
}