/* This is called a JavaScript Object Literal. It is a way to define a JavaScript object. */
module.exports = {
  /* This is a special property that tells Discord.js that this is a special event that will only be
    called once. */
  name: "ready",
  once: true,
  /* This is the code that will be executed when the bot is ready. */
  execute(client) {
    console.log(`Ready! Logged in as ${client.user.tag} 👹 `);
    client.emit("updateStatus");
  },
};
