const { Client } = require('discord.js')
const discordController = require('./controller/discord')
const variables = require('./db/variables.json')

new Client()
  .on('message', discordController.getMessage)
  .login(variables.discordKey)