const { Client } = require('discord.js')
const discordController = require('./controller/discord')

new Client()
  .on('message', discordController.getMessage)
  .login('ODYyMTEyODQwMjU2NzE2ODEw.YOTnJg.CaUQywZZbu8NbjXP3lto_81wV-8')