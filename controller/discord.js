const Discord = require('discord.js')
const movieController = require('./movie')
const welcome = require('../controller/welcome')
const api = require('../api/swapi')
const variables = require('../db/variables.json')

/**
* Gerencia a mensagem recebida pelo BOT
* @param {Discord.Message} message - mensagem recebida pelo BOT
*/
const getMessage = async (message) => {
    const { channel, author, content } = message
    const arrayContent = content.split(' ')
    if (author.bot == false) {
        switch (arrayContent[0]) {
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
            case `!personagens`:
                await api.getAllPages(channel, 'people', 'Personagens  🧙🏽‍♂️', variables.thumbPersonagens)
            break
            case `!personagem`:
                await api.getPage(channel, 'people', 'Personagens  🧙🏽‍♂️', variables.thumbPersonagens, arrayContent[1])
            break
            case `!planetas`:
                await api.getAllPages(channel, 'planets', 'Planetas  🪐', variables.thumbPlanetas)
            break
            case `!naves`:
                await api.getAllPages(channel, 'starships', 'Naves  🛸', variables.thumbNaves)
            break
            case `!especies`:
                await api.getAllPages(channel, 'species', 'Espécies  👽', variables.thumbSpecies)
            break
            case `!veiculos`:
                await api.getAllPages(channel, 'vehicles', 'Veículos  🚍', variables.thumbVeiculos)
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