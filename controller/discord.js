const Discord = require('discord.js')
const bot = new Discord.Client()
const movieController = require('./movie')

/**
* Gerencia a mensagem recebida pelo BOT
* @param {Discord.Message} message - mensagem recebida pelo BOT
*/
const getMessage = async (message) => {
    const { channel, author, content } = message
    if (author.bot == false) {
        switch (content) {
            case '!starwars':
                movieController.showAllMovies(channel, author)
                break
        }
    }

     
}


module.exports = {getMessage}

// bot.login('ODYyMTEyODQwMjU2NzE2ODEw.YOTnJg.CaUQywZZbu8NbjXP3lto_81wV-8');