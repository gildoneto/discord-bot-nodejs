const { Client } = require('discord.js')
const discordController = require('./controller/discord')

new Client()
  .on('message', discordController.getMessage)
  .login('ODYyMTEyODQwMjU2NzE2ODEw.YOTnJg.RBnCFPRzSONxY9_NUdU_N5-Qz3w')