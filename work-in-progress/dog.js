const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.0.6'].messages.create({
  channel_id: context.params.event.channel_id,
  content: `<@!${context.params.event.member.user.id}> just triggered the **dog** command!`
});

// Write some custom code here
 {
  let dogImageResponse = await lib.http.request['@1.1.5'].get({
    url: `https://dog.ceo/api/breeds/image/random`
  });
  await lib.discord.channels['@0.1.1'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: `Here is a good boy!`,
    embed: {
      image: {
        url: dogImageResponse.data.message
        },
       color: 0xd22b2b,   
    } 
  });
}