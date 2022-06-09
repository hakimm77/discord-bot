require("dotenv").config({ path: "./.env.development" });
const { Client, Intents } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on("ready", () => {
  console.log(`${client.user.tag} is ready to go !`);
});

client.on("message", (msg) => {
  console.log(msg.content);
  if (msg.content === "fuck") {
    msg.reply("don't fucking curse on my server");
  }
});

client.login(process.env.BOT_TOKEN);
