const  request = require('request')
const cheerio = require('cheerio')

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
    
    }
  );
}
