const documentation = require("documentation");
const fs = require("fs");

documentation
  .build(["../satanbot.js"], { shallow: false })
  .then(documentation.formats.md)
  .then((output) => {
    // output is a string of Markdown data
    fs.writeFileSync("./satanbot.md", output);
  });
