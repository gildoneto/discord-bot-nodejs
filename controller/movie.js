const movies = require('../db/movies.json')
const utils = require('../db/utils.json')
const messageController = require('./welcome')
const { MessageEmbed } = require('discord.js')

const getSection = (section) => utils.find(util => util.section == section)

const showAllMovies = (channel, author) => {
    channel.send(new MessageEmbed().setDescription(messageController.welcomeMessage(author)))
    mapMovies(movies,channel)    
}

const showSectionMovies = (channel, filterParam) => {
    mapMovies(movies.filter(movie => filter(movie, filterParam)),channel)
}

const mapMovies = (movies, channel) => {
    movies.map((movie) => {
        const section = getSection(movie.section)
        channel.send(new MessageEmbed()
            .setTitle(movie.title)
            .setDescription(movie.synopsis)
            .setColor(section.color)
            .setImage(movie.img)
            .setFooter(
                `Lançado em ${movie.year}
Rating no Rotten Tomatoes 🍅
Crítica: ${movie.critic} 👴🏽
Audiência: ${movie.audience} 🍿`)
        )
    })
}

const handleMovie = (channel, filter, author) => {
    switch (filter) {
        case 'classica':
        case 'prequel':
        case 'nova':
        case 'spin':
        case 'serie':
            showSectionMovies(channel, filter)
            break
        default:
            channel.send(new MessageEmbed().setDescription(messageController.errorMessage(author)))
            break
    }
}

const filter = (movie, param) => { return movie.section == param }

module.exports = {
    showAllMovies,
    showSectionMovies,
    handleMovie
}