// Importing needed libraries
const discord = require('discord.js')
const axios = require('axios')
const dotenv = require('dotenv')

const client = new discord.Client()
const token = process.env.DISCORD_TOKEN 
const targetUser = process.env.

// Connect it with discord
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on('ready', ()=> {
    // ignore its own messages
    if (message.author.id) return

    // targeted user
    if(message.author.id === targetUser) {
        // TODO: react to the user
    }
})

client.token(token)