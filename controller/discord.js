const Discord = require('discord.js')
const movieController = require('./movie')
const welcome = require('../controller/welcome')
const api = require('../api/swapi')
const variables = require('../db/variables.json')

/**
* Retorna um parâmetro baseado no arquivo variables.json
* @param {string} comando - comando recebido pelo BOT
*/
const getParam = (comando) => variables.params.find(param => param.comando == comando)

/**
* Gerencia a mensagem recebida pelo BOT
* @param {Discord.Message} message - mensagem recebida pelo BOT
*/
const getMessage = async (message) => {
    const { channel, author, content } = message
    const arrayContent = content.split(' ')
    const param = getParam(arrayContent[0])
    if (author.bot == false) {
        switch (arrayContent.length) {
            case 1:
                switch (arrayContent[0]) {
                    case '!filmes':
                        movieController.showAllMovies(channel, author)
                        break;
                    case `!personagens`:
                    case `!planetas`:
                    case `!naves`:
                    case `!especies`:
                    case `!veiculos`:
                        await api.getAllPages(channel, param.endpoint, param.title, param.thumb)
                        break;
                    case `!comandos`:
                        welcome.commandsMessage(channel)
                        break
                    default:

                        break;
                }
                break;
            default:
                switch (arrayContent[0]) {
                    case '!filmes':
                        movieController.handleMovie(channel, arrayContent[1], author)
                        break;
                    case `!personagens`:
                    case `!planetas`:
                    case `!naves`:
                    case `!especies`:
                    case `!veiculos`:
                        await api.getPage(channel, param.endpoint, param.title, param.thumb, arrayContent[1])
                        break;
                    default:
                        break;
                }
                break;
        }
    }
}

module.exports = { getMessage }