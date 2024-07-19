/*

In case if you're new to programming bots in node.js, read "ReadMe.md"

*/

const discord = require(`discord.js`)

const client = new discord.Client({
    intents: [
        discord.GatewayIntentBits.Guilds,
        discord.GatewayIntentBits.GuildMembers,
        discord.GatewayIntentBits.GuildMessages,
        discord.GatewayIntentBits.MessageContent
    ]
})

client.on(`ready`, async () => {
    console.log(`Logged in as: ${client.user.tag}`)
})

client.on(`messageCreate`, async (message) => {
    if (message.content === `!ping`) {
        message.channel.send(`Pong! :D`)
    }
})

client.on(`INSERT DISCORD BOT TOKEN HERE`)