require("dotenv").config({ path: "./.env.development" });
const express = require("express");
const server = express();
const { Client, Intents } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

const generalChannelID = "985894851218407514";
server.all("/", (req, res) => {
  res.send("Bot is running !");
});

client.on("ready", () => {
  console.log(`${client.user.tag} is ready to go !`);

  server.get("/test-message", async (req, res) => {
    const { username, signature, message } = req.query;

    await client.channels.cache.get(generalChannelID)
      .send(`*message from ${username}*: 
      ${message}
      
*message signature*: 
${signature}`);

    res.json("message sent to discord server channel admin");
  });
});

server.listen(8080, () => {
  console.log("I am alive thanks to this");
});

client.login(process.env.BOT_TOKEN);