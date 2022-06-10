const onMessage = (msg) => {
  console.log(msg.author.username);
  if (
    msg.content.toUpperCase().includes("BOT") &&
    msg.author.username !== "Test server bot"
  ) {
    msg.reply(`Here I am ${msg.author.username}`);
  }
};

module.exports = { onMessage };
