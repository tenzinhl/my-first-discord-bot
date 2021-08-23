// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
  const channel = client.channels.cache.get('879161192034213921');
  channel.send('content');
});

// client.on('message', (message) => {
//   console.log("This was called!");

//   message.channel.send('Yo!');
// });

client.on('messageCreate', message => {
  console.log("Message noticed");
  if (message.author.bot)
  {
    return;
  }
  message.channel.send('Yo this actually did something');
});

// Login to Discord with your client's token
client.login(token);
