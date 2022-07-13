require("dotenv").config({ path: "./.env" });
const express = require("express");
const server = express();
const { Client, Intents } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
const PORT = process.env.PORT || 8080;

const generalChannelID = "985894851218407514";
server.all("/", (req, res) => {
  res.send("Bot is running !");
});

client.on("ready", () => {
  console.log(`${client.user.tag} is ready to go !`);

  server.get("/send-message", async (req, res) => {
    const { username, signature, message } = req.query;

    await client.channels.cache.get(generalChannelID)
      .send(`*message from ${username}*: 
      ${message}
      
*message signature*: 
${signature}`);

    res.json("message sent to discord server channel admin");
  });
});

server.listen(PORT, () => {
  console.log("I am alive thanks to this");
});

client.login(process.env.BOT_TOKEN);
