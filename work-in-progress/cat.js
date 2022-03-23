const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.0.6'].messages.create({
  channel_id: context.params.event.channel_id,
  content: `<@!${context.params.event.member.user.id}> just triggered the **cat** command!`
});
console.log();
// Write some custom code here
let result = await lib.http.request['@1.1.6'].get({
  url: `https://api.thecatapi.com/v1/images/search?api_key=3036dc25-acf1-427a-8c19-fdcfdb92079f&has_breeds=true&mime_types=jpg%2Cpng&size=small&sub_id=anthony.castaneda&limit=1`,
});
let data = result.data;
let jp = require('jsonpath');
let kitties = jp.query(data, '$..url')
let myArray = kitties;
let randomItem = myArray[Math.floor(Math.random()*myArray.length)];

  await lib.discord.channels['@0.1.1'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: `OMG HAI!`,
    embed: {
      image: {
        url: `${randomItem}`
        },
       color: 0xd22b2b,   
    } 
  });
