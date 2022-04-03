const { SlashCommandBuilder } = require("@discordjs/builders");
const { link } = require("fs");
const { XMLHttpRequest } = require("w3c-xmlhttprequest");
const sample = require("lodash.sample");
const  _ = require("underscore");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("garfield")
    .setDescription("Garfield Minus Garfield"),
  async execute(interaction) {
    await interaction.deferReply();
    let Parser = require('rss-parser');
    let parser = new Parser();

    (async () => {
    
    let feed = await parser.parseURL('https://garfieldminusgarfield.net/rss');
    feed.items.forEach(item => {
    let regex = /<img.*?src="(.*?)"/;
    let src = regex.exec(item.content)[1];   
    console.info(src);
    
    //const random = [Math.floor(Math.random() * linkArray.length)];
    //console.log(linkArray[random]);
    })})
    ();
    }
    
    /*
      const garfieldEmbed = new MessageEmbed()
        .setColor("0xd22b2b")
        .setTitle("Garfield Minus Garfield")
        .setDescription(
          "This is a journey deep into the mind of an isolated young everyman as he fights a losing battle against loneliness and depression in a quiet American suburb"
        );
      //.setImage(`${imgUrl}`);
      return interaction.editReply({ embeds: [garfieldEmbed] });*/
    };