/* eslint-disable quotes */
const { SlashCommandBuilder } = require('@discordjs/builders');


const embed = {
	"title": "The Satanic Temple ~~(𖤐)~~",
	"description": "The Satanic Temple is a non-theistic religion. The Satanic Temple initiates various campaigns in accordance with our mission. TSTs campaigns are responsible for coordinating TST community events and spearheading activism that protect TST members religious rights. When necessary, TST takes legal action against parties who do not respect those rights. Information about TST's active campaigns can be found [named here] https://thesatanictemple.com/pages/campaigns). ```\nThe Mission Of The Satanic Temple Is To Encourage Benevolence And Empathy, Reject Tyrannical Authority, Advocate Practical Common Sense, Oppose Injustice, And Undertake Noble Pursuits.```",
	"url": "https://thesatanictemple.com",
	"color": 10038562,
	"timestamp": "2022-03-26T16:09:39.238Z",
	"footer": {
		"icon_url": "https://cdn.shopify.com/s/files/1/0428/0465/files/TST_Representation_Black.jpg",
		"text": "H̷̨̨̪͙̳̳̲̬͓͗̔̊͠Ā̵͚̎͋̚İ̴̠̠̟̃̅̏̌̇͝͝L̶̡̛͎̠̬̹̼̟͉͈̋͑͂̐̃͘̚ ̶̛̣̟͗̕͝͝S̶̳̺̖̯̤̼͚͍̆͒͛̄̽̚͝Ạ̵̭̣̟̬̹̉̉͋͊̄͑͝T̴̡̜̫̹̠̋̇̚ͅĄ̴̅̅̈̾N̶͔̆͌̀̾͌",
	},
	"thumbnail": {
		"url": "https://anthonycastaneda.com/img/binarysatan.png",
	},
	"image": {
		"url": "https://img.shields.io/static/v1?label=hail%20satan&message=𖤐&color=d10404&style=for-the-badge&logo=riseup&logoColor=d10404",
	},
	"author": {
		"name": "Helel ben Shachar",
		"url": "https://ordained.satanicministry.com",
		"icon_url": "https://cdn.shopify.com/s/files/1/0428/0465/t/58/assets/satan-logo-red.png",
	},
	"fields": [
		{
			"name": "♀️",
			"value": "Consistent with our tenets that call for bodily autonomy and acting in accordance with best scientific evidence, The Satanic Temple religiously objects to many of the restrictions that states have enacted that interfere with abortion access as well as other related issues that affect members' religious rights",
		},
		{
			"name": "🚩",
			"value": "Grey Faction Is An Educational And Advocacy Organization Whose Mission Is To Protect Mental Health Patients And Their Families From Dangerous Pseudoscience And Discredited Therapies, Particularly In The Area Of So- Called “Repressed Memories.”",
		},
		{
			"name": "🏫",
			"value": "The Protect Children Project Addresses Abuses That Take Place In Public Schools That Are Perpetrated By School Officials And Are Deemed Legal.",
		},
		{
			"name": "<:lpotl_santa:957353250535911474>",
			"value": "No Gods, No Masters",
			"inline": true,
		},
		{
			"name": "<:sigiloflucifer:957354801694400523>",
			"value": "Faithless and Proud",
			"inline": true,
		},
	],
};

module.exports = {
	data: new SlashCommandBuilder()
		.setName('satan')
		.setDescription('Summon Satan'),
	async execute(interaction) {
		return interaction.reply("H̷A̵I̴L̸ ̷S̷A̷T̷A̴N̸ ```js\nfunction satan(hail) {\n  console.log(hail);\n}\n\nsatan(666);```", { embed });
	},
};