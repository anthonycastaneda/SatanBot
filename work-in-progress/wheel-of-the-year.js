const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.3.0'].messages.create({
  "channel_id": `${context.params.event.channel_id}`,
  "content": "",
  "tts": false,
  "components": [
    {
      "type": 1,
      "components": [
        {
          "custom_id": `Sabbat`,
          "placeholder": `Sabbat`,
          "options": [
            {
              "label": `Yule`,
              "value": `Yule`,
              "description": `December 20-23`,
              "emoji": {
                "id": null,
                "name": `❄`
              },
              "default": false
            },
            {
              "label": `Imbolc`,
              "value": `Imbolc`,
              "description": `February 1-2`,
              "emoji": {
                "id": null,
                "name": `🔥`
              },
              "default": false
            },
            {
              "label": `Ostara`,
              "value": `Ostara`,
              "description": `March 19-23`,
              "emoji": {
                "id": null,
                "name": `🐰`
              },
              "default": false
            },
            {
              "label": `Beltane`,
              "value": `Beltane`,
              "description": `April 30 - May 1`,
              "emoji": {
                "id": null,
                "name": `🌸`
              },
              "default": false
            },
            {
              "label": `Litha`,
              "value": `Litha`,
              "description": `June 20-21`,
              "emoji": {
                "id": null,
                "name": `🌞`
              },
              "default": false
            },
            {
              "label": `Lughnasadh`,
              "value": `Lughnasadh`,
              "description": `August 1`,
              "emoji": {
                "id": null,
                "name": `🍞`
              },
              "default": false
            },
            {
              "label": `Mabon`,
              "value": `Mabon`,
              "description": `September 21`,
              "emoji": {
                "id": null,
                "name": `🍎`
              },
              "default": false
            },
            {
              "label": `Samhain`,
              "value": `Samhain`,
              "description": `November 1`,
              "emoji": {
                "id": null,
                "name": `🎃`
              },
              "default": false
            }
          ],
          "min_values": 1,
          "max_values": 1,
          "type": 3
        }
      ]
    }
  ],
  "embeds": [
    {
      "type": "rich",
      "title": `Wheel of the Year`,
      "description": `Wikipedia article`,
      "color": 0xd22b2b,
      "image": {
        "url": `https://anthonycastaneda.com/img/wheel.png`,
        "height": 512,
        "width": 512
      },
      "url": `https://en.wikipedia.org/wiki/Wheel_of_the_Year`
    }
  ]
});