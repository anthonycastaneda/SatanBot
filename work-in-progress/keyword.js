const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const keyWords = ['satan', 'baphomet', 'devil', 'beelzebub', 'lucifer'];
const data = fs.readFileSync('static/quotes.txt', 'utf8');

const readMe = data.split(/\r?\n/);
const lineCount = readMe.length;
const randomLineNumber = Math.floor(Math.random() * lineCount);
const randomLine = readMe[randomLineNumber];
console.log(randomLine);



let messageContent = [
  `Ay yo! You said **my name**!`,
  '',
  `You summoned me, what do you want? A quote?`,
  '',
  `*${randomLine}*`
];

// Only respond to messages containing the word "satan", "baphomet", "devil", "beelzebub", or "lucifer"
(/\bsatan\b|\bbaphomet\b|\bdevil\b|\bbeelzebub\b|\blucifer\b/gmi)

if (keyWords.match(/\bsatan\b|\bbaphomet\b|\bdevil\b|\bbeelzebub\b|\blucifer\b/i)) {
  await lib.discord.channels['@0.0.6'].messages.create({
    channel_id: context.params.event.channel_id,
    content: messageContent.join('\n'),
    message_reference: {
      message_id: context.params.event.id
    }
  });
}
*/