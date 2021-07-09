const movies = require('../db/movies.json')
const messageController = require('./welcome')
const {MessageEmbed} = require('discord.js')

const showAllMovies = (channel, author) => {

    channel.send(new MessageEmbed().setDescription(messageController.welcomeMessage(author)))

    movies.map((movie) => {
        channel.send(new MessageEmbed()
        .setTitle(movie.title)
        .setDescription(movie.synopsis)
        .setColor("#1474db")
        .setImage(movie.img)
        .setFooter(
        `Lançado em ${movie.year}
Rating no Rotten Tomatoes 🍅
Crítica: ${movie.critic} 👴🏽
Audiência: ${movie.audience} 🍿`)
        )
    

    })
}

module.exports = {showAllMovies}