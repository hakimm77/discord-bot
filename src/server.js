require("dotenv").config({ path: "./.env" });
const express = require("express");
const server = express();
const { Client, Intents } = require("discord.js");
const { sendMessage } = require("./controllers/sendMessage.controller");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
const PORT = process.env.PORT || 8080;

server.all("/", (req, res) => {
  res.send("Bot is running !");
});

client.on("ready", () => {
  console.log(`${client.user.tag} is ready to go !`);
  server.get("/send-message", (req, res) => {
    sendMessage(req, res, client);
  });
});

server.listen(PORT, () => {
  console.log("I am alive thanks to this");
});

client.login(process.env.BOT_TOKEN);
