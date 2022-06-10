require("dotenv").config({ path: "./.env.development" });
const { Client, Intents } = require("discord.js");
const { onMessage } = require("./controllers/onMessage");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on("ready", () => {
  console.log(`${client.user.tag} is ready to go !`);
});

client.on("message", onMessage);

client.login(process.env.BOT_TOKEN);
