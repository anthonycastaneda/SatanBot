const { SlashCommandBuilder } = require("@discordjs/builders");

const data = new SlashCommandBuilder()
  .setName("horoscope")
  .setDescription("Get a simple horoscope")
  .addStringOption((option) =>
    option
      .setName("Signs")
      .setDescription("Please select your Sign")
      .setRequired(true)
      .addChoice("Aries", "aries")
      .addChoice("Taurus", "taurus")
      .addChoice("Gemini", "gemini")
      .addChoice("Cancer", "cancer")
      .addChoice("Leo", "leo")
      .addChoice("Virgo", "virgo")
      .addChoice("Libra", "libra")
      .addChoice("Scorpio", "scorpio")
      .addChoice("Sagittarius", "sagittarius")
      .addChoice("Capricorn", "capricorn")
      .addChoice("Aquarius", "aquarius")
      .addChoice("Pisces", "pisces")
      );



  var request = require("request");

  var options = {
    url: "https://aztro.sameerkumar.website/?sign=aries&day=today",
    method: "POST",
  };

  function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body);
    }
  }

  request(options, callback);
