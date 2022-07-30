const getMessageText = (address, message, signature, signatureLink) => {
  return `
New message to this channel from ${address}:
--------

${message}
--------

To verify this message signature on etherscan, click here: https://etherscan.io/verifySig/${signatureLink}
Signature Hash: ${signature}
`;
};

const sendMessage = async (req, res, client) => {
  const { address, signature, message, channelID, signatureLink } = req.query;
  const messageText = getMessageText(
    address,
    message,
    signature,
    signatureLink
  );

  await client.channels.cache.get(channelID).send(messageText);

  res.json("message sent to discord server channel admin");
};

module.exports = { sendMessage };
