const { Client } = require('discord.js')
const discordController = require('./controller/discord')
const variables = require('./db/variables.json')
require('dotenv/config')

new Client()
  .on('message', discordController.getMessage)
  .login(process.env.DISCORD_KEY)