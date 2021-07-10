const Discord = require('discord.js')
const bot = new Discord.Client()
const movieController = require('./movie')
const welcome = require('../controller/welcome')


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
            case '!classic':
                movieController.showSectionMovies(channel, movieController.filterClassic)
            break
            case '!prequel':
                movieController.showSectionMovies(channel, movieController.filterPrequel)
            break
            case '!new':
                movieController.showSectionMovies(channel, movieController.filterNew)
            break
            case '!spin':
                movieController.showSectionMovies(channel, movieController.filterSpin)
            break
            case '!serie':
                movieController.showSectionMovies(channel, movieController.filterSerie)
            break
            case `!comandos`:
                welcome.commandsMessage(channel)
            break
            default:
                welcome.defaultMessage(channel, author)
            break
        }
    }

     
}


module.exports = {getMessage}