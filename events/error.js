/* This is a way to import a module. */
const logger = require("../modules/logger.js");
/* This is a way to export a function. */
module.exports = async (client, error) => {
  logger.log(
    `An error event was sent by Discord.js: \n${JSON.stringify(error)}`,
    "error"
  );
};
