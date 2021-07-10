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
            case '!classica':
                movieController.showSectionMovies(channel, movieController.filterClassic)
            break
            case '!prequel':
                movieController.showSectionMovies(channel, movieController.filterPrequel)
            break
            case '!nova':
                movieController.showSectionMovies(channel, movieController.filterNew)
            break
            case '!spin':
                movieController.showSectionMovies(channel, movieController.filterSpin)
            break
            case '!serie':
                movieController.showSectionMovies(channel, movieController.filterSerie)
            break
            case `!totalpersonagens`:
                await api.getAllPages(channel, variables.characterParam, variables.characterTitle, variables.thumbPersonagens)
            break
            case `!personagens`:
                await api.getPage(channel, variables.characterParam, variables.characterTitle, variables.thumbPersonagens, arrayContent[1])
            break
            case `!totalplanetas`:
                await api.getAllPages(channel, variables.planetParam, variables.planetTitle, variables.thumbPlanetas)
            break
            case `!planetas`:
                await api.getPage(channel, variables.planetParam, variables.planetTitle, variables.thumbPersonagens, arrayContent[1])
            break
            case `!totalnaves`:
                await api.getAllPages(channel, variables.starshipParam, variables.starshipTitle, variables.thumbNaves)
            break
            case `!naves`:
                await api.getPage(channel, variables.starshipParam, variables.starshipTitle, variables.thumbNaves, arrayContent[1])
            break
            case `!totalespecies`:
                await api.getAllPages(channel, variables.speciesParam, variables.speciesTitle, variables.thumbSpecies)
            break
            case `!especies`:
                await api.getPage(channel, variables.speciesParam, variables.speciesTitle, variables.thumbPersonagens, arrayContent[1])
            break
            case `!totalveiculos`:
                await api.getAllPages(channel, variables.vehiclesParam, variables.vehiclesTitle, variables.thumbVeiculos)
            break
            case `!veiculos`:
                await api.getPage(channel, variables.vehiclesParam, variables.vehiclesTitle, variables.thumbPersonagens, arrayContent[1])
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