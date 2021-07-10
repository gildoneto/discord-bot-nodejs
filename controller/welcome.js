const {MessageEmbed} = require('discord.js')

const welcomeMessage = (author) => {

    return `Fala ${author} minha joia! Beleza? Sou especializado em Star Wars, meu pirraia. Se liga aew nessa lista marota! `
}

const defaultMessage = (channel, author) => {
    channel.send(new MessageEmbed().setDescription(`Saudacoes ${author}! Se voce curte Star Wars, eu posso te ajudar. digite !comandos pra eu te mostrar uma lista no grau 😉`))
    // return `Saudacoes ${author}! Se voce curte Star Wars, eu posso te ajudar. digite !comandos pra eu te mostrar uma lista no grau 😉`
}

const errorMessage = (channel, author) => {
    channel.send(new MessageEmbed().setDescription(`Opa ${author}! Acho que voce digitou algum comando que eu nao conheco ainda. Que tal digitar !comandos pra eu te mostrar uma lista show? 😉`))
    
}

const commandsMessage = (channel) => {
    channel.send(new MessageEmbed().setDescription(
`
Se liga nesses comandos:
----------------------------------------------------
 !totalfilmes - todos os filmes
----------------------------------------------------
 !filmes classica - filmes da trilogia classica
 !filmes prequel - filmes da trilogia prequel
 !filmes nova - filmes da trilogia nova
 !filmes spin - filmes spin off
 !filmes serie - series da franquia
----------------------------------------------------
 !totalpersonagens - todos os personagens
 !personagens num - num = de 1 a 9
----------------------------------------------------
 !totalplanetas - todos os planetas
 !planetas num - num = de 1 a 6
----------------------------------------------------
 !totalnaves - todas as naves
 !naves num - num = de 1 a 4
----------------------------------------------------
| !totalespecies - todas as especies               |
| !especies num - num = de 1 a 4                   |
----------------------------------------------------
| !totalveiculos - todos os veiculos               |
| !veiculos num - num = de 1 a 4                   |
----------------------------------------------------
`))

}

module.exports = {welcomeMessage, defaultMessage, commandsMessage, errorMessage}