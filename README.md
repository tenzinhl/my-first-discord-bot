# MyFirstDiscordBot
===================

A pretty useless bot. I mainly used it as a simple test environment so I could get ready to contribute to the glorious project that is [PilgrimBot](https://github.com/weishengaw/PilgrimBot). 

Uses the wonderful Discord.js package. Saves a lot of trouble with lower level Discord API stuff.

Main issue was with getting `messageCreate` events to send properly. Ended up being an issue with not specifying the right intents, something I had missed because `PilgrimBot` still isn't up to date with Discord.js v13.