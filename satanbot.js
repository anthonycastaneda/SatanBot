const fs = require('node:fs');
const { Client, Collection, Intents } = require('discord.js');
const { token } = require('./config.json');
const logger = require('./modules/logger.js');
const { readdirSync } = require('fs');
const { permLevels } = require('./config.js');
const StatusUpdater = require('@tmware/status-rotate');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const commands = new Collection();
const aliases = new Collection();
const slashcmds = new Collection();
client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));


const statusMessages = [
  { type: "PLAYING", name: "with my code" },
  { type: "LISTENING", name: "you" },
  { type: "PLAYING", name: "hard to get" },
  { type: "LISTENING", name: "Norwegian Black Metal" },
  { type: "LISTENING", name: "Björk" },
  { type: "LISTENING", name: "a bucket of complaints" },
  { type: "PLAYING", name: "with {users} users" },
  { type: "LISTENING", name: "{users} users" },
  { type: "WATCHING", name: "over {users} users" },
  { type: "WATCHING", name: "over {channels} channels" },
  { type: "PLAYING", name: "with your emojis." },
  { type: "PLAYING", name: "Regular updates you won't notice" },
];

const Updater = new StatusUpdater(client, statusMessages);

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
		await interaction.reply({ content: 'GODDAMNIT There was an error while executing this command!', ephemeral: true });
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

Updater.updateParserData({
  users: client.users.cache.size,
  guilds: client.guilds.cache.size,
  channels: client.channels.cache.size,
});


// Listen for an event 'updateStatus', update the status when it occurs
client.on('updateStatus', () => Updater.updateStatus());
client.on('updateStatus', () => Updater.updateParserData());


// Every 10 minutes, emit such an event
setInterval(() => client.emit('updateStatus'), 10 * 60000);


client.login(token);