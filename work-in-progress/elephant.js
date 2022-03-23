const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.0.6'].messages.create({
  channel_id: context.params.event.channel_id,
  content: `<@!${context.params.event.member.user.id}> just triggered the **elephant** command!`
});

// Write some custom code here
// authenticates you with the API standard library

const gifs = [
  'https://i.giphy.com/media/GOiF8tksYH2U0/200.gif',
  'https://i.giphy.com/media/CQpcrKmeAHDQA/giphy.gif',
  'https://i.giphy.com/media/fqoYUKr8oezzG/200.gif',
  'https://i.giphy.com/media/Uw5kzrJDF7eHC/giphy.gif',
];

const randomGif = gifs[Math.floor(Math.random() * gifs.length)];

await lib.discord.channels['@0.1.1'].messages.create({
  channel_id: `${context.params.event.channel_id}`,
  content: '',
  tts: false,
  embed: {
    type: 'rich',
    title: '',
    description: '',
    color: 0xd22b2b,
    image: {
      url: randomGif,
    },
  },
});
