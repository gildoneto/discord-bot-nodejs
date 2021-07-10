const movies = require('../db/movies.json')
const utils = require('../db/utils.json')
const messageController = require('./welcome')
const {MessageEmbed} = require('discord.js')

const getSection = (section) => utils.find(util => util.section == section)

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
Audiência: ${movie.audience} 🍿`))

    })
}

const showSectionMovies = (channel, filter) => {
    movies.filter(filter).map((movie) => {
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

const test = () => {
    movies.filter(filterSection).map((movie) => {
        console.log(
        `Lançado em ${movie.year}
Rating no Rotten Tomatoes 🍅
Crítica: ${movie.critic} 👴🏽
Audiência: ${movie.audience} 🍿`)
    })
}

const filterClassic = ( movie) => {return movie.section == 'Trilogia Classica'}
const filterPrequel = ( movie) => {return movie.section == 'Trilogia Prequel'}
const filterNew = ( movie) => {return movie.section == 'Trilogia Nova'}
const filterSpin = ( movie) => {return movie.section == 'Spin Off'}
const filterSerie = ( movie) => {return movie.section == 'Serie'}

// test()

module.exports = {
    showAllMovies, 
    showSectionMovies,
    filterClassic, 
    filterPrequel,
    filterNew,
    filterSpin,
    filterSerie
}