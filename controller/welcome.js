const { MessageEmbed } = require('discord.js')

const welcomeMessage = (author) => {
    return `Fala ${author} minha joia! Beleza? Sou especializado em Star Wars, meu pirraia. Se liga aew nessa lista marota! `
}

const defaultMessage = (channel, author) => {
    channel.send(new MessageEmbed().setDescription(`Saudacoes ${author}! Se voce curte Star Wars, eu posso te ajudar. digite !comandos pra eu te mostrar uma lista no grau 😉`))
    // return `Saudacoes ${author}! Se voce curte Star Wars, eu posso te ajudar. digite !comandos pra eu te mostrar uma lista no grau 😉`
}

const errorMessage = (author) => {
    return `Opa ${author}! Acho que voce digitou algum comando que eu nao conheco ainda. Que tal digitar !comandos pra eu te mostrar uma lista show? 😉`
}

const commandsMessage = (channel) => {
    channel.send(new MessageEmbed().setDescription(
        `
Se liga nesses comandos:
----------------------------------------------------
 !filmes - todos os filmes
----------------------------------------------------
 !filmes classica - filmes da trilogia classica
 !filmes prequel - filmes da trilogia prequel
 !filmes nova - filmes da trilogia nova
 !filmes spin - filmes spin off
 !filmes serie - series da franquia
----------------------------------------------------
 !personagens - todos os personagens
 !personagens num = de 1 a 9
----------------------------------------------------
 !planetas - todos os planetas
 !planetas num = de 1 a 6
----------------------------------------------------
 !naves - todas as naves
 !naves num = de 1 a 4
----------------------------------------------------
 !especies - todas as especies               
 !especies num = de 1 a 4                   
----------------------------------------------------
 !veiculos - todos os veiculos               
 !veiculos num = de 1 a 4                   
----------------------------------------------------
`))

}

module.exports = { welcomeMessage, defaultMessage, commandsMessage, errorMessage }