/*

In case if you're new to programming bots in node.js, read "ReadMe.md".

*/

const discord = require(`discord.js`)
const chalk = require(`chalk`)

const prefix = `!` // You can change the prefix here if you want to.

const client = new discord.Client({
    intents: [
        discord.GatewayIntentBits.Guilds,
        discord.GatewayIntentBits.GuildMembers,
        discord.GatewayIntentBits.GuildMessages,
        discord.GatewayIntentBits.MessageContent
    ]
})

client.on(`ready`, async () => {
    console.log(chalk.cyanBright(`Logged in as: ${client.user.tag}`))
})

client.on(`messageCreate`, async (message) => {
    if (message.content === `${prefix}ping`) {

        const ping = new discord.EmbedBuilder()

            .setTitle(`${client.user.username} | Ping`)
            .setDescription(`Pong! :D`)
            .setTimestamp()
            .setColor(`Aqua`)

        message.channel.send({ embeds: [ping] })

    }
})

client.on(`INSERT DISCORD BOT TOKEN HERE`)