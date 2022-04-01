const fetch = require('node-fetch');



var url = "https://en.wikipedia.org/w/api.php";

var params = {
  action: "query",
  titles: "Barn Swallow",
  prop: "pageprops",
  format: "json",
};

url = url + "?origin=*";
Object.keys(params).forEach(function (key) {
  url += "&" + key + "=" + params[key];
});

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    let pagesimage = response.query.pages;
    console.dir(pagesimage);
  })
  .catch(function (error) {
    console.log(error);
  });