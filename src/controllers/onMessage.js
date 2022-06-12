//message.author.send("Your message here.")
const botName = "Test server bot";

const onMessage = (msg) => {
  if (msg.author.username !== botName) {
    msg.reply(`Thank you for the message ${msg.author.username}`);
  }
};

module.exports = { onMessage };
