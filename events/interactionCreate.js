


/* This is the JavaScript code that will be executed when the interactionCreate event is triggered. */
module.exports = {
	name: 'interactionCreate',
	execute(interaction) {
		console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);
	},
};