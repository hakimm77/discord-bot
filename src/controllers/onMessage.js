//message.author.send("Your message here.")

const onMessage = (msg) => {
  msg.reply(`Thank you for the message ${msg.author.username}`);
};

module.exports = { onMessage };
