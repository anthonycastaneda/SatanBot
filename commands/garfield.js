const { SlashCommandBuilder } = require("@discordjs/builders");
const { XMLHttpRequest } = require("w3c-xmlhttprequest");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("garfield")
    .setDescription("Garfield Minus Garfield"),
  async execute(interaction) {
    await interaction.deferReply();
    const { XMLHttpRequest } = require("w3c-xmlhttprequest");
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.open(
      "GET",
      "https://api.tumblr.com/v2//blog/garfieldminusgarfield.net/posts/photo?api_key=heKYYFruxqrT0yDkMA1zK48FeWDm6AeMQs9IVFX2cFBtpJvVTq&tag=garfield%2520minus%2520garfield&limit=1"
    );
    xhr.setRequestHeader(
      "heKYYFruxqrT0yDkMA1zK48FeWDm6AeMQs9IVFX2cFBtpJvVTq",
      "1p4ecc5n5WdeoAzXErOpd36VFftBuZtgfbC0gmFDRIpm9i8Ar6"
    );
    xhr.send();
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
      const res = this.responseText;
      console.log(typeof res);
      };/*
      const garfieldEmbed = new MessageEmbed()
        .setColor("0xd22b2b")
        .setTitle("Garfield Minus Garfield")
        .setDescription(
          "This is a journey deep into the mind of an isolated young everyman as he fights a losing battle against loneliness and depression in a quiet American suburb"
        );
      //.setImage(`${imgUrl}`);
      return interaction.editReply({ embeds: [garfieldEmbed] });*/
    });
  },
};