/**
 * 
 *   It's importing the discord.js library, the config file, and the logger. **/

const { Client, Collection, Intents, Guild } = require('discord.js');
const { token } = require('./config.json');
const logger = require('./modules/logger.js');
const fs = require("fs");
const { readdirSync } = require('fs');
const { permLevels } = require('./config.js');
const StatusUpdater = require('@tmware/status-rotate');

/** This is creating a new Client object, and setting it's intents to the GUILDS intent.
 * Then it's creating a new Collection object, and setting it to the variable `commands`.
Then it's creating a new Collection object, and setting it to the variable `aliases`.
Then it's creating a new Collection object, and setting it to the variable `slashcmds`.
Then it's creating a new Collection object, and setting it to the variable `client.commands`.
Then it's reading the commands folder, and filtering out all the files that don't end with .js.
Then it's loading all the commands in the commands folder.
Then it's creating a new object called `levelCache` and setting it to an empty object.
Then it's looping through the `permLevels` array, and setting the key to the name of the level, and
the value to the level.
Then it's creating a new object called `client.container` and setting it to an empty object.
Then it's looping through the `permLevels` array, and setting the key to the name **/
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const commands = new Collection();
const aliases = new Collection();
const slashcmds = new Collection();
client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));


/** It's creating an array of status messages. */
const statusMessages = [
  { type: "PLAYING", name: "with my code" },
  { type: "LISTENING", name: "you" },
  { type: "PLAYING", name: "hard to get" },
  { type: "LISTENING", name: "Norwegian Black Metal" },
  { type: "LISTENING", name: "Björk" },
  { type: "LISTENING", name: "a bucket of complaints" },
  { type: "PLAYING", name: "with {users} users" },
  { type: "LISTENING", name: "{users} users" },
  { type: "WATCHING", name: "over ALL the users" },
  { type: "WATCHING", name: "over ALL the channels" },
  { type: "PLAYING", name: "with your emojis." },
  { type: "PLAYING", name: "Regular updates you won't notice" },
];

/* This is creating a new StatusUpdater object, and passing it the client and statusMessages array. */
const Updater = new StatusUpdater(client, statusMessages);

/* It's loading all the commands in the commands folder. */
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
}


/* It's listening for interactions, and if it's a command, it will execute the command. */
client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	}
	catch (error) {
		console.error(error);
		await interaction.reply({ content: 'GODDAMNIT There was an error while executing this command!', ephemeral: true });
	}
});
/* It's reading the events folder, and filtering out all the files that don't end with .js. */
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

/* It's loading all the events in the events folder. */
for (const file of eventFiles) {
	const eventName = file.split('.')[0];
	logger.log(`Loading Event: ${eventName}. 👌`, 'log');
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	}
	else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

/* It's creating a new object called `levelCache` and setting it to an empty object.
Then it's looping through the `permLevels` array, and setting the key to the name of the level, and
the value to the level. */
const levelCache = {};
for (let i = 0; i < permLevels.length; i++) {
	const thisLevel = permLevels[i];
	levelCache[thisLevel.name] = thisLevel.level;
}

/* It's creating a new object called `client.container` and setting it to an empty object.
Then it's looping through the `permLevels` array, and setting the key to the name of the level, and
the value to the level. */
client.container = {
	commands,
	aliases,
	slashcmds,
	levelCache,
};

/* This is updating the parser data. */
Updater.updateParserData({
  users: Guild.membercount,
  guilds: client.guilds.cache.size,
  channels: client.channels.cache.size,
});


/* This is setting up a loop that will update the status every 10 minutes. */
client.on('updateStatus', () => Updater.updateStatus());
client.on('updateStatus', () => Updater.updateParserData());



/* This is setting up a loop that will update the status every 10 minutes. */
setInterval(() => client.emit('updateStatus'), 10 * 60000);


/* It's logging the bot into Discord. */
client.login(token);