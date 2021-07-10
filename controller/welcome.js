const {MessageEmbed} = require('discord.js')

const welcomeMessage = (author) => {

    return `Fala ${author} minha joia! Beleza? Sou especializado em Star Wars, meu pirraia. Se liga aew nessa lista marota! `
}

const defaultMessage = (channel, author) => {
    channel.send(new MessageEmbed().setDescription(`Saudacoes ${author}! Se voce curte Star Wars, eu posso te ajudar. digite !comandos pra eu te mostrar uma lista no grau 😉`))
    // return `Saudacoes ${author}! Se voce curte Star Wars, eu posso te ajudar. digite !comandos pra eu te mostrar uma lista no grau 😉`
}

const commandsMessage = (channel) => {
    channel.send(new MessageEmbed().setDescription(
`
Se liga nesses comandos:

!starwars - todos os filmes
!classic - filmes da trilogia classica
!new - filmes da trilogia nova
!spin - filmes spin off
!serie - series da franquia
`))

}

module.exports = {welcomeMessage, defaultMessage, commandsMessage}