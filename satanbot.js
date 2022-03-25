/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const fs = require('node:fs');
const { Client, Collection, Intents } = require('discord.js');
const { token } = require('./config.json');
const logger = require('./modules/logger.js');
const { readdirSync } = require('fs');
const { permLevels } = require('./config.js');


const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const commands = new Collection();
const aliases = new Collection();
const slashcmds = new Collection();
client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
}


client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	}
	catch (error) {
		console.error(error);
		await interaction.reply({ content: 'GODDAMNIT sThere was an error while executing this command!', ephemeral: true });
	}
});
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

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
// Generate a cache of client permissions for pretty perm names in commands.
const levelCache = {};
for (let i = 0; i < permLevels.length; i++) {
	const thisLevel = permLevels[i];
	levelCache[thisLevel.name] = thisLevel.level;
}
// To reduce client pollution we'll create a single container property
// that we can attach everything we need to.
client.container = {
	commands,
	aliases,
	slashcmds,
	levelCache,
};
client.login(token);