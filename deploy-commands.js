/* This is importing the `fs` module from Node.js, the `REST` module from the Discord.js library, the
`Routes` module from the Discord.js API types, the `clientId`, `guildId`, and `token` from the
`config.json` file. */
const fs = require("node:fs");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const { clientId, guildId, token } = require("./config.json");

/* This is creating an array of commands and a list of files in the commands directory. */
const commands = [];
const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

/* This is looping through the commands directory and importing all the commands. */
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  commands.push(command.data.toJSON());
}

/* This is creating a new instance of the Discord REST API. The version is set to v9, and the token is
set to the token from the config.json file. */
const rest = new REST({ version: "9" }).setToken(token);

/* This is the code that actually sends the commands to the server. */
rest
  .put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
  .then(() => console.log("Successfully registered application commands."))
  .catch(console.error);
